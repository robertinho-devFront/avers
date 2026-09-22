# Conformité RGPD : check-list Avers

Avers a été conçu selon le principe de **protection des données dès la conception** (art. 25 RGPD) : le moyen le plus sûr de protéger des données, c’est de ne pas les collecter.

## Ce qui est déjà en place

| Point | Comment |
|---|---|
| Aucune collecte sur le site | Photos et saisies traitées dans le navigateur. Aucun serveur, aucun formulaire envoyé. |
| Preuve technique | En-tête CSP `connect-src 'none'; form-action 'none'` : le navigateur bloque tout envoi. |
| Pas de cookie ni de traceur | Pas d’analytics, pas de pixel, pas de publicité, donc **pas de bannière cookies** nécessaire. |
| Polices auto-hébergées | Pas d’appel à Google Fonts (transfert d’IP jugé illicite par le tribunal de Munich en 2022). |
| Métadonnées des photos | Les miniatures sont redessinées dans un canvas : EXIF et GPS supprimés. |
| Carnet local | localStorage, sur l’appareil seulement, à la demande de l’utilisateur : exempté de consentement (art. 82 loi Informatique et Libertés, lignes directrices CNIL). Bouton « Tout effacer ». |
| Information | Mentions légales et politique de confidentialité accessibles depuis chaque page (pied de page). |
| Google Form | Collecte d’e-mail désactivée, aucune question obligatoire, e-mail facultatif avec consentement explicite, avertissement « pas de données personnelles ». |

## Ce qu’il vous reste à faire

- [ ] Renseigner `CONFIG.editeur` et `CONFIG.contact` dans `index.html` (mentions légales obligatoires, loi LCEN art. 6-III). Un particulier peut rester anonyme vis-à-vis du public s’il communique son identité à l’hébergeur, mais un moyen de contact reste nécessaire.
- [ ] Utiliser une adresse e-mail dédiée au projet plutôt que votre adresse personnelle.
- [ ] Tenir un mini **registre des traitements** (un seul traitement : « Questionnaire d’avis », finalité, données, durée 12 mois, destinataire Google). Modèle simplifié sur cnil.fr.
- [ ] Tous les 12 mois : supprimer les réponses du formulaire (et de la feuille Sheets liée) de plus de 12 mois.
- [ ] Répondre sous un mois à toute demande d’accès ou d’effacement.

## Si vous ajoutez plus tard…

- **Une reconnaissance automatique par IA** : les photos quitteraient l’appareil. Il faudra alors une base légale (consentement), informer sur le prestataire et la durée de conservation, mettre à jour la politique et retirer `connect-src 'none'` pour le seul domaine concerné.
- **Un outil de statistiques** : préférez un outil exempté de consentement selon la CNIL (ex. configuration anonymisée de Matomo), sinon une bannière de consentement devient obligatoire.
- **Un formulaire d’expertise avec envoi de photos** : même logique que l’IA, plus une durée de conservation courte.
