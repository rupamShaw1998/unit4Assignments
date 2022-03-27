const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.models");

const router = express.Router();

router.post(
    "/",
    body("firstName")
        .trim()
        .not()
        .isEmpty()
        .withMessage("First Name cannot be empty")
        .isLength({ min: 3 })
        .withMessage("First Name must be at least 3 characters"),
    body("lastName")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Last Name cannot be empty")
        .isLength({ min: 3 })
        .withMessage("Last Name must be at least 3 characters"),
    body("email")
        .isEmail()
        .custom(async (value) => {
            const user = await User.findOne({ email: value });
            if(user) {
                throw new Error("Email is already taken");
            }
            return true;
        }),
    body("age")
        .not()
        .isEmpty()
        .withMessage("Age cannot be empty")
        .isNumeric()
        .withMessage("Age must be a number between 1 and 120")
        .custom((val) => {
            if(val<1 || val>100)
                throw new Error("Incorrect age provided");
            return true;
        }),
    body("pincode")
        .not()
        .isEmpty()
        .withMessage("Pincode is required")
        .isNumeric()
        .withMessage("Pincode must be number")
        .custom((value) => {
            if(value>999999 || value<100000)
                throw new Error("Pincode must be of six digit");
            return true;
        }),
    body("gender")
        .not()
        .isEmpty()
        .withMessage("Gender cannot be empty")
        .custom((val) => {
            if(val!="Male" || val!="Female" || val!="Others")
                throw new Error("Invalid Gender!");
            return true;
        }),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            console.log({ errors });
            if(!errors.isEmpty())
                return res.status(400).send({ errors: errors.array() });
            
            const user = await User.create(req.body);
            return res.status(201).send(user);
        }
        catch(err) {
            return res.status(500).send({ message: err.message });
        }
    }
);

module.exports = router;