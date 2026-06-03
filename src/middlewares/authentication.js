import jwt from "jsonwebtoken";

export const authentication = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Token de autenticação não fornecido." });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.id;
  } catch (error) {
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token de autenticação inválido." });
    }
    
    if (error.name === "TokenExpiredError" || error.name === "jwt expired") {
      return res.status(401).json({ message: "Token de autenticação expirado." });
    }
    next(error);
  }

  next();
};
