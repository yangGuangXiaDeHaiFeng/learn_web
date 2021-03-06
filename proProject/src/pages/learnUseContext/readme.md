#useContext ##应用场景 **组件之间共享状态** 比如：A 组件为最顶层组件，直接自组件有 B、C，B、C 的直接子组件有 C、D，A 要给其子孙组件发一条消息， 传统写法需要层层传递（A——B——C），这样的话，当层级变多时，传递变得繁琐，而且当消息变动时，需要 改动很多组件。 ##参考 https://juejin.cn/post/6844904153584500749

## 小总结

**优点：** 提供的 value 是"被迫"共享的，即包裹在<XXX.Provider/>中的组件，不管需不需要 value 值， 实际上 value 都是存在的，所以对于子组件都需要某个变量的场景下，非常方便 **弊端：** 对于层层嵌套的组件，不能直接将参数传到想要的组件，而是所有的子组件共享，这样会有一定的性能问题
