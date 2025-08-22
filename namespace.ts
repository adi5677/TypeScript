// class Auth{
//     login() {
//         console.log("User logged in");
//     }
// }

// function getList() {
//     console.log("Getting user list");
// }

namespace UserNameSpace {
   export class Auth {
        login() {
            console.log("User logged in");
        }
    }

    export function getList() {
        console.log("Getting user list");
    }
}

var user1 = new UserNameSpace.Auth();
user1.login();

namespace AdminNameSpace {
   export class Auth {
        login() {
            console.log("Admin logged in");
        }
    }

    export function getList() {
        console.log("Getting admin list");
    }
    const apiURL = "https://api.example.com/admin";
}

// var user2 = new AdminNameSpace.Auth();
// user2.login();
// UserNameSpace.getList();