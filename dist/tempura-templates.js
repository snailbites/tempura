angular.module('tempura').run(['$templateCache', function($templateCache) {
    $templateCache.put('typeahead/template/typeahead-match.html',
        "<a tabindex=\"-1\" ng-bind-html=\"match.label | ghsTypeaheadSanitize:query\"></a>\n");
}]);
angular.module('tempura').run(['$templateCache', function($templateCache) {
    $templateCache.put('typeahead/template/typeahead-popup.html',
        "<ul class=\"dropdown-menu\" ng-show=\"isOpen()\" ng-style=\"{top: position.top+'px', left: position.left+'px', width: '100%'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{match.id}}\">\n        <div ghs-typeahead-match index=\"$index\" match=\"match\" reload=\"::forceReload(value)\" query=\"query\" template-url=\"::templateUrl\"></div>\n    </li>\n</ul>\n");
}]);