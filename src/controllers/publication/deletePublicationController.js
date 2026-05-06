import { deletePublication, validatePublication } from "../../models/publicationModel.js"

export async function deletePublicationController(req, res) {
    const id = req.params.id;

    const { success, error, data } = validatePublication({ id: +id }, { title : true, description: true, created_at: true, author: true })

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        });
    }

    const result = await deletePublication(data.id);

    return res.json({
        message: `Publicação com id: ${id} deletado com sucesso!`,
        publication: result
    });
}