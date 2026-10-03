window.onload=function(){
    var hello = document.createTextNode("hello world");
    var div = document.createElement("div");
    div.appendChild(hello);

    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "skyblue";

    document.querySelector("body").appendChild(div);
}