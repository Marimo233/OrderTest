// pages/breakfast/breakfast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kind:[],
    data:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const _this=this
    wx.request({
      url: 'http://rap2api.taobao.org/app/mock/227261/catalog/breakfast',
      data: {},
      method: 'GET',
      success: function(res){
        const {data}=res.data
        _this.setData({
          data
        })
      },
      fail: function(e) {
        console.log(error)
      }
    }),
    wx.request({
      url: 'http://rap2api.taobao.org/app/mock/227261/breakfastKind',
      data: {},
      method: 'GET',
      success: function(res){
        const {data}=res.data
        _this.setData({
          kind:data
        })
      },
      fail: function(e) {
        console.log(error)
      }
    })
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