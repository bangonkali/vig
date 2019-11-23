import 'jquery.fancytree/dist/skin-lion/ui.fancytree.css';
import {
  mxGraph, mxClient, mxUtils, mxRubberband, mxConstants, mxHierarchicalLayout, mxEvent, mxEdgeStyle,
} from 'mxgraph/javascript/mxClient'; // const element = document.createElement('div');
// element.id = 'tree';
// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// document.body.appendChild(element);
// jquery('#tree').fancytree({
//   source: [{
//     title: 'Node 1',
//     key: '1',
//   }, {
//     title: 'Folder 2',
//     key: '2',
//     folder: true,
//     children: [{
//       title: 'Node 2.1',
//       key: '3',
//       myOwnAttr: 'abc',
//     }, {
//       title: 'Node 2.2',
//       key: '4',
//     }],
//   }],
// });
// console.log(fancytree.version);

function mxGraphMain(container) {
  // Checks if the browser is supported
  if (!mxClient.isBrowserSupported()) {
    mxUtils.error('Browser is not supported!', 200, false);
  } else {
    // Creates the graph inside the given container
    const graph = new mxGraph(container); // Enables rubberband selection
    new mxRubberband(graph);

    // Creates the default style for edges
    style = [];
    style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_CONNECTOR;
    style[mxConstants.STYLE_STROKECOLOR] = '#6482B9';
    style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
    style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
    style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
    style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_CLASSIC;
    style[mxConstants.STYLE_FONTSIZE] = '10';
    graph.getStylesheet().putDefaultEdgeStyle(style);

    const parent = graph.getDefaultParent(); // Adds cells to the model in a single step

    graph.getModel().beginUpdate();

    try {
      const v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
      const v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
      const v3 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
      const v4 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
      const v5 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
      const e1 = graph.insertEdge(parent, null, '', v1, v2);
      const e2 = graph.insertEdge(parent, null, '', v1, v3);
      const e3 = graph.insertEdge(parent, null, '', v2, v4);
      const e4 = graph.insertEdge(parent, null, '', v2, v5);
      const e5 = graph.insertEdge(parent, null, '', v4, v5);
    } finally {
      // Updates the display
      graph.getModel().endUpdate();
    } // var graph = new mxGraph(container);
    // const xmlDocument = mxUtils.parseXml('<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="v1" value="v1" vertex="1" parent="1"><mxGeometry width="80" height="30" as="geometry"/></mxCell><mxCell id="v2" value="v2" vertex="1" parent="1"><mxGeometry width="80" height="30" as="geometry"/></mxCell><mxCell id="e1" value="e1" edge="1" parent="1" source="v1" target="v2"><mxGeometry relative="1" as="geometry"/></mxCell></root></mxGraphModel>');
    // const decoder = new mxCodec(xmlDocument);
    // const node = xmlDocument.documentElement;
    // decoder.decode(node, graph.getModel());


    const layout = new mxHierarchicalLayout(graph); // var parent = graph.getDefaultParent();

    const button = document.createElement('button');
    mxUtils.write(button, 'Hierarchical');
    mxEvent.addListener(button, 'click', (evt) => {
      layout.execute(parent);
      evt.preventDefault();
    });
    const style = graph.getStylesheet().getDefaultEdgeStyle();
    style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
    document.body.appendChild(button);
  }
}

mxGraphMain(document.getElementById('graphContainer'));
console.log('Graph should be rendered by now!');
