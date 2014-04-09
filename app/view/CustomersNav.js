/*
 * File: app/view/CustomersNav.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('FiltroMat.view.CustomersNav', {
    extend: 'Ext.navigation.View',
    alias: 'widget.customersnav',

    requires: [
        'FiltroMat.view.CustomersContainer',
        'Ext.navigation.Bar'
    ],

    config: {
        id: 'customersNav',
        itemId: 'customersNav',
        defaultBackButtonText: 'Clientes',
        useTitleForBackButtonText: true,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    iconCls: 'add',
                    align: 'right',
                    id: 'newCustomerBtn',
                    text: ''
                },
                {
                    xtype: 'button',
                    align: 'right',
                    id: 'editCustomerBtn',
                    text: 'Editar',
                    hidden: true
                }
            ],
            centered: false,
            docked: 'top'
        },
        items: [
            {
                xtype: 'customerscontainer',
                title: 'Clientes'
            }
        ]
    }

});