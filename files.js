const path = require("path");
const fs = require("fs/promises");
const validateData = require('./helpers/validateData');
const checkExtension = require("./helpers/checkExtension");

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
    
    //console.log(checkExtension (fileName));
    const checkFile =  checkExtension(fileName);
    //console.log(checkFile);
    if (!checkFile.result) {
        console.log(`Sorry this app doesn't support files with ${checkFile.extension} extension`)
        return
    };

}

module.exports = {
    createFile,
} 