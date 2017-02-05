(function() {
        "use strict"

        class ShopComponent {
            constructor() {
                this.template = `
                <cart-items-list-component></cart-items-list-component>
                <h1>shop</h1>
                <product-list-component></product-list-component>`
            }
        }

        class ProductListComponent {
            constructor() {
                this.controller = function(productsService){
                    this.products = productsService.get();
                }
                this.template =
                    `<div>products: </div>
                    <div class="container">
                        <div class="row">
                            <product-component ng-repeat="product in $ctrl.products.list track by product.id" product="product" class="col-6"></product-component>
                        </div>
                                      
                    </div>`;

            }
        }

        class ProductComponent {
            constructor() {
                this.bindings = { product: '<' },
                this.template = `
                    <h4>id: {{$ctrl.product.id}}</h4>
                    <h1>name: {{$ctrl.product.name}}</h1>
                    <h4>desc: {{$ctrl.product.description}}</h4>
                    <img ng-src={{$ctrl.product.image}}>
                    <button ng-click="$ctrl.addItem()">dodaj do koszyka</button>`,
                this.controller = function (cartService){
                    this.addItem = (item) => {
                        cartService.addItem(item);
                    }
                }
            }
        }

        class CartItemsListComponent {
            constructor() {
                this.controller = function(cartService){
                    this.cartItems = cartService.getItems();
                    this.removeCartItem = cartService.removeCartItem();
                }
                this.template =
                    `<div>cart items: </div>
                    <div class="container">
                        <div class="row">
                            <cart-item-component ng-repeat="cartItems in $ctrl.cartItems.list track by cartItem.id" cartItem="cartItem" ></cart-item-component>
                        </div>
                                      
                    </div>`;

            }
        }

        class CartItemComponent {
            constructor() {
                this.bindings = { cartItem: '<'};
                this.template = `
                    <h4>id: {{$ctrl.product.id}}</h4>
                    <h1>name: {{$ctrl.product.name}}</h1>
                   <button ng-click="$ctrl.cartService.removeItem()">usun z koszyka</button>`
            }
        }
        angular.module('shop')
            .component('shop', new ShopComponent())
            .component('productListComponent', new ProductListComponent())
            .component('productComponent', new ProductComponent())
            .component('cartItemComponent', new CartItemComponent())
            .component('cartItemsListComponent', new CartItemsListComponent())
    }
)();

