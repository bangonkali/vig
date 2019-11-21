// import 'jquery.fancytree/dist/skin-material/ui.fancytree.min.css'
import 'jquery.fancytree/dist/skin-lion/ui.fancytree.css'

const element = document.createElement('div');
element.id = "tree";
element.innerHTML = _.join(['Hello', 'webpack'], ' ');
document.body.appendChild(element);

jquery("#tree").fancytree({
  source: [
    { title: "Node 1", key: "1" },
    {
      title: "Folder 2", key: "2", folder: true, children: [
        { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
        { title: "Node 2.2", key: "4" }
      ]
    }
  ],
});

console.log(fancytree.version);

// $("#tree").fancytree({
//   source: [
//     { title: "Node 1", key: "1" },
//     {
//       title: "Folder 2", key: "2", folder: true, children: [
//         { title: "Node 2.1", key: "3", myOwnAttr: "abc" },
//         { title: "Node 2.2", key: "4" }
//       ]
//     }
//   ],
// });

// $("#tree").fancyTree