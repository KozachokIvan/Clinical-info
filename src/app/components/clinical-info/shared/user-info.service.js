export class UserInfoService {
    constructor($window) {
        'ngInject';

        this.$window = $window;

        this.storage = 'localStorage';
    }

    getUserInfo() {
        return angular.fromJson(this.$window[this.storage].getItem('user')) || false;
    }

    setUserInfo(info) {
        this.$window[this.storage].setItem('user', angular.toJson(info));
    }

}
