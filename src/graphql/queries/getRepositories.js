import gql from 'graphql-tag';


const GET_REPOSITORIES = gql`
    query {
        repositories {
            id
            name
        }
    }
`;

export default GET_REPOSITORIES;
