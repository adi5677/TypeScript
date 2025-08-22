//API Call in TypeScript

function apiCall<T>(url: string): Promise<T> {
    const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data as T);
    return result;
}

apiCall("https://jsonplaceholder.typicode.com/todos/1")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });