"use strict";

//모듈
const express = require("express")
const app = express();

//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;
  




//  const http = require("http");
//  const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type" : "text/html; charset=utf-8"});
//     if (req.url === "/"){
//         res.end("this is root page 한글 번역 체크");
//     }else if (req.url === "/login") {
//         res.end("this is login page 한글 번역 체크2");
//     }
    
//   });

//  app.listen(3001,() => {
//     console.log("http로 가동된 서버입니다")
//  });
