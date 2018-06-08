// pages/movie/movie.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "http://baobab.kaiyanapp.com/api/v4/tabs/selected",
      
      data: [],
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        // console.log(res.data.itemList)
        // console.log(res.data.itemList[0].data.itemList[0].data.image)
        var data = res.data;
        var newdata = [];
        // 将返回的JSON中格式为video的元素插入到新数组
        for(var i =0;i<data.itemList.length;i++){
          // console.log(data.itemList[i]);
          if (data.itemList[i].type == 'video') {
            newdata.push(data.itemList[i]);
          }
        }    
        // console.log(newdata);
        that.setData({
          movies:newdata,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})