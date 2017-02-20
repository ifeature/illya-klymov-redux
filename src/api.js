export function getIssues() {
    return fetch('https://api.github.com/repos/vmg/redcarpet/issues?state=closed')
        .then(response => response.json())
}