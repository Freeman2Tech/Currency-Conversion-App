class Api_constructor {
    constructor() {
        this.api_key = "mhgBNao3FJyUX4sWrtmsBeMw1oRRPyr8"


    }
    async fetchData(input1, input2, input3) {
        let headers = {
            apikey: this.api_key
        };

        const data = await fetch(`https://api.apilayer.com/fixer/convert?to=${input2}&from=${input1}&amount=${input3}`, {
            method: "GET",
            headers: headers,
            redirect: 'follow'

        })

        return data.text()
    }
    clearInput(input1, input2, input3) {
        input1.value = ""
        input2.value = ""
        input3.value = ""
    }
    appAuth() {
        const data = document.querySelector(".alert")

        data.classList.remove("hide")
        setTimeout(function() {
            data.classList.add("hide")
        }, 2000)



    }
    aref(input) {
        input.forEach(function(data) {
            data.addEventListener("click", function(e) {
                e.preventDefault()
                    // console.log(e.target.innerHTML)
                Default.classList.add("hide")
                countries.classList.add("hide")
                short.classList.remove("hide")
                from.value = e.target.innerHTML
                console.log(e)





            })


        })
    }
    btn(input1, input2, input3, input4) {
        input1.addEventListener("click", (e) => {
            e.preventDefault()
                // console.log(e)
            const dataResult = document.querySelector(".result")

            const enquiry = document.querySelector(".enquiry")
            const rate = document.querySelector(".card-title")
            const cardText = document.querySelector(".card-text")
            const countries = document.querySelector(".countries")
            const Default = document.querySelector(".default")
            const short = document.querySelector(".short")
            const btn = document.querySelector(".secondBtn")

            // input.classList.add("hide")
            if (input2.value === "" || input3.value === "" || input4.value === "") {
                this.appAuth()
            } else {
                btn.classList.add("hide")
                this.fetchData(from, to, amount)
                    .then(result => {
                        const parseData = JSON.parse(result)
                        if (parseData.success === true) {

                            dataResult.classList.remove("hide")
                            enquiry.classList.add("hide")
                            Default.classList.add("hide")
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
                        // console.log(parseData)
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
            }
        })
    }

    country(input) {
        input.forEach(function(data, i) {

                const tr = document.createElement("tr")
                IndexNum = i + 1
                listItem = data.country
                currencyName = data.name
                currencyCode = data.code
                const text = `   <td>
        ${IndexNum} </td>
            <td>${listItem}</td>
            <td>${currencyName}</td>
            <td><a class="aref">${currencyCode}</a></td>`

                tr.innerHTML = text
                tbody.append(tr)

            })
            //Using For
            // for (let i = 0; i < input.length; i++) {

        //     const tr = document.createElement("tr")
        //     IndexNum = i + 1
        //     listItem = input[i].country
        //     currencyName = input[i].name
        //     currencyCode = input[i].code
        //     const text = `   <td>
        // ${IndexNum} </td>
        //     <td>${listItem}</td>
        //     <td>${currencyName}</td>
        //     <td>${currencyCode}</td>`

        //     tr.innerHTML = text
        //     tbody.append(tr)



        // }
    }

}

// curl --request GET 'https://api.apilayer.com/fixer/latest?base=USD&symbols=EUR,GBP' \
// --header 'apikey: YOUR API KEY'