import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import dayjs from 'dayjs';
import toObject from 'dayjs/plugin/toObject';
import { AtCard } from "taro-ui";
import './index.scss';

dayjs.extend(toObject);

export default class Index extends Component {
  config = {
    navigationBarTitleText: '累加⁺'
  };

  constructor(props) {
    super(props);
    this.state = { 
      date: {},
      weather: '气温30°，是适合喝汽水的日子'
    };
  }

  componentWillMount() {
    const now = dayjs();
    const month = now.format('MMM');
    const day = now.toObject();
    day.month = month;
    this.setState({
      date: { ...day }
    });
  }

  goArticle() {
    Taro.navigateTo({
      url: '/pages/article/index'
    })
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  renderHeader() {
    const { date, weather } = this.state;
    return (
      <View className='padding header'>
        <View className='at-row'>
          <View className='at-col date-wrap'>
            <Text className='date margin-right-10 text-xg'>{date.date}</Text>
            <Text className='margin-right-10'>{date.month}</Text>
            <Text className='text-xs'>{date.years}</Text>
          </View>
          <View className='at-col at-col-1 at-col--auto weather'>
            <Text className='text-xs'>{weather}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return <View className='index'>
      {this.renderHeader()}
      <View className='type-card-wrap' onClick={this.goArticle.bind(this)}>
        <AtCard
          note='标签'
          extra='类别'
          title='这是个标题'
        >
        这也是内容区 可以随意定义功能
        </AtCard>
      </View>
    </View>;
  }
}
