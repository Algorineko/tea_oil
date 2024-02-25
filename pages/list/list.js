// pages/list/list.js
Page({
  data: {
    gd:0,
    add_v:1,
    isYm:false,
    arr:['华为','苹果','小米'],
    gridList:[],
    tabName:"info",
    country:"CHINA"
  },
  addGd(e){
    this.setData({
      gd:this.data.gd+Number(this.data.add_v)
    });
    if(this.data.gd>=10000)
      this.setData({isYm:true})
    else this.setData({isYm:false})
  },
  addValue(){},
  getInfo(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/get',
      method:"GET",
      data:{
        name:"alp",
        age:30
      },
      success:(res)=>{
        console.log(res.data.data);
      }
    })
  },
  postInfo(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/post',
      method:"POST",
      data:{
        name:"alp",
        age:9
      },
      success:(res)=>{
        console.log(res.data.data);
      }
    })
  },
  getGridList(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/categories',
      methodL:"GET",
      success:(res)=>{
        this.setData({
          gridList:res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getGridList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("功德已重置");
    this.setData({
      gd:0
    });
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("下拉刷新成功");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})