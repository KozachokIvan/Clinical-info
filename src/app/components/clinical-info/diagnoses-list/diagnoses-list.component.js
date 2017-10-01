class DiagnosesListController {
    constructor() {
        'ngInject';

    }
}

const DiagnosesListComponent = {
    templateUrl: 'app/components/clinical-info/diagnoses-list/diagnoses-list.component.html',
    controller: DiagnosesListController,
    bindings: {
        currentDiagnoses: '=',
        diagnosesHistory: '='
    }
};

export { DiagnosesListComponent };
