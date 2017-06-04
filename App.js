"use strict";
exports.__esModule = true;
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var rUserModel_1 = require("./model/rUserModel");
var rItemModel_1 = require("./model/rItemModel");
var rCardModel_1 = require("./model/rCardModel");
var rReviewModel_1 = require("./model/rReviewModel");
var rTransactionModel_1 = require("./model/rTransactionModel");
var GooglePassport_1 = require("./GooglePassport");
//import FacebookPassportObj from './FacebookPassport';
var passport = require('passport');
// Creates and configures an ExpressJS web server.
var App = (function () {
    //public facebookPassportObj:FacebookPassportObj
    //Run configuration methods on the Express instance.
    function App() {
        //this.facebookPassportObj = new FacebookPassportObj();
        this.googlePassportObj = new GooglePassport_1["default"]();
        this.express = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Users = new rUserModel_1["default"]();
        this.Items = new rItemModel_1["default"]();
        this.Cards = new rCardModel_1["default"]();
        this.Reviews = new rReviewModel_1["default"]();
        this.Transactions = new rTransactionModel_1["default"]();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(session({ secret: 'keyboard cat' }));
        this.express.use(passport.initialize());
        this.express.use(passport.session());
    };
    App.prototype.validateAuth = function (req, res, next) {
        //if (req.isAuthenticated()) { return next(); }
        //res.redirect('/');
        if (!req.isAuthenticated()) {
            console.log("shit");
            //return next();
            res.redirect('../index.html');
        }
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));
        router.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/list', failureRedirect: '/'
        }));
        /*
            router.get('/auth/facebook',
                passport.authenticate('facebook',
                    {scope: ['public_profile', 'email'] }
                )
            );
        
            router.get('/auth/facebook/callback',
                passport.authenticate('facebook',
                    { failureRedirect: '/', successRedirect: '/list' }
                )
            );
        
        */
        router.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        var bodyParser = require('body-parser');
        router.post('/CreateAccount/Create', this.validateAuth, function (req, res) {
            console.log("here3");
            res.sendFile(path.join(__dirname + '/index.html'));
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.userID = _this.idGenerator;
            _this.Users.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router.post('/PostItem/Post', this.validateAuth, function (req, res) {
            console.log("here444");
            res.sendFile(path.join(__dirname + '/index.html'));
            console.log(req.body);
            var jsonObj = req.body;
            _this.Items.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            //        this.idGenerator++;
        });
        /*
            router.get('/app/list/:listId', (req, res) => {
                var id = req.params.listId;
                console.log('Query single list with id: ' + id);
                this.Tasks.retrieveTasksDetails(res, {listId: id});
            });
        */
        router.get('/Search/:SearchKey/:SearchLocation', function (req, res) {
            var key = req.params.SearchKey;
            var key2 = req.params.SearchLocation;
            console.log('1234123412341Query All list: ' + key);
            _this.Items.retrieveItemWithKeyword(res, { "title": { $regex: ".*" + key + ".*", $options: "$i" }, "location": { $regex: ".*" + key2 + ".*", $options: "$i" } });
        });
        this.express.use('/', router);
        this.express.use('/app/json/', express.static(__dirname + '/app/json'));
        //    this.express.use('/images', express.static(__dirname+'/pic'));
        this.express.use('/', express.static(__dirname + '/dist'));
    };
    return App;
}());
exports["default"] = new App().express;
