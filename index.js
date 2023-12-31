console.log("hello World");

// import fs from""";           //ES6   (fs is file system) 
 const fs =require ("fs");     //ES5

 fs.writeFileSync("node.txt","Hello this is node txt file.....!!!");

 fs.readFile("node.txt","utf-8", (err, data)=>{
    if(!err) console.log(data);
 }
 );
  function appendFile(savPath, date){
    fs.appendFile(savPath, data, function (err){
        err
        ? console.log("Append Err: ",err): console.log("append successfully !!");
    }
    );
    }

    writeFile("abc.txt", "ABC Yahoo My first file....");
    appendfile("abc.txt", "qbc yahooooo");
    fs.rename()


