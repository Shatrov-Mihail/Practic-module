export const sanitizeContent = (content) => content
.replaceAll('&nbsp;', ' ')
.replace(/ +/g, ' ')
.replaceAll('<div><br></div>', '\n')
.replaceAll('<div>', '\n')
.replaceAll('</div>', '');


// .replaceAll('&nbsp', ' ')
// // .replaceAll(/ +/, ' ')
// .replaceAll('<div><br></div>', '\n')
// .replaceAll('<div>', '\n')
// .replaceAll('</div>', '')
