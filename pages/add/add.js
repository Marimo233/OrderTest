Page({
  data:{
    kindTotal:{
      breakfast:[],
      dinner:[]
    },
    checked:0,
    dialogShow:false,
    kindShow:false,
    sameShow:false,
    errorShow:false,
    sameData:{
      breakfastTitle:[],
      dinnerTitle:[]
    },
    successShow:false,
    deleteShow:false,
    buttons: [{text: '取消'}, {text: '确定'}],
    button2: [{text: '确定'}]
  },
  deletekind:{kind:'',tilte:''},
  formSubmit: function(e) {
    const {kind,title,price}=e.detail.value
    if(!title){
      return
    }
    const kindTotal=this.data.kindTotal
    let catalog=kind==='0'?'breakfast':'dinner'
      let index=this.data.kindTotal[`${catalog}`].findIndex((item,index)=>{
        return item.title===title
      })
      if(index>=0){
        this.setData({
          kindShow:true
        })
        return
      }
    const catalogDetail=this.data.kindTotal[`${catalog}`]
      catalogDetail.push({kind,title,price})
      this.setData({
        kindTotal:{...kindTotal,catalog:catalogDetail}
      })
    
  },
  submitKind:function(){
    this.setData({
      dialogShow:true
    })
  },
  updateKind:function(){
    const _this=this
    wx.request({
      url:'https:www.marimo233.xyz/updateKind',
      method:'post',
      data:this.data.kindTotal,
      success (res) {
        if(res.data.code===0){
          _this.setData({
            successShow:true
          })
        }else{
          _this.setData({
            errorShow:true
          })
        }
      }
    })
  },
  deleteKindBtn:function(){
    const _this=this
    wx.request({
      url:'https://www.marimo233.xyz/deleteKind',
      method:'post',
      data:this.data.kindTotal,
      success (res) {
        if(res.data.code===0){
          _this.setData({
            successShow:true
          })
        }else{
          _this.setData({
            errorShow:true
          })
        }
      }
    })
  },
  tapDialogButton:function(e) {
    this.setData({
      dialogShow: false,
  })
    if(e.detail.index===1){
    const _this=this
    wx.request({
      url:'https://www.marimo233.xyz/submitKind',
      method:'post',
      data:this.data.kindTotal,
      success (res) {
        if(res.data.code===1){
          _this.setData({
            sameShow:true,
            sameData:res.data.data
          })
        }else if(res.data.code===0){
          _this.setData({
            successShow:true
          })
        }else{
          _this.setData({
            errorShow:true
          })
        }
      }
    })
    }
},
deleteKind:function(e){
  this.setData({
    deleteShow:true,
  })
  this.deletekind.kind=e.target.dataset.kind,
  this.deletekind.title=e.target.dataset.title
},
tapKindButton:function(){
  this.setData({
    kindShow: false,
})
},
deleteButton:function(){
  const deletekind=this.deletekind
  let catalog=this.data.kindTotal[`${deletekind.kind}`]
  const kindTotal=this.data.kindTotal
  let index=catalog.findIndex((item,index)=>{
    return item.title===deletekind.title
  })
  catalog.splice(index,1)
  this.setData({
    kindTotal:{...kindTotal,deletekind:catalog},
    deleteShow:false
  })
},
sameButton:function(){
  this.setData({
    sameShow:false
  })
},
successButton:function(){
  this.setData({
    successShow:false
  })
},
errorButton:function(){
  this.setData({
    errorShow:false
  })
}
})