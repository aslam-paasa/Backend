const { Students } = require('../models/userModel');
const { validationResult } = require('express-validator');

let userController = (req, res) => {

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        /**
         * Save Student Objects:
         * - Ab hm hardcoded value k jagha direct values user se lenge.
         * - localhost:3000?name=Mohammad&surname=Aslam
        */
        const student = new Students({ name: req.query.name, surname: req.query.surname });
        student.save()
            .then((data) => {
                res.status(200).json({
                    message: req.query.name + " " + req.query.surname + " is saved"
                });
            })
            .catch((err) => {
                console.log('Student Object not saved');
            })
    } else {
        res.status(400).json({errors: errors.array()});
    }
}

exports.userController = userController;