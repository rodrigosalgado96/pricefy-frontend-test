const Sales = require('../models/sales')

module.exports = app => {
    app.get('/api/sales', (req, res) => {
        Sales.get()
            .then(data => res.json(data))
            .catch(errors => res.status(400).json(errors))
    })
    app.get('/api/sales/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Sales.getById(id)
            .then(data => res.status(200).json(data))
            .catch(errors => res.status(400).json(errors))
    })

    app.post('/api/sales', (req, res) => {
        const sale = req.body

        Sales.add(sale)
            .then(data =>
                res.status(201).json(data)
            )
            .catch(errors =>
                res.status(400).json(errors)
            )
    })

    app.patch('/api/sales/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const sale = req.body

        Sales.edit(id, sale)
            .then(data =>
                res.status(200).json(data)
            )
            .catch(errors => res.status(400).json(errors))
    })

    app.delete('/api/sales/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Sales.delete(id)
            .then(() => res.status(200).json("Deleted"))
            .catch(errors => res.status(400).json(errors))

    })
}