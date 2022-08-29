let inputField;
let outputField = document.getElementById("output").value; 
let dropdown = document.getElementById("options").value; 
let passwordLength;
let afterSpace;

function generate() {
    inputField = document.getElementById("input").value; 
    dropdown = document.getElementById("options").value; 
   
   if (dropdown == 0) {
    const first = inputField.substring(0,1);
    const uppercase = inputField.substring(0,1).toUpperCase(); 
    document.getElementById("output").value = inputField.replace(first, uppercase);
   }

   if (dropdown == 1) {
    document.getElementById("output").value = inputField.split(" ")[0];
   }

   if (dropdown == 2) {
    if (inputField.includes(" ")) {
        document.getElementById("output").value = "First name length: " + inputField.split(" ")[0].length;
    }
    else {
        document.getElementById("output").value = "Error: not a full name"
    }
   }

   if (dropdown == 3) {
    inputField = inputField.split(" ");
    if (inputField.length >=3) {
        inputField = inputField.toString().replaceAll(","," ")         
        const middleNameStart = inputField.indexOf(" ");
        const middleNameEnd = inputField.lastIndexOf(" ");
        document.getElementById("output").value = inputField.substring(middleNameStart+1, middleNameEnd);

    }
    else {
        document.getElementById("output").value = "Error: no middle name"
    }
   }
   

   if (dropdown == 4) {
        if (inputField.endsWith(".jpg")) {
            document.getElementById("output").value = "Filetype: jpg"

        }
        else if(inputField.endsWith(".png")) {
            document.getElementById("output").value = "Filetype: png"

        }
        else {
            document.getElementById("output").value = "Error: not a filename"
        }
    
   }

   if (dropdown == 5) {
        passwordLength = inputField.length;
        document.getElementById("output").value = "*".repeat(passwordLength);
   }

   if (dropdown == 6) {
    const first = inputField.substring(2,3);
    const uppercase = inputField.substring(2,3).toUpperCase(); 
    document.getElementById("output").value = inputField.replace(first, uppercase);
   }

   if (dropdown == 7) {
    afterSpace = inputField.indexOf(" ") + 1;
    // inputField.at(afterSpace.toUpperCase);
    // inputField.at(afterSpace).toUpperCase();
    document.getElementById("output").value = inputField;
    console.log(inputField)
   }
   
}
