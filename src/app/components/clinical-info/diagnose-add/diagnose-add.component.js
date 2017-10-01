class DiagnoseAddController {
    constructor(diagnosesService, $state) {
        'ngInject';

        this.diagnosesService = diagnosesService;
        this.$state = $state;

        this.diagnose = {};
    }

    saveDiagnose() {
        // ad diagnose to storage
        this.diagnosesService.addDiagnose(this.diagnose);

        // navigate to list page
        // sync operation because we doesn't have any promise
        this.$state.go('home.info.list');
    }
}

const DiagnoseAddComponent = {
    templateUrl: 'app/components/clinical-info/diagnose-add/diagnose-add.component.html',
    controller: DiagnoseAddController
};

export { DiagnoseAddComponent };
