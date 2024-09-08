// quiz-data.js

const quizData = {
	quiz1: {
		title: "Quiz 1 : Niveau facile",
		questions: [
			{
				question:
					"Quelle est la proportion recommandée de fruits et légumes à consommer par jour ?",
				options: [
					"1 à 2 portions",
					"3 portions",
					"5 portions",
					"7 à 8 portions",
				],
				correctAnswer: 2,
				reference: "Familles alimentaires",
			},
			{
				question:
					"Quelle est la principale source de glucides simples ?",
				options: [
					"Les produits sucrés",
					"Les fruits et légumes",
					"Les légumineuses",
				],
				correctAnswer: 0,
				reference: "Familles alimentaires",
			},
			{
				question:
					"Combien de grammes de protéines un adulte bien portant doit-il consommer par jour par kilogramme de poids corporel ?",
				options: ["0,5 g", "0,83 g", "1,5 g"],
				correctAnswer: 1,
				reference: "Valeur énergétique des macronutriments",
			},
			{
				question:
					"Quels aliments contiennent des lipides principalement ?",
				options: ["Les fruits", "Les matières grasses", "Les viandes"],
				correctAnswer: 1,
				reference: "Familles alimentaires",
			},
			{
				question: "Quel est le rôle principal de l'eau dans le corps ?",
				options: [
					"Transporter les nutriments et éliminer les toxines",
					"Réguler la température corporelle et maintenir l'équilibre cellulaire",
					"Fournir de l'énergie",
				],
				correctAnswer: 1,
				reference: "Hydratation",
			},
			{
				question:
					"Quel est le taux de glucides recommandé dans l'apport énergétique total (AET) ?",
				options: ["10 à 20 %", "40 à 55 %", "60 à 70 %"],
				correctAnswer: 1,
				reference: "Valeur énergétique des macronutriments",
			},
			{
				question: "Quelle hormone stimule l'appétit ?",
				options: ["Insuline", "Leptine", "Ghréline"],
				correctAnswer: 2,
				reference: "Ghréline et Leptine",
			},
			{
				question: "Quelle est la fonction principale des protéines ?",
				options: [
					"Fournir de l'énergie rapide",
					"Participer à la construction musculaire et cellulaire",
					"Stocker les graisses",
				],
				correctAnswer: 1,
				reference: "Métabolisme des protéines",
			},
			{
				question:
					"Quel type de morphotype est caractérisé par une forme en pomme ?",
				options: ["Ectomorphe", "Androïde", "Endomorphe"],
				correctAnswer: 1,
				reference: "Morphotypes",
			},
			{
				question:
					"Quelle est la boisson recommandée pendant un effort de moins de 3 heures ?",
				options: ["L'eau", "Boisson sucrée", "Boisson énergétique"],
				correctAnswer: 0,
				reference: "Eau et activité physique",
			},
		],
	},
	quiz2: {
		title: "Quiz 2 : Niveau intermédiaire",
		questions: [
			{
				question:
					"Quel est le nombre d'ATP produit par la filière anaérobie alactique ?",
				options: ["1 ATP", "2 ATP", "38 ATP"],
				correctAnswer: 1,
				reference: "Métabolisme et filières énergétiques",
			},
			{
				question:
					"Quelle est la quantité de protéines recommandée par jour pour un sportif visant la prise de masse ?",
				options: ["0,83 g/kg", "1,2 g/kg", "1,8 à 2,5 g/kg"],
				correctAnswer: 2,
				reference: "Alimentation et prise de masse musculaire",
			},
			{
				question:
					"Quel acide gras est essentiel et doit être fourni par l'alimentation ?",
				options: ["Acides gras trans", "Oméga-3", "Cholestérol"],
				correctAnswer: 1,
				reference: "Lipides et métabolisme",
			},
			{
				question:
					"Quelle est la proportion d'apport énergétique conseillé pour les lipides ?",
				options: ["10 à 15 %", "25 à 30 %", "35 à 40 %"],
				correctAnswer: 1,
				reference: "Valeur énergétique des macronutriments",
			},
			{
				question:
					"Quel type d'effort utilise principalement la filière aérobie ?",
				options: ["Sprint", "Marathon", "Haltérophilie"],
				correctAnswer: 1,
				reference: "Métabolisme et filières énergétiques",
			},
			{
				question:
					"Quel est le besoin quotidien recommandé en glucides pour un adulte qui fait de l'exercice modéré ?",
				options: ["2 g/kg", "5 à 7 g/kg", "7 à 12 g/kg"],
				correctAnswer: 1,
				reference: "Alimentation et glucides",
			},
			{
				question:
					"Le métabolisme de base (MB) est calculé avec quelle formule ?",
				options: [
					"Formule de Broca",
					"Formule de Harris et Benedict",
					"Formule de Black et Al.",
				],
				correctAnswer: 1,
				reference: "Calcul du métabolisme",
			},
			{
				question:
					"Quelle réponse est FAUSSE concernant la déshydratation chez le sportif ?",
				options: [
					"Elle augmente le risque de crampes.",
					"Elle améliore la circulation sanguine.",
					"Elle diminue les capacités d'endurance.",
				],
				correctAnswer: 1,
				reference: "Hydratation et activité physique",
			},
			{
				question:
					"Quelle est la collation idéale à prendre entre 2 heures et 1h30 avant l'effort ?",
				options: [
					"Un fruit frais avec une poignée d'oléagineux",
					"Un sandwich complet",
				],
				correctAnswer: 0,
				reference: "Collations sportives",
			},
			{
				question:
					"Que se passe-t-il si le tour de taille est supérieur à 94 cm chez un homme ?",
				options: [
					"Aucun risque",
					"Augmentation du risque métabolique",
					"Faible probabilité d'effets négatifs",
				],
				correctAnswer: 1,
				reference: "Masse grasse et risques métaboliques",
			},
		],
	},
	quiz3: {
		title: "Quiz 3 : Niveau difficile",
		questions: [
			{
				question:
					"Quelle est la quantité exacte d'ATP produite par la dégradation complète d'une molécule de glucose via la filière aérobie ?",
				options: ["2 ATP", "36 à 38 ATP", "45 ATP"],
				correctAnswer: 1,
				reference: "Métabolisme des glucides",
			},
			{
				question:
					"Quel est le ratio protéines/glucides/lipides recommandé pour un sportif qui veut stabiliser son poids ?",
				options: [
					"40 % glucides, 10 % protéines, 50 % lipides",
					"40 % glucides, 30 % protéines, 30 % lipides",
					"55 % glucides, 25 % protéines, 20 % lipides",
				],
				correctAnswer: 2,
				reference: "Alimentation et stabilisation du poids",
			},
			{
				question:
					"Pour un individu de 75 kg pratiquant une activité intense, quel est le besoin énergétique en protéines ?",
				options: ["45 g/jour", "112,5 à 187,5 g/jour", "75 g/jour"],
				correctAnswer: 1,
				reference: "Alimentation et prise de masse musculaire",
			},
			{
				question:
					"Comment est modifiée la vidange gastrique si les aliments ne sont pas bien mastiqués avant d'atteindre l'estomac ?",
				options: [
					"Elle est accélérée.",
					"Elle est retardée de 20 minutes.",
					"Il n'y a pas de changement.",
				],
				correctAnswer: 1,
				reference: "Digestion et mastication",
			},
			{
				question:
					"Quels sont les substrats énergétiques utilisés par la filière anaérobie lactique ?",
				options: ["Glucose", "Lipides", "Phosphocréatine"],
				correctAnswer: 0,
				reference: "Métabolisme et filières énergétiques",
			},
			{
				question:
					"Quelle est la bonne combinaison de macronutriments pour une collation 1h avant l'effort ?",
				options: [
					"Compote ou fruits secs",
					"Sandwich complet",
					"Fromage et pain",
				],
				correctAnswer: 0,
				reference: "Collations sportives",
			},
			{
				question: "Quelle réponse est FAUSSE concernant la leptine ?",
				options: [
					"Elle régule l'appétit.",
					"Elle signale au cerveau la satiété.",
					"Elle stimule l'appétit.",
				],
				correctAnswer: 2,
				reference: "Ghréline et leptine",
			},
			{
				question:
					"Qu'est-ce que l'AMPK et quel est son rôle dans le métabolisme énergétique ?",
				options: [
					"Une hormone qui stimule la production d'insuline.",
					"Une enzyme qui régule l'équilibre énergétique en stimulant l'oxydation des graisses.",
					"Un récepteur de l'ATP qui contrôle l'anabolisme.",
				],
				correctAnswer: 1,
				reference: "AMPK et métabolisme des protides",
			},
			{
				question:
					"Quelle est la quantité recommandée d'eau à boire après un effort intense ?",
				options: ["100 ml", "1 L", "300 à 500 ml"],
				correctAnswer: 2,
				reference: "Hydratation et activité physique",
			},
			{
				question: "Quelle hormone favorise le stockage des graisses ?",
				options: ["Cortisol", "Insuline", "Testostérone"],
				correctAnswer: 1,
				reference: "Insuline et stockage des graisses",
			},
		],
	},
	quizRandom: {
		title: "Quiz Aleatoire",
		questions: [],
	},
};
