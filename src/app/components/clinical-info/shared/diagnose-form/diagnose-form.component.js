class DiagnoseFormController {
    constructor() {
        'ngInject';

        this.diagnose = this.diagnose || {};
    }
}

const DiagnoseFormComponent = {
    templateUrl: 'app/components/clinical-info/shared/diagnose-form/diagnose-form.component.html',
    controller: DiagnoseFormController,
    bindings: {
        diagnose: '=',
        formSubmit: '&'
    }
};

export { DiagnoseFormComponent };
