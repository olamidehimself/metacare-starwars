const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get('/all', async (req, res) => {
    try {
        const search = req.query.search
        if (search) {
            response = await axios.get('https://swapi.dev/api/people/?search='+req.query.search);
        } else {
            response = await axios.get('https://swapi.dev/api/people/');
        }

        res.json(response.data);
    } catch (error) {
        console.log(error)
    }
});

router.get('/:character_id', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/people/'+req.params.character_id);
        // delete response.data.director;
        // delete response.data.producer;
        // delete response.data.planets;
        delete response.data.vehicles;
        delete response.data.species;
        delete response.data.starships;
        delete response.data.updated;
        delete response.data.edited;
        delete response.data.created;
        delete response.data.url;
        delete response.data.homeworld;

        response.data.movies = response.data.films.map(el => el.replace('https://swapi.dev/api/films', process.env.APP_URL+'/movies/'));
        delete response.data.films

        // response.data.character_url = process.env.APP_URL+'/characters/'+req.params.character_id;

        res.json(response.data)
    } catch (error) {
        
    }
});
module.exports = router;
