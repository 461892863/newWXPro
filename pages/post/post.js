Page({
  data: {
    message: 'Hello MINA!',
    data:"这是data",
    app:"app的内容"
  },
  onLoad:function(){
    var post_content1 = {
      date:"Nov 12 2016",
      title:"今儿个天儿不错",
      post_image:"/images/3.jpg"
    }
    this.setData(post_content1);


  }
})