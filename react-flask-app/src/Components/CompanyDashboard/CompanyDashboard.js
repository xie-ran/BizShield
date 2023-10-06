
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { Pie, Bar, Radar } from 'react-chartjs-2';
import { Chart, PieController, ArcElement, CategoryScale, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, BarController, BarElement, RadialLinearScale } from 'chart.js';
import './CompanyDashboard.css';
import { Link } from 'react-router-dom';

Chart.register(RadialLinearScale, PieController, ArcElement, CategoryScale, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, BarController, BarElement);


function CompanyDashboard() {
    const [companyData, setCompanyData] = React.useState({
        riskData: { labels: [], datasets: [] },
        financialOverview: { labels: [], datasets: [{ data: [], backgroundColor: [], borderColor: [] }] },
        marketAnalysis: { labels: [], datasets: [{ data: [] }] },
        goalsAndTargets: { goals: [], mitigationStrategies: [] }
    });


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                const response = await fetch("/api/getDashboardData");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();

                setCompanyData(data);
                console.log(companyData);

            } catch (error) {
                console.error("There was an error fetching the company data:", error);
            } finally {
                setIsLoading(false);  // Set loading to false once data has been fetched or if an error occurs
            }
        }

        fetchDashboardData();
    }, []);  // The empty dependency array ensures this useEffect runs once when the component mounts


    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Now, you can access and render the `companyData` in your component
    const { riskData, financialOverview, marketAnalysis, goalsAndTargets } = companyData;


    return (
        <Container className="mt-2">
            <div className="headerContainer">
                <h2>Company Dashboard</h2>
                <Link to="/">
                    <button className="btn btn-primary">Sign Off</button>
                </Link>
            </div>
                <div className="gridContainer">
                    <Card className="mb-2 riskCard">
                        <Card.Body className='cardBody'>
                            <Card.Title>Risk Assessment</Card.Title>
                            <div className="chartContainer">
                                {riskData && riskData.labels && riskData.datasets && riskData.datasets.length > 0 && (
                                    <Pie data={riskData} options={{ responsive: true, aspectRatio: 2, plugins: { legend: { position: 'right' } } }} />
                                )}                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="mb-2 financialCard">
                        <Card.Body className='cardBody'>
                            <Card.Title>Financial Overview</Card.Title>
                            <div className="chartContainer">
                                {financialOverview && financialOverview.labels && financialOverview.datasets && financialOverview.datasets.length > 0 && (
                                    <Bar data={financialOverview} options={{ responsive: true, aspectRatio: 2, plugins: { legend: { display: false } } }} />
                                )}                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="mb-2 marketCard">
                        <Card.Body className='cardBody'>
                            <Card.Title>Market Analysis</Card.Title>
                            <div className="chartContainer">
                                {marketAnalysis && marketAnalysis.labels && marketAnalysis.datasets && marketAnalysis.datasets.length > 0 && (
                                    <Radar data={marketAnalysis} options={{ responsive: true, aspectRatio: 2, plugins: { legend: { display: false } }}} />
                                )}
                            </div>
                        </Card.Body>
                    </Card>


                    <Card className="mb-2 goalsCard">
                        <Card.Body className='cardBody'>
                            <Card.Title>Goals and Targets</Card.Title>
                            <ListGroup variant="flush">
                                {companyData.goalsAndTargets && companyData.goalsAndTargets.goals.map((goal, index) => (
                                    <ListGroup.Item key={index}>
                                        <strong>{goal}</strong> - {companyData.goalsAndTargets.mitigationStrategies[index]}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
        </Container>

    );
}


export default CompanyDashboard;
