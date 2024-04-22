/**
 * @author WMXPY
 * @namespace MarkdownRender
 * @description Highlight
 */

import hljs from "highlight.js";
import { FilterExtension, helper } from "showdown";
import { getLanguageFromLeft } from "./highlight/get-language";

export const showdownHighlight = (): FilterExtension => {

    const filter = (text: string) => {

        const replaceFunction = (
            wholeMatch: string,
            match: string,
            left: string,
            right: string,
        ) => {

            const language: string | undefined = getLanguageFromLeft(left);

            if (typeof language === "string") {

                if (typeof hljs.getLanguage(language) === "undefined") {
                    return wholeMatch;
                }

                return left
                    + hljs.highlight(
                        match,
                        {
                            language: language,
                        },
                    ).value
                    + right;
            }

            return left
                + hljs.highlightAuto(match).value
                + right;
        };

        return helper.replaceRecursiveRegExp(
            text,
            replaceFunction,
            "<pre><code\\b[^>]*>",
            "</code></pre>",
            "g",
        );
    };

    return {
        type: "output",
        filter,
    };
};