const router = require('express').Router();
const { Dnr } = require('../../models');
const axios = require('axios');
// const call = require('./index')
// const res = require('express/lib/response');
// const { response } = require('express');

router.get('/:id', (req, res) => {

    axios.get('http://services.dnr.state.mn.us/api/sna/detail/v1?id='+req.params.id)
    .then(response => {

        // console.log(response.data);
        // res.status(200).json(response.data)
        const dnrData = {
            sna_id: response.data.result.id,
            sna_name: response.data.result.name,
            sna_tags: response.data.result.tags,
            sna_notes: response.data.result.notes,
            sna_description: response.data.result.description,
            
        }
        console.log(dnrData);
        // res.render(<index>, dnrData)
    }).catch(err => {
        // console.log(err);
        res.status(500).json(err)
    })
})



module.exports = router;