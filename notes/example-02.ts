/**
 * Example 2: FrameNode with child
 * Demonstrates creating a FrameNode and RectangleNode
 * Make the RectangleNode a child of the FrameNode
 *
 * figma.createFrame(): FrameNode
 *
 * returns a FrameNode with the following properties
 *    fill: white
 *    x: 0
 *    y: 0
 *    name: "Frame"
 *    width: 100
 *    height: 100
 *    parent: figma.currentPage
 *
 * Reference:
 *    https://www.figma.com/plugin-docs/api/properties/figma-createframe/
 *    https://www.figma.com/plugin-docs/api/FrameNode/
 */

const frame = figma.createFrame()
const rectangle = figma.createRectangle()
frame.appendChild(rectangle)
figma.closePlugin()
