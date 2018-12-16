import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';

import RepositoryDetail from '../components/RepositoryDetail';


const data = {
    full_name: 'Repo full name',
    html_url: 'http://www.google.it',
    description: 'Repo description'
};

let component = null;

describe('Repository Detail component', () => {

    beforeEach(() => {
        component = renderer.create(
            <MockedProvider addTypename={false}>
                <RepositoryDetail data={data} />
            </MockedProvider>,
        );
    });

    it('renders title', () => {
        const h3 = component.root.findByType('h3');
        expect(h3.children).toContain('Repo full name');
    });
    
    it('renders link', () => {
        const a = component.root.findByType('a');
        expect(a.props.href).toContain('google.it');
        expect(a.children).toContain('link to repo');
    });
});
