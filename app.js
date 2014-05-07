var express = require('express'), path = require('path');
var app = express();

//employees = require('./api/employee');
product = require('./api/product');
vendor = require('./api/vendor');
state = require('./api/state');
municipality=require('./api/municipality');
housingAssociation=require('./api/housingAssociation');
login=require('./api/login');
adminlogin=require('./api/adminLogin');
newsFeed=require('./api/newsFeed');
contact=require('./api/contactdetail');
submitInput=require('./api/submitinput');
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/api/employees/:id/reports', employees.findByManager);
// app.get('/api/employees/:id', employees.findById);
// app.get('/api/employees', employees.findAll);
// 
// app.get('/api/products', product.findAll);
// app.get('/api/products/:id', product.findById);
// 
// app.get('/api/vendors', vendor.findAll);
// app.get('/api/vendors/:id', vendor.findById);
app.get('/api/state', state.findAllstate);
app.get('/api/addState', state.createNewState);
app.get('/api/deleteState/:id', state.deleteState);
app.get('/api/updateState/:id', state.updateState);
app.get('/api/municipality/:id', municipality.findMunicipality);
app.get('/api/addMunicipality', municipality.createNewMunicipality);
app.get('/api/deleteMunicipality/:id', municipality.deleteMunicipality);
app.get('/api/updateMunicipality/:id', municipality.updateMunicipality);
app.get('/api/housingAssociation/:id', housingAssociation.findHousinnAss);

app.get('/api/abc', housingAssociation.abc);
app.get('/api/addHousingAss', housingAssociation.createNewHousingAss);
app.get('/api/deleteHousingAss/:id', housingAssociation.deleteHousingAss);
app.get('/api/updateHousingAss/:id', housingAssociation.updateHousingAss);
app.get('/api/login', login.login);
app.get('/api/newsFeed', newsFeed.newsFeed);
app.get('/api/newsdetail/:id', newsFeed.newsDetail);
app.get('/api/addNews', newsFeed.Addnews);
app.get('/api/deleteNews/:id', newsFeed.deletenewsfeed);
app.get('/api/updateNews/:id', newsFeed.updatenewsfeed);
app.get('/api/contact', contact.contact);
app.get('/api/contactdetail/:id', contact.contactdetail);
app.get('/api/addContact', contact.AddContact);
app.get('/api/deleteContact/:id', contact.deleteContact);
app.get('/api/UpdateContact/:id', contact.updateContact);
app.get('/api/submitInput', submitInput.submitInput);
app.post('/api/adminLogin', adminlogin.login);
app.listen(3000);
console.log('Listening on port 3000...'); 
