import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native'
import profile from './assets/profile.jpeg' 

function App(){
  return <View style={styles.container}>
    <Image source={profile} style={styles.image}/>
   
    <View style={styles.detailContainer}>
    <Text style={styles.label}>Name</Text>
    <Text  style={[styles.label, styles.info]}>Tony Start</Text>
    </View>

    <View style={styles.detailContainer}>
    <Text style={styles.label}>Gmail</Text>
    <Text  style={[styles.label, styles.info]}>freecoding1@joseph.com</Text>
    </View>

    <View style={styles.detailContainer}>
    <Text style={styles.label}>Gender</Text>
    <Text  style={[styles.label, styles.info]}>Male</Text>
    </View>

  </View>

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal: 5,
    backgroundColor: "#fbf" 

  },

  image: {
    marginTop: 100,
    width: 150,
    height: 150,
    marginBottom: 10,
    alignSelf: "center",
    borderRadius: 75
    
  },
  detailContainer:{
    flexDirection: "row",
    marginVertical: 3

   },

   label:{
     color: 'blue',
    borderColor: "orange",
    borderWidth: 1,
    fontSize: 20,
    flex: 2.5,
    paddingHorizontal: 5
  },
  info: {
    flex: 7.5
  }
});


    export default App;

  