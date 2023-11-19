const path = require("path");
const fs = require("fs/promises");
const validateData = require('./helpers/validateData')

async function createFile(fileName, content) {
    const file ={
        fileName,
        content
    }
    
    const validationResult = validateData(file);
    console.log(validationResult);
}

module.exports = {
    createFile,
}