class Api_constructor {
  constructor() {
    this.api_key = "mhgBNao3FJyUX4sWrtmsBeMw1oRRPyr8";
  }
  async fetchData(input1, input2, input3) {
    const i1 = input1.toLowerCase();
    const i2 = input2.toLowerCase();
    let headers = {
      apikey: this.api_key,
    };

    const data = await fetch(
      `https://api.apilayer.com/fixer/convert?to=${i2}&from=${i1}&amount=${input3}`,
      {
        method: "GET",
        headers: headers,
        redirect: "follow",
      }
    );

    return data.text();
  }
  clearInput(input1, input2, input3) {
    input1.value = "";
    input2.value = "";
    input3.value = "";
  }
  appAuth() {
    const data = document.querySelector(".alert");

    data.classList.remove("hide");
    setTimeout(function () {
      data.classList.add("hide");
    }, 2000);
  }
  aref(input) {
    input.forEach(function (data) {
      data.addEventListener("click", function (e) {
        e.preventDefault();
        Default.classList.add("hide");
        countries.classList.add("hide");
        short.classList.remove("hide");
        from.value = e.target.innerHTML;
      });
    });
  }
  btn(input1, input2, input3, input4) {
    input1.addEventListener("click", (e) => {
      e.preventDefault();
      // console.log(e)
      const dataResult = document.querySelector(".result");

      const enquiry = document.querySelector(".enquiry");
      const rate = document.querySelector(".card-title");
      const cardText = document.querySelector(".card-text");
      const countries = document.querySelector(".countries");
      const Default = document.querySelector(".default");
      const short = document.querySelector(".short");
      const btn = document.querySelector(".secondBtn");

      if (input2.value === "" || input3.value === "" || input4.value === "") {
        this.appAuth();
      } else {
        this.fetchData(input2.value, input3.value, input4.value)
          .then((result) => {
            const parseData = JSON.parse(result);
            if (parseData.success === true) {
              dataResult.classList.remove("hide");
              enquiry.classList.add("hide");
              Default.classList.add("hide");
              countries.classList.add("hide");
              short.classList.add("hide");
              date.classList.remove("hide");
              rate.innerHTML = `Conversion(${parseData.query.amount}): From:${parseData.query.from} - To: ${parseData.query.to} `;
              cardText.innerHTML = `<b>Rate: ${parseData.info.rate}</b><br>
                    <b>Result: ${parseData.result} </b>
                    `;
            } else {
              const data = document.querySelector(".alert");
              data.innerHTML = parseData.error.type;
              data.classList.remove("hide");
              data.classList.add("text-uppercase");
              dataResult.classList.add("hide");
              enquiry.classList.remove("hide");
              setTimeout(function () {
                data.classList.add("hide");
              }, 2000);
            }
          })
          .catch((error) => {
            btn.classList.remove("hide");
            const data = document.querySelector(".alert");
            data.innerHTML = `${error.message} due to Network Failure`;
            data.classList.remove("hide");
            data.classList.add("text-uppercase");
            setTimeout(function () {
              data.classList.add("hide");
            }, 2000);
          });
      }
    });
  }

  country(input) {
    input.forEach(function (data, i) {
      const tr = document.createElement("tr");
      IndexNum = i + 1;
      listItem = data.country;
      currencyName = data.name;
      currencyCode = data.code;
      const text = `   <td>
        ${IndexNum} </td>
            <td>${listItem}</td>
            <td>${currencyName}</td>
            <td><a class="aref">${currencyCode}</a></td>`;

      tr.innerHTML = text;
      tbody.append(tr);
    });
  }
}
