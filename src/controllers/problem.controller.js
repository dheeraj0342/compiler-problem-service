const {StatusCodes} = require('http-status-codes')
const NotImplemented = require('../errors/notimplemented.error')
const { ProblemService } = require('../services')

function pingProblemController(req,res){
    return res.status(StatusCodes.OK).json({
        message: 'Pong'
    })
}

async function addProblem(req,res,next){
    try {
        const newProblem = await ProblemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            data: newProblem,
            message: 'Problem created successfully',
            err:{}

        })
    } catch (error) {
        next(error)
    }

}

async function getProblems(req,res,next){
    try {
        const problems = await ProblemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            data: problems,
            message: 'Problems fetched successfully',
            err:{}
    })
    } catch (error) {
        next(error)
    }
    

}

async function getProblem(req,res,next){
    try {
        const problem = await ProblemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            data: problem,
            message: 'Problem fetched successfully',
            err:{}
    })
    } catch (error) {
        next(error)
    }
}

async function updateProblem(req,res,next){
    

}

async function deleteProblem(req,res,next){
    try {
        const deletedProblem = await ProblemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            data: deletedProblem,
            message: 'Problem deleted successfully',
            err:{}
        })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    addProblem,
    getProblems,
    getProblem,
    updateProblem,
    deleteProblem,
    pingProblemController
}
