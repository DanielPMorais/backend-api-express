import { createUser } from "../../models/userModel.js"

export async function createUserController(req, res) {

    const user = req.body;

    //     {
    //   "name": "daniel",
    //   "email": "daniel.morais@gmail.com",
    //   "pass": "123456",
    //   "avatar": "https://github.com/danielpmorais.png"
    //     }

    const result = await createUser(user);

    res.json({
        message: "Usuário criado com sucesso!",
        user: result
    });
}