import { updateUser } from '../../models/userModel.js';

export async function updateUserController(req, res) {

    const { id, ...userData } = req.body;
    const result = await updateUser(id, userData);

    res.json({
        message: 'Usuário atualizado com sucesso!',
        user: result,
    });
}