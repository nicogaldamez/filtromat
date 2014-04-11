/*
 * File: app/store/OrderStore.js
 *
 */

Ext.define('FiltroMat.store.TransactionStore', {
    extend: 'Ext.data.Store',
    alias: 'store.transactionstore',

    requires: [
        'FiltroMat.model.Transaction',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    config: {
        autoLoad: false,
        model: 'FiltroMat.model.Transaction',
        storeId: 'TransactionStore',
        sorters: {
          property: 'date',
          direction: 'DESC'
        },
        proxy: {
            type: 'rest',
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
    },
    
    buildUrl: function(orderKey) {
      return FiltroMat.utils.Config.getApiUrl() + 'orders/' + orderKey + '/transactions'
    }
});