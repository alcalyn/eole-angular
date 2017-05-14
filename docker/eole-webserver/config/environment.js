(function (angular, currentHostname) {
    'use strict';

    angular.module('eole.config', [])
        .constant('eoleApiUrl', '//'+currentHostname+':8480/api-docker.php/')
        .constant('webSocketUri', 'ws://'+currentHostname+':8482')
        .constant('oauthConfig', {
            clientId: 'eole-angular',
            clientSecret: 'eole-angular-secret'
        })
    ;

    angular.module('eole.games', [
        'eole.games.tictactoe',
        'eole.games.awale'
    ]);
})(angular, window.location.hostname);
