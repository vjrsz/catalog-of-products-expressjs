import {Application} from "express";
import bodyParser from "body-parser";

class BodyParserMiddleware{
    setup(app: Application): void {
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    }
}

export default new BodyParserMiddleware();