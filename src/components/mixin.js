import {imgBaseUrl} from '/utils/env'

export const getImgPath = {
	methods: {
		//传递过来的图片地址需要处理后才能正常使用
		getImgPath(url) {
			return imgBaseUrl + url
		},
		// getImgPath(path) {
		// 	let suffix;
		// 	if (!path) {
		// 		return 'http://test.fe.ptdev.cn/elm/elmlogo.jpeg'
		// 	}
		// 	if (path.indexOf('jpg') !== -1) {
		// 		suffix = '.jpg'
		// 	} else {
		// 		suffix = '.png'
		// 	}
		// 	let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
		// 	return imgBaseUrl + url
		// },
	}

}