import { getUsers } from "../../models/userModel.js";

export async function getUsersController(req, res) {
  try {
    const result = await getUsers();

    res.json({
      message: "Usuários listados com sucesso",
      users: result,
    });
  } catch (error) {
    next(error);
  }
}
