"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const rUserModel_1 = require("./model/rUserModel");
const rItemModel_1 = require("./model/rItemModel");
const rCardModel_1 = require("./model/rCardModel");
const rReviewModel_1 = require("./model/rReviewModel");
const rTransactionModel_1 = require("./model/rTransactionModel");
const GooglePassport_1 = require("./GooglePassport");
//import FacebookPassportObj from './FacebookPassport';
let passport = require('passport');
// Creates and configures an ExpressJS web server.
class App {
    //public facebookPassportObj:FacebookPassportObj
    //Run configuration methods on the Express instance.
    constructor() {
        //this.facebookPassportObj = new FacebookPassportObj();
        this.googlePassportObj = new GooglePassport_1.default();
        this.express = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Users = new rUserModel_1.default();
        this.Items = new rItemModel_1.default();
        this.Cards = new rCardModel_1.default();
        this.Reviews = new rReviewModel_1.default();
        this.Transactions = new rTransactionModel_1.default();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(session({ secret: 'keyboard cat' }));
        this.express.use(passport.initialize());
        this.express.use(passport.session());
    }
    validateAuth(req, res, next) {
        //if (req.isAuthenticated()) { return next(); }
        //res.redirect('/');
        if (!req.isAuthenticated()) {
            console.log("shit");
            //return next();
            res.redirect('../index.html');
        }
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));
        router.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '', failureRedirect: '/'
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
        router.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        var bodyParser = require('body-parser');
        router.post('/CreateAccount/Create', this.validateAuth, (req, res) => {
            console.log("here3");
            res.sendFile(path.join(__dirname + '/index.html'));
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.userID = this.idGenerator;
            this.Users.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(this.idGenerator.toString());
            this.idGenerator++;
        });
        router.post('/PostItem/Post', this.validateAuth, (req, res) => {
            console.log("here444");
            res.sendFile(path.join(__dirname + '/index.html'));
            console.log(req.body);
            var jsonObj = req.body;
            this.Items.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(this.idGenerator.toString());
            //        this.idGenerator++;
        });
        /*
            router.get('/app/list/:listId', (req, res) => {
                var id = req.params.listId;
                console.log('Query single list with id: ' + id);
                this.Tasks.retrieveTasksDetails(res, {listId: id});
            });
        */
        router.get('/Search/:SearchKey/:SearchLocation', (req, res) => {
            var key = req.params.SearchKey;
            var key2 = req.params.SearchLocation;
            console.log('1234123412341Query All list: ' + key);
            this.Items.retrieveItemWithKeyword(res, { "title": { $regex: ".*" + key + ".*", $options: "$i" }, "location": { $regex: ".*" + key2 + ".*", $options: "$i" } });
        });
        this.express.use('/', router);
        this.express.use('/app/json/', express.static(__dirname + '/app/json'));
        //    this.express.use('/images', express.static(__dirname+'/pic'));
        this.express.use('/', express.static(__dirname + '/dist'));
    }
}
exports.default = new App().express;
