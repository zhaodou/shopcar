/**
 * Created by SXDELL on 2017/10/18.
 */
app.controller('shopItemController',function($scope){
    $scope.iptEvent = function(id){
        $scope.$emit('iptEvent',id);
    }
    $scope.delEvent = function(id){
        $scope.$emit('delEvent',id);
    }
    $scope.spnClick = function(type){
        if(type == '+'){
            if($scope.pro.num>=10) return;
                $scope.pro.num++;
        }else if(type == '-'){
        if($scope.pro.num<=1) return;
        $scope.pro.num--;
    }
    }
})