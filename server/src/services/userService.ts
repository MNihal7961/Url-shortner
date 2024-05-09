import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../model/userSchema";

dotenv.config()


const jwtSecret = process.env.JWT_SECRET;

export const verifyToken = (token: string) => {
    try {

        if (!jwtSecret) {
            throw new Error('JWT secret is not defined in the environment variables.');
        }

        const verified: any = jwt.verify(token, jwtSecret);
        return verified;
    } catch (error) {
        console.error(error);
    }
};

export const getUserByDecodedToken = async (id: string) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error(error);
    }
};





