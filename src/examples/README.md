# Examples of content to test themes against

These examples are best generated by Encoda since Thema targets the HTML that it generates.

## Adding new examples

To generate new examples, either use the `stencila` CLI tool (which embeds Encoda), or `npm link` to a local copy of Encoda:

```bash
npm link @stencila/encoda
```

Then create an HTML file like this:

```bash
npx encoda convert https://elifesciences.org/articles/49574v2 article-drosophila.html
```

Once you have created an example:

- add an entry for it in `index.ts` in this folder
- add the Bash command you used to `generate.sh` in this folder.

## Regerating examples

You can regenerate existing examples using:

```bash
./generate.sh
```