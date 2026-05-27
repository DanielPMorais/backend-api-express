export async function logoutController(req, res, next) {
  try {
    let token = req.cookies.refreshToken || req.body.refreshToken;
    const id = req.userId;


  } catch (error) {
    next(error);
  }
}
