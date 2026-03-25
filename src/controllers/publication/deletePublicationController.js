import { deletePublication } from "../../models/publicationModel.js"

export async function deletePublicationController(req, res) {
    const id = req.params.id;

    const result = await deletePublication(+id);

    return res.json({
        message: `Publicação com id: ${id} deletado com sucesso!`,
        publication: result
    });
}