import express from "express";
import axios from "axios";
import Papa from 'papaparse';

const app = express();

app.get("/", (request, response) => {
  axios
    .get("http://www.theplantlist.org/tpl1.1/search", {
      params: {
        q: "Eichhornia azurea",
        csv: true,
      },
      timeout: 10000,
    })
    .then((res) => {
        return response.send(res.data);
      })
      .catch((error) => {
        if (error.response) {
          throw new Error(
            `Website response error with status: ${error.response.status}`,
          );
        } else if (error.request) {
          throw new Error(`Website request error: ${error.request}`);
        } else {
          throw new Error(`Error in setting up the request: ${error.message}`);
        }
      });

});

app.listen(3333, () => {
  console.log("Aplicação rodandossss em http://localhost:3333");
});
