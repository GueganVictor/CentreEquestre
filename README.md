
# Bienvenue dans Equideo

Bonjour, je vous souhaite la bienvenue sur l'application Equideo qui est une application web de gestion de centre équestre. Celle-ci a été développé en Vuejs pour le frontend et Python-Django pour le backend. 

Ce projet a été créé par Victor GUEGAN et Médy KHIMOUM

# Lancement du serveur 

Afin de pouvoir lancer le serveur, il vous faudra au préalable posséder Python Django.

Pour installer Django : https://www.djangoproject.com/download/

Ensuite, il faudra se placer dans le package ' server' lancer les commandes suivante pour pouvoir run le serveur : 

    pip install djangorestframework-jwt djangorestframework django-rest-auth django-allauth django-cors-headers

    python manage.py runserver

# Lancement du client

Afin de pouvoir lancer le client, il faudra au préalable posséder VueJs. Pour cela vous pouvez télécharger VueJs via le lien [suivant](https://vuejs.org/v2/guide/installation.html).

Ensuite, il faudra se placer dans le package 'client' et lancer la commande suivante :

    npm run serve


# Travail effectué 

## Listes des fonctionnalités à jour :

 - Login avec username, email ou numéro de téléphone
 - Se deconnecter du site
 - Avec le cavalier :
	- On peut consulter les cours auxquels on est liés
	- On peut accéder à sa page et modifier des informations 
- Avec le moniteur :
	- Créer un cheval
	-  *hérite des fonctionnalités du cavalier*
- Avec l'admin :
	- Créer un des moniteurs et d'autres admins
	-  Rechercher des users
	-  *hérite des fonctionnalités du moniteur*
- Avec le superuser:
  - Créer des admins
	- *hérite des fonctionnalités de l'admin*

## Listes des fonctionnalités buggées :

- L'enregistrement d'un utilisateur fonctionne, la requête est bien envoyée et l'utilisateur est bien créé, malheureusement suite à un bug de hachage que nous n'avons pas su résoudre, il est impossible de se connecter à un compte crée depuis le register alors que tout fonctionne si l'on crée le compte depuis l'interface admin.

## Listes des fonctionnalités manquantes :

- Impossible de changer de mot de passe via email 
- Impossible de s'inscrire à un cours
- Impossible d'assigner un cheval un utilisateurs pour un cours

# Connexion

Afin de pouvoir vous connecter en superuser, vous pouvez utiliser le compte suivant :

username : **admin**
password : **admin**

Afin de pouvoir vous connecter en rider, vous devez utiliser le compte suivant :

username : **working_rider**
password : **password123?**
