import { updatePublication, validatePublication } from "../../models/publicationModel.js"

export async function updateTitlePublicationController(req, res) {
    const { id } = req.params;
    const publication = req.body;

    const { success, error, data: publicationValidated } = validatePublication({id: +id, title: publication.title}, { description: true, author: true } )

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        });
    }

    const result = await updatePublication(publicationValidated, publicationValidated.id);

    res.json({
        message: "Título atualizado com sucesso!",
        publication: result,
    });
}