import React from 'react';
import { StyleSheet, Text, View, Slider, Picker, Switch } from 'react-native';

export default class App extends React.Component {

  state={
    width: 300,
    height: 5,
    bgColor: 'purple',
    opacity: 1,
    switchBoolean: true
  }

  handleWidth=(width)=>{
    this.setState({
      width: width
    })
  }

  handleHeight=(height)=>{
    this.setState({
      height: height
    })
  }

  handleBGColor=(color)=>{
    this.setState({
      bgColor: color
    })
  }

  handleOpacity=(val)=>{
    this.setState({
      switchBoolean: val
    })
    if (this.state.switchBoolean == true){
      this.setState({
        opacity: 0.5
      })
    } if (this.state.switchBoolean == false){
      this.setState({
        opacity: 1
      })
    }
  }
render() {
    return (
      <View style={styles.container}>
        <View style={{width: this.state.width, height: this.state.height, backgroundColor: this.state.bgColor, opacity: this.state.opacity}}>
          </View>
          <Slider 
            style={{width: 300}} maximumValue= {300} minimumValue= {10}
            onValueChange={(val)=>{this.handleWidth(val)}}
          />
          <Slider 
            style={{width: 300}} maximumValue= {300} minimumValue= {10}
            onValueChange={(val)=>{this.handleHeight(val)}}
          />
          <Picker
            style={{width: 300, height: 200, backgroundColor: 'lightgrey'}}
            onValueChange={(val)=>{this.handleBGColor(val)}}>
            <Picker.Item label='Select Color' value='white'/>
            <Picker.Item label='Purple' value='purple' />
            <Picker.Item label='Teal' value='teal' />
            <Picker.Item label='Black' value='black' />
            <Picker.Item label='White' value='white' />
          </Picker>
          <Switch style=
            {{marginLeft: 20, marginTop: 30}}
            value={this.state.switchBoolean}
            onValueChange={(val)=>{this.handleOpacity(val)}}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});