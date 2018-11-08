### taro-apps

[taro官网，请戳我](https://taro.aotu.io/)

### 分包配置

```javascript
    pages: [
        'pages/index/index',
        'pages/cart/index',
        'pages/user/index',
        'pages/upload/index',
    ],
    //分包配置
    subPackages:[{
        root:'pagesOther',
        pages:[//直接写所在文件夹即可
            'other/index'
        ]
    }]
```

### 图片裁剪

[图片裁剪，请戳我](https://github.com/zyh9/taro-apps/blob/master/src/pages/upload/index.js)

### 小程序图片裁剪上传插件

[we-cropper地址，请戳我](https://github.com/we-plugin/we-cropper)

### 转译成h5暂不支持分包路径

[github issues，请戳我](https://github.com/NervJS/taro/issues/811)

### 原生小程序转Taro代码

[github issues，请戳我](https://github.com/NervJS/taro/issues/955)

### 组件传递函数属性名以-on-开头

[官网文档，请戳我](https://nervjs.github.io/taro/docs/best-practice.html#组件传递函数属性名以-on-开头)

### Taro1.1发布，全面支持微信/百度/支付宝小程序

[掘金链接，请戳我](https://juejin.im/post/5be179b9f265da613d7b89ec)

### 安装 transform-runtime（去除babel-polyfill）

> cnpm install babel-plugin-transform-runtime -D

[babel-polyfill VS babel-runtime VS babel-preset-env](https://juejin.im/post/5aefe0a6f265da0b9e64fa54)
