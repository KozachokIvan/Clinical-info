class EditUserInfoController {
    constructor(userInfoService, $scope, $state) {
        'ngInject';

        this.userInfoService = userInfoService;
        this.$scope = $scope;
        this.$state = $state;

        this.form = {};
    }

    saveUserInfo() {
        // save information in storage
        this.userInfoService.setUserInfo(this.form);

        // sync operations because we doesn't have any promise
        this.$scope.$parent.$parent.$broadcast('userInfoChanged');
        this.$state.go('home.info.list');
    }
}

const EditUserInfoComponent = {
    templateUrl: 'app/components/clinical-info/edit-user-info/edit-user-info.component.html',
    controller: EditUserInfoController
};

export { EditUserInfoComponent };
