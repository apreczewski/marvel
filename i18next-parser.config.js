
const { readFile, readdirSync, writeFile, readFileSync } = require('fs')


const project = 'calcexpert'
const basefolders = ['pages']

basefolders.map(basefolder => {
  const url = `src/${basefolder}`;
  const folders = readdirSync(url);

  console.log('url >> ', url)
  console.log('folders >> ', folders)

  folders.map(folder => {
    console.log('folder >> ', project, folder)

    module.exports = {
      locales: ['en', 'pt', 'es'],
      output: 'src/translate/languages/$LOCALE/$NAMESPACE.json',
      input: [`src/${basefolders}/**/*.tsx`],
      sort: true,
      customValueTemplate: {
        message: "${defaultValue}",
      }
    };

  })
})




// module.exports = {
//   locales: ['en', 'pt', 'es'],
//   output: 'src/translate/languages/$LOCALE/$NAMESPACE.json',
//   input: ['src/pages/**/*.tsx', 'src/hooks/**/*.tsx'],
//   sort: true,
// };



