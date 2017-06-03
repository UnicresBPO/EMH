app.component('appRegister', {
    templateUrl: 'components/app-register/app-register.component.html',
    controller: ['$scope','$http',function ($scope,$http) {

    	var vm = this;
        vm.registration = function()
        {
         console.log($scope.userReg) 
         $http.post('/api/create_user',$scope.user).then(function(response){
            console.log(response)
         }) 
        }
        vm.$onInit = function () {
        };

        vm.$onDestroy = function () {

        };
    }],
    controllerAs: 'vm',
    bindings: {}
});