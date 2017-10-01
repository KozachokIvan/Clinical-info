class DiagnoseEditController {
    constructor($stateParams, diagnosesService, $state) {
        'ngInject';

        this.$state = $state;
        this.index = $stateParams.index;
        this.diagnose = $stateParams.diagnose;
        this.diagnosesService = diagnosesService;
    }

    saveChanges() {
        // save changes in storage
        this.diagnosesService.editDiagnose(this.diagnose, this.index);

        // navigate to list page
        // sync operation because we doesn't have any promise
        this.$state.go('home.info.list');
    }
}

const DiagnoseEditComponent = {
    templateUrl: 'app/components/clinical-info/diagnose-edit/diagnose-edit.component.html',
    controller: DiagnoseEditController
};

export { DiagnoseEditComponent };
