import axios from 'axios'

// 使用代理
const HOST = '/api';

const fetch = (type,url,data) => {
	// if (process.env.NODE_ENV != 'development') {
		url = HOST+ url;
	// }
	return new Promise((resolve, reject)=> {
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

export const data = (params) =>  fetch('post','/data',params);