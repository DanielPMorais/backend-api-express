import { createUser, validateUser } from "../../models/userModel.js"

export async function createUserController(req, res) {

    const user = req.body;

    const { success, error, data } = validateUser(user, { id: true });

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error.flatten().fieldErrors
        });
    }

    //     {
    //   "name": "daniel",
    //   "email": "daniel.morais@gmail.com",
    //   "pass": "123456",
    //   "avatar": "https://github.com/danielpmorais.png"
    //     }

    const result = await createUser(data);

    res.json({
        message: "Usuário criado com sucesso!",
        user: result
    });
}