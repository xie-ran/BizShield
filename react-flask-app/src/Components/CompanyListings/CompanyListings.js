import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CompanyListings() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('/api/getCompanyListings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: "Requesting data" })
        })
        .then(response => response.json())
        .then(data => setCompanies(data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Company Listings</h2>
            <table className="table table-hover">
                <thead className="thead-dark">
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
