import gql from 'graphql-tag';


const SELECT_REPOSITORY = gql`
    mutation($id: ID!, $isSelected: Boolean!) {
        selectRepository(id: $id, isSelected: $isSelected) @client {
            id
            isSelected
        }
    }
`;

export default SELECT_REPOSITORY;
