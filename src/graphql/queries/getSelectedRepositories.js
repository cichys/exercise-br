import gql from 'graphql-tag';


const GET_SELECTED_REPOSITORIES = gql`
    query {
        selectedRepositoryIds @client
    }
`;

export default GET_SELECTED_REPOSITORIES;
