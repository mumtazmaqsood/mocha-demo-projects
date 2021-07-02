const{div} = require("../src/app.js");
const expect = require("chai").expect;


describe('TestSuite-3', () => {
    it('div(10, 5) should be 2', () => {
        expect(div(10,5)).to.be.equal(2);
    });
});
