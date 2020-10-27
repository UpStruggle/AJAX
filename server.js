//1.引入express
const { request, response } = require('express');
const express = require('express');

//2创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装 response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX GET');
});

//all 可以接受任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    response.send('HELLO AJAX POST');
});
//JSON
app.all('/JSON-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: 'atguigu'
    };
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send('HELLO AJAX JSON');
});

//针对IE缓存
app.get('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO IE');
});

//延时响应
app.all('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        //设置响应体
        response.send('延时响应');
    }, 1000);
});

//jquery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'yangdandan' };
    //设置响应体
    response.send(JSON.stringify(data));
});

//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'yangdandan' };
    //设置响应体
    response.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'yangdandan' };
    //设置响应体
    response.send(JSON.stringify(data));
});

//JSONP-Server 服务
app.all('/jsonp-server', (request, response) => {
    //response.send(console.log('hello jsonp-server'));
    const data = {
        name: 'yangdandanr'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});

//JQuery-jsonp-Server 服务
app.all('/jquery-jsonp-server', (request, response) => {
    //response.send(console.log('hello jsonp-server'));
    const data = {
        name: 'yangdandanrr',
        city: ['北京', '上海', '深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 变量
    let cb = request.query.callback;
    //返回结果
    response.end(`${cb}(${str})`);
});

//CORS-Server 服务
app.all('/cors-server', (request, response) => {
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    //response.setHeader("Access-Control-Allow-Orign", "http://127.0.0.1:5500");
    //这样设置的话，只有端口是5500的网页才可以向这个服务发送请求
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.send('Hello CROS');
});

//用户名检测是否存在
app.all('/check-username', (request, response) => {
    //response.send(console.log('hello jsonp-server'));
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});

//


//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务器已经启动，8000端口监听中....");
});