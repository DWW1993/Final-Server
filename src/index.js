"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./db");
const app = express();
app
    .use(bodyParser.json())
    .get('/api/movies', (req, res, next) => {
    db_1.procedure('spGetMovies')
        .then((movies) => {
        res.json(movies[0]);
    });
});
// .disable('x-powered-by')
// //uncomment for dev
// .use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");    
//     next();
// })
// .use(bp.urlencoded({ extended: true }))
// .use(bp.json())
// .use('/api', api)
// //to serve dist 
// .use(express.static(path.join(__dirname + '/../dist')))
// .get('/*', (req: express.Request, res: express.Response) => {
//     res.sendFile(path.join(__dirname + '/../dist/index.html'));
// });
app.listen(3000, () => {
    console.log(`listening on port 3000`);
});
