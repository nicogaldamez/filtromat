/*
 * File: app/model/Order.js
 */

Ext.define('FiltroMat.model.Order', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.writer.Json',
        'FiltroMat.model.OrderItem',
    ],

    config: {
        idProperty: 'key',
        fields: [
            {
                name: 'key',
                type: 'auto'
            },
            {
              name: 'dateOfSubmission',
              type: 'datetime',
              convert:function(v,record){
                       return Ext.Date.format(new Date(v), 'd/m/y');
                      }
            },
            {
              name: 'customerKey',
              type: 'auto'
            },
            {
              name: 'customerName',
              type: 'string'
            },
            {
                name: 'totalAmount',
                type: 'float'
            },
            {
                name: 'statusValue',
                type: 'string'
            },
            {
                name: 'statusKey',
                type: 'string'
            }
            
        ],
        
        hasMany: [
          {
            model: 'FiltroMat.model.OrderItem', 
            name: 'orderItems',
            associationKey: 'orderItemResources'
          }
        ],
        
        proxy: {
            type: 'rest',
            url: 'http://filtromat-filtromat.rhcloud.com/filtromat/orders',
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Basic Zml0ejpyb3kyMA=='
            },
            writer: {
                type: 'json'
            }
        }
    }
});