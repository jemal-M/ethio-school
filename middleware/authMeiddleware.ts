import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: { id: string };
}

  const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token." });
  }
};

const roleMIddleware =(req:AuthRequest,res:Response,next:NextFunction)=>{

  const role = req.user?.id;
  if (role !== "admin") {
    return res.status(403).json({ error: "Access denied. Admin only." });
  }
  
}  
 
export { authMiddleware, roleMIddleware };

