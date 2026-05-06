import { createPublication, validatePublication } from "../../models/publicationModel.js"

export async function createPublicationController(req, res) {

    const publication = req.body;

    const { success, data, error } = validatePublication(publication, { id: true });

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: flattenError(error).fieldErrors
        });
    }

    const result = await createPublication(data);

    res.json({
        message: "Publicação criada com sucesso!",
        publication: result
    });

}