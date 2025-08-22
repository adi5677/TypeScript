"use strict";
//API Call in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
function apiCall(url) {
    const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => data);
    return result;
}
apiCall("https://jsonplaceholder.typicode.com/todos/1")
    .then(data => {
    console.log(data);
})
    .catch(error => {
    console.error('Error:', error);
});
//# sourceMappingURL=API_Call.js.map