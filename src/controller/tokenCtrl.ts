import { Request, Response } from "express";
import { generateToken } from "../utils/tokenUtil";
import jwt from "jsonwebtoken";

export const tokenCtrl = {
  healthCheck: async (req: Request, res: Response) => {
    return res.status(200).json({ msg: "Hello Test Route" });
  },

  generateToken: async (req: Request, res: Response) => {
    try {
      const { username, role }: any = req.body;
      if (!username) {
        return res.status(400).json({ msg: "username is required" });
      }

      const accessToken = generateToken(
        { username, role: role ? role : "user" },
        process.env.JWT_SECRET!,
      );

      return res.status(200).json({ msg: "login successful...", accessToken });
    } catch (e) {
      if (e instanceof Error) {
        return res.status(500).json({ msg: e.message });
      }
    }
  },

  validateToken: async (req: Request, res: Response) => {
    try {
      const auth = req.headers.authorization;

      if (!auth) {
        return res.status(400).json({ msg: "unauthorized access" });
      }

      const token = auth.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      if (!decoded) {
        return res.status(400).json({ msg: "unauthorized access" });
      }

      return res.status(200).json({ decoded });
    } catch (e) {
      if (e instanceof Error) {
        return res.status(500).json({ msg: e.message });
      }
    }
  },
};
