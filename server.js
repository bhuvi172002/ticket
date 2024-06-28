require("dotenv").config();
const express = require('express')

const app = express()
const port = process.env.PORT || 3000
app.use(express.static('views'))
app.use(express.json())
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("we are connected")
});



//for epass
var epassSchema = new mongoose.Schema({
   
  firstname: String,
  lastname: String,
  from: String,
  to: String,
  distance: String,
  validfrom: String,
  validto: String,
  price: String,
  uid: String
  
  });

  var epass = mongoose.model("epass1", epassSchema);


  app.post("/postpass",async (req, res) => {
    var myData = new epass(req.body);
const docs = await epass.find({})
let a =10000
docs.forEach(item => { 
  a=a+1
        });
        myData.uid=a
    myData.save()
    .then(item => {
      res.render('finalpass',{myData})
      
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  
  
  });
 

  //for final ticket
var ticketSchema = new mongoose.Schema({

  time: String,
  to: String,
  from: String,
  distance: String,
  pcount: String,
  fair: String,
  passenger1: String,
  passenger2: String,
  passenger3: String,
  passenger4: String,
  passenger5: String

});

// lock the schema 
var ticket = mongoose.model("ticket", ticketSchema);


app.post("/postticket", (req, res) => {
  var myData = new ticket(req.body);
  res.render('finalticket',{myData})


});
app.post("/pay",(req,res)=>{
  var myData = new ticket(req.body);
  myData.save()
    .then(item => {
      res.render('finalticketpaid',{myData})
      
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
})

app.get('/adminlogin',(req,res)=>{
  res.render('adminlogin')
})



const adminsSchema = new mongoose.Schema({
  userid: String,
  password: String
});
var admins = mongoose.model('admins', adminsSchema);

app.post('/login', async (req, res) => {
  const  userid = req.body.userid;
  const  password = req.body.password;
  const admin = await admins.findOne({ userid: userid});
  // console.log(admin)

  if (!admin) {
    const err= 
    res.send('User not found');
  } else if (admin.password !== password) {
    const err="Incorrect password"

    res.render('adminloginerr',{err})
  } else {
    res.render('adminhome')
  }
});


app.get("/showticket",(req,res)=>{

  ticket.find({}, function(err, docs) {
    if (err) {
      console.error(err);
    } else {
      res.render('adminhometicket',{docs})
  
    }
  });
})
app.get("/showepass",(req,res)=>{

  epass.find({}, function(err, docs) {
    if (err) {
      console.error(err);
    } else {
      res.render('adminhomeepass',{docs})
  
    }
  });
})
const uidSchema = new mongoose.Schema({
  uid: String

});
var uid = mongoose.model('uid', uidSchema);
app.post('/finduid', async (req, res) => {
  const  uid = req.body.uid;
  
  const myData = await epass.findOne({ uid: uid});
  // console.log(admin)
  if (!myData) {
    res.send('User not found');
  } else if (myData.uid !== uid) {
    res.send('Incorrect unique Id');
  } else {
    res.render('finalpass',{myData})
  }
});


app.get('/', (req, res) => {

res.render("epasslogin")
})

app.get('/ticket', (req, res) => {
  res.render("ticket")

})
app.get('/exit', (req, res) => {
 
  res.render("epasslogin")
})
app.get('/back', (req, res) => {
 
  res.render("adminhome")
})
app.get('/epass', (req, res) => {
 
  res.render("epass")
})

app.get('/epassnew', (req, res) => {
 
  res.render("epass")
})






app.listen(port, () => {
  console.log(`e-Ticket is on port ${port}`)
})



