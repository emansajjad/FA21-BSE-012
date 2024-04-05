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
// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import game from "C:\Users\HP\Documents\Mobile_apps\expoapps\expoapp1\game.js";
// import login from "C:\Users\HP\Documents\Mobile_apps\expoapps\expoapp1\login.js";
// export default function App() {
//  const [getCount, setCount] = useState(0);
//  return (
//   <>
//   <game></game>
//   <View style={styles.container}>
//   <Text style={{fontSize:18, fontWeight:'bold'}}>Counter 
//     Application</Text>
//   <View style={styles.just} flexDirection='row'>
//   <Button title='Decrease' color='red' 
//  onPress={()=>{setCount(getCount-1)}} disabled={getCount==0}></Button>
//   <Text> {getCount} </Text>
//   <Button title='Increase' color='green' 
//  onPress={()=>{setCount(getCount+1)}}></Button>
//   </View>
//   <StatusBar style="auto" />
//   </View>
// </>
//   );
// }

// const styles = StyleSheet.create({
//  container: {
//  flex: 1,
//  backgroundColor: '#fff',
//  alignItems: 'center',
//  justifyContent: 'center',
//  },
//  just: {
//  padding:10,
//  justifyContent:'space-evenly'
//  },
// });

import React from 'react';
import { View, StyleSheet } from 'react-native';

const ChessBoard = () => {
  const renderRow = (rowIndex) => {
    const cells = [];
    for (let i = 0; i < 8; i++) {
      const color = (i + rowIndex) % 2 === 0 ? 'white' : 'black';
      cells.push(
        <View key={i} style={[styles.cell, { backgroundColor: color }]} />
      );
    }
    return cells;
  };

  const renderBoard = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      rows.push(
        <View key={i} style={styles.row}>
          {renderRow(i)}
        </View>
      );
    }
    return rows;
  };

  return <View style={styles.board}>{renderBoard()}</View>;
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: '12.5%', // 8 cells, each taking up 1/8th of the width
    aspectRatio: 1, // to make cells square
  },
});

export default ChessBoard;
