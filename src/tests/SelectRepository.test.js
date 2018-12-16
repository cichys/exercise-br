import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';

import BtnSelectRepository from '../containers/list/BtnSelectRepository';
import SELECT_REPOSITORY from '../graphql/mutations/selectRepository';

const wait = require('waait');


const selectRepository = { id: 1, isSelected: false };
const mocks = [{
    request: {
        query: SELECT_REPOSITORY,
        variables: { id: 1, isSelected: false },
    },
    result: { data: { selectRepository } },
},];

xdescribe('Select Repository component', () => {

    it('renders', async () => {
        const component = renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BtnSelectRepository />
            </MockedProvider>,
        );

        const button = component.root.findByType('button');
        expect(button.children).toContain('Select');
        button.props.onClick(); // fires the mutation

        await wait(0);

        //expect(button.children).toContain('Unselect');
    })
});