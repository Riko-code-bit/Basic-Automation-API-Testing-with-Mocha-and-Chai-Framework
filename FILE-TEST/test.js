const apiUnderTest = require(`../FILE-API/api-dummyJSON.js`);
const expect = require(`chai`).expect;

describe('Test suite : API dummyJSON.com dengan method GET', async() => {
    it('01.Test case : Test nama barang tidak boleh kosong', async() => {
        const response = await apiUnderTest.getProduct()
        const products = response.body.products
        // console.log(products)

        for (let i = 0; i < products.length; i++) {
            expect(products[i].title).to.not.equal(``)
            console.log(products[i].title)

        }
    });
    it('02.Test case: test endpoint data yg dikeluarkan dari searching laptop', async() => {
        const response = await apiUnderTest.getSeacrhLaptop()
        console.log(response.body)
    });
    it('03.Test case: test price dari data yg dioutputkan dari searching kata kunci Laptop tdk boleh kosong', async() => {
        const response = await apiUnderTest.getSeacrhLaptop()
        const price = response.body.products
        //assertion price tdk boleh kosong
        for(let i = 0; i < price.length; i++) {
            expect(price[i].price).to.not.equal(null)
            console.log(`Rp.${price[i].price}`)
        }
    });
});

describe('Test suite: API reqres.com dengan method POST', async() => {
    it('01.Test case: membuat data dengan data yang ada', async() => {
        const response = await apiUnderTest.postUser()
        const data = response.body
        console.log(data)

    });
    it('02.Test case: Test nama yang diinputkan sesuai', async() => {
        const response = await apiUnderTest.postUser()
        const data = response.body.name
        expect(data).to.be.equal(`morpheus`)
        console.log(data)
    });
});