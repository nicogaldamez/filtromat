/*
 * File: app/view/OrdersContainer.js
 *
 */

Ext.define('FiltroMat.view.OrdersContainer', {
    extend: 'Ext.Container',
    alias: 'widget.orderscontainer',

    requires: [
        'Ext.field.Search',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.ActionSheet'
    ],

    config: {
        itemId: 'ordersList',
        layout: 'vbox',
        items: [
            {
                xtype: 'searchfield',
                id: 'searchOrder',
                itemId: 'mysearchfield',
                styleHtmlContent: true,
                placeHolder: 'Filtrar por cliente'
            },
            {
                xtype: 'list',
                flex: 1,
                id: 'ordersList',
                disableSelection: true,
                emptyText: 'No hay pedidos para mostrar',
                itemTpl: [ 
                    '<div class="order">',
                      '<div class="left">',
                        '<div> {customerName} </div>',
                        '<tpl for="orderItems"> <small> {productName} </small> </tpl>',
                      '</div>',
                      '<div class="right">',
                        '<small>',
                          '<div class="text-muted btn btn-primary date"> {dateOfSubmission} </div>',
                          '<tpl if="totalAmount">',
              		            '<div class="debt"> ${totalAmount} </div>',
              		        '<tpl else>',
              		            '<div> ${totalAmount} </div>',
              		        '</tpl>',
                        '</small>',
                      '</div>',
                      '<div class="text-muted"> <small> {statusValue} </small> </div>',
                    '</div>'
                ],
                loadingText: 'Cargando...',
                store: 'OrderStore'
            }
        ]
    }

});