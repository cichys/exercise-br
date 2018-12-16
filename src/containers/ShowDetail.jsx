import React from 'react';
import { Mutation } from 'react-apollo';

import DETAIL_REPOSITORY from '../graphql/mutations/detailRepository';


const ShowDetail = ({ id }) => (
    <Mutation
        mutation={DETAIL_REPOSITORY}
        variables={{ id }}
    >
        {(detailRepository, result) => (
            <button type="button" onClick={detailRepository}>
                Show detail
            </button>
        )}
    </Mutation>
);

export default ShowDetail;
