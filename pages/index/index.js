const app=getApp()
Page({
  data:{
    phone:'',
    name:'',
    error:false
  },
  formSubmit: function (e) {
    if(!this.data.error){
      const _this=this
      wx.request({
        url: 'https://www.marimo233.xyz/login',
        data: _this.data,
        method: 'GET',
        success: function(res){
          if(res.data.code===0){
            const {phone,name}=_this.data
            wx.setStorageSync('userInfo', {phone,name,admin:res.data.admin})
            wx.switchTab({
              url: '/pages/Order/order'
            })
          }
        }
      })
      
    }
  },
  onLoad:function(){
    if(wx.getStorageSync('userInfo')){
      wx.switchTab({
        url: '/pages/Order/order'
      })
    }
  },
  handlePhone:function(e){
    const reg=/^1[3456789]\d{9}$/
    if(reg.test(e.detail.value)){
      this.setData({
        error:false,
        phone:e.detail.value
      })
      
    }else{
      this.setData({
        error:true
      })
    }
  },
  handleName:function(e){
    this.setData({
      name:e.detail.value
    })
  }
})
