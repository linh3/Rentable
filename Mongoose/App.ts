import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import ListModel from './model/ListModel';
import TaskModel from './model/TaskModel';

import rUserModel from './model/rUserModel';
import rItemModel from './model/rItemModel';
import rCardModel from './model/rCardModel';
import rReviewModel from './model/rReviewModel';
import rTransactionModel from './model/rTransactionModel';
import DataAccess from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public Users:rUserModel;
  public Items:rItemModel;
  public Cards:rCardModel;
  public Reviews:rReviewModel;
  public Transactions:rTransactionModel;
  public idGenerator:number;
  public Lists:ListModel;
  public Tasks:TaskModel;
  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
    this.Users = new rUserModel();
    this.Items = new rItemModel();
    this.Cards = new rCardModel();
    this.Reviews = new rReviewModel();
    this.Transactions = new rTransactionModel();

  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    router.use((req, res, next) =>{
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
        jsonObj.image = "pic.png"
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
        this.Items.retrieveItemWithKeyword(res, {"title": {$regex: ".*" + key + ".*", $options:"$i"}, "location": {$regex: ".*" + key2 + ".*", $options:"$i"} });
    });

    router.post


    this.express.use('/', router);
    this.express.use('/app/json/', express.static(__dirname+'/app/json'));
    this.express.use('/images', express.static(__dirname+'/img'));
    this.express.use('/', express.static(__dirname+'/pages'));

  }

}

export default new App().express;
