Page({
  data:{
    kindTotal:{
      breakfast:[{title:'1',price:'1'}],
      dinner:[{title:'1',price:'1'}]
    },
    checked:0,
    dialogShow:false,
    kindShow:false,
    deleteShow:false,
    buttons: [{text: '取消'}, {text: '确定'}],
    button2: [{text: '确定'}]
  },
  deletekind:{kind:'',tilte:''},
  formSubmit: function(e) {
    const {kind,title,price}=e.detail.value
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
  tapDialogButton:function(e) {
    if(e.detail.index===1){
      this.setData({
        dialogShow: false,
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
    return item.title===deletekind.tile
  })
  catalog.splice(index,1)
  this.setData({
    kindTotal:{...kindTotal,deletekind:catalog},
    deleteShow:false
  })
}
})