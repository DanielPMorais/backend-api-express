import { updatePublication, validatePublication } from "../../models/publicationModel.js"

export async function updatePublicationController(req, res) {
    const { id } = req.params;
    const publication = req.body;
    publication.id = +id;

    const { success, error, data: publicationValidated } = validatePublication(publication)
    
    const result = await updatePublication(publicationValidated, publicationValidated.id);

    res.json({
        message: 'Publicação atualizada com sucesso!',
        publication: result,
    });
}