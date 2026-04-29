import { createPublication, validatePublication } from "../../models/publicationModel.js"

export async function createPublicationController(req, res) {

    const publication = req.body;

    const { success, data, error } = validatePublication(publication, { id: true });

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error.flatten().fieldErrors
        });
    }

    const result = await createPublication(data);

    // {
    //  "title": "Meu primeiro post"
    //  "description": "Descrição do meu post"
    //}

    //     {
    //   "name": "daniel",
    //   "email": "daniel.morais@gmail.com",
    //   "pass": "123456",
    //   "avatar": "https://github.com/danielpmorais.png"
    //     }

    res.json({
        message: "Publicação criada com sucesso!",
        publication: result
    });

}