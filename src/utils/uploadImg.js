import Taro from '@tarojs/taro';
import {
  baseUrl,
  commonHeader,
  showLoad,
  hideLoad,
} from './index.js';

//上传图片
export const uploadImg = (num = 9) => {
  return new Promise((resolve, reject) => {
    Taro.chooseImage({ //选择图片
      count: num,
      sizeType: ['original'],
      success: async res => {
        showLoad('上传中')
        // console.log(res.tempFilePaths)
        let paths = res.tempFilePaths;
        let imgPath = await Promise.all(paths.map(async e => await uploadPath(e)))
        // console.log(imgPath)
        hideLoad()
        resolve(imgPath) //返回图片数组
      },
      fail: err => {
        reject(err)
        console.log(err)
      }
    })
  })
}

//压缩图片
const compressImage = (path, quality = 80) => {
  return new Promise((resolve, reject) => {
    Taro.compressImage({
      src: path,
      quality,
      success: res => {
        resolve(res.tempFilePath);
      },
      fail: err => {
        reject(err)
        console.log(err)
      }
    })
  })
}

//上传接口  接口仅做示例
const uploadPath = async path => {
  // Taro.compressImage && (path = await compressImage(path))
  return new Promise((resolve, reject) => {
    Taro.uploadFile({
      url: `${baseUrl}/api/ImageUpload`,
      filePath: path,
      name: 'ImageFile',
      formData: { },
      header: commonHeader(),
      success: res => {
        let data = JSON.parse(res.data);
        if (data.State == 1) {
          let ImageUrl = data.Body['ImageUrl'];
          resolve(ImageUrl)
        } else {
          reject(err)
          msg('上传图片失败，请重试')
        }
      },
      fail: err => {
        reject(err)
        msg('上传图片失败，请重试')
      }
    })
  })
}
