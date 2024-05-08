import { Request as req, Response as res } from "express";

import Url from '../model/urlSchema';
import { createURL, getUrlByUrlCode } from '../services/urlService';

export const createUrlPost = async (req: req, res: res) => {

    const { originalLink } = req.body;

    if (originalLink) {

        try {

            const existUrl = await Url.findOne({ originalLink })

            if (existUrl) {
                res.status(200).json(existUrl);
            } else {
                const data = await createURL(req.body);
                console.log(data)
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

export const fetcDataByUrlCodeGet = async (req: req, res: res) => {

    const urlCode = req.params.urlCode;

    if (!urlCode) {
        res.status(404).send("Passed short url not found");
    }

    try {
        const data = await getUrlByUrlCode(urlCode);

        if (data) {
            res.status(301).redirect(data?.originalLink)
        } else {
            res.status(404).send("Data not found for the provided URL code");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }

}