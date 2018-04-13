// // 引入mockjs
    // const Mock = require('mockjs');
// // 获取 mock.Random 对象
// const Random = Mock.Random;

// // mock一组数据
// const produceNewsData = function() {
//     let articles = [];
//     for (let i = 0; i < 100; i++) {
//         let newArticleObject = {
//             title: Random.csentence(5, 30), //  Random.csentence( min, max )
//             thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//             author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//             date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//         }
//         articles.push(newArticleObject)
//     }
 
//     return {
//         articles: articles
//     }
// }
 
// // Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/news/index', 'post', produceNewsData);

// return {
//     Mock.mock('/proList','post', {
//         // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//         'list|10-20': [{
//             // 属性 id 是一个自增数，起始值为 1，每次增 1
//             'id|+1': 11,
//             'imageUrl|+1': Random.image('200x200'),
//             'label1|+1': /满99-10|/,
//             'label2|+1': /券|/,
//             'label3|+1': /特价|/,
//             'proTitle|+1': Random.ctitle(13, 28),
//             'price|60-900': 1,
//             'marketPrice|65-988': 1
//         }]
//     })
// }
    