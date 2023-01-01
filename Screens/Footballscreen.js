import React,{Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import AppHeader from "../components/AppHeader";

export default class AmericanFootball extends Component{

    render(){
        return(
            <View>
                <AppHeader/>
          <View>
            <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
                this.props.navigation.navigate("Footballgames")}}>
                    <Text styles = {styles.buttonText}>Games</Text>
                </TouchableOpacity>

                <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
                this.props.navigation.navigate("Footballrankings")}}>
                    <Text styles = {styles.buttonText}>Rankings</Text>
                </TouchableOpacity>

                <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
                this.props.navigation.navigate("Footballstats")}}>
                    <Text styles = {styles.buttonText}>Stats</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.buttons}
                onPress = {()=>
                    this.props.navigation.navigate("Homescreen")}>
                    <Text style = {{fontSize:20,color:"white"}}>Back</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
   }
}

const styles = StyleSheet.create({
       buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor:"green",
        margin: 10,
        width: 200,
        height: 50,
        marginTop:525
      },
      button:{
        alignItems: 'left',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor:"purple",
      margin: 50,
      width: 200,
      height: 100,
      },
      buttonText:{
        fontSize:20, 
        color:"white"
      }
    
})