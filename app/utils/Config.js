Ext.define('FiltroMat.utils.Config', {
    singleton : true,

    config : {
        apiUrl : 'https://filtromat-filtromat.rhcloud.com/filtromat/',
        authorizationToken : 'Basic Zml0ejpyb3kyMA==',
        
        // Status
        deliveredPaidStatus : 'DELIVERED_PAID' ,
        pendingDeliveryStatus : 'PENDING_DELIVERY',
        deliveredNoPaymentStatus: 'DELIVERED_NO_PAYMENT'
    },

    constructor: function(config) {
        this.initConfig(config);

        this.callParent([config]);
    }
});