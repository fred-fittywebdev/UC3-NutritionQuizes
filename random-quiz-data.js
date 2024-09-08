const randomQuizData = [
	// Vos 60 nouvelles questions ici
	{
		question: "Quelle hormone stimule la sensation de faim ?",
		options: ["Leptine", "Insuline", "Ghréline"],
		correctAnswer: 2,
		reference: "Ghréline et leptine",
	},
	{
		question:
			"Quel est le pourcentage recommandé de protéines dans l'apport énergétique total (AET) d'un adulte ?",
		options: ["5 à 10 %", "10 à 20 %", "30 %"],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle est la quantité d'ATP produite par la filière anaérobie lactique ?",
		options: ["1 ATP", "2 à 3 ATP", "36 ATP"],
		correctAnswer: 1,
		reference: "Métabolisme et filières énergétiques",
	},
	{
		question:
			"Que faut-il consommer principalement lors d’un effort de moins de 3 heures ?",
		options: ["Eau", "Boisson isotonique", "Boisson énergétique"],
		correctAnswer: 0,
		reference: "Hydratation et activité physique",
	},
	{
		question:
			"Quel type de morphotype est caractérisé par une forme en poire ?",
		options: ["Ectomorphe", "Androïde", "Gynoïde"],
		correctAnswer: 2,
		reference: "Morphotypes",
	},
	{
		question:
			"Quelle est la proportion de glucides nécessaire pour un athlète en entraînement intense ?",
		options: ["2 à 4 g/kg", "7 à 12 g/kg", "12 à 15 g/kg"],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question: "Quel est le rôle principal des lipides dans l'organisme ?",
		options: [
			"Fournir de l'énergie rapide",
			"Stocker l'énergie",
			"Réguler la température corporelle",
		],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle est la boisson recommandée après un effort intense pour compenser les pertes hydriques ?",
		options: ["Eau", "Boisson énergétique", "Café"],
		correctAnswer: 0,
		reference: "Hydratation et activité physique",
	},
	{
		question:
			"Quelle quantité d’eau une personne doit-elle boire par jour en moyenne ?",
		options: ["1,5 à 2 litres", "3 litres", "0,5 litre"],
		correctAnswer: 0,
		reference: "Hydratation",
	},
	{
		question:
			"Comment appelle-t-on l'accumulation de graisse au niveau de l'abdomen, fréquente chez les hommes ?",
		options: ["Endomorphe", "Androïde", "Gynoïde"],
		correctAnswer: 1,
		reference: "Morphotypes",
	},
	{
		question:
			"Quel est le besoin quotidien en protéines pour une personne sédentaire ?",
		options: ["0,83 g/kg de poids corporel", "1,2 g/kg", "2 g/kg"],
		correctAnswer: 0,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle est la proportion de lipides recommandée dans l'apport total pour un sportif ?",
		options: ["10 à 20 %", "35 à 40 %", "50 %"],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle est la collation idéale plus de 3 heures avant un effort physique ?",
		options: [
			"Une poignée d'amandes",
			"Un sandwich pain céréales, fromage, jambon",
			"Un yaourt aux fruits",
		],
		correctAnswer: 1,
		reference: "Collations sportives",
	},
	{
		question:
			"Que se passe-t-il si le tour de taille est supérieur à 94 cm chez un homme ?",
		options: [
			"Aucun risque",
			"Augmentation du risque métabolique",
			"Perte de graisse",
		],
		correctAnswer: 1,
		reference: "Masse grasse et risques métaboliques",
	},
	{
		question:
			"Quelle est la quantité recommandée d'eau à boire après un effort intense ?",
		options: ["100 ml", "1 L", "300 à 500 ml"],
		correctAnswer: 2,
		reference: "Hydratation et activité physique",
	},
	{
		question:
			"Quelle est la principale source d'énergie utilisée par le corps pendant un marathon ?",
		options: ["Lipides", "Glucides", "Protéines"],
		correctAnswer: 0,
		reference: "Métabolisme et filières énergétiques",
	},
	{
		question:
			"Quel est le pourcentage recommandé de lipides dans l'apport énergétique total (AET) ?",
		options: ["10 à 20 %", "35 à 40 %", "50 %"],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quel est le nombre de calories apportées par 1 gramme de glucides ?",
		options: ["4 kcal", "7 kcal", "9 kcal"],
		correctAnswer: 0,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question: "Quelle hormone régule la sensation de satiété ?",
		options: ["Leptine", "Insuline", "Ghréline"],
		correctAnswer: 0,
		reference: "Ghréline et leptine",
	},
	{
		question:
			"Pour une personne sédentaire, quel est le niveau NAP correct à utiliser pour calculer l'AET ?",
		options: ["1,5", "1 à 1,39", "2,0"],
		correctAnswer: 1,
		reference: "Calcul du métabolisme",
	},
	{
		question:
			"Quelle quantité d'eau doit-on consommer pendant une activité physique d'une durée supérieure à 3 heures ?",
		options: ["Boisson isotonique", "Eau plate", "Boisson énergétique"],
		correctAnswer: 0,
		reference: "Hydratation et activité physique",
	},
	{
		question: "Quel est le rôle principal des protéines dans le corps ?",
		options: [
			"Fournir de l'énergie rapide",
			"Construire et réparer les tissus musculaires",
			"Stocker les graisses",
		],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle est la proportion de glucides dans l'apport énergétique recommandé pour un sportif ?",
		options: ["40 à 55 %", "25 à 35 %", "60 à 70 %"],
		correctAnswer: 0,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle filière énergétique produit 2 à 3 ATP par molécule de glucose sans oxygène ?",
		options: ["Anaérobie lactique", "Anaérobie alactique", "Aérobie"],
		correctAnswer: 0,
		reference: "Métabolisme et filières énergétiques",
	},
	{
		question:
			"Comment est appelé un morphotype avec une accumulation de graisse autour de l'abdomen ?",
		options: ["Gynoïde", "Androïde", "Endomorphe"],
		correctAnswer: 1,
		reference: "Morphotypes",
	},
	{
		question:
			"Quelle est la proportion de protéines recommandée dans l'alimentation quotidienne d'un adulte ?",
		options: ["5 à 10 %", "10 à 20 %", "30 %"],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle est la quantité de protéines recommandée pour un sportif visant la perte de poids ?",
		options: [
			"1 g/kg de poids corporel",
			"1,4 à 1,8 g/kg de poids corporel",
			"2,5 g/kg de poids corporel",
		],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle est la quantité d'ATP produite par la filière aérobie pour une molécule de glucose ?",
		options: ["2 ATP", "36 à 38 ATP", "45 ATP"],
		correctAnswer: 1,
		reference: "Métabolisme et filières énergétiques",
	},
	{
		question:
			"Quel nutriment doit être consommé en priorité pour la récupération après une compétition d'endurance ?",
		options: ["Glucides", "Lipides", "Protéines"],
		correctAnswer: 0,
		reference: "Alimentation et compétition",
	},
	{
		question: "Quel est l’apport énergétique fourni par 1 g de protéines ?",
		options: ["2 kcal", "4 kcal", "9 kcal"],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle est la meilleure collation à prendre moins d'une heure avant un effort ?",
		options: [
			"Un bol de céréales",
			"Compote de fruits",
			"Sandwich au jambon",
		],
		correctAnswer: 1,
		reference: "Collations sportives",
	},
	{
		question:
			"Quelle hormone favorise le stockage des graisses dans l'organisme ?",
		options: ["Insuline", "Leptine", "Cortisol"],
		correctAnswer: 0,
		reference: "Ghréline et leptine",
	},
	{
		question:
			"Combien de litres d'eau perd-on en moyenne par transpiration pendant 1 heure d'exercice intense ?",
		options: ["500 ml", "1 à 2 litres", "3 litres"],
		correctAnswer: 1,
		reference: "Hydratation et activité physique",
	},
	{
		question:
			"Quel est le principal substrat utilisé lors d'un effort modéré de plus de 2 heures ?",
		options: ["Lipides", "Protéines", "Phosphocréatine"],
		correctAnswer: 0,
		reference: "Métabolisme et filières énergétiques",
	},
	{
		question:
			"Que se passe-t-il si une personne consomme trop peu de glucides pendant une longue période ?",
		options: [
			"Perte de muscle",
			"Prise de poids",
			"Augmentation des performances sportives",
		],
		correctAnswer: 0,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quels sont les principaux macronutriments qui doivent être consommés après un effort intense ?",
		options: [
			"Protéines et glucides",
			"Lipides et protéines",
			"Glucides seuls",
		],
		correctAnswer: 0,
		reference: "Alimentation et compétition",
	},
	{
		question: "Quelle est la fonction principale des fibres alimentaires ?",
		options: [
			"Fournir de l'énergie rapide",
			"Améliorer la digestion",
			"Stocker les graisses",
		],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle est la boisson recommandée pour une compétition de plus de 3 heures ?",
		options: ["Eau", "Boisson isotonique", "Boisson énergisante"],
		correctAnswer: 1,
		reference: "Hydratation et activité physique",
	},
	{
		question:
			"Quel type de lipides est recommandé pour une alimentation saine et équilibrée ?",
		options: [
			"Acides gras saturés",
			"Acides gras insaturés",
			"Acides gras trans",
		],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	{
		question:
			"Quelle est la quantité d'eau recommandée à boire quotidiennement pour une personne en bonne santé ?",
		options: ["500 ml", "1 litre", "1,5 à 2 litres"],
		correctAnswer: 2,
		reference: "Hydratation",
	},
	{
		question:
			"Que représente le NAP dans le calcul des besoins énergétiques ?",
		options: [
			"Niveau d'activité physique",
			"Besoin en protéines",
			"Réserve de glycogène",
		],
		correctAnswer: 0,
		reference: "Calcul du métabolisme",
	},
	{
		question:
			"Quelle est la quantité recommandée de protéines pour un athlète en période de prise de masse ?",
		options: ["1 g/kg", "1,5 à 2,5 g/kg", "3 g/kg"],
		correctAnswer: 1,
		reference: "Alimentation et prise de masse",
	},
	{
		question:
			"Quel est le risque d'une déshydratation sévère chez un sportif ?",
		options: [
			"Augmentation des performances",
			"Diminution des capacités d'endurance",
			"Récupération plus rapide",
		],
		correctAnswer: 1,
		reference: "Hydratation et activité physique",
	},
	{
		question:
			"Quel est le rôle principal des glucides dans l’alimentation d’un athlète ?",
		options: [
			"Construire du muscle",
			"Fournir de l'énergie rapide",
			"Stocker des graisses",
		],
		correctAnswer: 1,
		reference: "Valeur énergétique des macronutriments",
	},
	// ... 59 autres questions ...
];
