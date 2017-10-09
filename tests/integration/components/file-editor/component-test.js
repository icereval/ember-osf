import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ace from 'ember-ace';

moduleForComponent('file-editor', 'Integration | Component | file editor', {
    integration: true
});

test('it renders', function(assert) {
    
    // Tests that the template renders without text
    
    this.render(hbs`
        {{file-editor
            fileText=''
            save='save'
        }}
    `);
    const editor = ace.edit(document.querySelector('[data-ember-ace]'));
    assert.equal(editor.getSession().getValue(), '');

});

test('it renders with text', function(assert) {

    // Tests that the template renders when passed text

    this.render(hbs`
        {{file-editor
            fileText='Test text'
            save='save'
        }}
    `);
    const editor = ace.edit(document.querySelector('[data-ember-ace]'));
    assert.equal(editor.getSession().getValue(), 'Test text');

});