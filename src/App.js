import React, { Component } from "react";
import "./App.css";

import {
  createNavigator,
  SwitchRouter,
  SceneView
} from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";

window.__DEV__ = true;

const Home = () => <div>Home Screen</div>;
const Profile = () => <div>Profile Screen</div>;

class SidebarView extends React.Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];

    return (
      <div>
        <h1> Hello Navigator!</h1>
        <SceneView
          navigation={descriptor.navigation}
          component={descriptor.component}
        />
      </div>
    );
  }
}

const AppNavigator = createNavigator(
  SidebarView,
  SwitchRouter({
    Home,
    Profile
  }),
  {}
);

const App = createBrowserApp(AppNavigator);

export default App;
