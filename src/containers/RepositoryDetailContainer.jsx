import React from 'react';
import { Query } from 'react-apollo';

import GET_REPOSITORY from '../graphql/queries/getRepositoryById';
import RepositoryDetail from '../components/RepositoryDetail';


const RepositoryDetailContainer = () => (

    <Query query={GET_REPOSITORY} variables={{id: '1'}}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return <RepositoryDetail data={data.repository} />;
        }}
    </Query>
);

export default RepositoryDetailContainer;
