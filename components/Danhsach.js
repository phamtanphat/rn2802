import React, { Component } from 'react'
import { Text, View , FlatList} from 'react-native'

export default class Danhsach extends Component {
    constructor(props){
        super(props);
        this.state = {
            words : [
                {id : 'a1' , en : 'One' , vn : 'Mot' , isMemorized : false},
                {id : 'a2' , en : 'Two' , vn : 'Hai' , isMemorized : true},
                {id : 'a3' , en : 'Three' , vn : 'Ba' , isMemorized : true},
                {id : 'a4' , en : 'Four' , vn : 'Bon' , isMemorized : true}, 
            ]
        }
    }
    render() {
        return (
        <View style={{flex : 1 , backgroundColor : 'white'}}>
           
            <FlatList
                style={{marginTop : 100}}
                data={this.state.words}
                extraData={this.state.words}
                keyExtractor={item => item.id}
                renderItem={({item}) => (<Text style={{fontSize : 30}}>{item.en}</Text>)}
            >

            </FlatList>
        </View>
        )
    }
}
