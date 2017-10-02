/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { AppComponent } from "./components/app.component";
import MainModule from "./components/clinical-info/clinical-info.module";
import CoreModule from "./components/core/core.module";
import { IntegerInput } from "./components/shared/integer-input-directive/integer-input.directive";

angular.module('clinicalInfo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr', 'md.data.table', MainModule.name, CoreModule.name])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .component('app', AppComponent)
    .directive('integerInput', IntegerInput);
