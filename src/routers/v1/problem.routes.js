const express = require('express');

const {ProblemController} = require('../../controllers');

const ProblemRouter = express.Router();

ProblemRouter.get('/ping',ProblemController.pingProblemController)
ProblemRouter.get('/', ProblemController.getProblems);
ProblemRouter.get('/:id', ProblemController.getProblem);
ProblemRouter.post('/', ProblemController.addProblem);
ProblemRouter.put('/:id', ProblemController.updateProblem);
ProblemRouter.delete('/:id', ProblemController.deleteProblem);

module.exports = ProblemRouter;


