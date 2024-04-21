import User from "@/core/entities/user";

export default class UserPresenter {
    id: number
    name: string
    email: string

    constructor(user: User){
        this.id = user.id
        this.name = user.name
        this.email = user.email
    }
}