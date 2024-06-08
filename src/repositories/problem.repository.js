const NotFound = require('../errors/notfound.error');
const {Problem} = require('../models');

class ProblemRepository{

    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title : problemData.title,
                description : problemData.description,
                testCases : problemData.testCases? problemData.testCases : [],
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find();
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            if(!problem)
                throw new NotFound('problem',id);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delteProblem(id){
        try {
            const problem = await Problem.findByIdAndDelete(id);
            if(!problem)
                throw new NotFound('problem',id);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;