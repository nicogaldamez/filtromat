/*
 * File: app/store/CustomerStore.js
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

Ext.define('FiltroMat.store.CustomerStore', {
    extend: 'Ext.data.Store',
    alias: 'store.customerstore',

    requires: [
        'FiltroMat.model.Customer',
        'Ext.util.Grouper',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    config: {
        autoLoad: true,
        model: 'FiltroMat.model.Customer',
        storeId: 'CustomerStore',
        grouper: {
            groupFn: function(item) {
                return item.get('name')[0];
            }
        },
        // data: [
//             {
//                 "key": "975b456e-d057-40ee-94fa-3e459daa48df",
//                 "name": "Nico Galdamez",
//                 "cuit": "20-31223432-8",
//                 "corporateName": "Razon Social",
//                 "address": "Calle 11",
//                 "phone": "4836094",
//                 "email": "nico@hotmail.com",
//                 "totalDebt": 1000
//             },
//             {
//                 "key": "975b456e-d057-40ee-94fa-3e459daa48d2",
//                 "name": "Sergio Rocatagliata",
//                 "cuit": "20-31223432-8",
//                 "corporateName": "Razon Social",
//                 "address": "Calle 11",
//                 "phone": "4836094",
//                 "email": "gay@hotmail.com",
//                 "totalDebt": 1000
//             }
//         ],
        proxy: {
            type: 'rest',
            url: 'https://filtromat-filtromat.rhcloud.com/filtromat/customers',
            useDefaultXhrHeader: false,
            appendId: false,
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Basic Zml0ejpyb3kyMA=='
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