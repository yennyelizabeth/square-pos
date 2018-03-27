 require('babel-register') ({
   presets:['react']
 });
 const express = require('express');
 const app = express();

 const React = require('react');
 const ReactDomServer = require('react-dom/server');
 const Component = require('./src/components/Component.jsx') ;


app.get('/', (req, res) => {
    var html = ReactDomServer.renderToString(
      React.createElement(Component)
    );
    res.send(html);
});

app.listen(3000, ()=>{
  console.log('server on port 3000');
});
    


// import express from 'express';

// //inicializamos paquetes 
// const app = express();

// //setings
// app.set('port', process.env.PORT || 3000);

// // routes
// app.get('/', (req, res) => {
//     res.send('hello world');
// });

// app.get('/api', (req, res) => {
//     res.json({api:'works'});
// });

// // start server
// app.listen(app.get('port'), ()=>{
//     console.log('server on port', app.get('port'));
// });

