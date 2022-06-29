var Path = "";
var newPath = "";

function PathChanged()
{
    Path = document.querySelector(".input").value;
    if(Path != ""){
    newPath = Path.replaceAll("\\","/");
    document.querySelector("p").textContent = newPath;}
}