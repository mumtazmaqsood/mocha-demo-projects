
const{add, sub} = require("../src/app.js");
const expect = require("chai").expect;
const {suite, test, suiteSetup, suiteTeardown, setup, teardown} = require("mocha")

//BDD
describe('Suite-2', () => {
    beforeEach(()=>{
        console.log("Before Each Testcase")
    });
    afterEach(()=>{
        console.log("After Each Testcase")
    });
    before(()=>{
        console.log("Before Testcase")
    })
    after(()=>{
        console.log("After Testcase")
    })

    //testcase 1
    it('add(10, 20) should be equal 30', () => {
        expect(add(10,20)).to.be.equal(30);
    });

    //testcase2
    it('sub(20, 10) should be equal to 10', () => {
        expect(sub(20, 10)).to.be.equal(10)
    });

});

//TDD
suite('TDD suite', () => {
    suiteSetup( ()=>{
        console.log("before test case suiteSetup")
    });
    suiteTeardown( ()=>{
        console.log("after test case suiteSetup")
    });

    setup( ()=>{
        console.log("before each test case setup")
    });
    teardown( ()=>{
        console.log("after each test case teardown")
    });

    test('add(10, 20) should be equal 30', () => {
        expect(add(10,20)).to.be.equal(30);
    });

    //testcase2
    test('sub(20, 10) should be equal to 10', () => {
        expect(sub(20, 10)).to.be.equal(10)
    });

});

