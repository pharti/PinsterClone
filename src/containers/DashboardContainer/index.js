import React, { Component } from "react";
import { SafeAreaView,View, Text ,ActivityIndicator} from "react-native";
import { connect } from "react-redux";
import DashboardComponent from "../../components/DashboardComponent"
import {getEmployeeList} from "../../actions/dashboardAction";
class Dashboard extends React.Component {
    constructor(props) {
        super();
        state = {};
    }
    componentDidMount = () => {
        this.props.getEmployeeList();
    };
    render() {
        let {loader,employeeList} = this.props;
        return (
            <View style={{flex:1,backgroundColor:"#fff" }}>
                {loader?<View style ={{flex:1,justifyContent:"center",alignItems:"center"}}><ActivityIndicator /></View>:
                <DashboardComponent employeeList = {employeeList}/>}
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        loader:state.employeeReducer.loader,
        employeeList:state.employeeReducer.employeeList
    };
};
export default connect(
    mapStateToProps,
    { getEmployeeList }
)(Dashboard);
