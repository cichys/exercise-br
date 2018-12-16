import React from 'react';
import { Mutation } from 'react-apollo';

import SELECT_REPOSITORY from '../graphql/mutations/selectRepository';


const Select = ({ id, isSelected }) => (
    <Mutation
        mutation={SELECT_REPOSITORY}
        variables={{ id, isSelected }}
    >
        {(selectRepository, result) => (
            <button type="button" onClick={selectRepository}>
                {isSelected ? 'Unselect' : 'Select'}
            </button>
        )}
    </Mutation>
);

export default Select;
