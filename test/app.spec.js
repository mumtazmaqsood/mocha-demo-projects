
const{add, sub} = require("../src/app.js");
const expect = require("chai").expect;


describe('TestSuite-1', () => {
    it('add(2, 3) should be 5', () => {
        expect(add(2,3)).to.be.equal(5);
    });
});

describe('TestSuite-2', () => {
     it('sub(5-5) should be 0', ()=>{
        expect(sub(5, 2)).to.be.equal(3)
    })
});


