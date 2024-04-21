import {param} from 'express-validator';
import ErrorHandlerMiddleware from "@/adapters/middlewares/default/errorHandlerMiddleware";

class GetByIdUserValidator extends ErrorHandlerMiddleware {
    define() {
        return [
            param('id').isInt().withMessage('O ID deve ser um número inteiro'),
        ]
    }
}

export default new GetByIdUserValidator();