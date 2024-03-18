// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import game from "C:\Users\HP\Documents\Mobile_apps\expoapps\expoapp1\game.js";
export default function App() {
 const [getCount, setCount] = useState(0);
 return (
  <>
  <game></game>
  <View style={styles.container}>
  <Text style={{fontSize:18, fontWeight:'bold'}}>Counter 
    Application</Text>
  <View style={styles.just} flexDirection='row'>
  <Button title='Decrease' color='red' 
 onPress={()=>{setCount(getCount-1)}} disabled={getCount==0}></Button>
  <Text> {getCount} </Text>
  <Button title='Increase' color='green' 
 onPress={()=>{setCount(getCount+1)}}></Button>
  </View>
  <StatusBar style="auto" />
  </View>
</>
  );
}

const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
 justifyContent: 'center',
 },
 just: {
 padding:10,
 justifyContent:'space-evenly'
 },
});