var homeButton = document.getElementById("home-button");
var webdevButton = document.getElementById("webdev-button");
var unityButton = document.getElementById("unity-button");
var homeArea = document.getElementById("home-area");
var webdevArea = document.getElementById("webdev-area");
var unityArea = document.getElementById("unity-area");
var displayType = "flex";

function hideElements(id){
    switch(id){
        case "home-button":
            webdevArea.style.display = "none";
            unityArea.style.display = "none";
            break;
        case "webdev-button":
            homeArea.style.display = "none";
            unityArea.style.display = "none";
            break;
        case "unity-button":
            homeArea.style.display = "none";
            webdevArea.style.display = "none";
            break;
        default: 
            console.log("Unknown Button Pressed");
            break;
    }
    
}
homeArea.style.display = displayType;
hideElements("home-button");
homeButton.addEventListener("click", function(event){ homeArea.style.display = displayType;  hideElements("home-button");});
webdevButton.addEventListener("click", function(event){ webdevArea.style.display = displayType; hideElements("webdev-button");});
unityButton.addEventListener("click", function(event){ unityArea.style.display = displayType; hideElements("unity-button");});
