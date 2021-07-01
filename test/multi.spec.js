const{mul} = require("../src/app.js");
const expect = require("chai").expect;


describe('TestSuite-3', () => {
    it('mul(2, 3) should be 6', () => {
        expect(mul(2,3)).to.be.equal(6);
    });
});
