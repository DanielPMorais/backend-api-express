import { createUser } from '../models/userModel.js';

export async function createUserController(req, res) {

    const user = {
        avatar: "https://github.com/danielpmorais.png",
        name: "Daniel Morais",
        email: "daniel.patrickmorais@gmail.com",
        pass: "12345678"
    }

    const result = await createUser(user);

    res.json({message: "Usuário criado com sucesso!", user: result});
}