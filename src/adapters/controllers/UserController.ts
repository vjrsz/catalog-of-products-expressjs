import {Request, Response} from "express";
import GetByIdUserUseCaseMock from "@/mocks/core/useCases/user/GetByIdUserUseCaseMock";
import { GetByIdUserUseCase } from "@/core/useCases/user/getByIdUserUseCase";
import UserPresenter from "@/adapters/presenters/UserPresenter";

export default class UserController {
    _getByIdUserUseCase: GetByIdUserUseCase.UseCase;

    constructor() {
        this._getByIdUserUseCase = GetByIdUserUseCaseMock.mock()
    }

    getById(req: Request, res: Response) {
        let id = parseInt(req.params.id)

        let { user} = this._getByIdUserUseCase.execute({
            id: id,
        })

        res.status(200).json(new UserPresenter(user))
    }
}