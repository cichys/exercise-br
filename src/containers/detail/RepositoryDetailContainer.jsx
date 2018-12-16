import React from 'react';
import { Query } from 'react-apollo';

import GET_DETAIL_REPOSITORY from '../../graphql/queries/getDetailRepository';
import RepositoryDetail from './RepositoryDetailOverlay';


const RepositoryDetailContainer = () => (

    <Query query={GET_DETAIL_REPOSITORY}>
        {({ data }) => {
            if (!data.detailRepository) return null;

            return <RepositoryDetail data={data.detailRepository} />;
        }}
    </Query>
);


export default RepositoryDetailContainer;
