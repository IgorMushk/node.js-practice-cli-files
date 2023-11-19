const argv = require('yargs').argv;
const { createFile} = require("./files")

function invokeAction({ action, fileName, content }) {
  switch (action) {
    case 'create':
        createFile(fileName,content);
      break;

    case '':

      break;

    case '':

      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

// node index --action create --fileName text.txt --content qwerty
// createFile - validateData >>> 
// { value: { fileName: 'text.txt', content: 'qwerty' } }

// $ node index --action create --fileName text.txt 
// createFile - validateData >>> {
//   value: { fileName: 'text.txt', content: undefined },
//   error: [Error [ValidationError]: "content" is required] {
//     _original: { fileName: 'text.txt', content: undefined },
//     details: [ [Object] ]
//   }
// }

// console.log('createFile - validateData >>>',validationResult.error.details[0]);
// $ node index --action create --fileName text.txt 
// createFile - validateData >>> {
//   message: '"content" is required',
//   path: [ 'content' ],
//   type: 'any.required',
//   context: { label: 'content', key: 'content' }
// }


// $ node index --action create  --content qwerty
// createFile - validateData >>> {
//   message: '"fileName" is required',
//   path: [ 'fileName' ],
//   type: 'any.required',
//   context: { label: 'fileName', key: 'fileName' }
// }


// $ node index --action create --fileName text.txt --content qwerty
// checkExtension >>> txt true
// { extension: 'txt', resultBool: true }


// $ node index --action create --fileName text.doc --content qwerty
// checkExtension >>> doc false
// { extension: 'doc', resultBool: false }