import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex:1
    },
  
    calculation:{
      flex:2,
      backgroundColor:'pink',
      justifyContent:'center',
      alignItems:'flex-end',
    },
    
    calculationText:{
      fontSize:50
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
    operators:{
      flex:1,
      backgroundColor:'orange'
    },
    row:{
      flex:1,
      backgroundColor:'white',
      flexDirection:'row'
    },
  
    btn:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    
    btnText:{
      fontSize:43,
      color:'black'
    },
  
    operator:{
      flex:1,
      backgroundColor:'yellow'
    }
  
  
  });

  export default styles