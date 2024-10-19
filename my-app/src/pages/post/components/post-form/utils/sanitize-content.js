export const sanizeContent = (content) => content
.replaceAll(/\s+/g, ' ');
.replaceAll('&nbsp', '\n')
.replaceAll('<div><br></div>', '\n')
.replaceAll('<div>', '\n')
.replaceAll('</div>', '')
