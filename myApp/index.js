const form = document.forms["form"]
form.addEventListener("submit",(e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    console.log(firstName)
    const lastName = document.querySelector(".lastName").value;
    //const last = document.getElementsByClassName("lastName")[0].value
    console.log(lastName)
})
