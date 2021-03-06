/*
 * File: app/store/ProductStore.js
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

Ext.define('FiltroMat.store.ProductStore', {
    extend: 'Ext.data.Store',
    alias: 'store.productstore',

    requires: [
        'FiltroMat.model.Product',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    config: {
        autoLoad: true,
        model: 'FiltroMat.model.Product',
        storeId: 'ProductStore',
        // data: [
//             {
//                 "key": "1ed2031e-fbef-4dc9-9eff-c0121a90d58d",
//                 "name": "Prod10",
//                 "description": "sale 10 pesos",
//                 "currentPrice": 10
//             }
//         ],
        proxy: {
            type: 'rest',
            url: FiltroMat.utils.Config.getApiUrl() + 'products',
            useDefaultXhrHeader: false,
            appendId: false,
            headers: {
              'Accept': 'application/json',
              'Authorization': FiltroMat.utils.Config.getAuthorizationToken()
            },
            reader: {
                type: 'json',
                idProperty: 'key',
                rootProperty: 'data'
            },
            writer: {
                type: 'json'
            }
        }
    }
});