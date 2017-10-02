class UserInfoController {
    constructor() {
        'ngInject';

    }
}

const UserInfoComponent = {
    templateUrl: 'app/components/clinical-info/user-info/user-info.component.html',
    controller: UserInfoController,
    bindings: {
        info: '='
    }
};

export { UserInfoComponent };
