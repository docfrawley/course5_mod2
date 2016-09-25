(function (){

'use strict';

var initialitems = [
  {
    name: "oranges",
    quantity: 5
  },
  {
    name: "pears",
    quantity: 7
  },
  {
    name: "spinach",
    quantity: 3
  },
  {
    name: "broccoli",
    quantity: 4
  },
  {
    name: "kale",
    quantity: 9
  }
];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items= ShoppingListCheckOffService.getItems();


    toBuy.switchItem = function (itemIdex, item) {
      ShoppingListCheckOffService.switchItem(itemIdex, item);
    }
  };


  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var showList = this;

    showList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  };


  function ShoppingListCheckOffService() {
    var service = this;

    // initial list of shopping items

    var items = initialitems;
    var boughtItems = [];

    service.switchItem = function (itemIdex, item) {
      items.splice(itemIdex, 1);
      boughtItems.push(item);
    };

    service.getItems = function () {
      return items;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }

  })();
