import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import MessagePage from './components/messages/MessagePage';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: MessagePage }} />
</Route>;

// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
