class UserInfoController {
    constructor($scope, userInfoService) {
        'ngInject';

        this.$scope = $scope;

        // update info when patient changed
        this.$scope.$on('userInfoChanged', () => {
            this.info = userInfoService.getUserInfo();
        });
    }
}

const UserInfoComponent = {
    templateUrl: 'app/components/clinical-info/user-info/user-info.component.html',
    controller: UserInfoController,
    bindings: {
        info: '='
    }
};

export { UserInfoComponent };
