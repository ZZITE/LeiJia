import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import Calendar from './Calendar';
import HomeHeader from './HomeHeader';
import MyCard from './../../components/MyCard';

import './index.scss';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '累加⁺'
  };

  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      articleList: []
    };
  }

  componentWillMount() {}

  goArticleDetail() {
    Taro.navigateTo({
      url: '/pages/article/index'
    });
  }

  getArticleList() {
    const articleList = [
      {
        headerInfo: 'VOL.2428',
        imageSrc: 'http://image.wufazhuce.com/FqK3ynGfBfokKU86905kgsuU1Inu',
        imageInfo: '插画 | 林国成 《无法容纳的风景-山口待渡》',
        text:
          '当我们面对一个害怕的人，一桩恐惧的事，一份使人不安的心境时，唯一克服这种感觉的态度，便是面对它。',
        author: '三毛'
      },
      {
        headerInfo: 'VOL.2428',
        imageSrc: 'http://image.wufazhuce.com/FqK3ynGfBfokKU86905kgsuU1Inu',
        imageInfo: '插画 | 林国成 《无法容纳的风景-山口待渡》',
        text:
          '当我们面对一个害怕的人，一桩恐惧的事，一份使人不安的心境时，唯一克服这种感觉的态度，便是面对它。',
        author: '三毛'
      }
    ];
    this.setState({
      articleList
    });
  }

  onCalendarToggle() {
    const showCalendar = !this.state.showCalendar;
    this.setState({
      showCalendar
    });
  }

  componentDidMount() {
    this.getArticleList();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { showCalendar, articleList } = this.state;
    const list = articleList.map(item => {
      return (
        <View
          key={item.heardInfo}
          className='card-wrap'
          onClick={this.goArticleDetail.bind(this)}
        >
          <MyCard article={item} />
        </View>
      );
    });
    return (
      <View className='index'>
        <HomeHeader onCalendarToggle={this.onCalendarToggle.bind(this)} />
        <View className='main'>
          {showCalendar ? <Calendar /> : articleList.length>0 && list}
        </View>
      </View>
    );
  }
}
