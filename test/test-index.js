const expect  = require('chai').expect;
const request = require('request');

it('Main request content', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('hello');
        done();
    });
});

it('Main request status', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
