# 用户操作过程中离开了页面？
** 监控浏览器/页面重新加载事件 **
## 用户操作过程中刷新页面/关闭浏览器？
### window.onbeforeunload
**语法**
window.onbeforeunload = funcRef
**使用示例**
```
window.onbeforeunload = (e: BeforeUnloadEvent) => {
    e = e || window.event;
    // 兼容IE8和Firefox 4之前的版本
    if (e) {
      e.returnValue = '放弃当前未保存内容而关闭页面？';
    }

    // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
    return '放弃当前未保存内容而关闭页面？';
  };
```
**说明**
1、该函数应当将一个说明字符串赋值给Event对象的returnValue属性(兼容旧版浏览器),并且返回该字符串；
2、在Firefox4及其后续版本中,返回的说明字符串并不向用户显示,也就是无法自定义说明字符串
**作用时机**
   正准备去服务器读取新的页面时调用（读取之前）
**未覆盖的场景：**
    React单页面菜单切换不会触发窗口卸载事件  
### window.onbeforeunload
**说明**
  参考：https://developer.mozilla.org/zh-CN/docs/Web/API/WindowEventHandlers/onunload
  实际操作中，并未生效，原因尚且不明
## React单页面中，用户操作过程中切换菜单
###使用React生命周期
**切换菜单：**
  1、切换菜单时，当前页面会被销毁；
  2、销毁的生命周期中增加confirm
  ```
 useEffect(()=>{
    return()=>{
      // 离开当前页面
      window.confirm('放弃当前未保存内容而关闭页面？');

    }
  },[]);

```
  




