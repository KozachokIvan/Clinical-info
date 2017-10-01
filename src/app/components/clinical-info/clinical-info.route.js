export function infoRouterConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('home.info', {
            url: '/clinical-info',
            abstract: true,
            component: 'clinicalInfo',
            resolve: {
                userInformation: function(userInfoService) {
                    return userInfoService.getUserInfo();
                }
            }
        })
        .state('home.info.list', {
            url: '/diagnoses-list',
            component: 'diagnosesList',
            resolve: {
                currentDiagnoses: function(diagnosesService) {
                    return diagnosesService.getDiagnoses();
                },
                diagnosesHistory: function(diagnosesService) {
                    return diagnosesService.getDiagnosesHistory();
                }
            }
        })
        .state('home.info.add-diagnose', {
            url: '/add-diagnose',
            component: 'diagnoseAdd'
        })
        .state('home.info.change-diagnose', {
            // without id because we doesn't have it
            url: '/change-diagnose',
            component: 'diagnoseEdit',
            params: {
                diagnose: null,
                index: null
            },
            resolve: {
                access: function($stateParams, $q, $state) {
                    //if no diagnose for edit then redirect to add new diagnose
                    if(!$stateParams.diagnose) {
                        $state.go('home.info.add-diagnose');
                        return $q.reject("no-diagnose");
                    }
                }
            }
        })
        .state('home.info.edit-info', {
            url: '/edit-info',
            component: 'editUserInfo'
        });

    $urlRouterProvider.otherwise('/clinical-info/diagnoses-list');

}
