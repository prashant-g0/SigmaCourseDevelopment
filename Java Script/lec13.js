// Axios: Library to make HTTP request
//include axios script link in html from axios.github
// let url = "https://catfact.ninja/fact"
// async function getfacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     } catch (e) {
//         console.log("ERR! ", e);
//     }
// }

// to display output on html document
let btn = document.querySelector('button');
btn.addEventListener("click", async()=>{
    let fact = await getfacts();
    let p = document.querySelector("#factpara");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact"
async function getfacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("ERR! ", e);
        return "No fact found"
    }
}

//Axios : Sending Headers
const urljk = "https://icanhazdadjoke.com/";
async function getjokes() {
    try{
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data.joke);
    } catch(e) {
        console.log("ERR! ", e);
    }
}