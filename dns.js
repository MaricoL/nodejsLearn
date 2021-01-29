const dns = require('dns');

const domain = 'www.baidu1111111.com';

// 域名解析
// resolve(domain,(error,address)=>{})
dns.resolve(domain, (error, address) => {
    console.log(error ?? address);      // 报错
})


// 反向解析
dns.reverse('114.114.114.114', (error, address) => {
    console.log(error ?? address);      // [ 'public1.114dns.com' ]
})
