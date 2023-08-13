//selecting all user elements
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; // this is a global variable and we'll use it inside multiple functions

button.onclick = ()=>{
    input.click() // if user click on the button then the input also clicked
}

input.addEventListener("change", function(){
    //getting user select file and [0] this mean if user select multiple files then we'le select only the first one 
    file = this.files[0];
    showFile(); //calling function
    dropArea.classList.add("active");
})

//If user Drag file over DropArea
dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault(); //Preventing from default behavior
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

//If user leaved dragged file over DropArea
dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";  
});

//If user drop file on DropArea
dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); //Preventing from default behavior
    /* getting user select file and [0] this mean if user select multiple files 
    then we'le select only the first one */
    file = event.dataTransfer.files[0];
    showFile(); //calling function
});

function showFile(){
    let fileType = file.type;
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"] // addding some valid image extentions in array
    if (validExtensions.includes(fileType)){ // if user selected file is an image file
        let fileReader = new FileReader(); //creating new reader object
        fileReader.onload = ()=>{
            let fileURL = fileReader.result; // passing user file source in fileURL variable
            let imgTag = `<img src="${fileURL}" alt="">`; // creating an image tag and passing user selected file source inside src atribiute
            dropArea.innerHTML = imgTag; // adding that created img tag inside dropArea container
            console.log(fileType);
        }
        fileReader.readAsDataURL(file)
    }else{
        console.log(fileType);
        alert("This is not an Image File")
        dropArea.classList.remove("active") 
    }
}