module.exports = function () {
    // var faker = require("faker");
    // faker.locale = "zh_CN";
    // var _ = require("lodash");
    var Mock = require('mockjs')
    return {
        data: Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        }),
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
