/**
 * Created by SXDELL on 2017/10/17.
 */
var app = angular.module('ionicApp',['ionic','ui.router']);

 app.config(function($stateProvider,$urlRouterProvider){
 $stateProvider
 .state('shop',{
 url:'/shop',
 templateUrl:'App/temp/shopCar.html'
 })
 $urlRouterProvider.otherwise('/shop');
 })
