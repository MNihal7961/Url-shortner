import { Request as req, Response as res } from "express";
import isUrl from 'is-url'
import jwt from "jsonwebtoken";
import User from "../model/userSchema";
import { generate as generateUrl } from "generate-password";


import Url from '../model/urlSchema';
// import { createURL, getUrlByUrlCode } from '../services/urlService';


export const createUrlPost = async (req: req, res: res) => {
    const token = req.cookies.token;


    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized. No token provided" });
    }

    try {
        // VERIFY TOKEN
        const verified: any = jwt.verify(token, "urlshortner");

        if (!verified) {
            return res.status(401).json({ success: false, message: "Unauthorized token" });
        }

        // RETRIEVE USER DATA
        const user = await User.findById(verified.user);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const { originalLink } = req.body;

        if (!originalLink) {
            return res.status(400).json({ message: "Missing original URL link" });
        }

        if (!isUrl(originalLink)) {
            return res.status(400).json({ message: "Invalid URL format" });
        }

        const urlCode = generateUrl({
            length: 8,
            uppercase: true,
        });

        let urlData = await Url.findOne({ user: user._id });
        if (!urlData) {
            urlData = await Url.create({ user: user._id, urls: [] });
        }

        const existUrl = urlData.urls.find(url => url.originalLink === originalLink);
        if (existUrl) {
            return res.status(409).json({ message: "This URL has already been shortened." });
        }

        urlData.urls.push({ urlCode, originalLink, name: req.body?.name });
        await urlData.save();

        res.status(200).json({ success: true, message: "URL successfully shortened" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const fetchAllUrlsByUser = async (req: req, res: res) => {
    const token = req.cookies.token;


    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized. No token provided" });
    }

    try {
        // VERIFY TOKEN
        const verified: any = jwt.verify(token, "urlshortner");

        if (!verified) {
            return res.status(401).json({ success: false, message: "Unauthorized token" });
        }

        // RETRIEVE USER DATA
        const user = await User.findById(verified.user);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const data = await Url.findOne({ user: user._id })


        res.status(200).json({ success: true, message: "data fetched success", data: data });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}


// export const fetcDataByUrlCodeGet = async (req: req, res: res) => {

//     const urlCode = req.params.urlCode;

//     if (!urlCode) {
//         res.status(404).send("Passed short url not found");
//     }

//     try {
//         const data = await getUrlByUrlCode(urlCode);

//         if (data) {
//             res.status(301).redirect(data?.originalLink)
//         } else {
//             res.status(404).send("Data not found for the provided URL code");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }

// }