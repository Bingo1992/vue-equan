module.exports = function () {
    // var faker = require("faker");
    // faker.locale = "zh_CN";
    // var _ = require("lodash");
    var Mock = require('mockjs');
    var Random = Mock.Random;
    return {
        banner:{
            "success": true,
            "msg": "操作成功",
            "reload": false,
            "obj": [{
                "id": 2,
                "delFlag": 0,
                "isNewRecord": false,
                "name": "首页雨伞图",
                "pic": "/banner/20180402/20180402181906_818.jpg",
                "location": "index",
                "url": "http://www.163.com",
                "orderNum": 2,
                "startTime": "2018-04-01 18:19:21",
                "endTime": "2018-04-05 18:19:25"
            }, {
                "id": 1,
                "delFlag": 0,
                "isNewRecord": false,
                "name": "11",
                "pic": "/banner/20180402/20180402173738_458.jpg",
                "location": "index",
                "url": "http://www.baidu.com",
                "orderNum": 1,
                "startTime": "2018-04-01 17:28:40",
                "endTime": "2018-04-26 17:28:43"
            }]
        },
        ads: [{
            url: '../static/images/ban1.png'
        }, {
            url: '../static/images/ban1.png'
        }, {
            url: '../static/images/ban1.png'
        }, {
            url: '../static/images/ban1.png'
        }, {
            url: '../static/images/ban1.png'
        }],
        proList: Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|10-20': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1,
                'imageUrl|+1': Random.image('200x200'),
                'label1|+1': /满99-10|/,
                'label2|+1': /券|/,
                'label3|+1': /特价|/,
                'proTitle|+1': Random.ctitle(13, 28),
                'price|60-900': 1,
                'marketPrice|65-988': 1
            }]
        }),
        proDetail: Mock.mock({
            'id': 111,
            'imageList|2-5': [{
                'pic': '/banner/20180402/20180402173738_458.jpg'
            }],
            'label1': /满99-10|/,
            'label2': /券|/,
            'label3': /特价|/,
            'proTitle': Random.ctitle(13, 28),
            'price|60-900': 1,
            'marketPrice|65-988': 1,
            'detailImg': [{
                'pic': '/banner/20180402/20180402173738_458.jpg'
             }, {
                'pic': '/banner/20180402/20180402181906_818.jpg',
             }],
             'desTitle': Random.ctitle(5, 8),
             'desText': Random.ctitle(25,60)
           
        }),
        cartList: Mock.mock({
            'status': '1',
            'result|3-6': [{
                'proID|+1': 1,
                'proImg': Random.image('200x200'),
                'proName|+1': Random.ctitle(13, 28),
                'proNum|1-5': 1,
                'proPrice|60-900': 1,
                'marketPrice|65-988': 1,
                'check': false
            }]
        }),
        editCart: {},
        delCart: {},
        editCheckAll: {},
        address: Mock.mock({
            'result|3': [{
                'proID|+1': 1,
                'name|+1': Random.name(),
                'mobile|+1': /^(13[0-9]|15[0-9]|18[0,5-9]|14[5|7])\d{8}$/,
                'province|+1': Random.province(),
                'city|+1': Random.city(),
                'region|+1': Random.region(),
                'address_detail|+1': Random.ctitle(13, 28),
                'check|1-2': true
            }]
        }),
        delAddress: {},
        addAddress: {},
        updateAddress: {},
        delAddress: {}
    } 
    // return {
       
    //     userInfo: {
    //         "id": "00001",
    //         "mobile": "18825165243",
    //         "user_id": "00001",
    //         "username": "bingo",
    //         "portraitUrl": "../static/images/per.jpg"   
    //     },
    //     proList: [{
    //         "proID":"111",
    //         "image_url":"../static/images/02-produit-A.jpg",
    //         "title":"可可小姐香水",
    //         "content":"独具个性、清新迷人的东方调。"
    //     },
    //     {
    //         "proID":"222",
    //         "image_url": "../static/images/02-produit-B.jpg",
    //         "title":"可可小姐柔肤润体乳",
    //         "content":"迷上肌肤柔润触感。"
    //     },
    //     {
    //         "proID":"333",
    //         "image_url":"./static/images/02-produit-C.jpg",
    //         "title":"可可小姐唇膏水亮系列",
    //         "content":"无拘无束绽放灿烂笑容。"
    //     }],
    //     proDetail: [{
    //         "proID":"111",
    //         "image_url": "../static/images/02-produit-A.jpg",
    //         "title":"可可小姐香水",
    //         "price": [100,200,500],
    //         "sale": "1000",
    //         "detailImg":["../static/images/detail1.jpg","../static/images/detail2.jpg","../static/images/detail3.jpg"],
    //         "attr":[{
    //             "id": "fragrance",
    //             "attrTitle": "香味种类",
    //             "attrSelect":[{
    //                 "id":"51061",
    //                 "name":"薰衣草",
    //                 "active":false
    //             },
    //             {
    //                 "id":"24808",
    //                 "name":"玫瑰香",
    //                 "active":false
    //             },
    //             {
    //                 "id":"18543",
    //                 "name":"茉莉香",
    //                 "active":false
    //             }]
    //         }, {
    //             "id": "size",
    //             "attrTitle": "容量选择",
    //             "attrSelect": [
    //                 {
    //                     "id":"18991",
    //                     "name":"10ml",
    //                     "active":false
    //                 },
    //                 {
    //                     "id":"11894",
    //                     "name":"20ml",
    //                     "active":false
    //                 },
    //                 {
    //                     "id":"18795",
    //                     "name":"50ml",
    //                     "active":false
    //                 }
    //             ]
    //         }]
    //     },{
    //         "proID":"222",
    //         "image_url": "../static/images/02-produit-B.jpg",
    //         "title":"可可小姐柔肤润体乳",
    //         "price": [30,80,150],
    //         "sale": "8850",
    //         "detailImg":["../static/images/detail1.jpg","../static/images/detail2.jpg","../static/images/detail3.jpg"],
    //         "attr":[
    //             {
    //                 "id": "fragrance",
    //                 "attrTitle": "香味种类",
    //                 "attrSelect":[
    //                     {
    //                         "id":"02949",
    //                         "name":"薰衣草",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"97979",
    //                         "name":"玫瑰香",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"18989",
    //                         "name":"茉莉香",
    //                         "active":false
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": "size",
    //                 "attrTitle": "容量选择",
    //                 "attrSelect": [
    //                     {
    //                         "id":"18798",
    //                         "name":"100ml",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"49894",
    //                         "name":"400ml",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"98954",
    //                         "name":"750ml",
    //                         "active":false
    //                     }
    //                 ]
    //             }
    //         ]
    //     },{
    //         "proID":"333",
    //         "image_url": "../static/images/02-produit-C.jpg",
    //         "title":"可可小姐唇膏水亮系列",
    //         "price": [100],
    //         "sale": "560",
    //         "detailImg":["../static/images/detail1.jpg","../static/images/detail2.jpg","../static/images/detail3.jpg"],
    //         "attr":[
    //             {
    //                 "id": "fragrance",
    //                 "attrTitle": "香味种类",
    //                 "attrSelect":[
    //                     {
    //                         "id":"48949",
    //                         "name":"薰衣草",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"98965",
    //                         "name":"玫瑰香",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"36284",
    //                         "name":"茉莉香",
    //                         "active":false
    //                     }
    //                 ]
    //             }
    //         ]
    //     }],
    //     address:  [{
    //         "addID":12345011,
    //         "address_detail":"广东省广州市 天河区 天府路107号",
    //         "mobile":"13681711251",
    //         "name":"黄先生",
    //         "userDefault":false
    //     },{
    //         "addID":12345012,
    //         "address_detail":"广东省深圳市 南山区 塘朗地铁站",
    //         "mobile":"13681711252",
    //         "name":"王先生",
    //         "userDefault":false
    //     },{
    //         "addID":12345013,
    //         "address_detail":"广东省梅州市 大埔县城 碧桂园12栋",
    //         "mobile":"13681711253",
    //         "name":"李先生",
    //         "userDefault":true
    //     },{
    //         "addID":12345014,
    //         "address_detail":"广东省广州市 海珠区 中山大学",
    //         "mobile":"13681711254",
    //         "name":"孟小姐",
    //         "userDefault":false
    //     }],
    //     delAddress: {},
    //     addAddress: {},
    //     updateAddress: {},
    //     cartList: {
    //         "message": "",
    //         "status": "1",
    //         "result":[{
    //             "proID":"5106118991",
    //             "proImg": "../static/images/02-produit-A.jpg",
    //             "proName": "可可小姐香水",
    //             "proPrice": 100,
    //             "proAttr": "玫瑰香，10ml",
    //             "proNum": 1,
    //             "check": true

    //         }, {
    //             "proID":"2480811894",
    //             "proImg": "../static/images/02-produit-A.jpg",
    //             "proName": "可可小姐香水",
    //             "proPrice": 500,
    //             "proAttr": "茉莉香，50ml",
    //             "proNum": 2,
    //             "check": true

    //         }, {
    //             "proID":"1854318991",
    //             "proImg": "../static/images/02-produit-B.jpg",
    //             "proName": "可可小姐柔肤润体乳",
    //             "proPrice": 150,
    //             "proAttr": "柠檬味，750ml",
    //             "proNum": 1,
    //             "check": true
    //         }]
    //     },
    //     delCart: {},
    //     addCart: {},
    //     editCart: {},
    //     editCheckAll: {},
    //     editCheckAll: [],
    //     orderList: {
    //         "result":[{
    //             "statusId": 0,
    //             "order":[{
    //                 "ordNum":"325346435634534",
    //                 "status":"等待卖家发货",
    //                 "list":[{
    //                     "id":510561189981,
    //                     "attr":"茉莉香,500ml",
    //                     "images":"../static/images/02-produit-A.jpg",
    //                     "title":"邂逅清新淡香水配方",
    //                     "count":"1",
    //                     "price":"1500"
    //                 },{
    //                     "id":510561189982,
    //                     "attr":"茉莉香,250ml",
    //                     "images":"../static/images/02-produit-B.jpg",
    //                     "title":"香奈儿五号低调奢华版香水",
    //                     "count":"1",
    //                     "price":"790"
    //                 }]
    //             },{
    //                 "ordNum":"3253464356389957",
    //                 "status":"待付款",
    //                 "list":[{
    //                     "id":510561189983,
    //                     "attr":"玫瑰香,250ml",
    //                     "images":"../static/images/02-produit-A.jpg",
    //                     "title":"邂逅清新淡香水配方",
    //                     "count":"1",
    //                     "price":"1500"
    //                 },{
    //                     "id":510561189984,
    //                     "attr":"茉莉香,50ml",
    //                     "images":"../static/images/02-produit-C.jpg",
    //                     "title":"香奈儿炫亮魅力唇膏丝绒系列",
    //                     "count":"1",
    //                     "price":"320"
    //                 }]
    //             },{
    //                 "ordNum":"3253464356389954",
    //                 "status":"待收货",
    //                 "list":[{
    //                     "id":510561189985,
    //                     "attr":"薰衣草,100ml",
    //                     "images":"../static/images/02-produit-A.jpg",
    //                     "title":"邂逅清新淡香水配方",
    //                     "count":"1",
    //                     "price":"1500"
    //                 },{
    //                     "id":510561189986,
    //                     "attr":"茉莉香,50ml",
    //                     "images":"../static/images/02-produit-C.jpg",
    //                     "title":"香奈儿炫亮魅力唇膏丝绒系列",
    //                     "count":"1",
    //                     "price":"320"
    //                 }]
    //             }]
    //         },{
    //             "statusId": 1,
    //             "order":[{
    //                 "ordNum":"325346435634534",
    //                 "status":"待付款",
    //                 "list":[{
    //                     "id":510561189979,
    //                     "attr":"茉莉香,50ml",
    //                     "images":"../static/images/02-produit-A.jpg",
    //                     "title":"邂逅清新淡香水配方",
    //                     "count":"1",
    //                     "price":"234"
    //                 },{
    //                     "id":510561189987,
    //                     "attr":"茉莉香,100ml",
    //                     "images":"../static/images/02-produit-B.jpg",
    //                     "title":"邂逅清新淡香水配方",
    //                     "count":"1",
    //                     "price":"234"
    //                 }]
    //             }]
    //         },{
    //             "statusId": 2,
    //             "order":[]
    //         }]
    //     },
    //     proDetail: [{
    //         "proID":"111",
    //         "image_url": "../static/images/02-produit-A.jpg",
    //         "title":"可可小姐香水",
    //         "price": [100,200,500],
    //         "sale": "1000",
    //         "detailImg":["../static/images/detail1.jpg","../static/images/detail2.jpg","../static/images/detail3.jpg"],
    //         "attr":[
    //             {
    //                 "id": "fragrance",
    //                 "attrTitle": "香味种类",
    //                 "attrSelect":[
    //                     {
    //                         "id":"51061",
    //                         "name":"薰衣草",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"24808",
    //                         "name":"玫瑰香",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"18543",
    //                         "name":"茉莉香",
    //                         "active":false
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": "size",
    //                 "attrTitle": "容量选择",
    //                 "attrSelect": [
    //                     {
    //                         "id":"18991",
    //                         "name":"10ml",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"11894",
    //                         "name":"20ml",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"18795",
    //                         "name":"50ml",
    //                         "active":false
    //                     }
    //                 ]
    //             }
    //         ]
    //     },{
    //         "proID":"222",
    //         "image_url": "../static/images/02-produit-B.jpg",
    //         "title":"可可小姐柔肤润体乳",
    //         "price": [30,80,150],
    //         "sale": "8850",
    //         "detailImg":["../static/images/detail1.jpg","../static/images/detail2.jpg","../static/images/detail3.jpg"],
    //         "attr":[
    //             {
    //                 "id": "fragrance",
    //                 "attrTitle": "香味种类",
    //                 "attrSelect":[
    //                     {
    //                         "id":"02949",
    //                         "name":"薰衣草",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"97979",
    //                         "name":"玫瑰香",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"18989",
    //                         "name":"茉莉香",
    //                         "active":false
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": "size",
    //                 "attrTitle": "容量选择",
    //                 "attrSelect": [
    //                     {
    //                         "id":"18798",
    //                         "name":"100ml",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"49894",
    //                         "name":"400ml",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"98954",
    //                         "name":"750ml",
    //                         "active":false
    //                     }
    //                 ]
    //             }
    //         ]
    //     },{
    //         "proID":"333",
    //         "image_url": "../static/images/02-produit-C.jpg",
    //         "title":"可可小姐唇膏水亮系列",
    //         "price": [100],
    //         "sale": "560",
    //         "detailImg":["../static/images/detail1.jpg","../static/images/detail2.jpg","../static/images/detail3.jpg"],
    //         "attr":[
    //             {
    //                 "id": "fragrance",
    //                 "attrTitle": "香味种类",
    //                 "attrSelect":[
    //                     {
    //                         "id":"48949",
    //                         "name":"薰衣草",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"98965",
    //                         "name":"玫瑰香",
    //                         "active":false
    //                     },
    //                     {
    //                         "id":"36284",
    //                         "name":"茉莉香",
    //                         "active":false
    //                     }
    //                 ]
    //             }
    //         ]
    //     }]
    // }
}
