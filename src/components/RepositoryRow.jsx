import React from 'react';

import ShowDetail from '../containers/ShowDetail';
import SelectRepository from '../containers/SelectRepository';


const RepositoryRow = ({ data, isSelected }) => (
    <tr key={data.id}>
        <td>{data.name}</td>
        <td><ShowDetail id={data.id} /></td>
        <td><SelectRepository id={data.id} isSelected={isSelected} /></td>
    </tr>
);

export default RepositoryRow;
