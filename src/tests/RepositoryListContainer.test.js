import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';

import RepositoryListContainer from '../containers/list/RepositoryListContainer';
import GET_REPOSITORIES from '../graphql/queries/getRepositories';
import GET_SELECTED_REPOSITORIES from '../graphql/queries/getSelectedRepositories';


const wait = require('waait');

const mocks = [
    {
        request: {
                query: GET_REPOSITORIES,
        },
        result: {
            data: {
                repositories: [
                    { id: 1, name: 'Repo1' },
                    { id: 2, name: 'Repo2' },
                ],
            },
        },
    },
    {
        request: {
                query: GET_SELECTED_REPOSITORIES,
        },
        result: {
            data: {
                selectedRepositories: [1]
            },
        },
    },
];

let component = null;

xdescribe('Repository List Container component', () => {

    beforeEach(() => {
        component = renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <RepositoryListContainer />
            </MockedProvider>,
        );
    });

    it('renders table contents', async () => {
        await wait(0); // wait for response

        console.log(component.toJSON())
        const table = component.root.findByType('table');
        expect(table.children).toContain('Repo1');
    });
});
