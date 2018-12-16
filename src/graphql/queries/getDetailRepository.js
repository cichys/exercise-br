import gql from 'graphql-tag';


const GET_DETAIL_REPOSITORY = gql`
    query {
        detailRepository @client
    }
`;

export default GET_DETAIL_REPOSITORY;
