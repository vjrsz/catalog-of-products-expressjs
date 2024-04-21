import { GetByIdUserUseCase } from "@/core/useCases/user/getByIdUserUseCase";

import User from "@/core/entities/user";

export default class GetByIdUserService implements GetByIdUserUseCase.UseCase {
    execute(input: GetByIdUserUseCase.InputUseCase): GetByIdUserUseCase.OutputUseCase {
        return {
            user: new User(input.id,"s", "s", "s",  new Date())
        };
    }
}