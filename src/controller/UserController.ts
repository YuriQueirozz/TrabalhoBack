import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness';
import { users } from '../bd';

export class UserController {
    userBusiness = new UserBusiness()
    verify = async (req: Request, res: Response) => {
        try {
            const { email } = req.body;
            const user = this.userBusiness.verify(email);
            console.log("user:", user)
            res.send(user);
        } catch (error: any) {
            res.send(error.sqlMessage || error.message);
        }
    }

    // Exercício 01: Buscar user por id 
    getUsersById = async (req: Request, res: Response) => {
        try {
            const userId = parseInt(req.params.id);
            console.log("Id encontrado: ", userId);

            const user = await this.userBusiness.getUsersById(userId);
            console.log("User retornado pelo business: ", user);

            // Verificando se encontrou o usuário
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'Usuário não encontrado'
                });
            }
            res.json(user);
        } catch (error: any) {
            console.log("Usuário não encontrado:", error.message);
            res.status(404).json({ message: error.message });
        }
    }

}