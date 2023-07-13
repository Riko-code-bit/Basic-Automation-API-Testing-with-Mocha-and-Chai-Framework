const httpLib = require(`supertest`);
const serverApi = httpLib(`https://dummyjson.com/`)
const serverReqres = httpLib(`https://reqres.in/`)

function getProduct () {
    return serverApi.get(`products`)
}

function getSeacrhLaptop () {
    return serverApi.get(`products/search?q=Laptop`)
}

// function reqres

function postUser() {
    return serverReqres.post(`api/users`)
    .send(
        {
            "name": "morpheus",
            "job": "leader"
        
    });
}

module.exports = {
    getProduct,
    getSeacrhLaptop,
    postUser
}