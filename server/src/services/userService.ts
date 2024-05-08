import jwt from "jsonwebtoken";

import User from "../model/userSchema";

export const verifyToken = (token: string) => {
    try {
        const verified: any = jwt.verify(token, "urlshortner");
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





