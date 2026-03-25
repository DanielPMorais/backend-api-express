import { deleteUser } from "../../models/userModel.js"

export async function deleteUserController(req, res) {
    const id = req.params.id;

    const result = await deleteUser(+id);

    return res.json({
        message: `Usuário com id: ${id} deletado com sucesso!`,
        user: result
    });

}