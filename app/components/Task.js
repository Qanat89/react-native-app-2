import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task= (props)=>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.square}></View>
              <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
           
        </View>

    )
}
const styles = StyleSheet.create({
    circular:{
        width: 12,
        height: 12,
        borderRadius: 5,
        borderColor: '#6C63FF',
        borderWidth: 2,
    },
    itemText:{
        maxWidth: '80%'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#6C63FF',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item:{
        backgroundColor: '#BABABA',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        borderColor: '#6C63FF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },


});


export default Task;