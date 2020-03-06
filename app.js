App({
  globalData: {
    // 连接的域名：注意格式，不要带端口号
    server_domain: "wss://www.chenzhongsheng.cn/mqtt",
    //本工程的订阅的主题
    subTopic: "/test/onoff/",
    //本工程的f发送的主题
    pubTopic: "/test/onoff/"
  }
})