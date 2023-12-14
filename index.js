const PORT =  8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const configs = require('./Qatar.json') 
const jsonQuery = require('json-query')
const _ = require("underscore");

// get Municipality information by key
app.get('/mun/:key', (req, res) => {
    //const key =req.params.key
    const filtered_municipalitys = _.where(configs, {key:req.params['key']})
    res.json(filtered_municipalitys)
})
// get  Municipality info by municipalitykey
app.get('/getinfo/:mun', (req, res) => {
    const MunKey = req.params.mun -1 ;
    try {
        // Use json-query to retrieve the data for the specified Municipalitys
        const result = jsonQuery(`[${MunKey}]`, { data: configs });

        // Send the result as JSON in the response
        res.json(result.value);
    } catch (error) {
        console.error('Error processing JSON query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// get Settlements by Municipalitys N°
app.get('/get/:mun', (req, res) => {
    const MunKey = req.params.mun -1 ;
    try {
        // Use json-query to retrieve the data for the specified Municipalitys
        const result = jsonQuery(`Zone_no[${MunKey}]`, { data: configs });

        // Send the result as JSON in the response
        res.json(result.value);
    } catch (error) {
        console.error('Error processing JSON query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
// get Settlements by Municipalitys N° and Zone N°
app.get('/get/:mun/:zone', (req, res) => {
    const MunKey = req.params.mun -1 ;
    const ZoneKey = req.params.zone ;
    try {
        // Use json-query to retrieve the data for the specified Municipalitys and zone N°
        const result = jsonQuery(`Zone_no[${MunKey}][${ZoneKey}]`, { data: configs });
        // Send the result as JSON in the response
        res.json(result.value);
    } catch (error) {
        console.error('Error processing JSON query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
// get all Settlements by Zone N°
app.get('/zone/all', (req, res) => {
    try {
        // Use json-query to retrieve the data for the specified zone
        const result = jsonQuery(`Zone_no`, { data: configs });
        // Send the result as JSON in the response      
        res.json(result.value)   
    } catch (error) {
        console.error('Error processing JSON query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
// get all Municipalitys information
app.get('/qatar', (req, res) => {
    res.json(configs)
})

//get Municipalitys by lang code
app.get('/lng/:lng', (req, res) => {
    const lng = req.params.lng 
    if (lng != 'ar'){
        try {
            const result = jsonQuery(`[*]lng[${lng}]`, { data: configs });
            res.json(result.value);
        } catch (error) {
            console.error('Error processing JSON query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }else{
         const result = jsonQuery(`[*]Municipality`, { data: configs });
         res.json(result.value);
    }
   
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))