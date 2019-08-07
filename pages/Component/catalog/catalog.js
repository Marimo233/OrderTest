Component({
  properties: {
    kind:{
      type:Array,
      value:[]
    },
    data:{
      type:Array,
      value:[]
    }
  }
  ,
  data: {
    // 这里是一些组件内部数据
    active_id:0,
    cartNumber:[]
  },
  methods: {
    // 改变种类
    changekind: function(e){
      this.setData({
        active_id:e.target.dataset.index
      })
    },
    //增加数量
    addNum:function(e){
    let cartNumber=this.data.cartNumber
    if(cartNumber.some((item)=>{
      return item.id===e.target.dataset.id
    })){
      cartNumber.map((item,index)=>{
        if(item.id===e.target.dataset.id){
          item.number+=1
          return item
        }
      })
    }else{
      cartNumber.push({
        id:e.target.dataset.id,
        number:1
      })
    }
      this.setData({
        cartNumber
      },function(){
        console.log(this.data.cartNumber)
      })
    }
  }
})