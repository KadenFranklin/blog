// first thing should be a call to the twitter api to get the # of blocked accounts
// store that in a variable and send it to _func()  intToString(integ){ }

var digitsOld = [],
  digitsNew = [],
  list0 = ["0", "0", "0", "0"],
  list1 = ["0", "0", "0", "1"],
  list2 = ["0", "0", "0", "0"]

var list3 = ["0", "0", "0", "1"]

// makeUL
// checkLists -> animate -> doMove or moveDown -> reset

// make UL and animate need to be cleaned up into one function
// maybe a replace() function to clear the screen

document.getElementById("wrap").appendChild(makeUL(list0, "list0"));
document.getElementById("wrap").appendChild(makeUL(list0, "list1"));
document.getElementById("wrap").appendChild(makeUL(list2, "list2"));

function makeUL(array, varName) {
  var listView = document.createElement("ul");
  listView.id = varName;
  var x = [];
  if (array.length > 3) {
    x = [3];
  }
  if (array.length > 6) {
    x = [3, 6];
  }
  if (array.length > 9) {
    x = [3, 6, 9];
  }
  if (array.length > 12) {
    x = [3, 6, 9, 12];
  }
  if (array.length > 15) {
    x = [3, 6, 9, 12, 15];
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < x.length; j++) {
      if (i == x[j]) {
        var listViewItem = document.createElement("li");
        listViewItem.className = "seperator";
        if (listView.id != "list1") {
          listViewItem.style.opacity = 0;
        } else {
          listViewItem.style.opacity = 1;
        }
        listViewItem.appendChild(document.createTextNode(","));
        listView.appendChild(listViewItem);
      }
    }
    var listViewItem = document.createElement("li");
    listViewItem.className = "";
    if (listView.id != "list1") {
      listViewItem.style.opacity = 0;
    } else {
      listViewItem.style.opacity = 1;
    }
    listViewItem.appendChild(document.createTextNode(array[i]));
    listView.appendChild(listViewItem);
  }
  return listView;
}

function checkLists(x, y) {
  for (var i = 0, c = x.length; i < c; i++) {
    if (x[i] != y[i]) {
      animate(i, x[i], y[i]);
    }
  }
}

function animate(id, digitOld, digitNew) {
  var sumChange = digitNew - digitOld;
  if (sumChange <= 0) {
    sumChange = digitOld - digitNew;
  }
  if (id >= 15) {
    id += 1;
  }
  if (id >= 12) {
    id += 1;
  }
  if (id >= 9) {
    id += 1;
  }
  if (id >= 6) {
    id += 1;
  }
  if (id >= 3) {
    id += 1;
  }
  if (digitOld.length == digitNew.length) {
    for (i = 0; i < sumChange; i++) {
      if ( document.querySelector("#list2 li:nth-child(" + id + ")").innerText ==",") {
        document.getElementById("list2").children[id].innerHTML = digitNew;
      }
      if ( document.getElementById("list1").children[id].innerHTML != digitOld) {
        document.getElementById("list1").children[id].innerHTML = digitOld;
      }
    }
    if (digitNew > digitOld) {
      doMove(id, "list1", "list2");
    }
    if (digitOld > digitNew) {
      moveDown(id, "list1", "list0");
    }
  }
}

function reset(id, name1, name2){
  var val1 =   document.getElementById(name1).children[id].innerHTML;
  val2 = document.getElementById(name2).children[id].innerHTML;
  document.getElementById(name1).children[id].innerHTML = val2;
  document.getElementById(name2).children[id].innerHTML = val1;  
  document.getElementById(name1).children[id].style.top = 0 +'px';
  document.getElementById(name2).children[id].style.top = 0 +'px';
  document.getElementById("list0").children[id].style.opacity = 0;
  document.getElementById("list1").children[id].style.opacity = 1;
  document.getElementById("list2").children[id].style.opacity = 0;
}

function doMove(id, name1, name2) {
  document.getElementById(name2).children[id].style.opacity = 0.01;
  let pos = 0;
  idInt = setInterval(frame, 20);
  function frame() {
    if (pos == 100) {
      reset(id, name1, name2);
      clearInterval(idInt);
    } else {
      pos++;
      opac2 = parseFloat(document.getElementById(name2).children[id].style.opacity);
      document.getElementById(name1).children[id].style.opacity -= 1/100;
      document.getElementById(name2).children[id].style.opacity = opac2 + 0.01;
      document.getElementById(name1).children[id].style.top = -pos + "px";
      document.getElementById(name2).children[id].style.top = -pos + "px";
    }
  }
}

function moveDown(id, name1, name2) {
  document.getElementById(name2).children[id].style.opacity = 0.1;
  let pos = 0;
  let idInt = setInterval(frame, 20);
  function frame() {
    if (pos == 100) {
      reset(id, name1, name2);
      clearInterval(idInt);
    } else {
      pos ++;
      opac2 = parseFloat(document.getElementById(name2).children[id].style.opacity);
      document.getElementById(name1).children[id].style.opacity -= 1/100;
      document.getElementById(name2).children[id].style.opacity = opac2 + 0.01;
      document.getElementById(name1).children[id].style.top = pos + "px";
      document.getElementById(name2).children[id].style.top = pos + "px";
    }
  }
}

//var list0 = Array.from(document.querySelectorAll('#list0>li'));

// var lis = document.getElementById(id).getElementsByTagName("li");
// for (var i = 0; i < lis.length; i++){
//   console.log(lis[i].innerHTML);
// }

checkLists(list0, list3);
