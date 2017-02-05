(function () {
    "use strict"

    function productsService($http){
        let products = {list: []};

        $http.get('http://localhost:2095/products').then(loadProducts);

        function loadProducts(response){
            products.list = response.data;
        }

        return {
            get(){
                return products;
            }
        }
    }

    function cartService(){
        let cartItems = {list: []};

        function getItems(){
            return cartItems;
        }

        function addItem(item){
            cartItems.list.push(item);

        }

        function removeItem(){
            // cartItems.list.splice(item,1);
            console.log('sdsad');
        }

        return {
            getItems, addItem, removeItem
        }
    }

    angular.module('shop')
        .factory('productsService', productsService)
        .factory('cartService', cartService)

})();

