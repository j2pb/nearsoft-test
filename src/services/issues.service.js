import axios from 'axios'
const baseUrl = "https://api.github.com/repos"
const config = {
    header: {
        Accept: "application/vnd.github.v3+json"
    }
}

function getIssues(user, project) {
    return axios.get(`${baseUrl}/${user}/${project}/issues`, config).then(({ data }) => {
        var onlyIssues = data.filter((d) => !("pull_request" in d) ? d : null)
        return onlyIssues
    }).catch(err => {
        console.log(err)
    })
}
function getHeaderInfo(user, project) {
    return axios.get(`${baseUrl}/${user}/${project}`, config).then((response) => {
        console.log("HeaderInfo********", response)
        return response.data
    }).catch(err => {
        console.log(err)
    })
}
export const userService = {
    getIssues,
    getHeaderInfo
};