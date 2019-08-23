// pages/breakfast/breakfast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kind:[{id:0,kind:"早餐"},{id:1,kind:"晚餐"}],
    //展示数据
    data:[],
    //早餐数据
    breakfastData:[],
    //晚餐数据
    dinnerData:[],
    active_id:0,
    cartNumber:{breakfast:[],dinner:[]},
    //早餐价格
    breakfastSum:0,
    //晚餐价格
    dinnerSum:0
  },
  conputed:{
    sum(data){
      return 
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  this.requestData(this.data.active_id)
  },
  requestData:function(kind){
    const _this=this
    wx.request({
      url: 'https://www.marimo233.xyz/app/mock/227261/catalog/breakfast',
      data: {},
      method: 'GET',
      success: function(res){
        const {data}=res.data
        data.map((item)=>{
          return item.number=0
         })
        if(kind===0){
            _this.setData({
              breakfastData:data,
              data:data
            })
          
        }else{
            _this.setData({
              dinnerData:data,
              data:data
            }) 
        }
      },
      fail: function(e) {
        console.log(error)
      }
    })
  },
    // 改变种类
    changekind: function(e){
      this.setData({
        active_id:e.target.dataset.index
      })
      switch(e.target.dataset.index){
        case 0:
            if(this.data.breakfastData.length===0){
              this.requestData(e.target.dataset.index)
            }else{
              const data=this.data.breakfastData
              this.setData({
                data
              })
            }
        break;
        case 1:
            if(this.data.dinnerData.length===0){
              this.requestData(e.target.dataset.index)
            }else{
              const data=this.data.dinnerData
              this.setData({
                data
              })
            }
        break;
        default:''
        return
      }
    },
    //改变数量
    changeNum:function(e){
    let data=this.data.active_id===0?this.data.breakfastData:this.data.dinnerData;
    let tempData=this.data.cartNumber;
    //展示
    data.map((item,index)=>{
      if(item.id===e.target.dataset.id){
        if(e.target.dataset.text==='-'){
          return item.number-=1
        }else if(e.target.dataset.text==='+'){
          return item.number+=1
        }
        
      }
    })
    const app=getApp()
    if(!this.data.active_id){
      this.setData({
        data,
        cartNumber:{...tempData,breakfast:data.filter((item)=>item.number!==0)},
        breakfastSum:data.reduce((sum,item)=>{
          return sum+item.price*item.number
        },0)
      })
      app.globalData.cartNumber={...tempData,breakfast:data.filter((item)=>item.number!==0)}
      app.globalData.breakfastSum=data.reduce((sum,item)=>{
        return sum+item.price*item.number
      },0)
    }else{
      this.setData({
        data,
        cartNumber:{...tempData,dinner:data.filter((item)=>item.number!==0)},
        dinnerSum:data.reduce((sum,item)=>{
          return sum+item.price*item.number
        },0)
      })
      app.globalData.cartNumber={...tempData,dinner:data.filter((item)=>item.number!==0)}
      app.globalData.dinnerSum=data.reduce((sum,item)=>{
        return sum+item.price*item.number
      },0)
    }
  }
})