import { ClinicalInfoComponent } from "./clinical-info.component";
import { infoRouterConfig } from "./clinical-info.route";
import { UserInfoComponent } from "./user-info/user-info.component";
import { DiagnoseEditComponent } from "./diagnose-edit/diagnose-edit.component";
import { CurrentDiagnosesComponent } from "./diagnoses-list/current-diagnoses/current-diagnoses.component";
import { DiagnosesHistoryComponent } from "./diagnoses-list/diagnoses-history/diagnoses-history.component";
import { DiagnosesListComponent } from "./diagnoses-list/diagnoses-list.component";
import { EditUserInfoComponent } from "./edit-user-info/edit-user-info.component";
import { DiagnosesService } from "./shared/diagnoses.service";
import { UserInfoService } from "./shared/user-info.service";
import { DiagnoseFormComponent } from "./shared/diagnose-form/diagnose-form.component";
import { DiagnoseAddComponent } from "./diagnose-add/diagnose-add.component";

export default angular.module('clinicalInfo.main', ['ui.router'])
    .config(infoRouterConfig)
    .component('clinicalInfo', ClinicalInfoComponent)
    .component('userInfo', UserInfoComponent)
    .component('diagnoseEdit',DiagnoseEditComponent)
    .component('diagnosesList', DiagnosesListComponent)
    .component('diagnosesHistory', DiagnosesHistoryComponent)
    .component('currentDiagnoses', CurrentDiagnosesComponent)
    .component('editUserInfo', EditUserInfoComponent)
    .service('diagnosesService', DiagnosesService)
    .component('diagnoseForm', DiagnoseFormComponent)
    .component('diagnoseAdd', DiagnoseAddComponent)
    .service('userInfoService', UserInfoService);
