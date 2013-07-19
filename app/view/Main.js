/*
 * File: app/view/Main.js
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

Ext.define('MyApp.view.Main', {
    extend: 'Ext.Container',

    requires: [
        'MyApp.view.MyButton5'
    ],

    config: {
        activeItem: 2,
        id: 'Main',
        itemId: 'mainContainer',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'container',
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
            },
            {
                xtype: 'container',
                id: 'Edit',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        hidden: false,
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        searchBar = main.down("[itemId=searchBar]");

                                    searchBar.show();
                                },
                                iconCls: 'search',
                                text: 'Search'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        addBar = main.down("[itemId=addBar]");

                                    addBar.show();
                                },
                                itemId: 'add',
                                iconCls: 'add',
                                text: 'Add'
                            },
                            {
                                xtype: 'tabmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                action: 'hideAddBar',
                                docked: 'left',
                                iconCls: 'view_grid'
                            },
                            {
                                xtype: 'overflowmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                docked: 'right',
                                iconCls: 'overflow_tab'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'Create',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Meeting',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Title'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'User',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name'
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        hidden: false,
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        searchBar = main.down("[itemId=searchBar]");

                                    searchBar.show();
                                },
                                iconCls: 'search',
                                text: 'Search'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        addBar = main.down("[itemId=addBar]");

                                    addBar.show();
                                },
                                itemId: 'add',
                                iconCls: 'add',
                                text: 'Add'
                            },
                            {
                                xtype: 'tabmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                action: 'hideAddBar',
                                docked: 'left',
                                iconCls: 'view_grid'
                            },
                            {
                                xtype: 'overflowmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                docked: 'right',
                                iconCls: 'overflow_tab'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'Share',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        hidden: false,
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        searchBar = main.down("[itemId=searchBar]");

                                    searchBar.show();
                                },
                                iconCls: 'search',
                                text: 'Search'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        addBar = main.down("[itemId=addBar]");

                                    addBar.show();
                                },
                                itemId: 'add',
                                iconCls: 'add',
                                text: 'Add'
                            },
                            {
                                xtype: 'tabmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                action: 'hideAddBar',
                                docked: 'left',
                                iconCls: 'view_grid'
                            },
                            {
                                xtype: 'overflowmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                docked: 'right',
                                iconCls: 'overflow_tab'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'Join',
                items: [
                    {
                        xtype: 'formpanel',
                        items: [
                            {
                                xtype: 'fieldset',
                                title: 'Meeting',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: 'Title'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                title: 'User',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        label: 'Name'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        hidden: false,
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        searchBar = main.down("[itemId=searchBar]");

                                    searchBar.show();
                                },
                                iconCls: 'search',
                                text: 'Search'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        addBar = main.down("[itemId=addBar]");

                                    addBar.show();
                                },
                                itemId: 'add',
                                iconCls: 'add',
                                text: 'Add'
                            },
                            {
                                xtype: 'tabmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                action: 'hideAddBar',
                                docked: 'left',
                                iconCls: 'view_grid'
                            },
                            {
                                xtype: 'overflowmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                docked: 'right',
                                iconCls: 'overflow_tab'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'Slides',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        hidden: false,
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        searchBar = main.down("[itemId=searchBar]");

                                    searchBar.show();
                                },
                                iconCls: 'search',
                                text: 'Search'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        addBar = main.down("[itemId=addBar]");

                                    addBar.show();
                                },
                                itemId: 'add',
                                iconCls: 'add',
                                text: 'Add'
                            },
                            {
                                xtype: 'tabmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                action: 'hideAddBar',
                                docked: 'left',
                                iconCls: 'view_grid'
                            },
                            {
                                xtype: 'overflowmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                docked: 'right',
                                iconCls: 'overflow_tab'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'camera',
                id: 'Capture',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        hidden: false,
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        searchBar = main.down("[itemId=searchBar]");

                                    searchBar.show();
                                },
                                iconCls: 'search',
                                text: 'Accept'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        addBar = main.down("[itemId=addBar]");

                                    addBar.show();
                                },
                                itemId: 'add',
                                iconCls: 'add',
                                text: 'Retake'
                            },
                            {
                                xtype: 'tabmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                action: 'hideAddBar',
                                docked: 'left',
                                iconCls: 'view_grid'
                            },
                            {
                                xtype: 'overflowmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                docked: 'right',
                                iconCls: 'overflow_tab'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'History',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        hidden: false,
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        searchBar = main.down("[itemId=searchBar]");

                                    searchBar.show();
                                },
                                iconCls: 'search',
                                text: 'Search'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var main = this.up("[itemId=mainContainer]"),
                                        addBar = main.down("[itemId=addBar]");

                                    addBar.show();
                                },
                                itemId: 'add',
                                iconCls: 'add',
                                text: 'Add'
                            },
                            {
                                xtype: 'tabmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                action: 'hideAddBar',
                                docked: 'left',
                                iconCls: 'view_grid'
                            },
                            {
                                xtype: 'overflowmenubutton',
                                menuItems: [
                                    {
                                        text: 'All',
                                        action: 'filterType',
                                        filterType: 'all',
                                        iconCls: 'view_grid'
                                    },
                                    {
                                        text: 'Favorites',
                                        action: 'filterType',
                                        filterType: 'favorites',
                                        iconCls: 'done'
                                    },
                                    {
                                        text: 'BBM',
                                        action: 'filterType',
                                        filterType: 'bbm',
                                        iconCls: 'bbm'
                                    }
                                ],
                                docked: 'right',
                                iconCls: 'overflow_tab'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    initialize: function() {
        var me = this;
        
        me.addListener('typefilter', me.filterType, me);
        //me.enableBubble();
        
        //make sure the first list is the default
        me.setActiveItem(0);
        
        me.callParent();
    }

});