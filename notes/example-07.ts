/**
 * Example 7: Selecting nodes and zoom into view
 *
 * Reference:
 *    https://www.figma.com/plugin-docs/api/properties/PageNode-selection/
 *    https://www.figma.com/plugin-docs/accessing-document/#getting-the-current-selection
 *    https://www.figma.com/plugin-docs/editing-properties/
 */

const NUMBER_OF_RECTANGLES = 6
const SPACE_BETWEEN = 10

// Create an array [0, 1, 2, 3, 4, 5]
const indexes = [...Array(NUMBER_OF_RECTANGLES).keys()]

// Create NUMBER_OF_RECTANGLES rectangles
const nodes: SceneNode[] = indexes.map((i) => {
  const rectangle = figma.createRectangle()
  rectangle.name = `rectangle-${i}`
  rectangle.x = i * (rectangle.width + SPACE_BETWEEN)
  return rectangle
})

figma.currentPage.selection = nodes
figma.viewport.scrollAndZoomIntoView(nodes)

figma.closePlugin()
