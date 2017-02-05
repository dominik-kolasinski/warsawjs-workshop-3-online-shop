(function() {
    "use strict"

    angular.module('shop', [])
    .controller('IntroController', function($scope) {
        $scope.inputModel = {
            value: ''
        };
        $scope.cbox = true;
        $scope.itemsList = [
            "Workshopy WarsawJS",
            "są najlepszym sposobem",
            "na poznanie świetnych ludzi",
            "i nauczenie się nowych technologii."
        ];

        $scope.testObj = {hello: "Hello"};
        $scope.testText = "World!";
        $scope.callback = function(content) {
            alert(content);
        };
    })
    // .controller('IntroController', ['$scope', function($scope) {
    //     $scope.inputModel = {
    //         value: ''
    //     };
    // $scope.cbox = true;
    //     $scope.itemsList = [
    //         "Workshopy WarsawJS",
    //         "są najlepszym sposobem",
    //         "na poznanie świetnych ludzi",
    //         "i nauczenie się nowych technologii."
    //     ];
    //     $scope.callback = function(content) {
    //         alert(content);
    //     };

        // $scope.testObj = {hello: "Hello"};
        // $scope.testText = "World!";
        // $scope.callback = function(content) {
        //     alert(content);
        // };
    // }])
    // .controller('IntroController', IntroController)
    // IntroController.$inject = ['$scope'];
    // function IntroController($scope) {
    //     $scope.inputModel = {
    //         value: ''
    //     };
    // $scope.cbox = true;
    //     $scope.itemsList = [
    //         "Workshopy WarsawJS",
    //         "są najlepszym sposobem",
    //         "na poznanie świetnych ludzi",
    //         "i nauczenie się nowych technologii."
    //     ];
    //     $scope.callback = function(content) {
    //         alert(content);
    //     };
    //     $scope.testObj = {hello: "Hello"};
    //     $scope.testText = "World!";
    //     $scope.callback = function(content) {
    //         alert(content);
    //     };
    // }
    angular.module('shop')
    .controller('introDirCtrl', introDirCtrl)
    .directive('introDirective', function() {
        return {
            template: `
                <div> 
                    <span>Moja własna dyrektywa: {{$ctrl.objProp.hello}}, {{$ctrl.textProp}}</span> 
                    <button ng-click="$ctrl.fnProp({content: $ctrl.greeting})">Alert!</button>
                </div>`,
            scope: {
                objProp: '=',
                textProp: '@',
                fnProp: '&'
            },
            bindToController: true,
            controller: "introDirCtrl as $ctrl"
        }
    })
    function introDirCtrl($timeout) {
        $timeout(() => {
            this.greeting = `${this.objProp.hello} ${this.textProp}`;
        }, 0);
    }
})();
