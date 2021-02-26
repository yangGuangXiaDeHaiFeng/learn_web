/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 *  运行时配置
 */
/**
 * 在初始加载和路由切换时调用
 * @param location
 * @param routes
 * @param action
 */
export function onRouteChange({ location }: { location: { pathname: string } }) {
  if (location.pathname === '/learnUmiSetting') {
    const result = window.confirm('欢迎来到当前页面，我们将为你做一些定制内容，是否现在就开启？');
    console.log('result',result);
    if (result) {
      window.confirm('定制完毕，请安心使用');
    }else{
      window.alert("您放弃了定制！");
    }
  }
}
