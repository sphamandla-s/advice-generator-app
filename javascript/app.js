
const getData = async() => {
    try {
        const result = await axios.get("https://api.adviceslip.com/advice");
        return result.data.slip;
    } catch (error) {
        console.log(error)
    }
};


const setData = async() => {
    const data = await getData();
    document.querySelector("#adviceId").innerText = data.id;
    document.querySelector("#advice").innerText = `"${data.advice}"`;
}

setData()