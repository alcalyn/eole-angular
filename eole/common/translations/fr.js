/* global angular */

(function (angular) {
    'use strict';

    angular.module('eole.core.translations').config(function ($translateProvider) {
        $translateProvider.translations('fr', {
            'home.play': 'Jouer !',
            'play': 'Jouer',
            'games': 'Jeux',
            'pseudo': 'Pseudo',
            'password': 'Mot de passe',
            'password.repeat': 'Répétition du mot de passe',
            'register': 'Se créer un compte',
            'login': 'Se connecter',
            'logout': 'Se déconnecter',
            'chat': 'Tchat',
            'parties': 'Parties',
            'create.party': 'Créer une partie',
            'join': 'Rejoindre',
            'watch': 'Observer',
            'send': 'Envoyer',
            '{player}.has.join.chat': '{{ player }} a rejoind le tchat.',
            '{player}.has.left.chat': '{{ player }} a quitté le tchat.',
            'my.page': 'Ma page',
            'your.pseudo': 'Votre pseudo',
            'your.password': 'Votre mot de passe',
            'your.password.repeat': 'Votre mot de passe, encore',
            'waiting.for.join': 'En attente...',
            'please.enter.pseudo': 'Veuillez entrer votre pseudo',
            'please.enter.password': 'Veuillez entrer votre mot de passe',
            'please.enter.password.repeat': 'Veuillez répéter votre mot de passe',
            'party.hosted.by.{username}': 'Partie de {{username}}',
            'passwords.not.equals': 'Le mot de passe répété est différent'
        });
    });
})(angular);
