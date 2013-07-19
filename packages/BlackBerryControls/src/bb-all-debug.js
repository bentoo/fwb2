//debugger;
/**
 * User extention designed to be used on the BB10 platform.
 */
Ext.define('Ext.ux.ContextMenu', {
    extend: 'Ext.Menu',
    alias: 'widget.contextmenu',

    config: {
        /**
         * @hide
         */
        ui: 'context',

        /**
         * @hide
         */
        layout: {
            type: 'vbox',
            pack: 'center'
        }
    }
});
/**
 * User extention designed to be used on the BB10 platform.
 *
 * @private
 */
Ext.define('Ext.ux.MenuButton', {
    extend: 'Ext.Button',
    alias: 'widget.menubutton',
    requires: ['Ext.ux.ContextMenu'],

    config: {
        /**
         * @hide
         */
        ui: 'tab',

        /**
         * @hide
         */
        cls: 'menu',

        menuItems: [],

        /**
         * @hide
         */
        menuSide: 'right',

        /**
         * @hide
         */
        menuCover: false,

        /**
         * @hide
         */
        listeners: {
            tap: 'onTap'
        }
    },

    /**
     * @private
     * Used to show the menu associated with this button
     */
    onTap: function(e) {
        if (this.$menu) {
            this.$menu.destroy();
        }

        this.element.addCls('x-open');

        this.$menu = Ext.create('Ext.ux.ContextMenu', {
            items: this.getMenuItems(),
            listeners: {
                scope: this,
                hide: function() {
                    if (this.$menu) {
                        this.element.removeCls('x-open');
                        Ext.Viewport.removeMenu(this.getMenuSide());
                        this.$menu.destroy();
                    }
                }
            }
        });

        this.$menu.on({
            scope: this,
            tap: this.onMenuButtonTap,
            delegate: 'button'
        });

        Ext.Viewport.setMenu(this.$menu, {
            side: this.getMenuSide(),
            cover: this.getMenuCover()
        });

        Ext.Viewport.showMenu(this.getMenuSide());
    },

    onMenuButtonTap: Ext.emptyFn
});
/**
 * User extention designed to be used on the BB10 platform.
 *
 * This component is used to recreate the Tab Menu component of the BB10 SDK. To recreate a native BB10 experience, it is
 * advised to insert this component into a {@link Ext.Toolbar} and have it aligned to the left edge.
 *
 *     // Used within a toolbar
 *     {
 *         xtype: 'toolbar',
 *         items: [{
 *             xclass: 'Ext.ux.TabMenuButton',
 *             text: 'Chats',
 *             iconCls: 'chats',
 *             menuItems: [{
 *                 text: 'Chats',
 *                 iconCls: 'chats',
 *                 handler: function() {
 *                     // do something
 *                 }
 *             }, {
 *                 text: 'Contacts',
 *                 iconCls: 'contacts',
 *                 handler: function() {
 *                     // do something
 *                 }
 *             }]
 *         }]
 *     }
 */
Ext.define('Ext.ux.TabMenuButton', {
    extend: 'Ext.ux.MenuButton',
    alias: 'widget.tabmenubutton',

    config: {
        /**
         * @hide
         */
        ui: 'tab',

        /**
         * @hide
         */
        cls: 'tabmenu',

        /**
         * The items to be used within the {@link Ext.Menu} which is shown when this button is tapped.
         *
         *     // Used within a toolbar
         *     {
         *         xtype: 'toolbar',
         *         items: [{
         *             xclass: 'Ext.ux.TabMenuButton',
         *             text: 'Chats',
         *             iconCls: 'chats',
         *             menuItems: [{
         *                 text: 'Chats',
         *                 iconCls: 'chats',
         *                 handler: function() {
         *                     // do something
         *                 }
         *             }, {
         *                 text: 'Contacts',
         *                 iconCls: 'contacts',
         *                 handler: function() {
         *                     // do something
         *                 }
         *             }]
         *         }]
         *     }
         * 
         * @type {}
         */
        menuItems: [],

        /**
         * @hide
         */
        menuSide: 'left'
    },

    onMenuButtonTap: function(button) {
        if (button) {
            this.setText(button.getText());
            this.setIconCls(button.getIconCls());
        }

        Ext.Viewport.hideMenu(this.getMenuSide());
    }
});
/**
 * User extention designed to be used on the BB10 platform.
 *
 * This component is used to recreate the Overflow Menu component of the BB10 SDK. To recreate a native BB10 experience, it is
 * advised to insert this component into a {@link Ext.Toolbar} and have it aligned to the right edge.
 *
 *     // Used within a toolbar
 *     {
 *         xtype: 'toolbar',
 *         items: [{
 *             xclass: 'Ext.ux.OverflowMenuButton',
 *             menuItems: [{
 *                 text: 'Chats',
 *                 iconCls: 'chats',
 *                 handler: function() {
 *                     // do something
 *                 }
 *             }, {
 *                 text: 'Contacts',
 *                 iconCls: 'contacts',
 *                 handler: function() {
 *                     // do something
 *                 }
 *             }, {
 *                 docked: 'bottom',
 *                 text: 'Settings',
 *                 iconCls: 'settings',
 *                 handler: function() {
 *                     // do something
 *                 }
 *             }]
 *         }]
 *     }
 */
Ext.define('Ext.ux.OverflowMenuButton', {
    extend: 'Ext.ux.MenuButton',
    alias: 'widget.overflowmenubutton',

    config: {
        /**
         * @hide
         */
        cls: 'overflow',

        /**
         * @hide
         */
        ui: 'normal',

        /**
         * The items to be used within the {@link Ext.Menu} which is shown when this button is tapped.
         *
         *     // Used within a toolbar
         *     {
         *         xtype: 'toolbar',
         *         items: [{
         *             xclass: 'Ext.ux.ActionMenuButton',
         *             text: 'Chats',
         *             iconCls: 'chats',
         *             menuItems: [{
         *                 text: 'Chats',
         *                 iconCls: 'chats',
         *                 handler: function() {
         *                     // do something
         *                 }
         *             }, {
         *                 text: 'Contacts',
         *                 iconCls: 'contacts',
         *                 handler: function() {
         *                     // do something
         *                 }
         *             }, {
         *                 docked: 'bottom',
         *                 text: 'Settings',
         *                 iconCls: 'settings',
         *                 handler: function() {
         *                     // do something
         *                 }
         *             }]
         *         }]
         *     }
         * 
         * @type {}
         */
        menuItems: [],

        /**
         * @hide
         */
        menuCover: true
    }
});

/**
 * User extention designed to be used on the BB10 platform.
 */
Ext.define('Ext.ux.ApplicationMenu', {
    extend: 'Ext.Menu',
    alias: 'widget.applicationmenu',

    config: {
        /**
         * @hide
         */
        ui: 'application',

        /**
         * @hide
         */
        layout: {
            type: 'hbox',
            pack: 'start'
        },

        defaults: {
            flex: 0,
            iconAlign: 'top',
            ui: 'tab'
        }
    }
});