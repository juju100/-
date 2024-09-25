// pages/square/square.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 可以初始化一些图片
    this.setData({
      images: [
        { src: '/assest/images/image1.jpeg', title: '风景1', description: '美丽的风景' },
        { src: '/assest/images/image2.jpeg', title: '风景2', description: '宁静的湖泊' },
        { src: '/assest/images/image3.jpeg', title: '风景2', description: '宁静的湖泊' }
      ]
    });
  },

  /**
   * index-选择图片并添加到页面展示
   */
  chooseImage() {
    const that = this;
    wx.chooseImage({
      count: 1,  // 每次只选择一张图片
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        wx.showModal({
          title: '输入图片信息',
          content: '请输入图片的名字和简介',
          editable: true,
          success(modalRes) {
            if (modalRes.confirm) {
              // 将新选中的图片添加到现有的图片数组
              const newImages = that.data.images.concat({
                src: res.tempFilePaths[0],
                title: modalRes.content, // 使用输入的标题
                description: '默认简介'  // 可以允许用户输入简介
              });
              that.setData({
                images: newImages
              });
            }
          }
        });
      }
    });
  },

  // 处理图片点击事件，显示操作选项（查看大图、替换或删除）
  handleImageClick(e) {
    const that = this;
    const index = e.currentTarget.dataset.index; // 获取点击图片的索引
    const src = e.currentTarget.dataset.src; // 获取点击图片的路径

    wx.showActionSheet({
      itemList: ['查看大图', '替换', '删除'],  // 提供查看大图、替换和删除选项
      success(res) {
        if (res.tapIndex === 0) {
          // 用户选择了查看大图
          that.previewImage(src);
        } else if (res.tapIndex === 1) {
          // 用户选择了替换图片
          that.replaceImage(index);
        } else if (res.tapIndex === 2) {
          // 用户选择了删除图片
          that.deleteImage(index);
        }
      },
      fail(res) {
        console.log(res.errMsg);
      }
    });
  },

  // 替换图片
  replaceImage(index) {
    const that = this;
    wx.chooseImage({
      count: 1,  // 每次只替换一张图片
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        wx.showModal({
          title: '输入图片信息',
          content: '请输入图片的名字和简介',
          editable: true,
          success(modalRes) {
            if (modalRes.confirm) {
              // 替换指定索引的图片
              const newImages = that.data.images;
              newImages[index] = {
                src: res.tempFilePaths[0],
                title: modalRes.content, // 使用输入的标题
                description: '默认简介'  // 可以允许用户输入简介
              };
              that.setData({
                images: newImages
              });
            }
          }
        });
      }
    });
  },

  // 删除图片
  deleteImage(index) {
    const that = this;
    // 删除指定索引的图片
    const newImages = that.data.images;
    newImages.splice(index, 1);
    that.setData({
      images: newImages
    });
  },

  // 查看大图
  previewImage(src) {
    wx.previewImage({
      current: src, // 当前显示图片的链接
      urls: this.data.images.map(item => item.src) // 需要预览的图片链接列表
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