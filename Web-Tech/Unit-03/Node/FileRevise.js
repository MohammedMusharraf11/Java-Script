var fs = require("fs")

fs.readFile("file.txt",function(err,data){
    if(err){
        console.log("Error Opening File");
    }else{
        console.log("The File is opened Successfully");
        console.log(data.toString());
        
        
    }
})

var data = fs.readFileSync("file.txt")
console.log("THE FILE IS OPENED THRU SYNC METHOD: " + data.toString());


fs.open("input.txt","r+", function(err,data){
    if(err){
        console.log("Error");
    }else{
        console.log("Bhai yey dek file khulgayi hai" + data.toString());
        
    }
})


fs.writeFile("input.txt","Mohammed Musharraf",function(err,data){
    if(err){
        console.log("Error Bhai");
    }
    console.log("File is written");
    fs.readFile("input.txt",function(err,data){
        if(err){
            console.log("Error Phir sey Bhaga Bhaiii");
            
        }console.log("NEW DATA: "+ data.toString());
        
    })
    
})


fs.appendFile("input.txt","\nAssalamu alaikum Habibi",function(err,data){
    if(err){
        console.log("Error Occured");
    }else{
        console.log("Data is Written Successfully");
        fs.readFile("input.txt",function(err,data){
            if(err){
                console.log("Error Occured");
            }else{
                console.log("New Appended Data: "+ data.toString());
                
            }
        })
        
    }
})