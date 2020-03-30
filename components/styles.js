import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex:1
    },
  
    calculation:{
      flex:2,
      backgroundColor:'#434343',
      justifyContent:'center',
      alignItems:'flex-end',
    },
    
    calculationText:{
      fontSize:50
    },
  
    result:{
      flex:1,
      backgroundColor:'#434343'
    },

    resultText:{
      fontSize:50,
      alignSelf:'flex-end',
      color:'white'
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
    },

    row:{
      flex:1,
      backgroundColor:'white',
      flexDirection:'row'
    },
  
    btn:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    
    btnText:{
      fontSize:43,
      color:'black',
    },
  
    opText:{
      fontSize:43,
      color:'white'
    },
    operator:{
      flex:1,
      backgroundColor:'#636363'
    }
  
  
  });

  export default styles