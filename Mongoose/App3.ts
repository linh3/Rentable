import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import ListModel from './model/ListModel';
import TaskModel from './model/TaskModel';
import DataAccess from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public Lists:ListModel;
  public Tasks:TaskModel;
  public idGenerator:number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
    this.Lists = new ListModel();
    this.Tasks = new TaskModel();
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
    
    router.get('/app/list/:listId/count', (req, res) => {
        var id = req.params.listId;
        console.log('1Query single list with id: ' + id);
        this.Tasks.retrieveTasksCount(res, {listId: id});
    });



    router.post('/app/list/', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;
        jsonObj.listId = this.idGenerator;
        this.Lists.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(this.idGenerator.toString());
        this.idGenerator++;
    });

    router.get('/app/list/:listId', (req, res) => {
        var id = req.params.listId;
        console.log('2Query single list with id: ' + id);
        this.Tasks.retrieveTasksDetails(res, {listId: id});
    });

    router.get('/app/list/', (req, res) => {
        console.log('Query All list');
        this.Lists.retrieveAllLists(res);
    });


    this.express.use('/', router);

    //this.express.use('/app/json/', express.static(__dirname+'/app/json'));
    //this.express.use('/images', express.static(__dirname+'/img'));
    this.express.use('/', express.static(__dirname+'/pages'));

  }

}

export default new App().express;
