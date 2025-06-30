import jwt from "jsonwebtoken";

//admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res
        .status(400)
        .json({ success: false, message: "Access denied!" });
    }
    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
    if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Access denied!" });
    }
    next();
  } catch (error) {
    throw new Error(error);
  }
};

export default authAdmin;
