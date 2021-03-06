/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3 beta library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3 beta. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'Contacts',
        'Slide',
        'Annotation'
    ],
    stores: [
        'Contacts',
        'Slides',
        'Annotations'
    ],
    views: [
        'MyContainer',
        null,
        'MyButton5',
        'Main'
    ],
    requires: [
        'app.util.freedraw',
        'app.util.camera'
    ],
    controllers: [
        'MyController'
    ],
    name: 'MyApp',

    launch: function() {

        Ext.create('MyApp.view.Main', {fullscreen: true});
    }

});
