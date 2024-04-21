import e, {Router} from 'express';
import UserController from "@/adapters/controllers/UserController";
import IRouter from "@/routes/types/IRouter";
import getByIdUserValidator from "@/adapters/middlewares/user/getByIdUserValidator";

class UserRouter implements IRouter {
    _router: Router;
    _userController: UserController;
    _nameRoute: string;

    constructor() {
        this._nameRoute = "/users";
        this._userController = new UserController();

        this._router = Router();
        this._router.get('/:id', getByIdUserValidator.setup(), this._userController.getById.bind(this._userController));
    }

    get nameRoute(): string {
        return this._nameRoute;
    }

    get router(): e.Router {
        return this._router;
    }
}

export default new UserRouter();

