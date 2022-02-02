const router = require('express').Router();
const { Dnr } = require('../../models');
const axios = require('axios');
// const res = require('express/lib/response');
// const { response } = require('express');

router.get('/', (req, res) => {
    axios.get('http://services.dnr.state.mn.us/api/sna/detail/v1?id=sna02008')
    .then(response => {
        // console.log(response.data);
        res.status(200).json(response.data)
    }).catch(err => {
        // console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router;