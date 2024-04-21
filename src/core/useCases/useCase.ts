export namespace UseCase {
    export interface UseCase<I extends UseCase.InputUseCase, O extends UseCase.OutputUseCase> {
        execute(input: I): O;
    }
    export interface InputUseCase {}
    export interface OutputUseCase {}
}
