import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import Landing from './pages/Landing';
import Layout from './components/Layout';
import Error from './components/Error';
import { Switch, Route } from 'react-router-dom';
import { useEagerConnect, useInactiveListener } from './hooks';
import { injected } from './utils/connectors';

function App() {
    const { active, activate, error } = useWeb3React<Web3Provider>();

    const triedEager = useEagerConnect();
    useInactiveListener(!triedEager);

    useEffect(() => {
        if (triedEager && !active && !error) activate(injected);
    }, [triedEager, active, error, activate]);

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
