import React from 'react';
import { Query } from 'react-apollo';

import GET_POKEMON from '../graphql/queries/getPokemon';
import SearchResult from '../components/SearchResult';


const SearchContainer = () => (

    <Query query={GET_POKEMON}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <SearchResult data={data.pokemon} />
            );
        }}
    </Query>
);

export default SearchContainer;
