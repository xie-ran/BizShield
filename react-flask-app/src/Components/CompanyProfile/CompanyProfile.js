import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Pie, Line } from 'react-chartjs-2';
import { Chart, PieController, ArcElement, CategoryScale, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale } from 'chart.js';

// Register the necessary components for Pie and Line charts
Chart.register(PieController, ArcElement, CategoryScale, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale);

function CompanyProfile() {
    // Dummy Data
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

    return (
        <Container className="mt-5">
            <h2>Investor's View - Company Dashboard</h2>
            <Row className="mt-4">
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Risk Assessment</Card.Title>
                            <Pie data={riskData} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Stock Price Trend</Card.Title>
                            <Line data={stockData} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* ... other components such as company valuation metrics, financial health, etc. */}
        </Container>
    );
}

export default CompanyProfile;
