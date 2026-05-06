import { updateUser, validateUser } from '../../models/userModel.js';

export async function updateAvatarUserController(req, res) {
    
    const { id } = req.params;
    const user = req.body;

    const { success, error, data: userValidated } = validateUser({id: +id, avatar: user.avatar}, { name: true, pass: true, email: true } )

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        });
    }

    const result = await updateUser(userValidated, userValidated.id);

    res.json({
        message: "Avatar alterado com sucesso!",
        user: result,
    });
}