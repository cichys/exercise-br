import React, { Component } from 'react';

import RepositoryListContainer from '../containers/list/RepositoryListContainer';
import RepositoryDetailContainer from '../containers/detail/RepositoryDetailContainer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    Exercise
                </header>
                <main>
                    <RepositoryListContainer />
                    <RepositoryDetailContainer />
                </main>
            </div>
        );
    }
}

export default App;
