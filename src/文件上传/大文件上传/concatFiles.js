import axios from "axios";

export function concatFiles(url, name, md5) {
	return axios.get(url, {
		params: {
			name,
			md5
		}
	});
}
