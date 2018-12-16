import gql from 'graphql-tag';


const DETAIL_REPOSITORY = gql`
    mutation($id: ID!) {
        detailRepository(id: $id) @client {
            id
        }
    }
`;

export default DETAIL_REPOSITORY;
