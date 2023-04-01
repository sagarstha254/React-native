import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "./component/Menu";
import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import { JosefinSans_400Regular } from "@expo-google-fonts/josefin-sans";

const Home = (props) => {
    const description = "lorem ipsum dolor sit amet, consectetuer adupiscing elit Aenean";
  return (
    <View style = {styles.mainContainer}>
      <View style = {styles.homeTop}>
        <Image
            style = {styles.headerImage}
            resizeMode="contain"
            source = {require("../../assets/favicon.png")}
        />
        <Text style = {styles.mainHeader}>Welcome to Lucifer academy</Text>

        <Text style = {[styles.mainHeader, {fontSize: 10, color: "green"}]}>{props.channelName}</Text>

        <Text style = {styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu/>
        <View 
        style={[styles.lineStyle,
        {marginVertical:10},
        ]}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal:20,
    backgroundColor:"center",
  },
  
  homeTop: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
  },

  headerImage:{
    height:undefined,
    width: "100%",
    aspectRatio:1,
    display:"flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: "blue",
    textTransform: "uppercase",
    fontFamily: "Nunito_600SemiBold",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "red", 
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
    fontFamily: "JosefinSans_400Regular",
  },

  lineStyle:{
    marginBottom:0,
    borderWidth: 0.5,
    borderColor: "grey",
  },

});
 
export default Home;