class User {
    
    constructor(data={}) {
        this._id = data._id;
        this._name = data.firstName + ' ' +data.lastName;
        this._email = data.email;
        this._token = data.token;
    }

    setData (data) {
        this._id = data._id;
        this._name = data.firstName + ' ' +data.lastName;
        this._email = data.email;
        this._token = data.token;
    }

    // getter and setter for class properties

    get name () {
        return this._name;
    }

    set name (_name) {
        this._name = _name;
    }

    get token () {
        return this._token;
    }

    set token (_token) {
        this._token = token;
    }


};

let user = new User();

export default user;