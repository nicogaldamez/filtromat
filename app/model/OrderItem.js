/*
 * File: app/model/Order.js
 */

Ext.define('FiltroMat.model.OrderItem', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.writer.Json'
    ],

    config: {
        idProperty: 'key',
        fields: [
            {
                name: 'key',
                type: 'auto'
            },
            {
              name: 'orderKey',
              type: 'auto'
            },
            {
              name: 'productKey',
              type: 'auto'
            },
            {
              name: 'productName',
              type: 'string'
            },
            {
                name: 'quantity',
                type: 'float'
            },
            {
                name: 'unitPrice',
                type: 'float'
            }
        ],
        belongsTo: { model: 'FiltroMat.model.Order', name: 'order', foreignKey: 'orderKey' }
    }
});