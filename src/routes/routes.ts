import userRouter from "@/routes/userRouter";
import {Application} from "express";
import bodyParserMiddleware from "@/adapters/middlewares/default/bodyParserMiddleware";

class Routes {
    mount(app: Application){
        this._setMiddleware(app);
        this._setRoutes(app);
    }

    _setMiddleware(app: Application){
        bodyParserMiddleware.setup(app)
    }

    _setRoutes(app: Application){
        app.use(userRouter._nameRoute, userRouter.router);
    }
}

export default new Routes();