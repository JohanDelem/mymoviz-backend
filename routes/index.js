var express = require('express');
var router = express.Router();


const apiKey = process.env.MYMOVIZ_API_KEY;
router.get( '/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
    .then(response => response.json())
    .then(apiData => {
        res.json(apiData)
    })
  });
  



module.exports = router;
