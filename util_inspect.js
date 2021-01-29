const util = require('util')

const obj = {
    name: 'zhangsan',
    address: 'nanchang',
    age: 30,
    getAge() {
        return this.age;
    }
};

// console.log(obj);

// inspect：以字符串的方式展现出来
// const str = util.inspect(obj);

// colors:打印有颜色的字体
const str = util.inspect(obj, {
    'colors': true
});
console.log(str);
