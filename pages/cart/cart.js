// pages/cart/cart.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartNumber:{},
    //早餐价格
    breakfastSum:0,
    //晚餐价格
    dinnerSum:0,
    dialogShow:false,
    buttons: [{text: '取消'}, {text: '确定'}],
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
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const {cartNumber,breakfastSum,dinnerSum}=app.globalData
    this.setData({
      cartNumber,breakfastSum,dinnerSum
    })
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
  submitUser:function(){
    this.setData({
      dialogShow:true
    })
  },
  tapDialogButton:function(e){
    console.log(e)
    if(e.detail.index===1){
      const params=Object.assign(this.data.cartNumber,app.globalData.userInfo)
      console.log(params)
    }
    this.setData({
      dialogShow:false
    })
  }
})