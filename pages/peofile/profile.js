// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '/assest/avater/ave2.jpg',
    username: '三生有幸'// 默认头像路径和用户名
  },

  // 点击头像更换图片
  changeAvatar: function() {
    // 这里可以调用 API 选择图片并更新 avatarUrl
    const that = this;
    wx.chooseImage({
      count: 1,
      success(res) {
        that.setData({
          avatarUrl: res.tempFilePaths[0] // 更新头像链接
        });
      }
    });
  },

  changeUsername: function() {
    const that = this;
    wx.showModal({
      title: '修改用户名',
      content: '请输入新的用户名',
      success(res) {
        if (res.confirm) {
          // 这里可以获取用户输入的新用户名
          const newUsername = '用户输入的新用户名'; // 需要实现输入获取
          that.setData({
            username: newUsername // 更新用户名
          });
        }
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

