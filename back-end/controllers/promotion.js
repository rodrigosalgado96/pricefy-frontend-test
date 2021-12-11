const Promotion = require('../models/promotion')

module.exports = app => {
    app.get('/promotions', (req, res) => {
        Promotion.get()
            .then(data => res.json(data))
            .catch(errors => res.status(400).json(errors))
    })
    app.get('/promotions/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Promotion.getById(id)
            .then(data => res.status(200).json(data))
            .catch(errors => res.status(400).json(errors))
    })

    app.post('/promotions', (req, res) => {
        const promotion = req.body

        Promotion.add(promotion)
            .then(data =>
                res.status(201).json(data)
            )
            .catch(errors =>
                res.status(400).json(errors)
            )
    })

    app.patch('/promotions/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const promotion = req.body

        Promotion.edit(id, promotion)
            .then(data =>
                res.status(200).json(data)
            )
            .catch(errors => res.status(400).json(errors))
    })

    app.delete('/promotions/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Promotion.delete(id)
            .then(() => res.status(200).json("Deleted"))
            .catch(errors => res.status(400).json(errors))

    })
}