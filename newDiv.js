console.log("Description ", JSON.parse(localStorage.getItem("Description")))
console.log("Name ", JSON.parse(localStorage.getItem("Name")))
console.log("Píc ", JSON.parse(localStorage.getItem("Pic")))
document.getElementById("Name").innerHTML = JSON.parse(localStorage.getItem("Name"))
document.getElementById("Description").innerHTML = JSON.parse(localStorage.getItem("Description"))
document.getElementById("loadimg").onclick = () =>{
            let img = document.createElement('img');
            img.src = JSON.parse(localStorage.getItem("Pic"))
            document.getElementById('body').appendChild(img);}
