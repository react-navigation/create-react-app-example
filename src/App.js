import React from "react";
import {
  createNavigator,
  SwitchRouter,
  SceneView
} from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";
window.__DEV__ = true;

function About() {
  return (
    <div>
      <h2>About Screen</h2>
    </div>
  );
}
About.path = "";
About.navigationOptions = {
  title: "About",
  linkName: "About Page"
};

function Home() {
  return (
    <div>
      <h2>Home Screen</h2>
      <Link routeName="Profile" params={{ name: "brent" }}>
        Go to Brent's Profile
      </Link>
    </div>
  );
}
Home.path = "";
Home.navigationOptions = {
  title: "Home",
  linkName: "Home Page"
};

const Profile = ({ navigation }) => (
  <div>
    <h2>
      {navigation.getParam("name")}
      's Profile
    </h2>
    <Link routeName="Home">Go Home</Link>
  </div>
);
Profile.path = "person/:name";
Profile.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("name"),
  linkName: "Profile Page"
});

class SidebarView extends React.Component {
  render() {
    const { descriptors, navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const descriptor = descriptors[activeKey];
    return (
      <div
        style={{ display: "flex", height: "100%", justifyContent: "stretch" }}
      >
        <div
          style={{
            width: 300,
            backgroundColor: "#efefef",
            borderRight: "1px solid #99b"
          }}
        >
          <h1>Hello, Navigation</h1>
          <Link routeName="Home">Home</Link>
          <Link routeName="About">About</Link>
          <Link routeName="Profile" params={{ name: "jamie" }}>
            About Jamie
          </Link>
          <Link routeName="Profile" params={{ name: "brent" }}>
            About Brent
          </Link>
        </div>
        <div>
          <SceneView
            component={descriptor.getComponent()}
            navigation={descriptor.navigation}
          />
        </div>
      </div>
    );
  }
}

const AppNavigator = createNavigator(
  SidebarView,
  SwitchRouter({
    Home,
    About,
    Profile
  }),
  {}
);

const App = createBrowserApp(AppNavigator);

export default App;
