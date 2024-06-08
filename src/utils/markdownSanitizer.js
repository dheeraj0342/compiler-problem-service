const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const turndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const turndownServiceInstance = new turndownService();
    const htmlContent = marked.parse(markdownContent);
    const sanitizedHtmlContent = sanitizeHtml(htmlContent);
    const sanitizedMarkdownContent = turndownServiceInstance.turndown(sanitizedHtmlContent);
    return sanitizedMarkdownContent;
}

module.exports = sanitizeMarkdownContent;