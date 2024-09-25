// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rows: Array.from({ length: 25 }, (_, rowIndex) => 
      Array.from({ length: 4 }, (_, index) => index + 1 + rowIndex * 4) // 每行 4 个，25 行
    ),
    progressValue: 0, // 初始值
    progressTotal: 100, // 总值
    progressText: '',
    modules: [
      { img: '', text: '一起夜晚去公园散', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      { img: '', text: '一起去图书馆', completed: false },
      // ... 初始化100个模块
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    // 初始化已完成数字
    this.updateProgressText();
  },
  
  // 动态更新进度文本的函数
  updateProgressText: function() {
    const { progressValue, progressTotal } = this.data;
    this.setData({
      progressText: `已完成 ${progressValue}/${progressTotal}`
    });
  },
  
  // 示例：调用函数来更新进度值
  increaseProgress: function() {
    this.setData({
      progressValue: this.data.progressValue + 1
    });
    this.updateProgressText(); // 更新文本
  },

  //上传图片的函数
  handleClick: function(e) {
    const index = e.currentTarget.dataset.index;
    if(this.data.modules[index].completed) {
      wx.showToast({
        title: '任务已完成',
        icon: 'none'
      });
      return;
    }
    const that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePath = res.tempFilePaths[0]; // 选择第一张图片的路径
        const updatedModules = that.data.modules;
        updatedModules[index].img = tempFilePath; // 直接赋值图片路径
        updatedModules[index].completed = true;

        //更新模块状态
        that.setData({
          modules: updatedModules,
          progressValue: that.data.progressValue + 1
        });

        // 更新进度条
        that.updateProgressText();
      }
    });
  },

  // 处理点击上传图片的函数
  handleTap: function(e) {
    const index = e.currentTarget.dataset.index;
    if (this.data.modules[index].completed) {
      wx.showToast({
        title: '任务已完成',
        icon: 'none'
      });
      return;
    }

    wx.chooseImage({
      count: 1,
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];

        // 模拟上传图片到服务器
        wx.uploadFile({
          url: 'https://your-server/upload', // 替换成你的上传接口
          filePath: tempFilePath,
          name: 'file',
          success: () => {
            const updatedModules = this.data.modules;
            updatedModules[index].img = tempFilePath;
            updatedModules[index].completed = true;

            // 更新模块状态和进度
            this.setData({
              modules: updatedModules,
              progressValue: this.data.progressValue + 1
            });

            // 更新进度条
            this.updateProgressText();

            wx.showToast({
              title: '上传成功',
              icon: 'success'
            });
          },
          fail: () => {
            wx.showToast({
              title: '上传失败',
              icon: 'none'
            });
          }
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