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
        chai.request("http://localhost:8080")
			.get("/app/search/bicycle/Seattle")
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
        });
    });

    //SECOND GET TEST 
    /*it('The first entry in the array has known properties', function(){
	    expect(requestResult[0]).to.have.deep.property('title', "Yellow Bicycle");
        expect(requestResult[0]).to.have.deep.property('price', 20);
        expect(requestResult[0]).to.have.deep.property('condition', 3);
        expect(requestResult[0]).to.have.deep.property('description', "Very good condition bicycle, have not used once" );
        expect(requestResult[0]).to.have.deep.property('image', "bike5.jpg");
        expect(requestResult[0]).to.have.property('location', "Seattle");
	});*/

    //POST TEST
    /*it('Should return same account info that was inputted', function(done){
        chai.request("http://localhost:8080")
         .post('/CreateAccount')
         .send({userId: 0, fName: "Crystal", lName: "Nguyen", email: "crystalnguyen@msn.com", password: "Youtube88"})
         .expect('Content-Type', /json/)
         .end(function(err, res) {
            if (err) done(err);
            res.body.should.have.property('fName');
            res.body.fName.should.have.property('Crystal');
            res.body.should.have.property('lName');
            res.body.lName.should.have.property('Nguyen');
            res.body.should.have.property('email');
            res.body.email.should.have.property('crystalnguyen@msn.com');
            res.body.should.have.property('password')
            res.body.password.have.property('Youtube88!');

            done();
          });
      });*/

