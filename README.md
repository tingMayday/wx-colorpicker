# wx-colorpicker
利用小程序component组件开发的颜色选择器，可选择所需颜色改变元素样式

![image](https://github.com/tingMayday/wx-colorpicker/blob/colorpicker/images/rendering.jpg)

## 使用
首先，在引用页面对应 json 文件中包含 usingComponents 定义段。
（本项目引用页面为index，在index.json添加以下代码）
```bash
{
  "usingComponents": {
    "color-picker": "/components/colorPicker/colorPicker"
  }
}
```

#### wxml页面引用
```bash
<color-picker cus="{{cp_cus}}" color="{{cp_color}}" bindcolor="color" />
```
- cus传入colorpicker默认显示的颜色列表

- color传入初始默认选中颜色值
- bindcolor事件返回colorpicker所选颜色值
