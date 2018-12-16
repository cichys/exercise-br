import React, { Component } from 'react';

import RepositoryListContainer from '../containers/RepositoryListContainer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    Exercise
                </header>
                <main>
                    <RepositoryListContainer />
                </main>
            </div>
        );
    }
}

export default App;
