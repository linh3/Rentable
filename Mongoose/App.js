"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const rUserModel_1 = require("./model/rUserModel");
const rItemModel_1 = require("./model/rItemModel");
const rCardModel_1 = require("./model/rCardModel");
const rReviewModel_1 = require("./model/rReviewModel");
const rTransactionModel_1 = require("./model/rTransactionModel");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
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
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        router.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        var bodyParser = require('body-parser');
        router.post('/createAccount', (req, res) => {
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
        router.post('/postItem', (req, res) => {
            res.sendFile(path.join(__dirname + '/index.html'));
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.image = "pic.png";
            this.Items.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(this.idGenerator.toString());
            //        this.idGenerator++;
        });
        router.get('/Search/:SearchKey/:SearchLocation', (req, res) => {
            var key = req.params.SearchKey;
            var key2 = req.params.SearchLocation;
            console.log('1234123412341Query All list: ' + key);
            this.Items.retrieveItemWithKeyword(res, { "title": { $regex: ".*" + key + ".*", $options: "$i" }, "location": { $regex: ".*" + key2 + ".*", $options: "$i" } });
        });
        router.post;
        this.express.use('/', router);
        this.express.use('/app/json/', express.static(__dirname + '/app/json'));
        this.express.use('/images', express.static(__dirname + '/img'));
        this.express.use('/', express.static(__dirname + '/pages'));
    }
}
exports.default = new App().express;
