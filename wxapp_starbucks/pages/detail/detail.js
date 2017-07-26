// pages/we/we.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // condition:false,
    comment: [],
    details: [],
    image1:"../../images/detail_photo1.png",
    image2:"../../images/detail_photo2.png",
    image3:"../../images/detail_photo3.png",
    image4:"../../images/detail_photo4.png",
    image5:"../../images/detail_photo5.png",
    image6:"../../images/detail_photo6.png",
    carts:[],
    hasList:false,
    totalPrice:0,
    totalNum:0,



  },
  btn_change1: function() {
    this.setData({
      poster:"../../images/detail_poster1.png",
      image1:"../../images/detail_photo1_active.png",
      image2:"../../images/detail_photo2.png",
      image3:"../../images/detail_photo3.png",
      image4:"../../images/detail_photo4.png",
      image5:"../../images/detail_photo5.png",
      image6:"../../images/detail_photo6.png",
    })
  },
  btn_change2: function() {
    this.setData({
      poster:"../../images/detail_poster2.png",
      image1:"../../images/detail_photo1.png",
      image2:"../../images/detail_photo2_active.png",
      image3:"../../images/detail_photo3.png",
      image4:"../../images/detail_photo4.png",
      image5:"../../images/detail_photo5.png",
      image6:"../../images/detail_photo6.png",
      })
  },
  btn_change3: function() {
    this.setData({
      poster:"../../images/detail_poster3.png",
      image1:"../../images/detail_photo1.png",
      image2:"../../images/detail_photo2.png",
      image3:"../../images/detail_photo3_active.png",
      image4:"../../images/detail_photo4.png",
      image5:"../../images/detail_photo5.png",
      image6:"../../images/detail_photo6.png",
    })
  },
  btn_change4: function() {
    this.setData({
      poster:"../../images/detail_poster4.png",
      image1:"../../images/detail_photo1.png",
      image2:"../../images/detail_photo2.png",
      image3:"../../images/detail_photo3.png",
      image4:"../../images/detail_photo4_active.png",
      image5:"../../images/detail_photo5.png",
      image6:"../../images/detail_photo6.png",
    })
  },
  btn_change5: function() {
    this.setData({
      poster:"../../images/detail_poster5.png",
      image1:"../../images/detail_photo1.png",
      image2:"../../images/detail_photo2.png",
      image3:"../../images/detail_photo3.png",
      image4:"../../images/detail_photo4.png",
      image5:"../../images/detail_photo5_active.png",
      image6:"../../images/detail_photo6.png",
    })
  },
  btn_change6: function() {
    this.setData({
      poster:"../../images/detail_poster6.png",
      image1:"../../images/detail_photo1.png",
      image2:"../../images/detail_photo2.png",
      image3:"../../images/detail_photo3.png",
      image4:"../../images/detail_photo4.png",
      image5:"../../images/detail_photo5.png",
      image6:"../../images/detail_photo6_active.png",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
this.setData({
    poster:"../../images/detail_poster1.png",
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: '@all 我想对你们说'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      hasList:true,
      carts:[
        {id:1,title:'当季特饮',num:0,price:39,selected:true},
        {id:2,title:'抹茶星冰乐',num:0,price:34,selected:true},
        {id:3,title:'冷萃冰咖啡',num:0,price:36,selected:true},
        {id:4,title:'拿铁',num:0,price:31,selected:true},
        {id:5,title:'焦糖玛奇朵',num:0,price:35,selected:true},
        {id:6,title:'轻甜冷萃',num:0,price:39,selected:true},
        {id:7,title:'摩卡',num:0,price:34,selected:true},
        {id:8,title:'馥芮白',num:0,price:36,selected:true},
        {id:9,title:'卡布奇诺',num:0,price:31,selected:true},
        {id:10,title:'星礼卡',num:0,price:100,selected:true},
        {id:11,title:'星礼卡',num:0,price:50,selected:true},
        {id:12,title:'高度券',num:0,price:3,selected:true},
        {id:13,title:'深度券',num:0,price:4,selected:true},
      ]
    })
  },
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
  getTotalNum(){
    let carts = this.data.carts;
    let total = 0;
    for(let i =0 ;i<carts.length;i++){
      if(carts[i].selected){
        total += carts[i].num
      }
    }
    this.setData({
      carts:carts,
      totalNum:total
    });
  },
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


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
