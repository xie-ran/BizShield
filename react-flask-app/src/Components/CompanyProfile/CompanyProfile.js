import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Pie, Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart, PieController, ArcElement, CategoryScale, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, BarController, BarElement } from 'chart.js';
import './CompanyProfile.css';


// Register the necessary components for Pie, Line, and Bar charts
Chart.register(PieController, ArcElement, CategoryScale, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, BarController, BarElement);

function CompanyProfile() {
    // Dummy Data for added visualizations (update these with real data when available)
    const riskData = {
        labels: ['Operational', 'Legal', 'Loan', 'Others'],
        datasets: [{
            data: [35, 20, 25, 20],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    };

    const stockData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Stock Price',
            data: [100, 105, 104, 110, 115],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1
        }]
    };

    const esgData = {
        labels: ['Environmental', 'Social', 'Governance'],
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: ['#33A02C', '#1F78B4', '#E31A1C']
        }]
    };

    const analystRatingsData = {
        labels: ['Buy', 'Hold', 'Sell'],
        datasets: [{
            data: [10, 5, 2],
            backgroundColor: ['#5DADE2', '#F4D03F', '#E74C3C']
        }]
    };

    // Placeholder for news and commentaries
    const newsItems = ["News Item 1", "News Item 2", "..."];
    const analystComments = ["Analyst Comment 1", "Analyst Comment 2", "..."];

    return (
        <Container className="mt-5">
            <h2>Profile of Apple Inc.</h2>
            <div className="gridContainer">
            <Card className="mb-4 riskCard">
                    <Card.Body>
                        <Card.Title>Risk Assessment</Card.Title>
                        <div className="chartContainer">
                            <Pie data={riskData} />
                        </div>
                    </Card.Body>
                </Card>

                <Card className="mb-4 stockCard">
                    <Card.Body>
                        <Card.Title>Stock Price Trend</Card.Title>
                        <div className="chartContainer">
                            <Line data={stockData} />
                        </div>
                    </Card.Body>
                </Card>

                <Card className="mb-4 esgCard">
                    <Card.Body>
                        <Card.Title>ESG Metrics</Card.Title>
                        <div className="chartContainer">
                            <Doughnut data={esgData} />
                        </div>
                    </Card.Body>
                </Card>

    
                <Card className="mb-4 newsCard">
                    <Card.Body>
                        <Card.Title>Company News</Card.Title>
                        <ul>{newsItems.map((news, index) => <li key={index}>{news}</li>)}</ul>
                        <hr />
                        <Card.Title>Analyst Commentary</Card.Title>
                        <ul>{analystComments.map((comment, index) => <li key={index}>{comment}</li>)}</ul>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
    
}

export default CompanyProfile;
