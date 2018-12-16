import React from 'react';

import SelectRepository from '../containers/SelectRepository';


const RepositoryRow = ({ data }) => (
    <tr>
        <td>{data.name}</td>
        <td>Show detail</td>
        <td><SelectRepository id={data.id} isSelected={false} /></td>
    </tr>
);

export default RepositoryRow;
