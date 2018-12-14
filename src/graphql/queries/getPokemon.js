import gql from 'graphql-tag';

const GET_POKEMON = gql`
    query GET_POKEMON($name: String) {
        pokemon(name: $name) {
            id
            number
            name
            attacks {
                special {
                    name
                    type
                    damage
                }
            }
            evolutions {
                id
                number
                name
                weight {
                    minimum
                    maximum
                }
                attacks {
                    fast {
                        name
                        type
                        damage
                    }
                }
            }
        }
    }
`;

export default GET_POKEMON;
