
require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//const router = express.Router()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 
const session = require('express-session');
  app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());  



//POSTING
app.route('/Posting/')
  .get(function(req, res, next) {
    connection.query(
      "SELECT * FROM `Posting`", req.params,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });
 

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ DASHBOARD @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//About
app.route('/About/')
  .get(function(req, res, next) {
    res.send('go to /posting to see postings')
    res.json('ABOUT PAGE HERE@@@@@@@')
  });  

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ About @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//HOME
app.route('/')
  .get(function(req, res, next) {
    res.send('go to /posting to see postings')
  });  


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Log In @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// this must send redirect user to user page 
app.route('/login')
  .get(function(req, res) {
    const { email, password } = req.query;
    // const { email, password } = req.body;
      //email or password inputted
      if(email && password){
        connection.query('SELECT * FROM users WHERE Email = ? AND Password = ?', [email, password], function(error, results, fields) {
          if (results.length > 0) {

            req.session.loggedin = true //true when logged in! set false when logged out!
            req.session.username = email
            //res.redirect('About') // <-- need to fix redirection!

            console.log('Correct email and password Matched!')
            console.log(results)//TEST output on console for email and password input
            console.log('logged in set to:' + req.session.loggedin)
            res.json('') //need this to redirect from log in
          } 

          else {
          res.json('Incorrect Username and/or Password!');
          res.status(400)
          }     
        });
      }
      else {
        console.log('Please fill in both email and password!')
        // res.end()
      }
  });



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Adding Post @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Adding item to database
app.route('/Posting/add/')
  .get(function(req, res, next) {
    // const {  Name, Category, Price, Address, Image, Contact, Description} = req.query;
    const {  Name, Category, Price, Address, Image, Description} = req.query;
    var useremail = req.session.username
    //console.log(Name, Category);
    // const INSERT_POST_QUERY = `INSERT INTO Posting (Name, Category, Price, Address, Image, Contact, Description) VALUES('${Name}', '${Category}', '${Price}', '${Address}', '${Image}', '${Contact}', '${Description}', ${useremail})`;
    const INSERT_POST_QUERY = `INSERT INTO Posting (Name, Category, Price, Address, Image, Description, Contact) VALUES('${Name}', '${Category}', '${Price}', '${Address}', '${Image}', '${Description}', '${useremail}')`;

    connection.query(
      INSERT_POST_QUERY, (err, results) => {
        if(err) {
          res.json(err)
        }
        else {
          res.json('Successfully added post')
        }
      });

  });




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Pending Post @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Adding item to pending lists
app.route('/Pending/')
  .get(function(req, res, next) {
    // const {  Name, Category, Price, Address, Image, Contact, Description} = req.query;
    const {  Name, Category, Price, Address, Image, Description} = req.query;
    var useremail = req.session.username
    const INSERT_POST_QUERY = `INSERT INTO Pending (Name, Category, Price, Address, Image, Description, Contact) VALUES('${Name}', '${Category}', '${Price}', '${Address}', '${Image}', '${Description}', '${useremail}')`;

    connection.query(
      INSERT_POST_QUERY, (err, results) => {
        if(err) {
          res.json(err)
        }
        else {
          res.json('Waiting for approval')
        }
      });

  });

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//loading pending list
app.route('/PendingLists/')
.get(function(req, res, next) {
  connection.query(
    "SELECT * FROM `Pending`", req.params,
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//remove pending item on list after granted approval
app.route('/removePendingItem/')
.get(function(req, res, next) {
  const { Pending_id} = req.query;
  connection.query(
    `DELETE FROM Pending WHERE Pending_id = ?`, Pending_id,
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//remove pending item on list after granted approval
app.route('/adjustPosting/')
.get(function(req, res, next) {
  const { postId } = req.query;
  connection.query(
    `DELETE FROM Posting WHERE postId = ?`, postId,
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//load user lists from db
app.route('/UserLists/')
.get(function(req, res, next) {
  connection.query(
    "SELECT * FROM `users`", req.params,
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.route('/userDB/')
  .get(function(req, res, next) {
    connection.query(
      'SELECT * FROM users', req.params,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });


  // check if register is received signal form register form, then push it to database, similar with posting/add above
app.route('/register/')
  .get(function(req, res, next) {
      const { email, password } = req.query;
      var name = email.substring(0, email.lastIndexOf("@"));
      const RegisterID = `INSERT INTO users (Username, Password, Email) VALUES('${name}', '${password}', '${email}')`;
      connection.query(
        RegisterID, (err, results) => {
          if(err) {
            return res.send(err)
          }
          else {
            return res.send('Successfully added post')
          }
        }); 
  });


  app.route('/sendMessage/')
  .get(function(req, res, next) {
    const {Sender, Receiver, Text} = req.query;
    const INSERT_POST_QUERY = `INSERT INTO message (Sender, Receiver, Message) VALUES ('${Sender}','${Receiver}', '${Text}')`;

    connection.query(
      INSERT_POST_QUERY, (err, results) => {
        if(err) {
          res.json(err)
        }
        else {
          res.json('message is sent')
        }
      });
  });


app.route('/checkToken')
  .get(function(req, res,next) {
 
    const loggedInTrue = req.session.loggedin
  if (loggedInTrue) {
    res.json(req.session.username);
  }
  else {
    res.json('');
  }
  res.end();
 })



 app.route('/logout')
 .get(function(req, res,next){

   req.session.loggedin = false
   req.session.username = Anonymous
 })



 app.route('/userPosting/')
 .get(function(req, res, next) {
   connection.query(
     `SELECT * FROM Posting WHERE Contact = ?`, req.session.username,
     function(error, results, fields) {
       if (error) throw error;
       res.json(results);
     }
   );
 });

 app.route('/messageReceiver/')
 .get(function(req, res, next) {
   connection.query(
                       //email column on database is called "Contact".
     `SELECT * FROM message WHERE Receiver = ?`, req.session.username,
     function(error, results, fields) {
       if (error) throw error;
       res.json(results);
     }
   );
 });

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 8080);
app.listen(8080);