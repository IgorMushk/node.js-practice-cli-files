const path = require("path");
const fs = require("fs/promises");
const validateData = require('./helpers/validateData')

async function createFile(fileName, content) {
    const file ={
        fileName,
        content
    }
    
    const validationResult = validateData(file);
    //console.log('createFile - validateData >>>',validationResult.error.details[0]);
    if(validationResult.error) {
        const paramError = validationResult.error.details[0].path[0];
        console.log(`Please specify ${paramError} parameter`);
        return;
    }

}

module.exports = {
    createFile,
} 