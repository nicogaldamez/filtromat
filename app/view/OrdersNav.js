/*
 * File: app/view/OrdersNav.js
 *
 */

Ext.define('FiltroMat.view.OrdersNav', {
    extend: 'Ext.navigation.View',
    alias: 'widget.ordersnav',

    requires: [
        'FiltroMat.view.OrdersContainer',
        'FiltroMat.view.OrderDetail',
        'Ext.navigation.Bar'
    ],

    config: {
        id: 'ordersNav',
        itemId: 'ordersNav',
        defaultBackButtonText: 'Pedidos',
        useTitleForBackButtonText: true,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    iconCls: 'add',
                    align: 'right',
                    itemId: 'newOrderBtn',
                    id: 'newOrderBtn',
                    text: ''
                },
                {
                    xtype: 'button',
                    align: 'right',
                    id: 'moreOrderBtn',
                    iconCls: 'more',
                    hidden: true
                }
            ],
            centered: false,
            docked: 'top'
        },
        items: [
            {
                xtype: 'orderscontainer',
                title: 'Pedidos'
            }
        ]
        
    }

});