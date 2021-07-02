const expect = require("chai").expect;
const axios = require("axios")

describe('asyn test suite', () => {
    /* it('promised based test', () => {
        return axios.get("https://reqres.in/api/users/2").then( res => {
            expect(res.data.data.email).to.be.equal("janet.weaver@reqres.in")
        })
    }); */

    //done based way to handle a
    /* it('done based', (done) => {
         axios.get("https://reqres.in/api/users/2").then( res => {
            expect(res.data.data.email).to.be.equal("janet.weaver@reqres.int")
            done()
        }).catch( err => {
            done(err)
        })
    }) */

    //asyn-awaite way to handle
    it('aysn-waite hanle', async() => {
        const res = await axios.get("https://reqres.in/api/users/2")
        expect(res.data.data.email).to.be.equal("janet.weaver@reqres.in")
    })

})


