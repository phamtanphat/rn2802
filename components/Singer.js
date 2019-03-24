import React, { Component } from 'react'
import { Text, View , FlatList , TouchableOpacity , Image } from 'react-native'

export default class Singer extends Component {
    constructor(props){
        super(props);
        this.state ={singers : [{email : '' , id : 'a1'}]}
    }
    render() {
        return (
        <View style={{flex : 1 , justifyContent : 'center' , backgroundColor : 'white' , paddingTop : 20}}>
            <View style={{ alignItems : 'center' , padding : 20}}>
                <Text style={{fontSize : 20  }}> Singers Component </Text>
            </View>
            <FlatList
                data={this.state.singers}
                keyExtractor={item => item.id}
                renderItem={param => (
                    <View style={{ marginTop : 20 , marginHorizontal : 10 , padding : 10, flexDirection : 'row' , backgroundColor : '#EEE9F6'}}>
                        <View style={{ margin : 5}}  >
                            <Image
                                style={{width : 100 , height : 100}} >
                            </Image>
                        </View>
                        <View style={{ justifyContent : 'space-around' }}>
                            <Text style={{fontWeight : 'bold' , fontSize : 20}}>Ca si</Text> 
                            <Text style={{fontWeight : 'normal' , fontSize : 15}}>Email</Text> 
                        </View>
                           
                    </View>
                )}
            >
            </FlatList>
        </View>
        );
    }
}
