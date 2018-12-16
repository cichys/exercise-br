import gql from 'graphql-tag';


const GET_REPOSITORY = gql`
    query GET_REPOSITORY($id: ID!) {
        repository(id: $id) {
            full_name
            html_url
            description
            git_url
            ssh_url
            watchers
            forks
        }
    }
`;

export default GET_REPOSITORY;
