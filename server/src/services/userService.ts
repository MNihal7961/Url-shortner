import User from "../model/userSchema";
import bcrypt from 'bcryptjs'


export const createUser = async (name: string, email: string, password: string) => {
    try {
        const newUser = await User.create({ name: name, email: email, password: password })
        return newUser
    } catch (error) {
        console.log(error)
    }
}

export const existUser = async (email: string) => {
    try {
        let user = await User.findOne({ email: email })
        if (user) {
            return user
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}

export const passMatch = async (user: any, password: string) => {
    try {
        let match = await bcrypt.compare(user.password, password)
        if (match) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}



