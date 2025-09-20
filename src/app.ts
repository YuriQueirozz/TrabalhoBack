import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRouter'
import { UserController } from './controller/UserController'

export const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/posts', userRouter)

const userController = new UserController();
app.get("/users/:id", userController.getUsersById);

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
})