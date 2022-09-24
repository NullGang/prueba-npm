import fetch from 'node-fetch';


let fetcheo = async function(url) {
    try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    } catch(err) {
        console.log(err);
    }
}


module.exports = {
    fetcheo
}