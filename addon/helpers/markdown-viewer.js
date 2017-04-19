import Ember from 'ember';

const { htmlSafe } = Ember.String;

/**
Render markdown text for selected rules.

 Usage example:
 ```handlebars
 This is the text we want to render: {{markdown-viewer '*text is italic*'}}
 ```

 @class markdown-viewer-helper
 @uses markdownit
 */
/* global markdownit */
export function markdownViewer(params) {

    const [markdown] = params;
    const html = markdownit('zero', {
        html: false,        // Enable HTML tags in source

        linkify: false,     // Autoconvert URL-like text to links

        typographer: false, // Enable some language-neutral replacement + quotes beautification

        quotes: '“”‘’',
        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).

        xhtmlOut: false,    // Use '/' to close single tags (<br />).
        // This is only for full CommonMark compatibility.

        breaks: true,      // Convert '\n' in paragraphs into <br>
    }).enable(['list', 'newline', 'emphasis', 'paragraph']);
    const renderedHtml = html.render(markdown);

    return htmlSafe(renderedHtml);
}

export default Ember.Helper.helper(markdownViewer);