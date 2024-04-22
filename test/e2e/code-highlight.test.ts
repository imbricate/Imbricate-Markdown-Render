/**
 * @author WMXPY
 * @namespace MarkdownRender
 * @description Code Highlight
 * @override E2E Test
 */

import { renderMarkdownToHtml } from "../../src/markdown-to-html";

describe("Given (Code Highlight) Cases", (): void => {

    test("should be able to highlight unknown language", async (): Promise<void> => {

        const source: string = [
            "```",
            "print('Hello World')",
            "```",
        ].join("\n");

        const parsed: string = await renderMarkdownToHtml(source);

        expect(parsed).toContain("<pre><code>");
        expect(parsed).toContain("hljs-params");
    });

    test("should be able to highlight known language", async (): Promise<void> => {

        const source: string = [
            "```js",
            "print('Hello World')",
            "```",
        ].join("\n");

        const parsed: string = await renderMarkdownToHtml(source);

        expect(parsed).toContain('<pre><code class="js language-js">');
        expect(parsed).toContain("language-js");
    });

    test("should be able to ignore unknown language", async (): Promise<void> => {

        const source: string = [
            "```mermaid",
            "test",
            "```",
        ].join("\n");

        const parsed: string = await renderMarkdownToHtml(source);

        expect(parsed).toEqual('<pre><code class="mermaid language-mermaid">test</code></pre>');
    });
});
