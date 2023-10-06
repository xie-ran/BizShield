import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CompanyListings() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        // Fetch company listings from Flask backend using POST
        fetch('http://localhost:5000/getCompanyListings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: "Requesting data" }) // You can send any required data within this object
        })
        .then(response => response.json())
        .then(data => setCompanies(data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Company Listings</h2>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Operation Risk (%)</th>
                        <th>Legal Risk (%)</th>
                        <th>Loan Risk (%)</th>
                        <th>Others (%)</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <Link to={`/company/${company.name}`}>
                                    {company.name}
                                </Link>
                            </td>
                            <td>{company.operation_risk}</td>
                            <td>{company.legal_risk}</td>
                            <td>{company.loan_risk}</td>
                            <td>{company.others}</td>
                            <td>{company.type.replace("_", " ").charAt(0).toUpperCase() + company.type.slice(1)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CompanyListings;
