import React from 'react';
import { Query } from 'react-apollo';

import GET_REPOSITORIES from '../graphql/queries/getRepositories';
import RepositoryRow from '../components/RepositoryRow';


const RepositoryListContainer = () => (

    <Query query={GET_REPOSITORIES}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            if (!data || !data.repositories || data.repositories.length === 0) return 'No data';

            return data.repositories.map(item => <RepositoryRow data={item} />);
        }}
    </Query>
);

export default RepositoryListContainer;
