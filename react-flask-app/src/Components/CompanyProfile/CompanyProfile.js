import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Pie, Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart, PieController, ArcElement, CategoryScale, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, BarController, BarElement } from 'chart.js';
import './CompanyProfile.css';
import { Link } from 'react-router-dom';



// Register the necessary components for Pie, Line, and Bar charts
Chart.register(PieController, ArcElement, CategoryScale, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, BarController, BarElement);

function CompanyProfile() {
    const [companyData, setCompanyData] = React.useState({
        riskData: {},
        stockData: {},
        esgData: {},
        analystRatingsData: {},
        newsItems: [],
        analystComments: []
    });

    const [isLoading, setIsLoading] = React.useState(true);

        
    useEffect(() => {
        async function fetchCompanyData() {
            try {
                const response = await fetch("/api/getCompanyData");
                const data = await response.json();
                setCompanyData(data);
                setIsLoading(false);  // Set loading to false once data has been fetched
            } catch (error) {
                console.error("There was an error fetching the company data:", error);
                setIsLoading(false);  // Even on error, set loading to false
            }
        }
        
        fetchCompanyData();
    }, []);  // The empty dependency array ensures this useEffect runs once when component mounts
    

    if(isLoading) {
        return <div>Loading...</div>;
    }

    return (


        <Container className="mt-2">
            <div className="headerContainer">
                <h2>Profile of Apple Inc.</h2>
                <Link to="/">
                    <button className="btn btn-primary">Sign Off</button>
                </Link>
            </div>

            <div className="gridContainer">
            <Card className="mb-2 riskCard">
                    <Card.Body className='cardBody'>
                        <Card.Title>Risk Assessment</Card.Title>
                        <div className="chartContainer">
                            {companyData.riskData && companyData.riskData.labels && <Pie data={companyData.riskData} options={{responsive: true, aspectRatio: 2, plugins: {legend: {position: 'right'}}}}/>}
                        </div>
                    </Card.Body>
                </Card>

                <Card className="mb-2 stockCard">
                    <Card.Body className='cardBody'>
                        <Card.Title>Stock Price Trend</Card.Title>
                        <div className="chartContainer">
                            {companyData.stockData && companyData.stockData.labels && <Line data={companyData.stockData} options={{responsive: true, aspectRatio: 2}}/>}
                        </div>
                    </Card.Body>
                </Card>

                <Card className="mb-2 esgCard">
                    <Card.Body className='cardBody'>
                        <Card.Title>ESG Metrics</Card.Title>
                        <div className="chartContainer">
                            {companyData.esgData && companyData.esgData.labels && <Doughnut data={companyData.esgData} options={{responsive: true, aspectRatio: 2, plugins: {legend: {position: 'right'}}}}/>}
                        </div>
                    </Card.Body>
                </Card>

    
                <Card className="mb-2 newsCard">
                    <Card.Body>
                        <Card.Title>Company News</Card.Title>
                        <ul>
                            {companyData.newsItems && companyData.newsItems.map((news, index) => <li key={index}>{news}</li>)}
                        </ul>
                        <hr />
                        <Card.Title>Analyst Commentary</Card.Title>
                        <ul>
                            {companyData.analystComments && companyData.analystComments.map((comment, index) => <li key={index}>{comment}</li>)}
                        </ul>
                    </Card.Body>
                </Card>

            </div>
        </Container>
    );
    
}

export default CompanyProfile;
