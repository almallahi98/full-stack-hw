import { User } from "@prisma/client";
import { Request, Response } from "express";
import { dbContext } from "../config/dbContext";
import * as argon2 from 'argon2'
import jwt from 'jsonwebtoken'

const msg = "wrong username or password";
export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body as User;
        const user = await dbContext.user.findFirst({ where: { username } });
        console.log(user);
        
        if (!user) {
            return res.status(400).json({ msg });
        }

        const user_is_valid = await argon2.verify(user.password, password)
        if (!user_is_valid) {
            return res.status(400).json({ msg })
        }

        const token = jwt.sign({ user_id: user.user_id, username: user.username }, process.env.SECRET as string, { expiresIn: "2 days" })
        return res.status(200).json(token);
    } catch (err) {
        console.log(err);

    }
}

export const register = async (req: Request, res: Response) => {
    try {
        const newUser = req.body as User;
        newUser.password = await argon2.hash(newUser.password);
        await dbContext.user.create({
            data: newUser
        });
        return res.status(201).json({ msg: 'you can login now' })
    }
    catch (err) {
        return res.status(400).json({ msg: "somthin is wrong.. try again later..." })
    }

}


