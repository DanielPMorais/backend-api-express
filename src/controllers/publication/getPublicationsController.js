import { getPublication } from "../../models/publicationModel.js";

export async function getPublicationsController(req, res, next) {
  try {
    const { title } = req.query;
    const result = await getPublication(title);

    res.json({
      message: "Publicações listadas com sucesso!",
      publications: result,
    });
  } catch (error) {
    next(error);
  }
}
