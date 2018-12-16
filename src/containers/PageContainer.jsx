import React, { Component } from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import RepositoryDetailContainer from './RepositoryDetailContainer';


class PageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageToDisplay: 'repositories'
        };
    }


    changePage = (page) => {
        this.setState({pageToDisplay: page});
    }


    renderPage = () => {
        if (this.state.pageToDisplay === 'repositories') {
            return <RepositoryListContainer />;
        } else if (this.state.pageToDisplay === 'repository') {
            return <RepositoryDetailContainer />;
        } else if (this.state.pageToDisplay === 'second') {
            return <RepositoryListContainer />;
        }
    }


    render() {
        return (
            <div>
                <header>
                    <button onClick={() => this.changePage('repositories')}>Repo list</button>
                    <button onClick={() => this.changePage('second')}>Second</button>
                </header>
                <main>
                    {this.renderPage()}
                </main>
            </div>
            
        );
    }
}

export default PageContainer;