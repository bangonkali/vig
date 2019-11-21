const element = document.createElement('div');
element.id = "tree";
element.innerHTML = _.join(['Hello', 'webpack'], ' ');
document.body.appendChild(element);

$("#tree").text("Hello world!");

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