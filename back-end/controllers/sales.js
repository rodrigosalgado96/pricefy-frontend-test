const Promotion = require('../models/sales')

module.exports = app => {
    app.get('/api/sales', (req, res) => {
        Promotion.get()
            .then(data => res.json(data))
            .catch(errors => res.status(400).json(errors))
    })
    app.get('/api/sales/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Promotion.getById(id)
            .then(data => res.status(200).json(data))
            .catch(errors => res.status(400).json(errors))
    })

    app.post('/api/sales', (req, res) => {
        const promotion = req.body

        Promotion.add(promotion)
            .then(data =>
                res.status(201).json(data)
            )
            .catch(errors =>
                res.status(400).json(errors)
            )
    })

    app.patch('/api/sales/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const promotion = req.body

        Promotion.edit(id, promotion)
            .then(data =>
                res.status(200).json(data)
            )
            .catch(errors => res.status(400).json(errors))
    })

    app.delete('/api/sales/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Promotion.delete(id)
            .then(() => res.status(200).json("Deleted"))
            .catch(errors => res.status(400).json(errors))

    })
}