App({
  globalData: {
    // 连接的域名：注意格式，不要带端口号
    server_domain: "wss://www.域名/mqtt",
    //本工程的订阅的主题
    subTopic: "/onoff/",
    //本工程的f发送的主题
    pubTopic: "/onoff/"
  }
})
