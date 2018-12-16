import React from 'react';

import RepositoryRow from '../components/RepositoryRow';


const RepositoryTable = ({ data }) => (
    <table>
        <tr>
            <th>Repo Name</th>
            <th></th>
            <th></th>
        </tr>
        {data.map(item => <RepositoryRow data={item} />)}
    </table>
);

export default RepositoryTable;
