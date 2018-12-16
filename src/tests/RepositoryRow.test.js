import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';

import RepositoryRow from '../components/RepositoryRow';


const data = {
    id: 103,
    name: 'Repo name'
};

let component = null;

describe('Repository Row component', () => {

    beforeEach(() => {
        component = renderer.create(
            <MockedProvider addTypename={false}>
                <RepositoryRow data={data} isSelected={false} />
            </MockedProvider>,
        );
    });

    it('renders cell contents', () => {
        const tds = component.root.findAllByType('td');
        expect(tds[0].children).toContain('Repo name');
    });
});
