## [1.5.6](https://github.com/stencila/thema/compare/v1.5.5...v1.5.6) (2019-10-11)


### Bug Fixes

* **Stencila:** Fix vertical spacing for nested lists after paragraphs ([2ef401a](https://github.com/stencila/thema/commit/2ef401a))

## [1.5.5](https://github.com/stencila/thema/compare/v1.5.4...v1.5.5) (2019-10-09)


### Bug Fixes

* **Examples:** Update Simple example with new component tag names ([e1b738e](https://github.com/stencila/thema/commit/e1b738e))
* **Stencila:** Fix short paragraphs being centre aligned ([236f1e7](https://github.com/stencila/thema/commit/236f1e7))
* **Stencila:** Reduce max-width of CodeChunk components ([5ee20b0](https://github.com/stencila/thema/commit/5ee20b0))

## [1.5.4](https://github.com/stencila/thema/compare/v1.5.3...v1.5.4) (2019-10-07)


### Bug Fixes

* **Pre:** Fix Safari bug with rendering Pre elements inside iFrames ([6b5c8b0](https://github.com/stencila/thema/commit/6b5c8b0))

## [1.5.3](https://github.com/stencila/thema/compare/v1.5.2...v1.5.3) (2019-10-07)


### Bug Fixes

* **Citations:** Handle race condition with formatReferences ([38c6386](https://github.com/stencila/thema/commit/38c6386))
* **CodeChunk:** Show x-scrollbars for overflowing codechunks ([5039d15](https://github.com/stencila/thema/commit/5039d15))
* **Common Styles:** Move description/abstract from themes to common.css ([b2eab4b](https://github.com/stencila/thema/commit/b2eab4b))
* **CreativeWork:** Don't add extraneous commas in reference authors ([3967e65](https://github.com/stencila/thema/commit/3967e65))
* **eLife:** Handle YAML frontmatter for authors, organizations, abstract ([375f54c](https://github.com/stencila/thema/commit/375f54c))
* **Nature:** Adjust theme to handle YAML frontmatter + CodeChunks ([802cfcf](https://github.com/stencila/thema/commit/802cfcf))
* **Themes:** Refinements for eLife, Nature, PLOS themes ([80dac6d](https://github.com/stencila/thema/commit/80dac6d))
* **Themes:** Use semantic selectors, comment setTimeout usage ([9b2da0c](https://github.com/stencila/thema/commit/9b2da0c))

## [1.5.2](https://github.com/stencila/thema/compare/v1.5.1...v1.5.2) (2019-09-29)


### Bug Fixes

* **Selectors:** Fix custom selectors ([7bd1398](https://github.com/stencila/thema/commit/7bd1398))
* **Selectors:** Rename code-chunk to CodeChunk ([70e669f](https://github.com/stencila/thema/commit/70e669f))

## [1.5.1](https://github.com/stencila/thema/compare/v1.5.0...v1.5.1) (2019-09-12)


### Bug Fixes

* **Demo:** Reflect active theme/article in dropdown when reloading ([8e050b9](https://github.com/stencila/thema/commit/8e050b9))
* **JS:** Initalize JS even if script is loaded after DOMContentLoaded ([7639b4b](https://github.com/stencila/thema/commit/7639b4b))
* **Stencila:** Add common theme dependencies ([4c856bd](https://github.com/stencila/thema/commit/4c856bd))

# [1.5.0](https://github.com/stencila/thema/compare/v1.4.3...v1.5.0) (2019-09-12)


### Features

* Add & refine styles for CodeChunk component ([14b2f19](https://github.com/stencila/thema/commit/14b2f19))

## [1.4.3](https://github.com/stencila/thema/compare/v1.4.2...v1.4.3) (2019-09-10)


### Bug Fixes

* **Build:** Refactor TS modules and fix build task ([4f0815b](https://github.com/stencila/thema/commit/4f0815b))

## [1.4.2](https://github.com/stencila/thema/compare/v1.4.1...v1.4.2) (2019-09-10)


### Bug Fixes

* Fix selectors used in references for chnages in Encoda ([854f427](https://github.com/stencila/thema/commit/854f427))
* Use headline custom selector ([9864393](https://github.com/stencila/thema/commit/9864393))
* **Selectors:** Update selectors ([50c14a9](https://github.com/stencila/thema/commit/50c14a9))
* **Stencila theme:** Ensure init function ([602550a](https://github.com/stencila/thema/commit/602550a))

## [1.4.1](https://github.com/stencila/thema/compare/v1.4.0...v1.4.1) (2019-08-30)


### Bug Fixes

* **TypeScript:** Fix getTheme function logic ([39652d6](https://github.com/stencila/thema/commit/39652d6))

# [1.4.0](https://github.com/stencila/thema/compare/v1.3.0...v1.4.0) (2019-08-30)


### Features

* **TypeScript:** Generate TS declarations & export theme names ([be71bd0](https://github.com/stencila/thema/commit/be71bd0))

# [1.3.0](https://github.com/stencila/thema/compare/v1.2.0...v1.3.0) (2019-08-30)


### Bug Fixes

* **Demos:** Clean up demos, move script from .html to .ts ([446794e](https://github.com/stencila/thema/commit/446794e))
* **ELife:** Update markup based on microdata discussion ([dd2e11e](https://github.com/stencila/thema/commit/dd2e11e))
* **ELife Theme:** Add theme switcher ([51b5c49](https://github.com/stencila/thema/commit/51b5c49))
* **ELife Theme:** Fix regressions with `converted-article.html` ([ea0ca02](https://github.com/stencila/thema/commit/ea0ca02))
* **ELife Theme:** Render citations in eLife theme by default ([fed4c61](https://github.com/stencila/thema/commit/fed4c61))
* **Nature Theme:** Tweaks to Nature theme markup and styles ([cea4860](https://github.com/stencila/thema/commit/cea4860))
* **PLoS theme:** Tweaks to table, references, and markup ([184ede6](https://github.com/stencila/thema/commit/184ede6))
* **PLoS theme:** Update references style + table markup ([136b4f3](https://github.com/stencila/thema/commit/136b4f3))
* **Reference Styles:** Fix regressions in Nature theme ([2cc7861](https://github.com/stencila/thema/commit/2cc7861))
* **References, eLife:** Add MLA, APA citations to references.html ([806a1f3](https://github.com/stencila/thema/commit/806a1f3))
* **Styles:** Clean up eLife and Nature styles ([903d86a](https://github.com/stencila/thema/commit/903d86a))
* **Themes:** Clean up common styles, eLife, Nature, Plos, Stencila themes ([3ac0897](https://github.com/stencila/thema/commit/3ac0897))
* **Update Demos:** Update HTML encoded example (converted-article.html) ([3c56e0a](https://github.com/stencila/thema/commit/3c56e0a))


### Features

* **Microdata:** Use microdata-based CSS selectors for references. ([a7b690d](https://github.com/stencila/thema/commit/a7b690d))
* **PLoS Theme:** Add PLoS WIP theme ([c4819f9](https://github.com/stencila/thema/commit/c4819f9))

# [1.2.0](https://github.com/stencila/thema/compare/v1.1.0...v1.2.0) (2019-07-24)


### Bug Fixes

* **Build:** Simplify build command and fix output directory structure ([c0793bf](https://github.com/stencila/thema/commit/c0793bf))
* **Stencila Theme:** Refine some spacing and layouts ([97c12b9](https://github.com/stencila/thema/commit/97c12b9))
* **Syntax Highlighting:** Fix syntax highlighting for JSON code blocks ([57cd42a](https://github.com/stencila/thema/commit/57cd42a))


### Features

* **Stencila Theme:** Refactor styles to be mobile first ([bf9336d](https://github.com/stencila/thema/commit/bf9336d))
