import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class Calendar extends Component {
  static options = {
    addGlobalClass: true
  };

  render() {
    return (
      <View className='padding'>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default Calendar;
