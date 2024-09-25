// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: []  // 保存图片路径的数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 初始化图片数组
    this.setData({
      images: [
        '/assest/images/image1.jpeg',
        '/assest/images/image2.jpeg',
        '/assest/images/image3.jpeg'
      ]
    });
  },
  chooseImage() {
    const that = this;
    wx.chooseImage({
      count: 9,  // 允许用户选择的图片数量
      sizeType: ['original', 'compressed'],  // 可选择原图或压缩图
      sourceType: ['album', 'camera'],  // 可以从相册或拍照获取
      success(res) {
        // 将新图片路径添加到已有的图片数组中
        const newImages = that.data.images.concat(res.tempFilePaths);
        that.setData({
          images: newImages
        });
      }
    });
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})