export function routerConfig ($stateProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '',
            abstract: true,
            component: 'app'
        });
}
