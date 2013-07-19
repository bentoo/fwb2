/*
 * File: app/view/Splash.js
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

Ext.define('MyApp.view.Splash', {
    extend: 'Ext.Container',

    requires: [
        'MyApp.view.MyButton5'
    ],

    config: {
        padding: 10,
        layout: {
            pack: 'center',
            type: 'vbox'
        },
        items: [
            {
                xtype: 'spacer'
            },
            {
                xtype: 'spacer',
                html: '<div style="text-align:center"><img src="http://feedgrowth.com/wp-content/uploads/2009/09/whiteboard-capture-logo.png"/></div>'
            },
            {
                xtype: 'spacer'
            },
            {
                xtype: 'mybutton5',
                id: 'createMeeting',
                margin: 'auto'
            },
            {
                xtype: 'spacer',
                maxHeight: 30
            },
            {
                xtype: 'mybutton5',
                id: 'joinMeeting',
                margin: 'auto',
                text: 'Join Meeting'
            },
            {
                xtype: 'spacer'
            }
        ]
    }

});