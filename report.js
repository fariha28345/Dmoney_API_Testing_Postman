const newman = require('newman');
 
newman.run({
    //collection: require('./collection/Dmoney.json'),
    collection:'https://api.postman.com/collections/25356274-dd9008cb-a25f-4049-8aa7-8a3f125c9037?access_key=PMAT-01H1RP7V4JWKXKQ70CER78QTC5',
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});