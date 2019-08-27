Page({
  data:{
    personData:[]
  },
  onReady:function(){
    const _this=this
    wx.request({
      url: 'https://www.marimo233.xyz/person',
      data: {},
      method: 'GET', 
      success: function(res){
        _this.setData({
          personData:res.data.data
        })
      },
      fail: function() {
      },
      complete: function() {
      }
    })
  }
})