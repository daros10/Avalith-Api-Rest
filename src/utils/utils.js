module.exports = {
    isIterable: function(value) {
        return Symbol.iterator in Object(value);
    },

    updateDeveloper: function(id, body, res, Developer) {
        Developer.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, developerDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    error: err
                });
            }
            if (developerDB === null) {
                return res.status(400).json({
                    ok: false,
                    error: {
                        message: 'Developer not found.'
                    }
                });
            }
            res.json({
                ok: true,
                developer: developerDB
            });
        });
    }
};