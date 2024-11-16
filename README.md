Sure! Here's an updated version of the `README.md` file with an example JSON structure that matches the one you provided.

---

# Municipality Information API

This is a simple Node.js application that provides an API to query information about municipalities, zones, and settlements in Qatar. The API leverages `Express.js`, `json-query`, and `underscore.js` to provide filtering and querying capabilities on a predefined dataset stored in `Qatar.json`.

### Features

- **Fetch Municipality Information by Key**: Retrieve municipality details based on a provided key.
- **Get Detailed Municipality Information by Index**: Retrieve detailed information for a specific municipality using its index.
- **Get Settlements by Municipality Number**: Fetch settlements associated with a municipality.
- **Get Specific Settlement by Municipality and Zone Number**: Retrieve specific settlement information using both the municipality number and zone number.
- **Fetch All Settlements by Zone**: Retrieve all settlements within a particular zone.
- **Fetch All Municipality Data**: Get all municipality information.
- **Fetch Municipality Data by Language Code**: Retrieve municipality data filtered by the provided language code (`ar` for Arabic, other values for English).

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14.x or above)
- **npm** (Node Package Manager)

You can check if you have Node.js and npm installed by running:

```bash
node -v
npm -v
```

### Installation

1. Clone or download the repository.

2. Navigate into the project directory:

   ```bash
   cd path/to/your/project
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

This will install the following packages:
- `express` – Web framework for Node.js.
- `axios` – Promise-based HTTP client.
- `cheerio` – Library for scraping and parsing HTML.
- `json-query` – A simple query language for querying JSON data.
- `underscore` – A utility library that helps with common JavaScript tasks (used here for filtering).

### Configuration

This application reads data from a JSON file called `Qatar.json` in the root directory. The JSON file should contain the dataset for municipalities, zones, and settlements. Make sure the structure is appropriate for querying.

#### Example Structure of `Qatar.json`

```json
[
  {
    "key": "1",
    "Municipality": "الشمال",
    "Area_km²": "859.8",
    "Area_mi": "331.9",
    "Coordinate": {
      "Latitude": "25.921096",
      "Longitude": "51.338568",
      "Elevation": "10.874",
      "DMS Lat": "25° 55' 15.9456'' N",
      "DMS Lng": "51° 20' 18.8448'' E",
      "GeoHASH": "thse2nz976dbe",
      "UTM Zone": "39R",
      "UTM Easting": "533906.020752344",
      "UTM Northing": "2866990.00173147",
      "Time Zone": "Asia/Qatar",
      "UTC/GMT": "UTC+3"
    },
    "Zone_no": {
      "77": { "1": "Ain Sinan", "2": "Madinat Al Kaaban", "3": "Fuwayrit" },
      "78": { "1": "Abu Dhalouf", "2": "Zubarah" },
      "79": { "1": "Madinat ash Shamal", "2": "Ar Ru'ays" }
    },
    "lng": {
      "ca": "Al Shamal",
      "de": "Asch-Schamal",
      "en": "Al Shamal",
      "es": "Al Shamal",
      "fa": "شهرداری الشمال",
      "fr": "Ash Shamal",
      "ja": "アッ＝シャマール",
      "ru": "Эш-Шамаль",
      "tr": "Eş-Şemal"
    }
  }
]
```

### Running the Application

To start the server, run the following command in the root of the project directory:

```bash
node index.js
```

This will start the server on port `8000`. You should see the following message in the terminal:

```
server running on PORT 8000
```

### API Endpoints

- **GET `/mun/:key`**  
  Retrieves information about a municipality by the given `key`.

  Example:  
  `GET http://localhost:8000/mun/1`

  Response Example:

  ```json
  [
    {
      "key": "1",
      "Municipality": "الشمال",
      "Area_km²": "859.8",
      "Area_mi": "331.9",
      "Coordinate": {
        "Latitude": "25.921096",
        "Longitude": "51.338568",
        "Elevation": "10.874",
        "DMS Lat": "25° 55' 15.9456'' N",
        "DMS Lng": "51° 20' 18.8448'' E",
        "GeoHASH": "thse2nz976dbe",
        "UTM Zone": "39R",
        "UTM Easting": "533906.020752344",
        "UTM Northing": "2866990.00173147",
        "Time Zone": "Asia/Qatar",
        "UTC/GMT": "UTC+3"
      },
      "Zone_no": {
        "77": { "1": "Ain Sinan", "2": "Madinat Al Kaaban", "3": "Fuwayrit" },
        "78": { "1": "Abu Dhalouf", "2": "Zubarah" },
        "79": { "1": "Madinat ash Shamal", "2": "Ar Ru'ays" }
      },
      "lng": {
        "ca": "Al Shamal",
        "de": "Asch-Schamal",
        "en": "Al Shamal",
        "es": "Al Shamal",
        "fa": "شهرداری الشمال",
        "fr": "Ash Shamal",
        "ja": "アッ＝シャマール",
        "ru": "Эш-Шамаль",
        "tr": "Eş-Şemal"
      }
    }
  ]
  ```

- **GET `/getinfo/:mun`**  
  Retrieves detailed information about a municipality by its index.

  Example:  
  `GET http://localhost:8000/getinfo/1`

- **GET `/get/:mun`**  
  Retrieves all settlements for a given municipality number.

  Example:  
  `GET http://localhost:8000/get/1`

- **GET `/get/:mun/:zone`**  
  Retrieves a specific settlement for a given municipality and zone number.

  Example:  
  `GET http://localhost:8000/get/1/77`

- **GET `/zone/all`**  
  Retrieves all settlements by zone number.

  Example:  
  `GET http://localhost:8000/zone/all`

- **GET `/qatar`**  
  Retrieves all municipality data.

  Example:  
  `GET http://localhost:8000/qatar`

- **GET `/lng/:lng`**  
  Retrieves municipality data filtered by the language code (`lng`). Available codes are `ar` (Arabic) and other values for English.

  Example:  
  `GET http://localhost:8000/lng/en`  
  `GET http://localhost:8000/lng/ar`

### Error Handling

- If an invalid municipality or zone number is requested, the server will return a `500 Internal Server Error` response with a message indicating the problem.
  
### Example Responses

- **GET `/mun/1`**:

  ```json
  [
    {
      "key": "1",
      "Municipality": "الشمال",
      "Area_km²": "859.8",
      "Area_mi": "331.9",
      "Coordinate": {
        "Latitude": "25.921096",
        "Longitude": "51.338568",
        "Elevation": "10.874",
        "DMS Lat": "25° 55' 15.9456'' N",
        "DMS Lng": "51° 20' 18.8448'' E",
        "GeoHASH": "thse2nz976dbe",
        "UTM Zone": "39R",
        "UTM Easting": "533906.020752344",
        "UTM Northing": "2866990.00173147",
        "Time Zone": "Asia/Qatar",
        "UTC/GMT": "UTC+3"
      },
      "Zone_no": {
        "77": { "1": "Ain Sinan", "2": "Madinat Al Kaaban", "3": "Fuwayrit" },
        "78": { "1": "Abu Dhalouf", "2": "Zubarah" },
        "79": { "1": "Madinat ash Shamal", "2": "Ar Ru'ays" }
      },
      "lng": {
        "ca": "Al Shamal",
        "de": "Asch-Schamal",
        "en": "Al Shamal",
        "es": "Al Shamal",
        "fa": "شهرداری الشمال",
        "fr": "Ash Shamal",
        "ja": "アッ＝シャマール",
        "ru": "Эш-Шамаль",
        "tr": "Eş-Şemal"
      }
    }

  ```

### Testing

You can test the API endpoints using tools like [Postman](https://www.postman.com/) or directly via your browser for the GET requests.

This updated `README.md` includes an example JSON structure for the `Qatar.json` data and highlights how it fits into the API. Let me know if you need any further changes or additions!