import React from 'react';


const RepositoryDetail = ({ data }) => (
    <div>
        <h3>{ data.full_name }</h3>
        <a href={ data.html_url } target="_blank">link to repo</a><br /><br />
        { data.description }<br /><br />
        git url: { data.git_url }<br />
        ssh url: { data.ssh_url }<br /><br />
        # watchers: { data.watchers }<br />
        # forks: { data.forks }
    </div>
);

export default RepositoryDetail;
