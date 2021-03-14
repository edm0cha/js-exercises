var assert = require("chai").assert
var duplicates = require("../app/duplicates/index");

describe("Found duplicate number using assert interface from chai module", function(){
    describe("Check if the numbers have some equal", function(){
        it("Check the returned value is true: assert.isTrue(value)", function(){
            var result = duplicates.checkDuplicates([1,1])
            assert.isFalse(result);
        });
    });
});
