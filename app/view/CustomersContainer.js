/*
 * File: app/view/CustomersContainer.js
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

Ext.define('FiltroMat.view.CustomersContainer', {
    extend: 'Ext.Container',
    alias: 'widget.customerscontainer',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.dataview.IndexBar'
    ],

    config: {
        id: 'customers',
        layout: 'fit',
        items: [
            {
                xtype: 'list',
                id: 'dataList',
                emptyText: 'No hay clientes para mostrar',
                itemTpl: [
                    '<div> {name} </div>'
                ],
                loadingText: 'Cargando...',
                store: 'MyStore',
                grouped: false,
                onItemDisclosure: true,
                indexBar: true
            }
        ]
    }

});