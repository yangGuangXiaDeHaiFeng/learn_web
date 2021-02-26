import React,{useEffect} from 'react';

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 * 关闭浏览器的一系列工作
 */
const Index = () => {
  useEffect(()=>{
    return()=>{
      // 离开当前页面
      window.confirm('放弃当前未保存内容而关闭页面？');

    }
  },[]);
  window.onbeforeunload = (e: BeforeUnloadEvent) => {
    e = e || window.event;
    // 兼容IE8和Firefox 4之前的版本
    if (e) {
      e.returnValue = '放弃当前未保存内容而关闭页面？';
    }

    // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
    return '放弃当前未保存内容而关闭页面？';
  };

  return <div>关闭浏览器的一系列工作</div>;
};
export default Index;
