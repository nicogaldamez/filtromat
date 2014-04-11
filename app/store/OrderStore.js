/*
 * File: app/store/OrderStore.js
 *
 */

Ext.define('FiltroMat.store.OrderStore', {
    extend: 'Ext.data.Store',
    alias: 'store.orderstore',

    requires: [
        'FiltroMat.model.Order',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    config: {
        autoLoad: true,
        model: 'FiltroMat.model.Order',
        storeId: 'OrderStore',
        // data: [
//             {
//                 "key": "da1c0579-c213-411b-b43a-54fc396d56ae",
//                 "dateOfSubmission": 1396405777000,
//                 "customerKey": "975b456e-d057-40ee-94fa-3e459daa48df",
//                 "customerName": "Nico Galdamez",
//                 "orderItemResources": [
//                     {
//                       "key": "f4b42916-20ee-4295-b1af-a5b733f5d108",
//                         "orderKey": "da1c0579-c213-411b-b43a-54fc396d56ae",
//                         "productKey": "1ed2031e-fbef-4dc9-9eff-c0121a90d58d",
//                         "productName": "FiltroMat",
//                         "quantity": 100,
//                         "unitPrice": 10
//                     }
//                 ],
//                 "totalAmount": 1000,
//                 "status": "No enviado"
//             },
//             {
//                 "key": "da1c0579-c213-411b-b43a-54fc396d56a2",
//                 "dateOfSubmission": 1396405777000,
//                 "customerKey": "975b456e-d057-40ee-94fa-3e459daa48df",
//                 "customerName": "Mike Djebaile",
//                 "orderItemResources": [
//                     {
//                         "key": "f4b42916-20ee-4295-b1af-a5b733f5d100",
//                         "orderKey": "da1c0579-c213-411b-b43a-54fc396d56ae",
//                         "productKey": "1ed2031e-fbef-4dc9-9eff-c0121a90d58d",
//                         "productName": "Tanga",
//                         "quantity": 2,
//                         "unitPrice": 60
//                     }
//                 ],
//                 "totalAmount": 0,
//                 "status": "No enviado"
//             }
//         ],
        proxy: {
            type: 'rest',
            url: FiltroMat.utils.Config.getApiUrl() + 'orders',
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
            }
        }
    },
    
    buildStatusUrl: function(orderKey) {
      return FiltroMat.utils.Config.getApiUrl() + 'orders/' + orderKey + '/status'
    }
});