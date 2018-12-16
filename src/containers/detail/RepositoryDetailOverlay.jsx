import React from 'react';
import { Query } from 'react-apollo';

import GET_REPOSITORY from '../../graphql/queries/getRepositoryById';
import RepositoryDetail from '../../components/RepositoryDetail';
import BtnHideDetail from './BtnHideDetail';


const RepositoryDetailOverlay = ({ data }) => (

    <Query query={GET_REPOSITORY} variables={{id: data}}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <div className="overlay">
                    <RepositoryDetail data={data.repository} />
                    <br /><br />
                    <BtnHideDetail />
                </div>
            );
        }}
    </Query>
);

export default RepositoryDetailOverlay;
