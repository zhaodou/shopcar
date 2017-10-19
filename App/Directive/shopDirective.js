/**
 * Created by SXDELL on 2017/10/18.
 */
app.directive('shop',function(){
    return {
        restrict:"EA",
        transclude:true,
        templateUrl:'App/temp/shopItem.html',
        controller:"shopItemController"
    }
})