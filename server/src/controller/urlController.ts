import { Request as req, Response as res } from "express";

import Url from '../model/urlSchema';
import { createURL } from '../services/urlService';

export const createUrlPost = async (req: req, res: res) => {

    const { originalLink } = req.body;

    if (originalLink) {

        try {

            const existUrl = await Url.findOne({ originalLink })

            if (existUrl) {
                res.status(200).json(existUrl);
            } else {
                const data = await createURL(req.body);
                res.status(201).json(data);
            }

        } catch (error) {
            console.error(error);
            res.status(500).json("Internal server error")
        }

    } else {
        res.status(400).json("Missing original url link");
    }


};