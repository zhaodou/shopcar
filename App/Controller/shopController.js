/**
 * Created by SXDELL on 2017/10/18.
 */
app.controller('ionicController',["$scope","shopServer",function($scope,shopServer){

    shopServer.getProducts('get','http://localhost:8080/api').then(function(result){
        $scope.products = result;
        price($scope.products);
    })
    $scope.total = 0;
    $scope.flag = null;
    $scope.$on('iptEvent',function(event,index){
        price($scope.products);
        var count = 0;
        for(var i=0;i<$scope.products.length;i++){
            if($scope.products[i].state){
                count++;
            }
        }
        if(count === $scope.products.length){
            $scope.flag = true;
        }else{
            $scope.flag = false;
        }
    })
    $scope.checkAll = function(){
        if($scope.flag){
            $scope.products.forEach(function(data,index){
                data.state = true;
            })
            $scope.flag = true;
            price($scope.products);
        }else{
            $scope.products.forEach(function(data,index){
                data.state = false;
            })
            $scope.flag = false;
            price($scope.products);
        }
    }
    $scope.$on('spnClick',function(){
        price($scope.products);
    })
    $scope.$on('delEvent',function(event,id){
        $scope.products.splice(id,1);
    })
    function price(products){
        var sum = 0;
        var num = 0;
        products.forEach(function(data,index){
            if(data.state){
                sum += data.num * data.price;
                num += data.num;
            }
        })
        $scope.total = sum;
        $scope.num = num;
    }
}])