const app=getApp()
Page({
  data:{
    phone:'',
    name:'',
    error:false
  },
  formSubmit: function (e) {
    if(!this.data.error){
      wx.switchTab({
        url: '/pages/Order/order'
      })
    }
  },
  handlePhone:function(e){
    const reg=/^1[3456789]\d{9}$/
    if(reg.test(e.detail.value)){
      this.setData({
        error:false
      })
      app.globalData.phone=e.detail.value
    }else{
      this.setData({
        error:true
      })
    }
  },
  handleName:function(e){
    app.globalData.name=e.detail.value
  }
})
