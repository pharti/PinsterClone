import React, { Component, Suspense } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Routes from "./config/routes";
import { store } from "./store/setup";
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <Suspense fallback={<View style ={{flex:1,justifyContent:"center",alignItems:"center"}}><Text>Loading...</Text></View>}>
            <Routes />
          </Suspense>
        </SafeAreaView>
      </Provider>
    )
  }
}

