# Avers : combien vaut ma pièce ?

Site d’estimation gratuite de pièces de monnaie pour les particuliers : 2 € commémoratives, anciens francs en argent, pièces en or.
L’utilisateur dépose les photos de sa pièce, lui donne un nom, l’identifie en quelques clics et obtient une fourchette de prix expliquée (prix de rachat, valeur de collection, valeur du métal) avec un indice de fiabilité.

**Tout fonctionne dans le navigateur.** Aucune photo ni aucune saisie n’est envoyée à un serveur : pas de back-end, pas de cookie, pas de mesure d’audience. La page interdit même tout envoi de données via sa politique de sécurité (`connect-src 'none'`).

## Ce que fait le site

- **Photos** (avers, revers, tranche) : contrôle de netteté, de lumière et de résolution, détection de la teinte (dorée ou argentée). Miniatures redessinées, donc sans les métadonnées GPS.
- **Titre** libre pour chaque pièce.
- **Identification** : 7 catégories, un référentiel de modèles (or, argent, 2 € rares), et une aide qui retrouve la pièce d’après son poids et son diamètre.
- **État de conservation** selon l’échelle française (B, TB, TTB, SUP, SPL, FDC), coffret, pièce nettoyée.
- **Estimation** : valeur du métal (poids × titre × cours), prix de rachat, valeur de collection, contrôle du poids (détection des copies), alertes.
- **Mon carnet** : pièces enregistrées dans le navigateur (localStorage), total, suppression.
- **Impression / PDF** du résultat, partage du lien, questionnaire d’avis Google Forms.
- Thème clair et sombre, mobile, accessible au clavier, police très lisible (Atkinson Hyperlegible).

## Structure

```
index.html                     le site entier (HTML + CSS + JS)
fonts/                         polices auto-hébergées (aucun appel à Google Fonts)
google-form/creer-formulaire.gs  script qui crée le questionnaire d’avis
docs/RGPD.md                   check-list de conformité
```

## Tester en local

Ouvrez `index.html` dans votre navigateur (double-clic). Pour que les polices se chargent partout, lancez plutôt un petit serveur :

```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

## Mettre en ligne sur GitHub Pages (comme Crible)

```bash
# 1. Créez un dépôt vide nommé "avers" sur github.com (compte robertinho-devfront)
# 2. Dans ce dossier :
git remote add origin https://github.com/robertinho-devfront/avers.git
git push -u origin main
# 3. Sur GitHub : Settings > Pages > Source : "Deploy from a branch", branche main, dossier / (root)
```

Le site sera en ligne en une minute à l’adresse : **https://robertinho-devfront.github.io/avers/**

## Avant de communiquer l’adresse

Dans `index.html`, en haut du `<script>`, complétez l’objet `CONFIG` :

| Champ | À quoi ça sert |
|---|---|
| `editeur` | Votre nom (obligatoire dans les mentions légales, loi LCEN) |
| `contact` | Une adresse e-mail pour les demandes RGPD (une adresse dédiée est conseillée) |
| `avisUrl` | Le lien public du Google Form (voir ci-dessous) |
| `cours` | Cours de l’or et de l’argent en €/gramme, et la date du relevé |

Tant que ces champs sont vides, le site signale « À compléter » dans les mentions légales.

## Créer le questionnaire Google Forms

1. Ouvrez https://script.google.com > **Nouveau projet**.
2. Collez le contenu de `google-form/creer-formulaire.gs`, enregistrez, exécutez `creerFormulaireAvers`.
3. Le journal affiche le lien public : collez-le dans `CONFIG.avisUrl`, puis faites un commit.

Pour lire les réponses : dans le formulaire, onglet **Réponses** > **Lier à Sheets**.

## Mettre à jour les cotes

- Cours des métaux : `CONFIG.cours` (€/g = cours de l’once ÷ 31,1035). Les visiteurs peuvent aussi les corriger dans la section « Méthode ».
- Modèles : tableaux `MODELS` (or, argent : poids, titre, diamètre) et `E2` (2 € : tirage, fourchettes circulée / en coffret).

Les fourchettes des 2 € sont des ordres de grandeur relevés en septembre 2026 : revoyez-les régulièrement.

## Pistes d’évolution

Reconnaissance automatique par IA (nécessite un serveur et une mise à jour de la politique de confidentialité), cours en direct, plus de pays, avis d’experts. Laissez le questionnaire trancher.

## Licence

Code sous licence MIT. Polices sous licence SIL Open Font License 1.1.
