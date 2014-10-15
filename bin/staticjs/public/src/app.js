var app;

app = angular.module("oauthd_stats_plugin", ["ui.router"]).config([
  "$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('dashboard', {
      url: '/',
      templateUrl: '/oauthd/plugins/statistics/templates/dashboard.html',
      controller: 'statistics_plugin_DashboardCtrl'
    });
    $stateProvider.state('analytics', {
      url: '/',
      templateUrl: '/oauthd/plugins/statistics/templates/analytics.html',
      controller: 'statistics_plugin_AnalyticsCtrl'
    });
    $urlRouterProvider.when("", "dashboard");
    $urlRouterProvider.otherwise("dashboard");
    return $locationProvider.html5Mode(true);
  }
]);

require('./filters/filters')(app);

require('./services/AnalyticsService')(app);

require('./controllers/DashboardCtrl')(app);

require('./controllers/AnalyticsCtrl')(app);

app.run([
  "$rootScope", "$state", function($rootScope, $state) {
    console.log("APP.coffee oauthd plugin statistics_plugin_DashboardCtrl");
    return console.log("$state", $state);
  }
]);