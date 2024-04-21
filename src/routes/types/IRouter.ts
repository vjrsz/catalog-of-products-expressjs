import e, {Router} from "express";

export default interface IRouter {
    _router: Router;
    _nameRoute: string;

    get nameRoute(): string;
    get router(): e.Router;
}