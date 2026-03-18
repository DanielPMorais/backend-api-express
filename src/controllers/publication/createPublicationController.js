import { createPublication } from "../../models/publicationModel.js"

export async function createPublicationController(req, res) {

    const publication = req.body;

    const result = await createPublication(publication);

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