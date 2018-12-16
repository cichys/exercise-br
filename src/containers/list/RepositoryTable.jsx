import React from 'react';
import { Query } from 'react-apollo';

import GET_SELECTED_REPOSITORIES from '../../graphql/queries/getSelectedRepositories';
import RepositoryRow from '../../components/RepositoryRow';
import CounterSelected from '../../components/CounterSelected';


const isSelected = (id, selectedRepositories) => {
    return selectedRepositories.indexOf(id) !== -1;
}

const RepositoryTable = ({ data }) => (
    <Query query={GET_SELECTED_REPOSITORIES}>
        {({ data: responseSelected }) => {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Repo Name</th>
                            <th></th>
                            <th>
                                <CounterSelected
                                    data={responseSelected.selectedRepositoryIds} 
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <RepositoryRow 
                                key={item.id}
                                data={item}
                                isSelected={isSelected(item.id, responseSelected.selectedRepositoryIds )}
                            />
                        ))}
                    </tbody>
                </table>
            )
        }}
    </Query>
);

export default RepositoryTable;
