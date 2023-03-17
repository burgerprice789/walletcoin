"use strict"

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
}

module.exports = {
    home,
    login,
}
//오브젝트는 원래
//{key : 값} 으로 구성되어 있음 그래서
//hello: hello,
//login: loggin, 으로 구성되어 있음