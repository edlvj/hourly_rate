'use strict';
import { applyMiddleware, createStore } from 'redux';

import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import thunk from 'redux-thunk';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

function configureStore(onComplete: ? () => void) {
    const store = autoRehydrate()(createStoreWithMiddleware)(reducers);
    persistStore(store, {
        storage: AsyncStorage
    }, onComplete);

    return store;
}

export default configureStore;