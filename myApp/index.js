//axios
const form = document.forms["form"]
form.addEventListener("submit",(e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    console.log(firstName)
    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;
    //const last = document.getElementsByClassName("lastName")[0].value
    const obj = {
        firstName: firstName,
        username: username,
        password: password,
    }
    const divTag = document.createElement("div")

    const pTag = document.createElement("p")
    divTag.appendChild(pTag)


    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:8080/register", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.sucessfully) {
                console.log(result.data)
                document.querySelector(".success").textContent = result.data.message
                console.log(result)
            }else{
                let answer = result.data
               document.querySelector(".success").textContent = result.data.message
                pTag.textContent = result.data.message;
            }

            }
        catch
            (error)
            {
                console.error("Error:", error);
            }
        }

   // const data = { username: "example" };
    postJSON(obj);
    form.appendChild(divTag)

})
