import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class ScrollableTextInput extends Component {
  constructor (props){
    super(props);
    this.focusInput = this.focusInput.bind(this);
  }
  focusInput(){
    let textInput = this.textInput;
    if(textInput.isFocused()){
      textInput.blur();
      setTimeout(()=>textInput.focus(),500)
    }
    else
      textInput.focus();
  }
  render() {
    return (
        <View>
          <TextInput
            {...this.props}
            ref={textInput=>this.textInput = textInput}
          />
          <TouchableOpacity style={{position: 'absolute', top:0, bottom:0, left:0, right:0}}
                            onPress={this.focusInput} />
        </View>
    );
  }
}
