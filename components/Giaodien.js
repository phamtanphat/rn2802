import React, { Component } from 'react'
import { Text, View , TouchableOpacity , Platform , StatusBar} from 'react-native'


export default class Giaodien extends Component {
  render() {
    return (
      <View style={{ height : 150 ,  backgroundColor : '#ccc6c6' , marginTop : Platform.OS === 'ios' ? 50 : 0 , justifyContent : 'center' , margin : 10 , borderRadius : 5}}>  
          <View style={{flexDirection : 'row' , justifyContent : 'space-around'}}>
              <Text style={{fontSize : 40 , color : '#28a745'}}>One</Text>
              <Text style={{fontSize : 40 , color : '#dc3545'}}>----</Text>
          </View>
          <View  style={{flexDirection : 'row' , justifyContent : 'space-around' , marginTop : 10}}>
              <TouchableOpacity style={{backgroundColor : '#218838' , padding : 10}}>
                  <Text style={{color : 'white' , fontSize : 30 , fontWeight : 'bold'}}>Forgot</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor : '#ffc107' , padding : 10}}>
                  <Text style={{color : 'white' , fontSize : 30 , fontWeight : 'bold'}}>Remove</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}
