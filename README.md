# wxapp_starbucks
## 清凉一夏 来点一杯星巴克吧! <br>
当我们还在家中吹着空调敲着代码吃着西瓜的时候，可能你的她还在炎炎夏日下大汗淋漓，打开这个小程序，为她点上一杯冰镇的星巴克，后续的故事就不用再说了把😄，作为还在起跑线上的全栈的学习者，初试微信小程序，花了四天左右的时间初步的完成了这个小程序，这个小程序吸引我的真的就是颜啊（身为颜控的我），有木有觉得很美观，下面我们就一起看下这个demo吧 <br>
![](https://github.com/bibiqqqq/wxapp_starbucks/blob/master/wxapp_starbucks/gif/index.gif)<br>
如果各位看官觉得还行不妨点个赞哦👍👍👍<br>
:point_right:__项目源码： [GitHub](https://github.com/bibiqqqq/wxapp_starbucks)__  求小星星鼓励✨✨✨~</br>

## 项目工具及文档<br>
_1.微信web开发者工具：_[微信小程序官网](https://mp.weixin.qq.com/debug/wxadoc/dev/)    一款很好用的小程序编辑软件</br>
_2.开发文档：_[微信小程序必备无敌文档](https://www.w3cschool.cn/weixinapp/9wou1q8j.html)    你想要的都在里面</br>
## 页面注册 </br> app.json <br>
{<br>
  "pages":[ <br>
    "pages/index/index",        星巴克用星说 主页  <br>
    "pages/detail/detail",      @all 我想对你们说  <br>
    "pages/giftcard/giftcard",  礼品卡详情页  <br>
  ], <br>
}<br>
## 项目功能
### 已实现的功能
 * scroll-view等基础事件
 * tab切换及其高亮事件
 * 添加购物车的显示隐藏功能
 * 付款的显示隐藏及其高亮的功能

### 未实现的功能
 * 门店列表（显示最近30家门店）功能
 * 地图定位功能
### 具体功能预览
#### 1.tab切换
在tab切换上，做到了大图切换和小图高亮,是不是效果还不错😁<br>
具体效果图：如下 <br>
![](https://github.com/bibiqqqq/wxapp_starbucks/blob/master/wxapp_starbucks/gif/tab.gif)<br>
_实现代码：如下<br>
```javascript
    <view class="tab-poster">
      <image class="tab-poster-photo" model="aspectFit" src="{{poster}}"></image>
    </view>
    <view class="tab">
      <image class="gift" src="../../images/gift.png"></image>
      <text class="tab-text">选择卡面</text>
       <view class="flex">
        <view class="box-photo" bindtap="btn_change1">
          <image src="{{image1}}" class="box-image"></image>
        </view>
        <view class="box-photo" bindtap="btn_change2">
          <image src="{{image2}}" class="box-image"></image>
        </view>
        <view class="box-photo" bindtap="btn_change3">
          <image src="{{image3}}" class="box-image"></image>
        </view>
        <view class="box-photo" bindtap="btn_change4">
          <image src="{{image4}}" class="box-image"></image>
        </view>
        <view class="box-photo" bindtap="btn_change5">
          <image src="{{image5}}" class="box-image"></image>
        </view>
        <view class="box-photo" bindtap="btn_change6">
          <image src="{{image6}}" class="box-image"></image>
        </view>
      </view>
 ```
 使用点击事件就可以实现这些功能啦，有没有很简单 <br>

#### 2.giftcard
在点击左边一部分的时候是跳转礼品卡详情😄<br>
![](https://github.com/bibiqqqq/wxapp_starbucks/blob/master/wxapp_starbucks/gif/giftcard.gif)<br>
#### 3.购物付款功能
在点击右边部分的➕和➖就会修改对应的数量了，当然哦，下面的结账也会显示你所购买的数量和总价哦，是不是觉得符合现代化简约美呀😄<br>
![](https://github.com/bibiqqqq/wxapp_starbucks/blob/master/wxapp_starbucks/gif/shopping.gif)<br>
这是这个小程序最闪光点也最需要思考的地方啦，仔细一看发现是不是操作后有很多小的变化，也是这小小的变化让整个小程序更美观了😄 <br>
这是选择礼品的布局样式 <br>
```javascript
  <view class="cart-box">
    <image class="money" src="../../images/money.png"></image>
    <text class="gift-text">选择礼品</text>
       <!-- wx:for 渲染列表 并判断高亮事件-->
    <view wx:for="{{carts}}"  class="{{item.num>0?'green':'gifts-box'}}">
       <!-- 跳转礼品卡详情页-->
      <navigator class="gifts-content" url="../giftcard/giftcard">         
        <view class="gifts-title-box">
        <text class="gifts-title">{{item.title}}</text>
        </view>
        <view class="gifts-price-box">
        <text class="gifts-price">{{item.price}}元</text>
        </view>
      </navigator>
      <!-- 增加减少数量按钮-->
      <view class="numCount numCount_active" wx:if="{{item.num>0}}">
        <view class="numMin-box" bindtap="minusCount" data-index="{{index}}">
        <text class="numMin"  >-</text>
        </view>
        <view class="num-box">
        <text class="num">{{item.num}}</text>
        </view>
        <view class="numAdd-box" bindtap="addCount" data-index="{{index}}">
        <text class="numAdd"  >+</text>
        </view>
      </view>
      <view class="numCount" wx:if="{{item.num==0}}">
        <view class="numAdd-box-0" bindtap="addCount" data-index="{{index}}">
        <text class="numAdd-0"  >+</text>
        </view>
      </view>
```
这是计算总价代码实现 <br>
```javascript
getTotalPrice(){
    let carts = this.data.carts;
    let total = 0;
    for(let i =0 ;i<carts.length;i++){
      if(carts[i].selected){
        total += carts[i].num * carts[i].price;
      }
    }
    this.setData({
      carts:carts,
      totalPrice:total.toFixed(2)
    });
  },
```
这是增减数量代码实现 <br>
点击➕   num加1 点击➖号 num减1 <br>
```javascript
// 增加数量
addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
    this.getTotalNum();
},
// 减少数量
minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if(num <= 0){
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
    this.getTotalNum();
},
```
## 总结
__1.__ 做小程序最主要的就是看文档，一定要看文档，重要的事情说三遍，看文档！看文档！看文档！</br>
__2.__ 因为没有什么js基础，所以踩了很多坑，代码也不够简洁，优化，以后多加改善</br>
## 其他
__如果有兴趣的朋友！一起学习的朋友！志同道合的朋友!__ :point_down:</br>
:love_letter:595980552@qq.com <br> 
__我们一起哈啤 🍺🍺🍺__ <br>
