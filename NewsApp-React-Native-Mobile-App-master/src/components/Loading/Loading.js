import { View, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }
}

export default Loading;
