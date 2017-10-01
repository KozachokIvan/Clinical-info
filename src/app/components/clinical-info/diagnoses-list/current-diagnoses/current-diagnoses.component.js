class CurrentDiagnosesController {
    constructor($state, $scope, diagnosesService) {
        'ngInject';

        this.$state = $state;
        this.$scope = $scope;
        this.diagnosesService = diagnosesService;
    }

    editDiagnose(diagnose, index) {
        // navigate to edit diagnose page
        this.$state.go('home.info.change-diagnose', {diagnose: diagnose, index: index});
    }

    removeDiagnose(index) {
        // remove diagnose from storage
        this.currentDiagnoses = this.diagnosesService.removeDiagnose(index);

        // emit event for update diagnoses-history
        // sync operation because we doesn't have any promise
        this.$scope.$parent.$broadcast('itemRemoved');
    }
}

const CurrentDiagnosesComponent = {
    templateUrl: 'app/components/clinical-info/diagnoses-list/current-diagnoses/current-diagnoses.component.html',
    controller: CurrentDiagnosesController,
    bindings: {
        currentDiagnoses: '='
    }
};

export { CurrentDiagnosesComponent };
