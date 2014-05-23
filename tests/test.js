/**
 * Created by santi on 23/05/14.
 */

var should = require("should");
var assert = require("assert");

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(1, [1, 2, 3].indexOf(2));
        })
    })
});

describe('Tests framework', function () {
    it('should have mocha installed and running', function () {
        assert.equal(true, true);
    });
    it('should have should library installed and running for fluent testing', function () {
        true.should.eql(true);
    })
});

