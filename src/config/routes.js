import React from "react";
import { Router, Scene } from "react-native-router-flux";
import { connect } from "react-redux";
const Dashboard =  React.lazy(() => import("../containers/DashboardContainer"));
class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="dashboard"
            hideNavBar
            component={Dashboard}
            panHandlers={null}
          />
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {}
)(Routes);
