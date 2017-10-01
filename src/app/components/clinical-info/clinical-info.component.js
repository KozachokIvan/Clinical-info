class ClinicalInfoController {
    constructor() {
        'ngInject';

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
