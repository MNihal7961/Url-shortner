import { generate as generateUrl } from "generate-password";

import Url from "../model/urlSchema";
import { UrlPayloadType } from "../types";

// Create URL
export const createURL = async (payload: UrlPayloadType) => {
    if (!payload.originalLink) {
        throw Error("Missing some parameters");
    }
    try {
        let url = new Url(payload);

        // Creating short URL
        const urlCode = generateUrl({
            length: 8,
            uppercase: true,
        });

        url.urlCode = urlCode;

        url = await url.save();
        return url;
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
