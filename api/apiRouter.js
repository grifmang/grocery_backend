const router = require('express').Router();
const api = require('apiModel.js');
// const apiModel = require('./apiModel.js');

router.get('/list', async (req, res) => {
    try {
        const list = await api.getAllItems(); 
        return res.status(200).json({ list });
    } catch {
        return res.status(400).json({ error: "List empty." })
    }
})

router.post('/add', (req, res) => {
    api.addItem(req.body)
    .then(response => {
        return res.status(200).json({ message: "Item added to list." })
    })
    .catch(err => console.log(err));
})

router.get('/clear', (req, res) => {
    api.clearList()
    .then(reponse => {
        return res.status(200).json({ message: "List cleared." })
    })
    .catch(err => console.log(err))
})

module.exports = router;