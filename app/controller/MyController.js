/*
 * File: app/controller/MyController.js
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

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    statics: {
        joinMeeting: function(meeting_number, userName) {

        },

        createMeeting: function(userName) {

        },

        createSlide: function(meeting_id, user_name, data) {

        },

        addAnnotation: function(meeting_id, user_name, slide_id, data) {

        },

        setViewNameById: function(item_id) {

            var i = 0;
            while (i < this.getMain().items.items[i].id == item_id)
            {
                i++;
            }
            this.getMain().setActiveItem(i);
        }
    },

    config: {
        refs: {
            main: '#Main'
        },

        control: {
            "#joinMeeting": {
                tap: 'onJoinMeetingTap'
            },
            "#createMeeting": {
                tap: 'onCreateMeetingTap'
            }
        }
    },

    onJoinMeetingTap: function(button, e, eOpts) {
        this.getMain().setActiveItem(1);
    },

    onCreateMeetingTap: function(button, e, eOpts) {
        this.getMain().setActiveItem(2);
    }

});