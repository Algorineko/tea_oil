// pages/info/info.js
Page({
  data: {
    query:[],
    colorList:[],
  },
  getColors(){
    wx.showLoading({
      title: 'Loading',
      mask:true,
    })
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/color',
      method:'GET',
      success:({data:res})=>{
        // console.log(res);
        this.setData({
          colorList:[...this.data.colorList,...res.data]
        });
      },
      complete:()=>{
        wx.hideLoading();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   * options为页面传参
   */
  onLoad(options) {
    // options仅短存,若需其他函数使用存入data
    this.setData({
      query:options
    }),
    this.getColors();
    this.getColors();
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
    // wx.showLoading({
    //   title: '加载中',
    // })
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getColors();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})