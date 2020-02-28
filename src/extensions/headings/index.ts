import { select, ready, tag, replace } from '../../util'

/**
 * Find all heading nodes and change their depth to depth +1
 *
 * Currently, there are some "presentational" <h2> nodes added with
 * `data-itemtype` e.g `<h2 data-itemtype="http://schema.stenci.la/Heading">Abstract</h2>`.
 * These are not selected when using `:--Heading`.
 */
ready(() => {
  select(':--Heading').forEach(heading => {
    const level = parseFloat(/^H([1-6])$/.exec(heading.tagName)?.[1] ?? '0')
    const newLevel = Math.min(level + 1, 6)
    replace(heading, tag(heading,`h${newLevel}`))
  })
})
