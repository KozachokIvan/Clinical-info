class BreadcrumbsController {
    constructor() {

        // this.username = this.username || "New"
    }
}

const BreadcrumbsComponent = {
    templateUrl: 'app/components/core/breadcrumbs/breadcrumbs.component.html',
    controller: BreadcrumbsController,
    bindings: {
        username: '='
    }
};

export { BreadcrumbsComponent };
