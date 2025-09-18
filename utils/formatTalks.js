const _ = require('lodash');

function formatTalks(text) {
    const formatted = `# ${text.title} \n
## ${text.speaker.name}
### ${text.speaker.company}, ${text.speaker.location} \n`
    let speakerLinks = '';
    if (text.speaker.links) {

    text.speaker.links.forEach((link) => {
        let linkType;
        //when markdown doesn't like x over twitter..
        if (link.type === 'x') { linkType = 'X / Twitter'; } else { linkType = _.capitalize(link.type); ``}
        speakerLinks += `- [${linkType}](${link.url}) \n\n`
    })
    }

    speakerLinks += `- [Speaker's Notes (Placeholder)]()\n`
    speakerLinks += `- [Post-conference YouTube Recording (Placeholder)]()`
    const noteEntry = `\n## Abstract: \n
${text.abstract}
## Community talk notes: `
    return formatted + speakerLinks + noteEntry;
}

module.exports = formatTalks;