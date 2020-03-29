import React ,{Component}from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './components/styles'

class App extends Component{
  state={
    calculation:''
  }

  handlePress(e){
    if(e=="="){
      return
    }

    this.setState({
      calculation:this.state.calculation+e
    })
  }

  handleOperatorsPress(e){
    if(this.state.calculation==""){
      return
    }
    switch(e){
        case '>':this.handleBackPress()
                  break
        case '/':
        case '*':
        case '-':
        case '+':
        this.setState({
          calculation:this.state.calculation+e
        })
    }
  }

  handleBackPress=()=>{
    let text=this.state.calculation.split('')
    text.pop()
    this.setState({
      calculation:text.join('')
    })
  }

  render(){
        let rows=[]
        let num=[[7,8,9],[4,5,6],[1,2,3],['.',0,'=']]
        for(let i=0;i<4;i++){
        let row=[]
        for(let j=0;j<3;j++){
            row.push(
                <TouchableOpacity style={styles.btn} onPress={()=>this.handlePress(num[i][j])}>
                    <Text style={styles.btnText}>{num[i][j]}</Text>
                </TouchableOpacity>
            )
        }
        rows.push(<View style={styles.row}>{row}</View>)
        }
    

        let col=[]
        let op=['>','/','*','-','+']
        for(let i=0;i<5;i++){
          col.push(
              <TouchableOpacity style={styles.btn} onPress={()=>this.handleOperatorsPress(op[i])}>
                <Text style={styles.btnText}>{op[i]}</Text>
              </TouchableOpacity>
          )
        }


    return (
      <View style={styles.container}>
          <View style={styles.calculation}>
              <Text style={styles.calculationText}> {this.state.calculation}</Text> 
          </View>
          <View style={styles.result}></View>
          <View style={styles.buttons}>
                <View style={styles.numbers}>
                      {rows}                
                </View>

                <View style={styles.operators}>
                      <View style={styles.operator}>
                        {col}
                      </View>
                </View>
          </View>

      </View>
    )
  }
}



export default App;
