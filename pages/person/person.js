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
  },
  deleteOrders:function(){
    wx.showModal({
      title: '',
      content: '是否清空所有订单',
      success (res) {
        if (res.confirm) {
          wx.request({
            url: 'https://www.marimo233.xyz/deleteOrders',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
              if(res.data.code===0){
                wx.showToast({
                  title: '成功',
                  icon: 'success',
                  duration: 2000
                })
                
              }else{
                wx.showToast({
                  title: '失败',
                  icon: 'none',
                  duration: 2000
                })
              }
            }
          })
        } else if (res.cancel) {
        }
      }
    })
  }
})