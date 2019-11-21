import 'jquery.fancytree/dist/skin-lion/ui.fancytree.css';
import {
  mxGraph, mxClient, mxUtils, mxRubberband,
} from 'mxgraph/javascript/mxClient';

const element = document.createElement('div');
element.id = 'tree';
element.innerHTML = _.join(['Hello', 'webpack'], ' ');
document.body.appendChild(element);

jquery('#tree')
  .fancytree({
    source: [
      {
        title: 'Node 1',
        key: '1',
      },
      {
        title: 'Folder 2',
        key: '2',
        folder: true,
        children: [
          {
            title: 'Node 2.1',
            key: '3',
            myOwnAttr: 'abc',
          },
          {
            title: 'Node 2.2',
            key: '4',
          },
        ],
      },
    ],
  });

console.log(fancytree.version);

function mxGraphMain(container) {
  // Checks if the browser is supported
  if (!mxClient.isBrowserSupported()) {
    mxUtils.error('Browser is not supported!', 200, false);
  } else {
    // Creates the graph inside the given container
    const graph = new mxGraph(container);

    // Enables rubberband selection
    new mxRubberband(graph);

    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0).
    const parent = graph.getDefaultParent();

    // Adds cells to the model in a single step
    graph.getModel()
      .beginUpdate();
    try {
      const v1 = graph.insertVertex(parent, null,
        'Hello,', 20, 20, 80, 30);
      const v2 = graph.insertVertex(parent, null,
        'World!', 200, 150, 80, 30);
      const e1 = graph.insertEdge(parent, null, '', v1, v2);
    } finally {
      // Updates the display
      graph.getModel()
        .endUpdate();
    }
  }
}

mxGraphMain(document.getElementById('graphContainer'));
console.log('Graph should be rendered by now!');
