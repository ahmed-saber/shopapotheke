import axios from 'axios';
import { Method, AxiosRequestConfig } from 'axios';

function request(method: Method, url: string, params: object, config: AxiosRequestConfig = {}) {
	return axios({
		url,
		method,
		...params,
		...config
	});
}

export function get(url: string, params: object, config: AxiosRequestConfig) {
	return request(
		'get',
		url,
		{
			params
		},
		config
	);
}
