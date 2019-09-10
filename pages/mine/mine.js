// pages/mine/mine.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      phone:'',
      name:'',
      admin:''
    }
   
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
    const userInfo=wx.getStorageSync('userInfo')
    this.setData({
      userInfo
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

  },
  login:function(){
    wx.login({
      success(res) {
       console.log(res)
      }
    })
  },
  //跳转
  skipKind:function(){
    wx.navigateTo({
      url: '/pages/add/add'
    })
  },
  skipPerson:function(){
    wx.navigateTo({
      url: '/pages/person/person'
    })
  },
  logout:function(){
    wx.removeStorage({
      key: 'userInfo',
      success: function(res){
        wx.showModal({
          title: '',
          content: '是否退出',
          success (res) {
            if (res.confirm) {
              wx.redirectTo({
                url: '/pages/index/index',
              })
            } else if (res.cancel) {
              
            }
          }
        })
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})