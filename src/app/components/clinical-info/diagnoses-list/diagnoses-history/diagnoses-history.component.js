class DiagnosesHistoryController {
    constructor($scope, diagnosesService) {
        'ngInject';

        // update table when one of diagnoses from current-diagnoses list removed
        $scope.$on('itemRemoved', () => {
            this.diagnosesHistory = diagnosesService.getDiagnosesHistory();
        });
    }
}

const DiagnosesHistoryComponent = {
    templateUrl: 'app/components/clinical-info/diagnoses-list/diagnoses-history/diagnoses-history.component.html',
    controller: DiagnosesHistoryController,
    bindings:  {
        diagnosesHistory: '='
    }
};

export { DiagnosesHistoryComponent };
