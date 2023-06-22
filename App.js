import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { RootReducer } from './app/BAL/RootReducer';
import AppNavigation from './app/Navigation/AppNavigation';

import { NavigationContainer } from '@react-navigation/native';

const store = createStore(RootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
