const Google = new Api_constructor;

const dataResult = document.querySelector(".result")
const date = document.querySelector(".date")
    // console.log(currency)

const enquiry = document.querySelector(".enquiry")
const rate = document.querySelector(".card-title")
const cardText = document.querySelector(".card-text")
document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault()
    let data1 = document.querySelector("#from")
    let data2 = document.querySelector("#to")
    let data3 = document.querySelector("#amount")

    if (data1.value === "" || data2.value === "" || data3.value === "") {
        Google.appAuth()
    } else {
        Google.fetchData(data1.value, data2.value, data3.value)
            .then(result => {
                const parseData = JSON.parse(result)
                if (parseData.success === true) {
                    dataResult.classList.remove("hide")
                    enquiry.classList.add("hide")
                    countries.classList.add("hide")
                    short.classList.add("hide")
                    date.classList.remove("hide")
                    rate.innerHTML = `Conversion(${parseData.query.amount}): From:${parseData.query.from} - To: ${parseData.query.to} `
                    cardText.innerHTML = `<b>Rate: ${parseData.info.rate}</b><br>
                    <b>Result: ${parseData.result} </b>
                    `

                } else {
                    const data = document.querySelector(".alert")
                    data.innerHTML = parseData.error.type
                    data.classList.remove("hide")
                    data.classList.add("text-uppercase")
                    dataResult.classList.add("hide")
                    enquiry.classList.remove("hide")
                    setTimeout(function() {
                        data.classList.add("hide")
                    }, 2000)
                }
                console.log(parseData)
            })
            .catch((error) => {
                btn.classList.remove("hide")
                const data = document.querySelector(".alert")
                data.innerHTML = `${error.message} due to Network Failure`
                data.classList.remove("hide")
                data.classList.add("text-uppercase")
                setTimeout(function() {
                        data.classList.add("hide")
                    }, 2000)
                    // console.log(error.message)
                    // dataResult.classList.add("hide")


            })

        Google.clearInput(data1, data2, data3)

    }

})
document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault()
    dataResult.classList.add("hide")
    enquiry.classList.remove("hide")
    countries.classList.remove("hide")

})




// var myHeaders = new Headers();
// myHeaders.append("apikey", "mhgBNao3FJyUX4sWrtmsBeMw1oRRPyr8");

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
// };

// fetch("https://api.apilayer.com/fixer/convert?to={to}&from={from}&amount={amount}", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));