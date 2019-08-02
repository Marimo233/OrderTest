Page({
  data:{
    phone:'',
    name:'',
    error:false
  },
  formSubmit: function (e) {
    wx.switchTab({
      url: '/pages/breakfast/breakfast',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  handlePhone:function(e){
    const reg=/^1[3456789]\d{9}$/
    if(reg.test(e.detail.value)){
      this.setData({
        phone:e.target.value,
        error:false
        
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
