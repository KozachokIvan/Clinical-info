class ClinicalInfoController {
    constructor($scope, userInfoService) {
        'ngInject';

        this.$scope = $scope;

        // update info when patient changed
        this.$scope.$on('userInfoChanged', () => {
            this.userInformation = userInfoService.getUserInfo();
        });
    }
}

const ClinicalInfoComponent = {
    templateUrl: 'app/components/clinical-info/clinical-info.component.html',
    controller: ClinicalInfoController,
    bindings: {
        userInformation: '='
    }
};

export { ClinicalInfoComponent };
