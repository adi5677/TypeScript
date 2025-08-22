"use strict";
// class Auth{
//     login() {
//         console.log("User logged in");
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function getList() {
//     console.log("Getting user list");
// }
var UserNameSpace;
(function (UserNameSpace) {
    class Auth {
        login() {
            console.log("User logged in");
        }
    }
    UserNameSpace.Auth = Auth;
    function getList() {
        console.log("Getting user list");
    }
    UserNameSpace.getList = getList;
})(UserNameSpace || (UserNameSpace = {}));
var user1 = new UserNameSpace.Auth();
user1.login();
var AdminNameSpace;
(function (AdminNameSpace) {
    class Auth {
        login() {
            console.log("Admin logged in");
        }
    }
    AdminNameSpace.Auth = Auth;
    function getList() {
        console.log("Getting admin list");
    }
    AdminNameSpace.getList = getList;
    const apiURL = "https://api.example.com/admin";
})(AdminNameSpace || (AdminNameSpace = {}));
// var user2 = new AdminNameSpace.Auth();
// user2.login();
// UserNameSpace.getList();
//# sourceMappingURL=namespace.js.map