/*
 * File: app/store/MyStore.js
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

Ext.define('FiltroMat.store.MyStore', {
    extend: 'Ext.data.Store',

    requires: [
        'FiltroMat.model.Customer',
        'Ext.util.Grouper'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                name: 'Mamie Wright',
                corporateName: 'Jessie Morgan',
                cuit: 'Cuit 1',
                email: 'email0@somedomain.com',
                phone: '912-461-8210',
                address: 'Address 1'
            },
            {
                name: 'Lucy Howard',
                corporateName: 'Mae Lee',
                cuit: 'Cuit 2',
                email: 'email1@somedomain.com',
                phone: '098-995-5339',
                address: 'Address 2'
            },
            {
                name: 'Leonard Harris',
                corporateName: 'Della Ward',
                cuit: 'Cuit 3',
                email: 'email2@somedomain.com',
                phone: '319-603-2143',
                address: 'Address 3'
            },
            {
                name: 'Jessie Morris',
                corporateName: 'Chester Brown',
                cuit: 'Cuit 4',
                email: 'email3@somedomain.com',
                phone: '068-591-8453',
                address: 'Address 4'
            },
            {
                name: 'Susie Williams',
                corporateName: 'Rosa Jackson',
                cuit: 'Cuit 5',
                email: 'email4@somedomain.com',
                phone: '881-153-0094',
                address: 'Address 5'
            }
        ],
        model: 'FiltroMat.model.Customer',
        storeId: 'MyStore',
        grouper: {
            groupFn: function(item) {
                return item.get('name')[0];
            }
        }
    }
});