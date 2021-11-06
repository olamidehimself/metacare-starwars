const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/films/');
        // console.log(response.data)

        res.json(response.data);//, opening_crawl: response.data.opening_crawl});
    } catch (error) {
        
    }
});

router.get('/:movie_id', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/films/'+req.params.movie_id);
        delete response.data.director;
        delete response.data.producer;
        delete response.data.planets;
        delete response.data.vehicles;
        delete response.data.species;
        delete response.data.starships;
        delete response.data.updated;
        delete response.data.created;
        delete response.data.url;

        response.data.characters = response.data.characters.map(el => el.replace('https://swapi.dev/api/people', process.env.APP_URL+'/characters/'));

        response.data.movie_url = process.env.APP_URL+'/movies/'+req.params.movie_id;

        res.json(response.data)
    } catch (error) {
        
    }
});

module.exports = router;