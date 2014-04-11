/*
 * File: app/model/Transaction.js
 *
 */

Ext.define('FiltroMat.model.Transaction', {
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
              name: 'date',
              type: 'datetime',
              convert:function(v,record){
                       return Ext.Date.format(new Date(v), 'd/m/y');
                      }
            },
            {
                name: 'amount',
                type: 'float'
            },
            {
                name: 'payment',
                type: 'boolean'
            }
        ],
        belongsTo: { model: 'FiltroMat.model.Order', name: 'order', foreignKey: 'orderKey' },
        validations: [
            {
                type: 'presence',
                field: 'amount'
            }
        ],
        proxy: {
            type: 'rest',
            headers: {
              'Accept': 'application/json',
              'Authorization': FiltroMat.utils.Config.getAuthorizationToken()
            },
            writer: {
                type: 'json'
            }
        }
    }
});