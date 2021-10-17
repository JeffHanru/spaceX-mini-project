const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/v3/capsules", async (req, res) => {
  const query = req.query;
  axios({
    method: "get",
    url: "https://api.spacexdata.com/v3/capsules",
    params: query,
  })
    .then((response) => {
      const { data } = response;
      res.status(200).json({
        data,
      });
    })
    .catch(() => {
      return res.status(400).send("request failed");
    });
});

app.get("/v3/landpads/:landpadsId", async (req, res) => {
  const query = req.query;
  axios({
    method: "get",
    url: `https://api.spacexdata.com/v3/landpads/${req.params.landpadsId}`,
    params: query,
  })
    .then((response) => {
      const { data } = response;
      res.status(200).json({
        data: {
          id: data.id,
          full_name: data.full_name,
          status: data.status,
          location: data.location,
        },
      });
    })
    .catch((error) => {
      if (error.response.status == 404) {
        return res.status(404).send("record does not exist");
      }
      return res.status(400).send("request failed");
    });
});

app.listen("4000");
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
