const express = require('express');
const _ = require('underscore');

const utils = require('../utils/utils');
const Developer = require('../models/developer_model');
const { json } = require('body-parser');

const app = express();

app.get('/developer', (req, res) => {
    Developer.find({})
        .exec((err, developersDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                Ok: true,
                developers: developersDB
            });
        });
});

app.post('/developer', (req, res) => {
    let body = req.body;
    if (body.tecnologias_conocidas.length > 0) {

        try {
            let knowTechnologies = JSON.parse(body.tecnologias_conocidas);

            if (!utils.isIterable(knowTechnologies)) {
                return res.status(400).json({
                    Ok: false,
                    message: 'Technologies are not iterable. You need to send in array format.',
                });
            }

            let technologiesToSave = new Array();
            for (let technology of knowTechnologies) {
                technologiesToSave.push(technology);
            }

            let developer = new Developer({
                nombres_completos: body.nombres_completos,
                link_github: body.link_github,
                tecnologias_conocidas: technologiesToSave
            });

            developer.save((err, developerDB) => {
                if (err) {
                    return res.status(400).json({
                        Ok: false,
                        message: err,
                    });
                }
                res.json({
                    Ok: true,
                    developer: developerDB,
                })
            });

        } catch (err) {
            return res.status(400).json({
                Ok: false,
                message: 'Technologies are not iterable. You need to send in array format.',
            });
        }

    } else {
        return res.status(400).json({
            Ok: false,
            message: 'You must specify one or more technologies.',
        });
    }
});

app.put('/developer/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombres_completos', 'link_github']);

    if (req.body.tecnologias_conocidas) {
        let knowTechnologies = JSON.parse(req.body.tecnologias_conocidas);

        if (!utils.isIterable(knowTechnologies)) {
            return res.status(400).json({
                Ok: false,
                message: 'Technologies are not iterable. You need to send in array format.',
            });
        } else {
            let technologiesToSave = new Array();
            for (let technology of knowTechnologies) {
                technologiesToSave.push(technology);
            }

            body.tecnologias_conocidas = technologiesToSave;
            utils.updateDeveloper(id, body, res, Developer);
        }
    } else {
        utils.updateDeveloper(id, body, res, Developer);
    }
});

app.delete('/developer/:id', (req, res) => {
    let id = req.params.id;
    Developer.findByIdAndRemove(id, (err, developerDeleted) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (developerDeleted === null) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Developer not found.'
                }
            });
        }
        res.json({
            ok: true,
            developer: developerDeleted
        });
    });
});

module.exports = app;