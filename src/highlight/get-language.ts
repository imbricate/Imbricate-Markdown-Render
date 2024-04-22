/**
 * @author WMXPY
 * @namespace Highlight
 * @description Get Language
 */

export const getLanguageFromLeft = (left: string): string | undefined => {

    const matched: RegExpMatchArray | null = left.match(/class="([^ "]+)/);

    if (matched) {
        return matched[1];
    }

    return undefined;
};
