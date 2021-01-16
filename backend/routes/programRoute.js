const express = require("express");

const { createProgram, getPrograms, updateProgram, getProgram,deleteProgram }  = require('../controllers/programController')
const router = express.Router();

router.route("/").get(getPrograms).post(createProgram)
router.route("/:id").put(updateProgram).get(getProgram).delete(deleteProgram)

module.exports = router;