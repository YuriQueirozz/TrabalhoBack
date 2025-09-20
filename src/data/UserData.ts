import { users } from "../bd";

export class UserData {
    buscarUsuarioPorEmail = (email: string) => {
        try {
            const userFound = users.filter((user)=>{
                return user.email == email;
            }) 
            return userFound;
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    getUserById = (id: number) => {
        console.log("Recebendo id:", id);

        const user = users.find(u => u.id === id);
        console.log("Usuário encontrado: ", user); 
        return user;
    }
}