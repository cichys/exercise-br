import React from 'react';

import BtnShowDetail from '../containers/detail/BtnShowDetail';
import SelectRepository from '../containers/list/BtnSelectRepository';


const RepositoryRow = ({ data, isSelected }) => (
    <tr key={data.id}>
        <td>{data.name}</td>
        <td><BtnShowDetail id={data.id} /></td>
        <td><SelectRepository id={data.id} isSelected={isSelected} /></td>
    </tr>
);

export default RepositoryRow;
