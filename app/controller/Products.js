/*
 * File: app/controller/Products.js
 *
 */

Ext.define('FiltroMat.controller.Products', {
    extend: 'Ext.app.Controller',
    alias: 'controller.products',
    
    requires: [
        'FiltroMat.view.ProductDetail'
    ],

    config: {
        refs: {
            newProductBtn: '#newProductBtn',
            searchProduct: '#searchProduct',
            saveProductBtn: '#saveProductBtn',
            newProductForm: '#newProductForm',
            productDetail: '#productDetail',
            deleteProductBtn: '#deleteProductBtn',
            editProductBtn: '#editProductBtn',
            productList: '#productsList',
            productsNav: '#productsNav'
        },

        control: {
            "newProductBtn": {
                tap: 'onNewProductBtnTap'
            },
            "searchProduct": {
                keyup: 'onSearchProduct',
                clearicontap: 'onSearchProduct'
            },
            "saveProductBtn": {
                tap: 'onSaveProductBtnTap'
            },
            "deleteProductBtn": {
                tap: 'onDeleteProductBtnTap'
            },
            "editProductBtn": {
                tap: 'onEditProductBtnTap'
            },
            "productList": {
                itemsingletap: 'onListItemSingletap'
            },
            "productsNav": {
                activeitemchange: 'onNavigationviewActiveItemChange'
            },
        }
    },
    
    // Click en la lista de productos
    onListItemSingletap: function(dataview, index, target, record, e, eOpts) {
        var navView = this.getProductsNav();

        var productDetail = Ext.create('FiltroMat.view.ProductDetail', {itemId:'productDetail'});
        // var productDetail = this.getProductDetail();
        productDetail.setData(record.getData());
        navView.push(productDetail);
    },
    
    // Click en el botón para crear un producto
    onNewProductBtnTap: function(button, e, eOpts) {
        var navView = this.getProductsNav();
        navView.push({
                        xtype: 'newproduct'
                    });
    },
    
    // Evento que se ejecuta cuando cambia la view del navigation view de productos
    onNavigationviewActiveItemChange: function(container, value, oldValue, eOpts) {
        var newProductBtn = this.getNewProductBtn();
        var editProductBtn = this.getEditProductBtn();
        newProductBtn.hide();
        editProductBtn.hide();
        if (value.getItemId() == 'productsList') {
          newProductBtn.show();
        } else if (value.getItemId() == 'productDetail') {
          editProductBtn.show();
        }
    },

    // Keyup. Búsqueda/Filtro de productos
    onSearchProduct: function(textfield, e, eOpts) {
        var value = textfield.getValue();
        var store = Ext.getStore('ProductStore');
        store.clearFilter();
        store.filter('name', value);
    },

    // Click en el botón para guardar un producto
    onSaveProductBtnTap: function(button, e, eOpts) {
        var newProductForm = this.getNewProductForm();
        var values = newProductForm.getValues();
        var store = Ext.getStore('ProductStore');
        var record = newProductForm.getRecord();

        var newRecord = (record === null);

        // Si es un registro nuevo limpio el key
        if (newRecord) {
            record = Ext.create("FiltroMat.model.Product", values);
            record.id = record.internalId = record.data.key = '';
        } else {
            record.set(values);
        }

        errs = record.validate();
        if (!errs.isValid()) {
            Ext.Msg.alert('Error', 'Verifique que cargó correctamente los campos');
        } else {
            me = this;
            record.save({
                success: function() {
                    if (newRecord) {
                        store.add(record);
                        var recordData = record;
                    } else {
                        // Actualizo el store
                        var recordData = store.getById(record.id);
                        recordData.set(values);
                        me.getProductDetail().setData(recordData.data);
                    }

                    // Cierro el panel
                    var navView = me.getProductsNav();
                    navView.pop();
                },
                error: function() {
                    Ext.Msg.alert('Error', 'Ocurrió un error al intentar guardar el producto');
                }
            });


        }

    },
    
    // Click en el botón para eliminar un producto
    onDeleteProductBtnTap: function(button, e, eOpts) {
        Ext.Msg.confirm("Eliminar Producto", "¿Está seguro?", function(btn){
          if (btn == 'yes') {
            var data = this.getProductDetail().getData();
            var store = Ext.getStore("ProductStore");
            var record = store.getById(data.key);
            record.id = record.data.key;

            // Elimino el registro
            record.erase({
                 success: function() {
                    // Cierro la ventana de detalle
                    var navView = this.getProductsNav();
                    navView.pop();
                 },
                 error: function() {
                     Ext.Msg.alert('Error', 'Ocurrió un error al intentar eliminar el producto');
                 }
            });
          }
        });
    },
    
    // Click en el botón para editar un producto
    onEditProductBtnTap: function(button, e, eOpts) {
        var data = this.getProductDetail().getData();
        var store = Ext.getStore("ProductStore");
        var record = store.getById(data.key);
        record.id = record.data.key;

        var editProduct = Ext.create('FiltroMat.view.NewProduct', {itemId: 'newProductForm'});
        editProduct.setRecord(record);
        var navView = this.getProductsNav();
        navView.push(editProduct);
    }

});