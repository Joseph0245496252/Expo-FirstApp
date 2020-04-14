import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native'
import profile from './assets/profile.jpeg' 



function App(){
  return <View style={styles.container}>
    <Image source={profile} style={styles.image}/>
   
    <View style={styles.detailContainer}>
    <Text style={styles.lable}>Name</Text>
    <Toxt style={[tyles.lable, styles.infor]}>Tony Start</Toxt>
    </View>

    <View style={styles.detailContainer}>
    <Text style={styles.lable}>Email</Text>
    <Toxt style={[tyles.lable, styles.infor]}>freecoding1@gmail.com</Toxt>
    </View>

    <View style={styles.detailContainer}>
    <Text style={styles.lable}>Gender</Text>
    <Toxt style={[tyles.lable, styles.infor]}>Male</Toxt>
    </View>
  </View>

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 5
  },
  imges:{
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
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    flex: 2.5,
    paddingVertical: 5
  },

  infor: {
    flex: 7.5
  }


});

export default App;