import axios from 'axios'
import * as zone from './PlaceJson'
// import http from './public'

const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
};
// // 省市区
export const province = () => setpromise(zone.province);
export const city = () => setpromise(zone.city);
export const district = () => setpromise(zone.district);
	
// // 使用代理
const HOST = '/api';
const fetch = (type,url,data) => {
	url = HOST+ url;
	return new Promise((resolve, reject) => {
	    axios({
	    	method: type,
	    	url: url,
	    	data: data,
	    	headers: {
            	'Content-Type': 'application/x-www-form-urlencoded',
      		}
	    }).then(response => {
          resolve(response.data);
        }).catch(error => {
        	reject(error);
        })
	})
};


// export const integral = (params) =>  http.fetchGet('/eshop/user/integral',params);
// export const banner = (params) =>  http.fetchGet('/eshop/banner',params);
// export const proList = (params) =>  http.fetchGet('/eshop/area',params);


export const banner = (params) =>  fetch('get','/banner',params);
export const ads = (params) =>  fetch('get','/ads',params);
export const proList = (params) =>  fetch('get','/proList',params);
export const proDetail = (params) =>  fetch('get','/proDetail',params);
// 购物车
export const getCartList = (params) =>  fetch('get','/cartList',params);
export const delCart = (params) => fetch('post','/delCart',params);
export const addCart = (params) => fetch('post','/addCart',params);
export const editCart = (params) => fetch('post','/editCart',params);
export const editCheckAll = (params) => fetch('post','/editCheckAll',params);

// 地址
export const addAddress = (params) => fetch('post','/addAddress',params);
export const addressList = (params) => fetch('post','/address',params);
export const updateAddress = (params) => fetch('post','/updateAddress',params);
export const delAddress = (params) => fetch('post','/delAddress',params);

export const sortList = (params) => fetch('get','/sortList',params);