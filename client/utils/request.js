export default request = async (data) => {

    try {

        let headers = {};
        let params = {};

        let res = await fetch(api + data.route, {
            type: data.type,
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