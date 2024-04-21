import User from "@/core/entities/user";
import {UseCase} from "@/core/useCases/useCase";

export namespace GetByIdUserUseCase {
    export interface UseCase extends UseCase.UseCase<GetByIdUserUseCase.InputUseCase, GetByIdUserUseCase.OutputUseCase> {}
    export interface InputUseCase extends UseCase.InputUseCase {
        id: number
    }
    export interface OutputUseCase extends UseCase.OutputUseCase {
        user: User
    }
}