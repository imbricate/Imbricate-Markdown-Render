/**
 * @author WMXPY
 * @namespace MarkdownRender
 * @description Encoded HTML
 * @override E2E Test
 */

import { renderMarkdownToHtml } from "../../src/markdown-to-html";

describe("Given (Encoded HTML) Cases", (): void => {

    test("should be able to highlight unknown language", async (): Promise<void> => {

        const source: string = [
            "```html",
            "<div>test</div>",
            "```",
        ].join("\n");

        const parsed: string = await renderMarkdownToHtml(source);

        expect(parsed).toContain("<pre><code");
    });
});
