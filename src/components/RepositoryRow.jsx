import React from 'react';

import SelectRepository from '../containers/SelectRepository';


const RepositoryRow = ({ data, isSelected }) => (
    <tr key={data.id}>
        <td>{data.name}</td>
        <td>Show detail</td>
        <td><SelectRepository id={data.id} isSelected={isSelected} /></td>
    </tr>
);

export default RepositoryRow;
