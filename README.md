# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 32
- Membres du groupe :   Mcheik Mohamed
                        Paquet Gabriel
                        Villanueva Brian



## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
< Mon fichier YML effectue les taches demandé ci-dessus, il sert a effectué l'integration continue en fonction de ce qui est rechercher.
 Le fichier YML est écrit de manière a vérifier toutes les choses voulut tout seul lors d'un évenement sur le repertoire, tel qu'un push , pull , merge >
```

- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
< Il sert a définir l'évenement qui provoque l'activation de la pipeline.
 exemple : " on : push " Lorsque l'on fait un git push la pipeline effectuera toutes les étapes qu'elle doit faire >
```

- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
< run_on Indique le type de machine sur laquelle exécuter le travail
  run permet d'utilisé les differentes commandes liées à notre code tel que les dépendaces (Prettier , Eslint , Jest) >
```

- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
< "use" est utilisé pour les commandes directement lié a la préconstruction du pipeline, les commandes lié a githubAction dans notre cas.
 "run" est utilisé pour les commandes de notre code , tels que l'utilisation des differents packages , exemples :  "npm prettier , npm eslint" >
```

- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
< Certaine étapes peuvent être interverti tel que l'utilisation de Prettier et Eslint, mais avant l'utilisation des commandes "run" et donc des differents packages du code,
il est obligatoire de faire le "uses: actions/checkout@v2" .  >
```

- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<Les différentes questions a posée sont :   Ou integrer le programme ?  Avant le déploiement mais après les test unitaires 
                                            Comment l'integrer ? Grace a une commande ou bien une api
                                            Quels sont les paramètres de mon secure_app ?
                                            Est ce que toutes les dépendances sont installé pour mon secure_app?
                                            Comment gerer les problèmes si le secure_app indique une faille de sécurité ?
                                            Est ce que le progamme secure_app a un grand impact sur les perfomances de ma pipeline?
                                            Verifier si la secure_app ne créer pas une faille de sécurite elle-même ?
                                            Comment tester l'éfficacité de la secure_app ?
                                            Comment documenter les résultats de la secure_app ?

                                            On devrait créeer une moyen d'integrer l'application et après vérification,
                                            l'utilisé dans notre pipeline avec un "run" comme pour nos autres commandes.

>
```

