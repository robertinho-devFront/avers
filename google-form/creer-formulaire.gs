/**
 * Avers — création automatique du questionnaire d'avis (Google Forms)
 *
 * Mode d'emploi (2 minutes) :
 *  1. Ouvrez https://script.google.com et cliquez sur « Nouveau projet ».
 *  2. Collez tout ce fichier à la place du code existant, puis enregistrez.
 *  3. Choisissez la fonction « creerFormulaireAvers » et cliquez sur « Exécuter ».
 *     Google vous demande l'autorisation de créer un formulaire dans votre Drive : acceptez.
 *  4. Ouvrez le « Journal d'exécution » : il affiche deux liens.
 *     - le lien PUBLIC (à coller dans index.html, CONFIG.avisUrl)
 *     - le lien d'ÉDITION (pour vous seulement)
 *
 * RGPD : le questionnaire ne collecte pas les adresses e-mail automatiquement,
 * aucune question n'est obligatoire, et l'e-mail n'est demandé qu'avec un consentement explicite.
 * Pensez à supprimer les réponses de plus de 12 mois (durée annoncée dans la politique de confidentialité).
 */
function creerFormulaireAvers() {
  var form = FormApp.create('Avers — aidez-nous à améliorer l’estimation de vos pièces');
  form.setDescription(
    'Merci de prendre 2 minutes pour nous dire ce dont vous avez besoin. ' +
    'Aucune question n’est obligatoire et nous ne vous demandons aucune donnée personnelle. ' +
    'Vos réponses servent uniquement à faire évoluer Avers et sont supprimées au bout de 12 mois. ' +
    'Responsable du traitement : l’éditeur d’Avers (voir « Confidentialité » sur le site).'
  );
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false); // n'impose pas la connexion à un compte Google
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage('Merci ! Vos réponses guideront les prochaines versions d’Avers.');

  form.addMultipleChoiceItem()
    .setTitle('Quel type de pièces souhaitiez-vous faire estimer ?')
    .setChoiceValues([
      '2 € commémoratives',
      'Anciens francs en argent',
      'Pièces en or',
      'Pièces étrangères',
      'Pièces antiques ou très anciennes',
      'Billets de banque'
    ])
    .showOtherOption(true);

  form.addScaleItem()
    .setTitle('L’estimation obtenue vous a-t-elle paru crédible ?')
    .setBounds(1, 5)
    .setLabels('Pas du tout', 'Tout à fait');

  form.addScaleItem()
    .setTitle('Le site vous a-t-il semblé facile à utiliser ?')
    .setBounds(1, 5)
    .setLabels('Très difficile', 'Très facile');

  form.addCheckboxItem()
    .setTitle('Quelles fonctionnalités aimeriez-vous voir arriver ?')
    .setChoiceValues([
      'Reconnaissance automatique de la pièce sur la photo',
      'Avis d’un expert humain',
      'Plus de pays et de catégories de pièces',
      'Cours de l’or et de l’argent mis à jour en direct',
      'Mise en relation avec un professionnel pour vendre',
      'Application mobile'
    ])
    .showOtherOption(true);

  form.addMultipleChoiceItem()
    .setTitle('Seriez-vous prêt à payer pour une expertise par un professionnel ?')
    .setChoiceValues(['Non', 'Oui, moins de 10 €', 'Oui, entre 10 et 30 €', 'Oui, plus de 30 € pour une pièce de valeur']);

  form.addParagraphTextItem()
    .setTitle('Qu’est-ce qui vous a manqué, ou qui vous a gêné ?')
    .setHelpText('Merci de ne pas indiquer d’informations personnelles (nom, adresse, téléphone).');

  form.addTextItem()
    .setTitle('Facultatif : votre e-mail, si vous acceptez d’être recontacté(e) au sujet de vos réponses')
    .setHelpText('En le renseignant, vous consentez à être contacté(e) uniquement à propos d’Avers. ' +
                 'Vous pouvez retirer ce consentement à tout moment en écrivant à l’éditeur du site.')
    .setValidation(FormApp.createTextValidation().requireTextIsEmail().build());

  Logger.log('Lien PUBLIC (à mettre dans CONFIG.avisUrl) : ' + form.getPublishedUrl());
  Logger.log('Lien d’ÉDITION (pour vous) : ' + form.getEditUrl());
}
