import {set, get} from './storage'

const api = "http://localhost:5001/"

export default request = async (data) => {

    try {

        let headers = {};
        let params = {};
        if (data.body && data.type !== 'GET')
            params.body = JSON.stringify(data.body);

        let res = await fetch(api + data.route, {
            method: data.type,
            headers: {
                'Content-Type': 'application/json',
                ... headers,
            },
            ... params,
        });
        return res.json();
    }
    catch (err) {
        throw err;
    }

}