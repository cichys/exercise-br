import React, { Component } from 'react';

import SearchContainer from './SearchContainer';


class PageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageToDisplay: 'hashtag'
        };
    }


    changePage = (page) => {
        this.setState({pageToDisplay: page});
    }


    renderPage = () => {
        if (this.state.pageToDisplay === 'search') {
            return <SearchContainer />;
        } else if (this.state.pageToDisplay === 'second') {
            return <SearchContainer />;
        }
    }


    render() {
        return (
            <div>
                <header>
                    <button onClick={() => this.changePage('search')}>Name search</button>
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