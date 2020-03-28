import React ,{Component}from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class App extends Component{
  render(){
    return (
      <View style={styles.container}>
          <View style={styles.calculation}></View>
          <View style={styles.result}></View>
          <View style={styles.buttons}>
                <View style={styles.numbers}>       

                      <View style={styles.row1}>
                            <View style={styles.btn1}>
                                  <Button title="0" style={styles.num}></Button>
                            </View>
                            <View style={styles.btn2}></View>
                            <View style={styles.btn3}></View>
                      </View>

                      <View style={styles.row2}>


                      </View>
                      <View style={styles.row3}>
                      </View>
                      <View style={styles.row4}>
                      </View>
                  
                </View>
                <View style={styles.operator}></View>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  calculation:{
    flex:2,
    backgroundColor:'red'
  },
  result:{
    flex:1,
    backgroundColor:'green'
  },
  buttons:{
    flex:7,
    flexDirection:'row',
  },
  numbers:{
    flex:3,
  },
  operator:{
    flex:1,
    backgroundColor:'orange'
  },
  row1:{
    flex:1,
    backgroundColor:'white',
    flexDirection:'row'
  },
  row2:{
    flex:1,
    backgroundColor:'yellow'
  },
  row3:{
    flex:1,
    backgroundColor:'pink'
  },
  row4:{
    flex:1,
    backgroundColor:'brown'
  },
  
  btn1:{
    flex:1,
    backgroundColor:'white',
    alignSelf:'stretch'
    
  },
  btn2:{
    flex:1,
    backgroundColor:'purple'
  },
  btn3:{
    flex:1,
    backgroundColor:'white'
  },

  num:{
    alignSelf:'stretch'
  },


});

export default App;
