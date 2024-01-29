window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}
function createBtnNode(btnText,e,l){
  let btnNode = document.createElement("button");
  let btnNodeText = createTxtNode(btnText);
  btnNode.appendChild(btnText);
  btnNode.addEventListener(e,l);
  return btnNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createBtnNode("edit text","click",function(){
      encodeURIComponent(col1);
    }))
    tableNode.appendChild(createTRNode([col1]));
  }
  document.getElementById("root").appendChild(tableNode);
}
function edit(node){
  let newNode = document.createElement("input");
  newNode.type='text';
  newNode.placeholder='enter cell (x,y)...';
  node.placeholder(newNode,newNode.replaceChild,)
}
