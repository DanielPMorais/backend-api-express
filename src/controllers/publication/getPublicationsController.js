import { getPublication } from '../../models/publicationModel.js'

export async function getPublicationsController(req, res) {
    
    const result = await getPublication();

    res.json({
        message: "Publicações listadas com sucesso!",
        publications: result 
    });
    
}