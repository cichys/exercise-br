import gql from 'graphql-tag';


const SELECT_REPOSITORY = gql`
    mutation($id: ID!) {
        selectRepository(id: $id) @client {
            id
        }
    }
`;

export default SELECT_REPOSITORY;
