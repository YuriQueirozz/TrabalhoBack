import { users } from "../bd";
import { UserData } from "../data/UserData";

export class UserBusiness {
    userData = new UserData()
    verify = (email: string) => {
        try {

            if (!email) {
                throw new Error("Campos faltantes")
            }

            const user = this.userData.buscarUsuarioPorEmail(email) as any;
            if (!user) {
                throw new Error("Usuario inexistente");
            }

            return user;

        } catch (error: any) {
            throw new Error(error)
        }
    }

    getUsersById = (id: number) => {
    console.log("Recebendo id:", id);
    
    const user = users.find(u => u.id === id);
    console.log("Usuário encontrado: ", user);
    
    return user || undefined;
}

}