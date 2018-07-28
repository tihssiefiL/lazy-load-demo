# lazy-load-demo
## just for fun

##### 原理： img标签的src在空的时候是不会自动发送请求的，借此特性，可以自定义一个属性 data-src 用来存储真实的url，在src存放加载的gif。监听滚动事件，在 img标签滚动到视口内的时候讲data-src 中的url 存到src中，完成加载。

##### 元素是否在视口 = 元素距离页面顶端的值 - 滑动的距离

##### boolan = ele.offsetTop - ele.scrollTop

##### 适应移动端，可以监听 touchmove 事件 