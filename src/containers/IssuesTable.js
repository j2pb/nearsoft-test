import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'

import { userService } from '../services'
import IssueBody from '../components/IssueBody'

const IssuesTable = (props) => {

    const [issues, setIssues] = useState([])
    const [filterInput, setFilterInput] = useState("")

    useEffect(() => {
        const loadIssues = async () => {
            var issues = await userService.getIssues("facebook", "react")
            setIssues(issues)
        }
        loadIssues();
    }, []);

    const renderIssues = (issues) => {
        var filteredIssues = issues;
        if (filterInput) {
            filteredIssues = issues.filter((issue) => issue.title.toLowerCase().includes(filterInput) ? <IssueBody key={issue.id} issue={issue} /> : null)
        }
        return filteredIssues.map((issue) => <IssueBody key={issue.id} issue={issue} />)
    }

    const handleFilter = (e) => {
        var filterVal = e.target.value.toLowerCase()
        setFilterInput(filterVal)
    }
    return (
        <div className="col mt-4">
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>
                            <input
                                placeholder="Search"
                                className="form-control" type="text" onChange={(e) => handleFilter(e)} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderIssues(issues)}
                </tbody>
            </Table>
        </div>
    )
}
export default IssuesTable;