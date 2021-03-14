var assert = require("chai").assert
var duplicates = require("../app/duplicates/index");

describe("Found duplicate number using assert interface from chai module", function(){
    describe("Check if the numbers have some equal", function(){
        it("check the returned value is true: assert.isTrue(value)", function(){
            var result = duplicates.checkDuplicates();
            assert.equal(result, true)
            return false

        });
    });  
});