import React from 'react';
import Badge from 'react-bootstrap/Badge'
import moment from 'moment'
const IssueBody = (props) => {
    const { issue } = props;
    const creationDate = (date) => {
        var startOf = moment().isSame(date, 'day') ? "hour" : "day";
        var formatedDate = `opened ${moment(date).startOf(startOf).fromNow()}`;
        return formatedDate
    }
    const renderLabels = (labels) => {
        return labels.map((label) => <Badge key={label.id} pill style={{ backgroundColor: `#${label.color}` }} >{label.name}</Badge>)
    }
    return (
        <tr>
            <td>
                <a href={issue.asd} className="h4">
                    {issue.title}
                </a>
                {renderLabels(issue.labels)}
                <div className="propsdetails text-gray">
                    #{issue.number}&nbsp;
                    {creationDate(issue.created_at)}&nbsp;
                        by <a href={`https://github.com/facebook/react/issues/created_by/${issue.user.login}`}
                        className="text-gray text-decoration-none">{issue.user.login}</a>

                </div>
            </td>
        </tr>
    )
}
export default IssueBody;