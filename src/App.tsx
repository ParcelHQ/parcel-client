import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import Landing from './pages/Landing';
import Layout from './components/Layout';
import Error from './components/Error';
import { Switch, Route } from 'react-router-dom';

function App() {
    const { error } = useWeb3React<Web3Provider>();
    console.log('error:', error);

    return (
        <Layout>
            {!!error && <Error error={error} />}
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </Layout>
    );
}

export default App;
