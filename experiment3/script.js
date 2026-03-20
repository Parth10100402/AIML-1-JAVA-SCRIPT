let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;

document.getElementById("changeTextBtn").addEventListner("click", function() {
if(input.value !==""){
    heading.innerHTML = input.value;
}
});

document.getElementById("bgColourBtn").onclick = function(){
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 167777215).toString(16);
};

document.getElementById("fontSizeBtn").addEventlistner("click", 
    function(){
        fontSize +=2;
    paragraph.style.fontSize = fontSize + "px";
});

document.getElementById("toggleBtn").addEventListener("click",
    function () {
        if (paragraph.style.display === "none"){
            paragraph.style.display = "block";
        }


        else{
            paragraph.style.display = "none";
        }

    });

    document.getElementById("reset").addEventListener("click" ,() => {
        heading.innerHTML =  "Welcome tp JavaScript Lab";
        paragraph.style.display = "block";
        paragraph.style.fontsize = "16px";
        document.body.style.backgroundColor = "#ffffff";
        input.value = "";
        fontSize = 16;
    });
