import React from 'react';
import { Query } from 'react-apollo';

import GET_REPOSITORIES from '../../graphql/queries/getRepositories';
import RepositoryTable from './RepositoryTable';


const RepositoryListContainer = () => (

    <Query query={GET_REPOSITORIES}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            if (!data || !data.repositories || data.repositories.length === 0) return 'No data';

            return <RepositoryTable data={data.repositories} />;
        }}
    </Query>
);

export default RepositoryListContainer;
