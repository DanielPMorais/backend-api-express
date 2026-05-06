import { deleteUser, validateUser } from "../../models/userModel.js"

export async function deleteUserController(req, res) {
    const id = req.params.id;

    const { success, error, data } = validateUser({ id: +id }, { avatar: true, name: true, email: true, pass: true });

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        });
    }

    const result = await deleteUser(data.id);

    return res.json({
        message: `Usuário com id: ${id} deletado com sucesso!`,
        user: result
    });

}