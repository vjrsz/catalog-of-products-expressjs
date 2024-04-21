import GetByIdUserService from "@/application/services/user/getByIdUserService";

class GetByIdUserUseCaseMock {
    mock(){
        return new GetByIdUserService();
    }
}

export default new GetByIdUserUseCaseMock();