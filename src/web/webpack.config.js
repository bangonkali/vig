const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'eslint-loader',
          options: {
            fix: true,
          },
        }, {
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: require.resolve('file-loader'),
              name: '[hash:7].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jquery',
        }],
      },
      {
        test: require.resolve('jquery.fancytree/dist/jquery.fancytree.min.js'),
        use: 'imports-loader?$=jquery',
      },
      {
        test: require.resolve('jquery.fancytree/dist/modules/jquery.fancytree.edit.js'),
        use: 'imports-loader?$=jquery',
      },
      {
        test: require.resolve('jquery.fancytree/dist/modules/jquery.fancytree.edit.js'),
        use: 'imports-loader?$=jquery',
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: require.resolve('mxgraph/javascript/mxClient.js'),
        use: 'exports-loader?'
          + 'mxClient,mxLog,mxObjectIdentity,mxDictionary,mxResources,mxEffects,mxUtils,mxConstants,mxEvent,mxClipboard,mxUrlConverter,mxVmlCanvas2D,mxStencilRegistry,'
          + 'mxMarker,mxHierarchicalEdgeStyle,mxCellPath,mxPerimeter,mxEdgeStyle,mxStyleRegistry,mxCodecRegistry,mxGenericChangeCodec,mxStylesheetCodec,mxDefaultToolbarCodec,'
          + 'mxGraph,mxRubberband,mxHierarchicalLayout,mxFastOrganicLayout,mxGraphModel,mxPanningHandler,mxKeyHandler,mxParallelEdgeLayout,mxLayoutManager,mxCompactTreeLayout,'
          + 'mxPrintPreview,mxToolbar,mxOutline,mxCellTracker,mxCellOverlay,mxImage,mxLoadResources,mxPopupMenu,mxCylinder,mxRectangle,mxCellRenderer,mxVertexHandler,mxPoint,'
          + 'mxHandle,mxRhombus, mxActor,mxArrow,mxArrowConnector,mxCloud,mxConnector,mxConnector,mxEllipse,mxHexagon,mxImageShape,mxLabel,mxLine,mxPolyline,mxMarker,mxRectangleShape,'
          + 'mxShape,mxStencil,mxStencilRegistry,mxSwimlane,mxText,mxTriangle,mxAutoSaveManager,mxDivResizer,mxForm,mxGuide,mxImageBundle,mxImageExport,mxLog,mxMorphing,mxMouseEvent,'
          + 'mxPanningManager,mxSvgCanvas2D,mxUndoableEdit,mxUndoManager,mxUrlConverter,mxWindow,mxXmlCanvas2D,mxXmlRequest,mxCellEditor,mxCellState,mxCellStatePreview,mxConnectionConstraint,'
          + 'mxGraphSelectionModel,mxGraphView,mxMultiplicity,mxSwimlaneManager,mxTemporaryCellStates,mxGeometry,mxStackLayout,mxRadialTreeLayout,mxPartitionLayout,mxGraphLayout,'
          + 'mxEdgeLabelLayout,mxCompositeLayout,mxCircleLayout,mxSwimlaneOrdering,mxMinimumCycleRemover,mxMedianHybridCrossingReduction,mxHierarchicalLayoutStage,mxCoordinateAssignment,'
          + 'mxSwimlaneLayout,mxObjectCodec,mxGenericChangeCodec,mxTooltipHandler,mxSelectionCellsHandler,mxPopupMenuHandler,mxGraphHandler,mxElbowEdgeHandler,mxEdgeHandler,'
          + 'mxConstraintHandler,mxConnectionHandler,mxCellMarker,mxCellHighlight,mxDefaultPopupMenu,mxDefaultKeyHandler,mxCodec,mxGraphHierarchyModel,mxGraphAbstractHierarchyCell,'
          + 'mxGraphHierarchyEdge,mxGraphHierarchyNode,mxSwimlaneModel,mxEdgeSegmentHandler',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  devServer: {
    publicPath: '/assets/',
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
    port: 3000,
  },
  plugins: [
    new webpack.ProvidePlugin({
      jquery: 'jquery',
      fancytree: 'jquery.fancytree',
      _: 'lodash',
    }),
    new HtmlWebpackPlugin({
      title: 'Graph Viewer',
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      template: 'src/index.hbs',
      inlineSource: '.(js|css)$',
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new VueLoaderPlugin(),
  ],
};
