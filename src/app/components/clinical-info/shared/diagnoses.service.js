export class DiagnosesService {
    constructor($window, $q, moment) {
        'ngInject';

        this.$window = $window;
        this.moment = moment;
        this.$q = $q;

        this.storage = 'localStorage';
    }

    addDiagnose(diagnose) {
        // add to diagnose date of creation
        diagnose.date = new this.moment();

        // write to storage array with new diagnose
        this.$window[this.storage].setItem('diagnoses', angular.toJson([...this.getDiagnoses(), diagnose]));
    }

    getDiagnoses() {
        return angular.fromJson(this.$window[this.storage].getItem('diagnoses')) || [];
    }

    getDiagnosesHistory() {
        return angular.fromJson(this.$window[this.storage].getItem('diagnosesHistory')) || [];
    }

    removeDiagnose(index) {
        // save diagnoses to variable for access to spliced array
        let newList = this.getDiagnoses();

        // splice chosen element and save it for adding to history
        let removedItem = newList.splice(index, 1);

        // add spliced element to history
        this.addDiagnoseToHistory(removedItem[0]);

        // rewrite diagnoses in storage without removed element
        this.$window[this.storage].setItem('diagnoses', angular.toJson(newList));
        return newList;
    }

    addDiagnoseToHistory(diagnose) {
        // add to diagnose removal date
        diagnose.removal_date = new this.moment();

        // write to storage array with new diagnose
        this.$window[this.storage].setItem('diagnosesHistory', angular.toJson([...this.getDiagnosesHistory(), diagnose]));
    }

    editDiagnose(diagnose, index) {
        let list = this.getDiagnoses();

        // rewrite edited element in list by index
        list[index] = diagnose;
        this.$window[this.storage].setItem('diagnoses', angular.toJson(list));
    }

}
