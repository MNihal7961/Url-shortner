import isUrl from "is-url";
import { generate as generateUrl } from "generate-password";

import Url from "../model/urlSchema";

export const checkOriginalLink = (link: string) => {
    const check: boolean = isUrl(link);
    return check;
};

export const generateShortUrl = () => {
    const code = generateUrl({
        length: 8,
        uppercase: true,
    });

    return code;
};

export const getOriginalLinkByUrlCode = async (user: any, code: string) => {
    try {

        // FETCHING ORIGINAL LINK BY SHORT URL CODE
        const originalLink = await Url.aggregate([
            {
                $match: {
                    "user": user._id
                }
            },
            {
                $unwind: "$urls"
            },
            {
                $match: {
                    "urls.urlCode": code
                }
            },
            {
                $project: {
                    _id: 0,
                    originalLink: "$urls.originalLink"
                }
            }
        ]);

        return originalLink[0].originalLink;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const removeShortedUrlCode = async (user: any, code: string) => {
    try {

        // FINDING AND REMOVING DATA
        const result = await Url.updateOne(
            { user: user._id },
            {
                $pull: {
                    "urls": { "urlCode": code }
                }
            }
        );

        return result ? true : false;
    } catch (error) {
        console.error(error);
    }
};
