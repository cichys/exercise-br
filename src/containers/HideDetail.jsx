import React from 'react';
import { Mutation } from 'react-apollo';

import DETAIL_REPOSITORY from '../graphql/mutations/detailRepository';


const HideDetail = () => (
    <Mutation
        mutation={DETAIL_REPOSITORY}
        variables={{ id: null }}
    >
        {(detailRepository, result) => (
            <button type="button" onClick={detailRepository}>
                hide detail
            </button>
        )}
    </Mutation>
);

export default HideDetail;