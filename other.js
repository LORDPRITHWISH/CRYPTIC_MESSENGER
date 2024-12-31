console.log("@DARKLOD SECURED");

const verdiction = async (val) => {
    const state = await chrome.runtime.sendMessage({ propagator: val });
    console.log(state);
    return state[val];
};

console.log(verdiction("DSEC"), "@DARKLOD SECURED");



// if(document.execCommand("selectAll", false, null))
// document.execCommand("insertText", false, "####");
// let box = mainEl.querySelectorAll('div[role="row"]')[messboxes.length];
// boxno = messboxes.length
// mainEl.querySelectorAll('div[role="row"]');
// limess[1].childNodes[0].tagName;

box.firstChild.dataset.id.slice(5, 17)


let mainEl = document.querySelector("#main");
let messboxes = mainEl.querySelectorAll('div[role="row"]');
let box = messboxes[messboxes.length - 1];


// let mess = box.querySelectorAll("span:not(:empty):not(:has(*))");
let limess = box.querySelectorAll("span:not(:empty):has(a)")[1];


limess.childNodes[0].tagName;
limess.childNodes[0].nodeValue = "<a href='https://www.google.com'>Google</a>";

let node = limess.childNodes[0];

let sp = document.createElement("span");
sp.ariaLabel = node.nodeValue;
sp.innerHTML = ' <-> ';

node.parentNode.replaceChild(sp, node);
// node.appendChild(sp);