fetch("https://jsonplaceholder.typicode.com/todos?_limit=8")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error fetching data");
        }
        console.log("Data fetched");
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("app").innerHTML = data.map(todo => `
            <div class="drop-shadow-md bg-white p-2 w-[300px]">
                <p>${todo.title}</p>
                <p style="color: ${todo.completed ? 'green' : 'red'}">
                    ${todo.completed ? "Done" : "Not Yet"}
                </p>
            </div>
        `).join("");
    })
    .catch((error) => {
        console.error(error.message);
        document.getElementById("app").innerHTML = "<p>Failed to load data</p>";
    });

console.log("End of script");
