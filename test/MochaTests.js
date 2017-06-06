var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Search Item Results', function () {

    var requestResult;
	var response;
		 
    //GET TEST
    before(function (done) {
        chai.request("http://rentableappsu.azurewebsites.net")
			.get("/Search/bicycle/Seattle")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
        it('Should return an array of 5 bicycle objects', function() {
            expect(response).to.have.status(200);
            expect(response.body).to.be.an.object;
		    expect(response.body).to.have.lengthOf(5);
            expect(response.body).to.be.instanceof(Array);
        });
        it('The first entry in the array has known properties', function(){
	        expect(requestResult[0]).to.have.deep.property('title', "Yellow Bicycle");
            expect(requestResult[0]).to.have.deep.property('price', 20);
            expect(requestResult[0]).to.have.deep.property('condition', 3);
            expect(requestResult[0]).to.have.deep.property('description', "Very good condition bicycle, have not used once" );
            expect(requestResult[0]).to.have.deep.property('image', "../../../pic/bike5.jpg");
            expect(requestResult[0]).to.have.property('location', "Seattle");
	    });
        it('The elements in the array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(requestResult[i]).to.have.property('title');
					expect(requestResult[i]).to.have.property('price').to.be.an('number');
					expect(requestResult[i]).to.have.property('condition').to.be.within(1,5);
					expect(requestResult[i]).to.have.property('description');
					expect(requestResult[i]).to.have.property('image');
                    expect(requestResult[i]).to.have.property('location');
				}
				return true;
			});
	    });
    });

    describe('Test Create Account', function () {
    var requestResult;
	var response;

    //POST TEST
    it('Get an object of a single user account that was created',() => {
        let account = {
            userID: 0, 
            fName: 'Crystal',
            lName: 'Nguyen',
            email: 'crystalnguyen@msn.com',
            password: 'Youtube88!'
        }
        chai.request('http://rentableappsu.azurewebsites.net/')
        .post('/CreateAccount/Create')
        .send(account)
        .end((err, res) => {
            res.body.should.be.a('object');
            res.body.should.have.property('userID').eql(0);
            res.body.should.have.property('fName').eql("Crystal");
            res.body.should.have.property('lName').eql("Nguyen");
            res.body.should.have.property('email').eql("crystalnguyen@msn.com");
            res.body.should.have.property('password').eql("Youtube88!");
            res.body.password.should.have.property("Youtube88!");           
            done();
        });
    });
});