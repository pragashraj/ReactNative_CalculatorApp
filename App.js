import React ,{Component}from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './components/styles'

class App extends Component{
  state={
    calculation:'',
    result:"",
    op:['>','/','*','-','+']

  }

  handlePress(e){
    if(e=="="){
      return this.calculate()
    }

    this.setState({
      calculation:this.state.calculation+e
    })
  }

  calculate(){
    let calculationText=this.state.calculation
    const lastChar=calculationText.split('').pop()
    if(this.state.op.indexOf(lastChar)>0) return
    this.setState({
      result:eval(calculationText)
    })
  }

  handleOperatorsPress(e){
    if(this.state.calculation==""){
      return (this.setState({result:''}))
    }
    switch(e){
        case '>':this.handleBackPress()
                  break
        case '/':
        case '*':
        case '-':
        case '+':
        const lastChar=this.state.calculation.split('').pop()
        if(this.state.op.indexOf(lastChar)>0) return
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
        for(let i=0;i<5;i++){
          col.push(
              <TouchableOpacity style={styles.btn} onPress={()=>this.handleOperatorsPress(this.state.op[i])}>
                <Text style={styles.opText}>{this.state.op[i]}</Text>
              </TouchableOpacity>
          )
        }


    return (
      <View style={styles.container}>
          <View style={styles.calculation}>
              <Text style={styles.calculationText}> {this.state.calculation}</Text> 
          </View>

          <View style={styles.result}>
              <Text style={styles.resultText}> {this.state.result}</Text>              
          </View>

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
