const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extended:true}))


app.use(express.json());

 

app.get("/", (req, res) => {
  return res.render("index");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    
     
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '.jpg');
  },
});

const upload = multer({ storage: storage })

 
 

app.post('/file',  upload.single("profileImage"), (req,res)=>{
     
    
   res.render('done')

 
})

app.listen(PORT, () => console.log(`Server Started at PORT:3000`));

 