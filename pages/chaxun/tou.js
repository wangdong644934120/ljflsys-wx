// pages/chaxun/tou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
    { "name": "张三",
     "idcard": "376191267834526",
      "address": "山东省威海市",
      "type":"有害垃圾",
      "time":"2010-3-10"
     },
      {
        "name": "张三",
        "idcard": "376191267834526",
        "address": "山东省威海市",
        "type": "回收垃圾",
        "time": "2010-3-18"
      },
      {
        "name": "张三",
        "idcard": "376191267834526",
        "address": "山东省威海市",
        "type": "厨余垃圾",
        "time": "2010-3-26"
      },
   
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
wx.request({
  url: 'http://127.0.0.1/record/list',
  data:{
  openid:wx.getStorageSync('user')
  },
  datatype: "json",
  success: res => {
   JSON.stringify(res.data)
    console.log(res.data);
   this.setData({
     list:res.data,
     name:wx.getStorageSync('user').name
   })
  },
})


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})