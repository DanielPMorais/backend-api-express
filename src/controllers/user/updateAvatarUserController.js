import { updateUser } from '../../models/userModel.js';

export async function updateAvatarUserController(req, res) {
    
    const { id } = req.params;
    const user = req.body;

    const result = await updateUser(user, +id);

    res.json({
        message: "Avatar alterado com sucesso!",
        user: result,
    });
}