
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : process.env.DB_NAME,
    user : process.env.DB_USER,
  	password : process.env.DB_PASSWORD,
    host :process.env.DB_HOST,
 });

 var CRUD = require('mysql-crud');
 var servicesCrud=CRUD(db, 'tbl_services');
 
 exports.findAllervices = function(req, res) {
 	  servicesCrud.load({}, function (err, val) {	   	  	
 	  	res.jsonp(val);
 	  });  
 }; 
 
 /******************for create new state it inster value in to data base*****************/ 
 
 exports.createNewservices = function(req, res) {
 	var statename=req.body.statename;
 	var statelocation=req.body.statelocation;
  servicesCrud.create({'state_name' :statename,'state_location' : statelocation}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'state successfully added'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not added some thing wrong  '};
	  	      res.jsonp(resdata);
	  	     }
       });
    };
     
 /******************  End create *****************/

/******************for  delete data from  data base*****************/

exports.deleteState = function(req, res) {
	var state_id=parseInt(req.params.id);
  stateCrud.destroy({'state_id' : state_id}, function (err, vals) {
  	console.log(vals.affectedRows);
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'state successfully deleted'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not found '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
   
 /******************  End Delete *****************/

/******************for  update data in data base********/

 exports.updateState = function(req, res) {
 	statename=req.body.state_name;
 	statelocation=req.body.state_location;
 	stateid=req.body.state_id;
  stateCrud.update({'state_id' : stateid}, {state_name:statename,state_location:statelocation}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'state successfully updated'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not updated'};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
  
/******************  End Update *****************/
