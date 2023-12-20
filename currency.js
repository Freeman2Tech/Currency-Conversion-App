const countryCurrencies = [
  {
    country: "AFGHANISTAN",
    name: "Afghani",
    code: "AFN",
  },
  {
    country: "ALBANIA",
    name: "Lek",
    code: "ALL",
  },
  {
    country: "ALGERIA",
    name: "Algerian Dinar",
    code: "DZD",
  },
  {
    country: "AMERICAN SAMOA",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "ANDORRA",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "ANGOLA",
    name: "Kwanza",
    code: "AOA",
  },
  {
    country: "ANGUILLA",
    name: "East Caribbean Dollar",
    code: "XCD",
  },
  {
    country: "ANTARCTICA",
    name: "No currency",
    code: "N/A",
  },
  {
    country: "ANTIGUA AND BARBUDA",
    name: "East Caribbean Dollar",
    code: "XCD",
  },
  {
    country: "ARGENTINA1",
    name: "Argentine Peso",
    code: "ARS",
  },
  {
    country: "ARGENTINA2",
    name: "Argentine Peso",
    code: "ARS",
  },
  {
    country: " ARMENIA",
    name: "Armenian Dram",
    code: "AMD",
  },
  {
    country: "ARUBA",
    name: "Aruban Florin",
    code: "AWG",
  },
  {
    country: "AUSTRALIA",
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    country: "AUSTRIA",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "AZERBAIJAN",
    name: "Azerbaijanian Manat",
    code: "AZN",
  },
  {
    country: "BAHAMAS",
    name: "Bahamian Dollar",
    code: "BSD",
  },
  {
    country: "BAHRAIN",
    name: "Bahraini Dinar",
    code: "BHD",
  },
  {
    country: "BANGLADESH",
    name: "TAKA",
    code: "BDT",
  },
  {
    country: "BARBADOS",
    name: "Barbados Dollar",
    code: "BBD",
  },
  {
    country: "BELARUS",
    name: "Belarussian Ruble",
    code: "BYN",
  },
  {
    country: "BELGIUM",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "BELIZE",
    name: "Belize Dollar",
    code: "BZD",
  },
  {
    country: "BENIN",
    name: "CFA Franc BCEAO",
    code: "XOF",
  },
  {
    country: "BERMUDA",
    name: "Bermudian Dollar",
    code: "BMD",
  },
  {
    country: "BHUTAN1",
    name: "Ngultrum",
    code: "BTN",
  },
  {
    country: "BHUTAN2",
    name: "Indian Rupee",
    code: "INR",
  },
  {
    country: "BOLIVIA (PLURINATIONAL STATE OF)",
    name: "Boliviano",
    code: "BOB",
  },
  {
    country: "BOLIVIA (PLURINATIONAL STATE OF)",
    name: "Mvdol",
    code: "BOV",
  },
  {
    country: "BONAIRE, SINT EUSTATIUS AND SABA",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "BOSNIA AND HERZEGOVINA",
    name: "Convertible Mark",
    code: "BAM",
  },
  {
    country: "BOTSWANA",
    name: "Pula",
    code: "BWP",
  },
  {
    country: "BOUVET ISLAND",
    name: "Norwegian Krone",
    code: "NOK",
  },
  {
    country: "BRAZIL",
    name: "Brazilian Real",
    code: "BRL",
  },
  {
    country: "BRITISH INDIAN OCEAN TERRITORY (THE)",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "BRUNEI DARUSSALAM",
    name: "Brunei Dollar",
    code: "BND",
  },
  {
    country: "BULGARIA",
    name: "Bulgarian Lev",
    code: "BGN",
  },
  {
    country: "BURKINA FASO",
    name: "CFA Franc BCEAO",
    code: "XOF",
  },
  {
    country: "BURUNDI",
    name: "Burundi Franc",
    code: "BIF",
  },
  {
    country: "CABO VERDE",
    name: "Cabo Verde Escudo",
    code: "CVE",
  },
  {
    country: "CAMBODIA",
    name: "Riel",
    code: "KHR",
  },
  {
    country: "CAMEROON",
    name: "CFA Franc BEAC",
    code: "XAF",
  },
  {
    country: "CANADA",
    name: "Canadian Dollar",
    code: "CAD",
  },
  {
    country: "CAYMAN ISLANDS (THE)",
    name: "Cayman Islands Dollar",
    code: "KYD",
  },
  {
    country: "CENTRAL AFRICAN REPUBLIC (THE)",
    name: "CFA Franc BEAC",
    code: "XAF",
  },
  {
    country: "CHAD",
    name: "CFA Franc BEAC",
    code: "XAF",
  },
  {
    country: "CHILE1",
    name: "Unidad de Fomento",
    code: "CLF",
  },
  {
    country: "CHILE2",
    name: "Chilean Peso",
    code: "CLP",
  },
  {
    country: "CHINA",
    name: "Yuan Renminbi",
    code: "CNY",
  },
  {
    country: "CHRISTMAS ISLAND",
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    country: "COCOS (KEELING) ISLANDS (THE)",
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    country: "COLOMBIA1",
    name: "Colombian Peso",
    code: "COP",
  },
  {
    country: "COLOMBIA2",
    name: "Unidad de Valor Real",
    code: "COU",
  },
  {
    country: "COMOROS (THE)",
    name: "Comoro Franc",
    code: "KMF",
  },
  {
    country: "CONGO (THE DEMOCRATIC REPUBLIC OF THE)",
    name: "Congolese Franc",
    code: "CDF",
  },
  {
    country: "CONGO (THE)",
    name: "CFA Franc BEAC",
    code: "XAF",
  },
  {
    country: "COOK ISLANDS (THE)",
    name: "New Zealand Dollar",
    code: "NZD",
  },
  {
    country: "COSTA RICA",
    name: "Costa Rican Colon",
    code: "CRC",
  },
  {
    country: "CROATIA",
    name: "Kuna",
    code: "HRK",
  },
  {
    country: "CUBA",
    name: "Peso Convertible",
    code: "CUC",
  },
  {
    country: "CUBA",
    name: "Cuban Peso",
    code: "CUP",
  },
  {
    country: "CURAÇAO",
    name: "Netherlands Antillean uildr",
    code: "ANG",
  },
  {
    country: "CYPRUS",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "CZECH REPUBLIC (THE)",
    name: "Czech Koruna",
    code: "CZK",
  },
  {
    country: "CÔTE D'IVOIRE",
    name: "CFA Franc BCEAO",
    code: "XOF",
  },
  {
    country: "DENMARK",
    name: "Danish Krone",
    code: "DKK",
  },
  {
    country: "DJIBOUTI",
    name: "Djibouti Franc",
    code: "DJF",
  },
  {
    country: "DOMINICA",
    name: "East Caribbean Dollar",
    code: "XCD",
  },
  {
    country: "DOMINICAN REPUBLIC (THE)",
    name: "Dominican Peso",
    code: "DOP",
  },
  {
    country: "ECUADOR",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "EGYPT",
    name: "Egyptian Pound",
    code: "EGP",
  },
  {
    country: "EL SALVADOR",
    name: "El Salvador Colon",
    code: "SVC",
  },
  {
    country: "EL SALVADOR",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "EQUATORIAL GUINEA",
    name: "CFA Franc BEAC",
    code: "XAF",
  },
  {
    country: "ERITREA",
    name: "Nakfa",
    code: "ERN",
  },
  {
    country: "ESTONIA",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "ETHIOPIA",
    name: "Ethiopian Birr",
    code: "ETB",
  },
  {
    country: "EUROPEAN UNION",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "FALKLAND ISLANDS (THE) [MALVINAS]",
    name: "Falkland Islands Pound",
    code: "FKP",
  },
  {
    country: "FAROE ISLANDS (THE)",
    name: "Danish Krone",
    code: "DKK",
  },
  {
    country: "FIJI",
    name: "Fiji Dollar",
    code: "FJD",
  },
  {
    country: "FINLAND",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "FRANCE",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "FRENCH GUIANA",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "FRENCH POLYNESIA",
    name: "CFP Franc",
    code: "XPF",
  },
  {
    country: "FRENCH SOUTHERN TERRITORIES (THE)",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "GABON",
    name: "CFA Franc BEAC",
    code: "XAF",
  },
  {
    country: "GAMBIA (THE)",
    name: "Dalasi",
    code: "GMD",
  },
  {
    country: "GEORGIA",
    name: "Lari",
    code: "GEL",
  },
  {
    country: "GERMANY",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "GHANA",
    name: "Ghana Cedi",
    code: "GHS",
  },
  {
    country: "GIBRALTAR",
    name: "Gibraltar Pound",
    code: "GIP",
  },
  {
    country: "GREECE",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "GREENLAND",
    name: "Danish Krone",
    code: "DKK",
  },
  {
    country: "GRENADA",
    name: "East Caribbean Dollar",
    code: "XCD",
  },
  {
    country: "GUADELOUPE",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "GUAM",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "GUATEMALA",
    name: "Quetzal",
    code: "GTQ",
  },
  {
    country: "GUERNSEY",
    name: "Pound Sterling",
    code: "GBP",
  },
  {
    country: "GUINEA",
    name: "Guinea Franc",
    code: "GNF",
  },
  {
    country: "GUINEA-BISSAU",
    name: "CFA Franc BCEAO",
    code: "XOF",
  },
  {
    country: "GUYANA",
    name: "Guyana Dollar",
    code: "GYD",
  },
  {
    country: "HAITI",
    name: "Gourde",
    code: "HTG",
  },
  {
    country: "HAITI",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "HEARD ISLAND AND McDONALD ISLANDS",
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    country: "HOLY SEE (THE)",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "HONDURAS",
    name: "Lempira",
    code: "HNL",
  },
  {
    country: "HONG KONG",
    name: "Hong Kong Dollar",
    code: "HKD",
  },
  {
    country: "HUNGARY",
    name: "Forint",
    code: "HUF",
  },
  {
    country: "ICELAND",
    name: "Iceland Krona",
    code: "ISK",
  },
  {
    country: "INDIA",
    name: "India Rupee",
    code: "INR",
  },
  {
    country: "INDONESIA",
    name: "Rupiah",
    code: "IDR",
  },
  {
    country: "INTERNATIONAL MONETARY FUND (IMF)",
    name: "SDR (Special Drawing Right)",
    code: "XDR",
  },
  {
    country: "IRAN (ISLAMIC REPUBLIC OF)",
    name: "Iranian Rial",
    code: "IRR",
  },
  {
    country: "IRAQ",
    name: "Iraqi Dinar",
    code: "IQD",
  },
  {
    country: "IRELAND",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "ISLE OF MAN",
    name: "Pound Sterling",
    code: "GBP",
  },
  {
    country: "ISRAEL",
    name: "New Israeli Sheqel",
    code: "ILS",
  },
  {
    country: "ITALY",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "JAMAICA",
    name: "Jamaican Dollar",
    code: "JMD",
  },
  {
    country: "JAPAN",
    name: "Yen",
    code: "JPY",
  },
  {
    country: "JERSEY",
    name: "Pound Sterling",
    code: "GBP",
  },
  {
    country: "JORDAN",
    name: "Jordanian Dinar",
    code: "JOD",
  },
  {
    country: "KAZAKHSTAN",
    name: "Tenge",
    code: "KST",
  },
  {
    country: "KENYA",
    name: "Kenyan Shilling",
    code: "KES",
  },
  {
    country: "KIRIBATI",
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    country: "KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)",
    name: "North Korean Won",
    code: "KPW",
  },
  {
    country: "KOREA (THE REPUBLIC OF)",
    name: "Won",
    code: "KRW",
  },
  {
    country: "KUWAIT",
    name: "Kuwaiti Dinar",
    code: "KWD",
  },
  {
    country: "KYRGYZSTAN",
    name: "Som",
    code: "KGS",
  },
  {
    country: "LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)",
    name: "Kip",
    code: "LAK",
  },
  {
    country: "LATVIA",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "LEBANON",
    name: "Lebanese Pound",
    code: "LBP",
  },
  {
    country: "LESOTHO",
    name: "Loti",
    code: "LSL",
  },
  {
    country: "LESOTHO",
    name: "Rand",
    code: "ZAR",
  },
  {
    country: "LIBERIA",
    name: "Liberian Dollar",
    code: "LRD",
  },
  {
    country: "LIBYA",
    name: "Libyan Dinar",
    code: "LYD",
  },
  {
    country: "LIECHTENSTEIN",
    name: "Swiss Franc",
    code: "CHF",
  },
  {
    country: "LITHUANIA",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "LUXEMBOURG",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "MACAO",
    name: "Pataca",
    code: "MOP",
  },
  {
    country: "MADAGASCAR",
    name: "Malagasy Ariary",
    code: "MGA",
  },
  {
    country: "MALAWI",
    name: "Kwacha",
    code: "MWK",
  },
  {
    country: "MALAYSIA",
    name: "Malaysian Ringgit",
    code: "MYR",
  },
  {
    country: "MALDIVES",
    name: "Rufiyaa",
    code: "MVR",
  },
  {
    country: "MALI",
    name: "CFA Franc BCEAO",
    code: "XOF",
  },
  {
    country: "MALATA",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "MARSHALL ISLANDS (THE)",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "MARTINIQUE",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "MAURITANIA",
    name: "Ouguiya",
    code: "MRU",
  },
  {
    country: "MAURITIUS",
    name: "Mauritius Rupee",
    code: "MUR",
  },
  {
    country: "MAYOTTE",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP",
    name: "ADB Unit of Account",
    code: "XUA",
  },
  {
    country: "MEXICO",
    name: "Mexican Peso",
    code: "MXN",
  },
  {
    country: "MEXICO",
    name: "Mexican Unidad de Inversion (UDI)",
    code: "MXV",
  },
  {
    country: "MICRONESIA (FEDERATED STATES OF)",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "MOLDOVA (THE REPUBLIC OF)",
    name: "Moldovan Leu",
    code: "MDL",
  },

  {
    country: "MONACO",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "MONGOLIA",
    name: "Tugric",
    code: "MNT",
  },
  {
    country: "MONTENEGRO",
    name: "Euro",
    code: "EUR",
  },

  {
    country: "MONTSERRAT",
    name: "East Caribbean Dollar",
    code: "XCD",
  },
  {
    country: "MOROCCO",
    name: "Moroccan Dirham",
    code: "MAD",
  },
  {
    country: "MOZAMBIQUE",
    name: "Mozambique Metical",
    code: "MZN",
  },
  {
    country: "MYANMAR",
    name: "Kyat",
    code: "MMK",
  },
  {
    country: "NAMIBIA1",
    name: "Namibia Dollar",
    code: "NAD",
  },
  {
    country: "NAMIBIA2",
    name: "Rand",
    code: "ZAR",
  },
  {
    country: "NAURU",
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    country: "NEPAL",
    name: "Nepalese Rupee",
    code: "NPR",
  },
  {
    country: "NETHERLANDS (THE)",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "NEW CALEDONIA",
    name: "CFP Franc",
    code: "XPF",
  },
  {
    country: "NEW ZEALAND",
    name: "New Zealand Dollar",
    code: "NZD",
  },
  {
    country: "NICARAGUA",
    name: "Cordoba Oro",
    code: "NIO",
  },
  {
    country: "NIGER (THE)",
    name: "CFA Franc BCEAO",
    code: "XOF",
  },
  {
    country: "NIGERIA",
    name: "Naira",
    code: "NGN",
  },
  {
    country: "NIUE",
    name: "New Zealand Dollar",
    code: "NZD",
  },
  {
    country: "NORFOLK ISLAND",
    name: "Australian Dollar",
    code: "AUD",
  },
  {
    country: "NORTHERN MARIANA ISLANDS (THE)",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "NORWAY",
    name: "Norwegian Krone",
    code: "NOK",
  },
  {
    country: "OMAN",
    name: "Rial Omani",
    code: "OMR",
  },
  {
    country: "PAKISTAN",
    name: "Pakistan Rupee",
    code: "PKR",
  },
  {
    country: "PALAU",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "PALESTINE, STATE OF",
    name: "No universal currency",
    code: "N/A",
  },
  {
    country: "PANAMA",
    name: "Balboa",
    code: "PAB",
  },
  {
    country: "PANAMA",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "PAPUA NEW GUINEA",
    name: "Kina",
    code: "PGK",
  },
  {
    country: "PARAGUARY",
    name: "Guarani",
    code: "PYG",
  },
  {
    country: "PERU",
    name: "Nuevo Sol",
    code: "PEN",
  },
  {
    country: "PHILIPPINES (THE)",
    name: "Philippine Peso",
    code: "PHP",
  },
  {
    country: "PITCAIRN",
    name: "New Zealand Dollar",
    code: "NZD",
  },
  {
    country: "POLAND",
    name: "Zloty",
    code: "PLN",
  },
  {
    country: "PORTUGAL",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "PUERTO RICO",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "QATAR",
    name: "Qatari Rial",
    code: "QAR",
  },
  {
    country: "REPUBLIC OF NORTH MACEDONIA",
    name: "Denar",
    code: "MKD",
  },
  {
    country: "ROMANIA",
    name: "Romanian Leu",
    code: "RON",
  },
  {
    country: "RUSSIAN FEDERATION (THE)",
    name: "Russian Ruble",
    code: "RUB",
  },
  {
    country: "RWANDA",
    name: "Rwanda Franc",
    code: "RWF",
  },
  {
    country: "RÉUNION",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "SAINT BARTHÉLEMY",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA",
    name: "Saint Helena Pound",
    code: "SHP",
  },
  {
    country: "SAINT KITTS AND NEVIS",
    name: "East Caribbean Dollar",
    code: "XCD",
  },
  {
    country: "SAINT LUCIA",
    name: "East Caribbean Dollar",
    code: "XCD",
  },
  {
    country: "SAINT MARTIN (FRENCH PART)",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "SAINT PIERRE AND MIQUELON",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "SAINT VINCENT AND THE GRENADINES",
    name: "East Caribbean Dollar",
    code: "XCD",
  },
  {
    country: "SAMOA",
    name: "Tala",
    code: "WST",
  },
  {
    country: "SAN MARINO",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "SAO TOME AND PRINCIPE",
    name: "Dobra",
    code: "STN",
  },
  {
    country: "SAUDI ARABIA",
    name: "Saudi Riyal",
    code: "SAR",
  },
  {
    country: "SENEGAL",
    name: "CFA Franc BCEAO",
    code: "XOF",
  },
  {
    country: "SERBIA",
    name: "Serbian Dinar",
    code: "RSD",
  },
  {
    country: "SEYCHELLES",
    name: "Seychelles Rupee",
    code: "SCR",
  },
  {
    country: "SIERRA LEONE",
    name: "Leone",
    code: "SLE",
  },
  {
    country: "SINGAPORE",
    name: "Singapore Dollar",
    code: "SGD",
  },
  {
    country: "SINT MAARTEN (DUTCH PART)",
    name: "Netherlands Antillean Guilder",
    code: "ANG",
  },
  {
    country: "SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS (SUCRE)",
    name: "Sucre",
    code: "XSU",
  },
  {
    country: "SLOVAKIA",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "SLOVENIA",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "SOLOMON ISLANDS",
    name: "Solomon Islands Dollar",
    code: "SBD",
  },
  {
    country: "SOMALIA",
    name: "Somali Shilling",
    code: "SOS",
  },
  {
    country: "SOUTH AFRICA",
    name: "Rand",
    code: "ZAR",
  },
  {
    country: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
    name: "No universal currency",
    code: "N/A",
  },

  {
    country: "SOUTH SUDAN",
    name: "South Sudanese Pound",
    code: "SSP",
  },
  {
    country: "SPAIN",
    name: "Euro",
    code: "EUR",
  },
  {
    country: "SRI LANKA",
    name: "Sri Lanka Rupee",
    code: "LKR",
  },
  {
    country: "SUDAN (THE)",
    name: "Sudanese Pound",
    code: "SDG",
  },
  {
    country: "SURNAME",
    name: "Surinam Dollar",
    code: "SRD",
  },
  {
    country: "SVALBARD AND JAN MAYEN",
    name: "Norwegian Krone",
    code: "NOK",
  },
  {
    country: "SWAZILAND",
    name: "Lilangeni",
    code: "SZL",
  },
  {
    country: "SWEDEN",
    name: "Swedish Krona",
    code: "SEK",
  },
  {
    country: "SWITZERLAND",
    name: "WIR Euro",
    code: "CHE",
  },
  {
    country: "SWITZERLAND",
    name: "Swiss Franc",
    code: "CHF",
  },
  {
    country: "SWITZERLAND",
    name: "Syrian Pound",
    code: "SYP",
  },
  {
    country: "TAIWAN (PROVINCE OF CHINA)",
    name: "New Taiwan Dollar",
    code: "TWD",
  },
  {
    country: "TAJIKISTAN",
    name: "Somani",
    code: "TJS",
  },
  {
    country: "TANZANIA, UNITED REPUBLIC OF",
    name: "Tanzanian Shilling",
    code: "TZS",
  },
  {
    country: "THAILAND",
    name: "Baht",
    code: "THB",
  },

  {
    country: "TIMOR-LESTE",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "TOGO",
    name: "CFA Franc BCEAO",
    code: "XOF",
  },
  {
    country: "TOKELAU",
    name: "New Zealand Dollar",
    code: "NZD",
  },
  {
    country: "TONGA",
    name: "Pa’anga",
    code: "TOP",
  },
  {
    country: "TRINIDAD AND TOBAGO",
    name: "Trinidad and Tobago Dollar",
    code: "TTD",
  },
  {
    country: "TUNISIA",
    name: "Tunisian Dinar",
    code: "TND",
  },
  {
    country: "TURKEY",
    name: "Turkish Lira ",
    code: "TRY",
  },
  {
    country: "TURKMENISTAN",
    name: "Turkmenistan New Manat",
    code: "TMT",
  },
  {
    country: "TURKS AND CAICOS ISLANDS (THE)",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "TUVALU",
    name: "Australian Dollar ",
    code: "AUD",
  },
  {
    country: "UGANDA",
    name: "Uganda Shilling ",
    code: "UGX",
  },
  {
    country: "UKRAINE",
    name: " Hryvnia ",
    code: "UAH",
  },
  {
    country: "UNITED ARAB EMIRATES (THE)",
    name: "UAE Dirham",
    code: "AED",
  },
  {
    country: "UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)",
    name: "Pound Sterling",
    code: "GBP",
  },
  {
    country: "UNITED STATES MINOR OUTLYING ISLANDS (THE)",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "UNITED STATES OF AMERICA (THE)1",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "UNITED STATES OF AMERICA (THE)2",
    name: "US Dollar (Next day)",
    code: "USN",
  },
  {
    country: "URUGUARY",
    name: "Uruguay Peso en nidaes Indexadas (URUIURUI)",
    code: "UYI",
  },
  {
    country: "URUGUARY",
    name: "Peso Uruguayo",
    code: "UYU",
  },
  {
    country: "UZBEKISTAN",
    name: "Uzbekistan Sum",
    code: "UZS",
  },
  {
    country: "VANUATU",
    name: "Vatu",
    code: "VUV",
  },
  {
    country: "VENEZUELA (BOLIVARIAN REPUBLIC OF)",
    name: "Bolivar",
    code: "VEF",
  },
  {
    country: "VENEZUELA (BOLIVARIAN REPUBLIC OF)",
    name: "Bolivar",
    code: "VED",
  },
  {
    country: "VIET NAM",
    name: "Dong",
    code: "VND",
  },
  {
    country: "VIRGIN ISLANDS (BRITISH)",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "VIRGIN ISLANDS (U.S.)",
    name: "US Dollar",
    code: "USD",
  },
  {
    country: "WALLIS AND FUTUNA",
    name: "CFP Franc",
    code: "XPF",
  },
  {
    country: "WESTERN SAHARA",
    name: "Moroccan Dirham",
    code: "MAD",
  },
  {
    country: "YEMEN",
    name: "Yemeni Rial",
    code: "YER",
  },
  {
    country: "ZAMBIA",
    name: "Zambian Kwacha",
    code: "ZMW",
  },
  {
    country: "ZIMBABWE",
    name: "Zimbabwe Dollar",
    code: "ZWL",
  },
  {
    country: "ÅLAND ISLANDS",
    name: "Euro",
    code: "EUR",
  },
];

const Api = new Api_constructor();
let listItem = "";
let IndexNum = "";
let currencyName = "";
let currencyCode = "";

const tbody = document.querySelector("tbody");
const Default = document.querySelector(".default");
const countries = document.querySelector(".countries");
const short = document.querySelector(".short");

Api.country(countryCurrencies);
let from = document.querySelector("#from2");
let to = document.querySelector("#to2");
let amount = document.querySelector("#amount2");
const a = document.querySelectorAll(".aref");
Api.aref(a);
const btn = document.querySelector(".btnInsideAref");
Api.btn(btn, from, to, amount);
