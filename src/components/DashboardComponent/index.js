import React from "react";
import { FlatList, View,Text } from "react-native";

const renderItem = (item) => {
    console.log("Item",item)
    let {employee_name} = item;
    return (
        <View>
            <Text>{employee_name}</Text>
            </View>
    )
}
const DashboardComponent = props => {
    let {employeeList} = props;
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={employeeList}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default DashboardComponent; 