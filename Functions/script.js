var a = myFunNew();

function myFunNew(para = "Hello World") {
    output.innerHTML += para;
    return para;
}


function myFunOld(para) {
    if (typeof para === "undefined") {
        para = "Hello World";
    }
    output.innerHTML += para;
    return para;
}