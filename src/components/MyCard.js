import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

class MyCard extends Component {
  static options = {
    addGlobalClass: true
  };

  render() {
    const {article} = this.props;
    return (
      <View className='card text-gray text-xs'>
        <View className='card-header text-center margin-bottom-20'>{article.headerInfo}</View>
        <View className='card-image'>
          <image mode='widthFix' src={article.imageSrc} />
          <View className='card-image-info margin-top-20 margin-bottom-20 text-center'>{article.imageInfo}</View>
        </View>
        <View className='card-content margin-top-25 padding text-ls' style={{lineHeight : '26px'}}>
        {article.text}
        </View>
        <View className='card-content-author text-center'>
          {article.author}
        </View>
      </View>
    );
  }
}

export default MyCard;
