import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";

export default angular.module('clinicalInfo.ccore', [])
    .component('breadcrumbs', BreadcrumbsComponent)
    .component('header', HeaderComponent);
