/*
 * File: app/view/OrderDetail.js
 *
 */

Ext.define('FiltroMat.view.OrderDetail', {
    extend: 'Ext.Container',
    alias: 'widget.orderdetail',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'orderDetail',
        layout: 'vbox',
        cls: 'gray-bkg',
        items: [
          {
            xtype: 'fieldset',
            flex: 3,
            layout: 'fit',
            title: 'TRANSACCIONES',
            items: [
              {
                xtype: 'list',
                id: 'orderDetailList',
                disableSelection: true,
                emptyText: 'No hay transacciones para mostrar',
                itemTpl: [ 
                  '<div class="transaction">',
                    '<div class="left">',
                      '{date}',
                    '</div>',
                    '<div class="right">',
                      '<tpl if="payment">',
                        '<div class="text-success"> ${amount} </div>',
                      '<tpl else>',
                        '<div class="text-delete"> $-{amount} </div>',
                      '</tpl>',  
                    '</div>',
                  '</div>'
                ],
                loadingText: 'Cargando...',
                store: 'TransactionStore'
              }
            ]
          },
          {
            xtype: 'fieldset',
            height: 'auto',
            layout: 'fit',
            cls: 'new-transaction',
            title: 'NUEVA TRANSACCIÓN',
            id: 'newTransactionFieldset',
            items: [
              {
                  xtype: 'numberfield',
                  id: 'name',
                  label: 'Monto',
                  name: 'amount',
                  placeHolder: 'Ingrese el monto',
                  labelWidth: '40%'
              },
              {
                  xtype: 'togglefield',
                  name: 'payment',
                  value: true,
                  label: '¿Es un pago?',
                  labelWidth: '40%'

              }
            ]
          },
          {
              xtype: 'button',
              id: 'saveTransactionBtn',
              margin: '8px 0px 5px 0px',
              ui: 'confirm',
              text: 'Guardar transacción'
          },
          {
            xtype: 'spacer',
            flex: '1',
          }
          
        ]
    },
    
    show: function() {
      var store = Ext.getStore('TransactionStore');
      var order = this.getData();
      var url = "https://filtromat-filtromat.rhcloud.com/filtromat/orders/" + order.key + "/transactions";
      store.getProxy().setUrl('https://filtromat-filtromat.rhcloud.com/filtromat/orders/da1c0579-c213-411b-b43a-54fc396d56ae/transactions');
      store.load();
      this.callParent(arguments);
    }

});