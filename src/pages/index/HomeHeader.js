import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import dayjs from 'dayjs';
import toObject from 'dayjs/plugin/toObject';

dayjs.extend(toObject);

class HomeHeader extends Component {
  static options = {
    addGlobalClass: true
  };

  constructor(props) {
    super(props);
    this.state = {
      date: {},
      weather: '气温30°，是适合喝汽水的日子'
    };
  }

  componentDidMount() {
    this.getDateFormat();
  }

  getDateFormat() {
    const now = dayjs();
    const month = now.format('MMM');
    const day = now.toObject();
    day.month = month;
    this.setState({
      date: { ...day }
    });
  }

  render() {
    const { date, weather } = this.state;
    return (
      <View className='padding header'>
        <View className=''>
          <View
            className='at-row'
            onClick={() => {
              this.props.onCalendarToggle();
            }}
          >
            <View
              className='at-col'
              onClick={() => {
                this.props.onCalendarToggle();
              }}
            >
              <Text className='date margin-right-10 text-xxxg'>
                {date.date}
              </Text>
              <Text className='margin-right-10 text-ml'>{date.month}</Text>
              <Text className='text-xs'>{date.years}</Text>
            </View>
            <View className='at-col at-col-1 at-col--auto'>
              <Text className='text-xs text-gray weather'>{weather}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeHeader;
