export function IntegerInput() {
    'ngInject';

    return {
        link: linkFunc
    };

    function linkFunc(scope, elm) {
        scope.validValues = ["1","2","3","4","5","6","7","8","9","0"];

        elm.bind('keypress', (e) => {
            let key = e.which||e.charCode||e.keyCode;
            if(key === 8 || key === 37 || key === 39){
                return;
            }
            let char = String.fromCharCode(e.which||e.charCode||e.keyCode),
                matches = [];

            angular.forEach(scope.validValues, (value) => {
                if(char === value) matches.push(char);
            }, matches);

            if(matches.length === 0){
                e.preventDefault();
                return false;
            }
        });
    }

}
