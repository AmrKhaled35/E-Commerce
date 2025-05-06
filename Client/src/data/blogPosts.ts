export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    title: 'L\'histoire du croissant français',
    excerpt: 'Découvrez les origines fascinantes du croissant, ce symbole emblématique de la pâtisserie française qui n\'est pourtant pas né en France.',
    content: `
      # L'histoire du croissant français

      Le croissant, ce symbole emblématique de la pâtisserie française, possède une histoire riche et surprenante. Contrairement à la croyance populaire, le croissant n'est pas né en France, mais en Autriche.

      ## Les origines viennoises

      Selon la légende, le croissant serait né à Vienne en 1683, lors du siège de la ville par les Ottomans. Des boulangers viennois, travaillant de nuit, auraient entendu les Turcs creuser des tunnels sous les murs de la ville et auraient donné l'alerte, permettant ainsi de sauver Vienne. Pour commémorer cette victoire, ils auraient créé une pâtisserie en forme de croissant, symbole présent sur le drapeau ottoman.

      ## L'arrivée en France

      C'est Marie-Antoinette, princesse autrichienne devenue reine de France, qui aurait introduit le "kipferl" (ancêtre du croissant) à la cour de Versailles. Nostalgique des saveurs de son pays natal, elle aurait demandé aux boulangers français de reproduire cette viennoiserie.

      ## La transformation française

      Ce n'est qu'au XIXe siècle que le croissant prend sa forme actuelle. August Zang, un entrepreneur autrichien, ouvre en 1839 la "Boulangerie Viennoise" à Paris, où il propose des kipferls. Les boulangers français s'inspirent de cette recette mais la modifient en remplaçant la pâte à brioche par une pâte feuilletée au beurre, donnant naissance au croissant que nous connaissons aujourd'hui.

      ## Un symbole français

      Au fil des décennies, le croissant est devenu un véritable symbole de la gastronomie française. Son feuilletage délicat, sa forme élégante et son goût incomparable de beurre en ont fait un incontournable du petit-déjeuner français.

      Aujourd'hui, que serait la France sans ses croissants? Cette viennoiserie, adoptée et perfectionnée par les boulangers français, fait désormais partie intégrante du patrimoine culinaire national.
    `,
    date: '2023-05-15',
    author: 'Marie Leclerc',
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
    category: 'Histoire'
  },
  {
    id: '2',
    title: 'Les secrets d\'une pâte feuilletée parfaite',
    excerpt: 'Maîtrisez l\'art délicat de la pâte feuilletée avec nos conseils d\'experts et techniques professionnelles pour des résultats dignes des meilleures pâtisseries parisiennes.',
    content: `
      # Les secrets d'une pâte feuilletée parfaite

      La pâte feuilletée est l'une des préparations fondamentales de la pâtisserie française. Son feuilletage délicat et sa texture croustillante en font la base de nombreuses pâtisseries emblématiques, du millefeuille au palmier en passant par la galette des rois.

      ## Les ingrédients essentiels

      Une pâte feuilletée réussie commence par des ingrédients de qualité :
      - La farine : préférez une farine T45 ou T55, à teneur moyenne en gluten
      - Le beurre : choisissez un beurre de tourage à 84% de matière grasse minimum
      - L'eau : elle doit être froide pour éviter que le beurre ne fonde
      - Le sel : il renforce la structure du gluten et relève les saveurs

      ## La technique du tourage

      Le tourage, cette succession de pliages et d'abaissages, est l'étape cruciale qui crée les multiples couches de la pâte feuilletée :

      1. Préparez la détrempe (mélange de farine, eau, sel)
      2. Enveloppez le beurre de tourage dans la détrempe
      3. Effectuez 6 tours simples ou 3 tours doubles, en laissant reposer la pâte au réfrigérateur entre chaque tour

      ## Les erreurs à éviter

      - Ne laissez jamais le beurre fondre : travaillez dans un environnement frais
      - Ne farinez pas trop votre plan de travail pour éviter que la pâte ne devienne trop sèche
      - Respectez les temps de repos au réfrigérateur entre chaque tour
      - Gardez une pression régulière lors de l'abaissage

      ## La cuisson parfaite

      Pour une cuisson optimale de votre pâte feuilletée :
      - Préchauffez votre four à 200°C
      - Utilisez une plaque de cuisson froide
      - Humidifiez légèrement la plaque pour créer de la vapeur
      - Ne jamais ouvrir la porte pendant les 15 premières minutes de cuisson

      Maîtriser la pâte feuilletée demande du temps et de la pratique, mais le résultat en vaut la peine. Ce savoir-faire ancestral, transmis de génération en génération dans les pâtisseries françaises, est aujourd'hui reconnu comme l'un des fleurons de notre patrimoine culinaire.
    `,
    date: '2023-06-22',
    author: 'Pierre Moreau',
    image: 'https://images.pexels.com/photos/6287488/pexels-photo-6287488.jpeg',
    category: 'Techniques'
  },
  {
    id: '3',
    title: 'Le macaron, joyau de la pâtisserie française',
    excerpt: 'Plongez dans l\'univers coloré et raffiné des macarons français, de leurs origines italiennes à leur statut actuel d\'icône gastronomique mondiale.',
    content: `
      # Le macaron, joyau de la pâtisserie française

      Petites merveilles colorées, les macarons sont devenus l'un des ambassadeurs les plus élégants de la pâtisserie française à travers le monde. Leur coque délicate, leur texture à la fois croustillante et fondante, et leurs ganaches créatives en font un dessert d'exception.

      ## Des origines italiennes

      Contrairement aux idées reçues, le macaron est né en Italie à la Renaissance. Il serait arrivé en France au XVIe siècle dans les bagages de Catherine de Médicis, lors de son mariage avec Henri II. Ces premiers macarons étaient de simples biscuits aux amandes, sans garniture.

      ## La révolution Ladurée

      C'est au début du XXe siècle que Pierre Desfontaines, petit-cousin du fondateur de la maison Ladurée, eut l'idée révolutionnaire d'assembler deux coques de macarons et de les garnir d'une ganache parfumée. Le macaron parisien était né, et avec lui une nouvelle ère pour cette pâtisserie.

      ## La technique parfaite

      La réalisation d'un macaron parfait repose sur plusieurs étapes critiques :

      1. **Le tant-pour-tant** : mélange équilibré de poudre d'amande et de sucre glace
      2. **La meringue française** : blancs d'œufs montés avec du sucre
      3. **Le macaronnage** : incorporation délicate du tant-pour-tant à la meringue
      4. **Le repos** : formation d'une pellicule avant cuisson
      5. **La cuisson** : développement du "pied" caractéristique

      ## L'innovation constante

      Si les parfums classiques comme la vanille, le chocolat, le café ou la framboise restent des valeurs sûres, les grands pâtissiers français ne cessent d'innover avec des associations audacieuses : truffe noire, foie gras, basilic-fraise, ou encore champagne-rose.

      Pierre Hermé, surnommé le "Picasso de la pâtisserie", a révolutionné l'univers du macaron avec ses créations saisonnières et ses combinaisons inattendues, comme son célèbre macaron "Ispahan" (rose, litchi, framboise).

      ## Un symbole de l'élégance française

      Aujourd'hui, le macaron symbolise l'excellence et le raffinement de la pâtisserie française. Sa présence dans les vitrines des pâtisseries du monde entier témoigne de son statut d'icône gastronomique, capable de traverser les frontières tout en conservant son identité française.
    `,
    date: '2023-07-10',
    author: 'Sophie Dubois',
    image: 'https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg',
    category: 'Pâtisseries'
  },
  {
    id: '4',
    title: 'La baguette française, un patrimoine immatériel de l\'UNESCO',
    excerpt: 'Célébrons la reconnaissance mondiale de la baguette traditionnelle française, récemment inscrite au patrimoine culturel immatériel de l\'humanité par l\'UNESCO.',
    content: `
      # La baguette française, un patrimoine immatériel de l'UNESCO

      En novembre 2022, la baguette de pain française a rejoint le prestigieux patrimoine culturel immatériel de l'humanité de l'UNESCO. Cette reconnaissance consacre non seulement un produit, mais tout un art de vivre à la française.

      ## Un symbole national

      La baguette, avec sa forme allongée caractéristique, sa croûte dorée et croustillante et sa mie alvéolée, est bien plus qu'un simple pain. Elle est un pilier de la culture française, rythmant le quotidien de millions de Français qui franchissent chaque jour la porte de leur boulangerie.

      "Le pain, c'est la vie", dit l'adage. En France, cette expression prend tout son sens avec la baguette. De la tartine beurrée du petit-déjeuner au sandwich du déjeuner, en passant par le morceau qui accompagne le fromage, elle est présente à tous les repas.

      ## Une histoire récente

      Contrairement aux idées reçues, la baguette telle que nous la connaissons aujourd'hui est relativement récente. Si le pain long existe depuis plusieurs siècles, la baguette moderne serait apparue au début du XXe siècle. Plusieurs théories existent sur son origine précise :

      - Une création pour les ouvriers du métro parisien, qui pouvaient la rompre facilement sans couteau
      - Une innovation liée à une loi de 1920 interdisant aux boulangers de travailler avant 4h du matin, les obligeant à créer un pain à fermentation plus rapide
      - Une évolution des pains longs pour répondre à une demande de pains plus croustillants

      ## Un savoir-faire ancestral

      Si la forme est récente, le savoir-faire, lui, est ancestral. La baguette traditionnelle, ou "baguette de tradition française", est régie par un décret de 1993 qui garantit:
      - Des ingrédients simples : farine, eau, sel et levure ou levain
      - L'absence d'additifs et de congélation
      - Un pétrissage, une fermentation, un façonnage et une cuisson sur le lieu de vente

      ## Un patrimoine vivant

      La reconnaissance par l'UNESCO salue avant tout les artisans boulangers et leur savoir-faire. Chaque jour, dans plus de 33,000 boulangeries à travers la France, ils perpétuent une tradition qui se transmet de génération en génération.

      Cette inscription rappelle l'importance de préserver les pratiques artisanales face à l'industrialisation. Elle garantit la transmission de techniques ancestrales tout en valorisant un produit emblématique de la gastronomie française.

      La baguette, ce "250 grammes de magie et de perfection" comme la décrivait l'ancien président Emmanuel Macron, continue ainsi de porter haut les couleurs de la France à travers le monde.
    `,
    date: '2023-08-05',
    author: 'Jean Dupont',
    image: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg',
    category: 'Patrimoine'
  },
  {
    id: '5',
    title: 'Les pâtisseries régionales françaises méconnues',
    excerpt: 'Partez à la découverte des trésors cachés de la pâtisserie française régionale, bien loin des classiques parisiens que tout le monde connaît.',
    content: `
      # Les pâtisseries régionales françaises méconnues

      La France possède un patrimoine pâtissier d'une richesse exceptionnelle qui va bien au-delà des célèbres éclairs, Paris-Brest ou millefeuilles. Chaque région conserve précieusement ses spécialités, témoins d'une histoire locale et d'un savoir-faire traditionnel.

      ## Le kouign-amann de Bretagne

      Ce gâteau breton au beurre salé, dont le nom signifie "gâteau au beurre" en breton, est une véritable bombe calorique... et gustative ! Créé à Douarnenez au XIXe siècle, il est composé d'une pâte à pain enrichie de beurre salé et de sucre, pliée plusieurs fois pour créer un feuilletage caramélisé à la cuisson.

      ## La tarte tropézienne du Sud

      Inventée en 1955 par Alexandre Micka, pâtissier d'origine polonaise installé à Saint-Tropez, cette brioche moelleuse garnie de crème onctueuse a été baptisée par Brigitte Bardot lors du tournage de "Et Dieu créa la femme". Sa recette exacte reste un secret bien gardé.

      ## Le gâteau basque du Pays basque

      Originaire de la ville de Cambo-les-Bains, ce gâteau à la pâte sablée renferme traditionnellement une crème pâtissière ou de la confiture de cerises noires. Sa surface dorée est souvent décorée d'un motif basque dessiné à la fourchette.

      ## Les navettes de Marseille

      Ces biscuits en forme de petit bateau sont parfumés à la fleur d'oranger. Tradition liée à la fête de la Chandeleur et à l'arrivée des Saintes-Maries en Provence, elles sont préparées depuis le XIIIe siècle.

      ## La tarte au sucre du Nord

      Simple mais délicieuse, cette tarte est composée d'une pâte levée garnie d'un mélange de sucre, de beurre et de crème. Populaire dans le Nord de la France et en Belgique, elle était traditionnellement préparée le vendredi, jour où les boulangers récupéraient les restes de pâte à pain.

      ## Les cornets de Murat d'Auvergne

      Ces biscuits à la texture croquante sont roulés en forme de cône et parfois garnis de crème. Selon la légende, ils auraient été créés au XVIIe siècle par un pâtissier qui se serait inspiré des cornets de papier utilisés par les apothicaires.

      ## Le pastis landais du Sud-Ouest

      À ne pas confondre avec l'alcise anisé, ce gâteau traditionnel des Landes est parfumé à l'armagnac, à la vanille et au zeste d'orange. Sa texture briochée et son parfum subtil en font un délicieux goûter.

      ---

      Ces pâtisseries régionales, moins connues que leurs cousines parisiennes, méritent d'être découvertes lors de voyages à travers la France. Elles racontent l'histoire des terroirs, des traditions locales et du génie culinaire français qui s'exprime jusque dans les plus petits villages.
    `,
    date: '2023-09-18',
    author: 'Claire Martin',
    image: 'https://images.pexels.com/photos/5419064/pexels-photo-5419064.jpeg',
    category: 'Traditions'
  },
  {
    id: '6',
    title: 'Comment déguster un croissant comme un vrai Parisien',
    excerpt: 'Apprenez les codes culturels et les habitudes des Parisiens pour savourer votre croissant comme un authentique habitant de la Ville Lumière.',
    content: `
      # Comment déguster un croissant comme un vrai Parisien

      Pour les visiteurs étrangers, déguster un croissant à Paris est une expérience culturelle à part entière. Mais pour éviter de passer pour un touriste, voici les codes tacites que respectent les Parisiens quand il s'agit de savourer cette viennoiserie emblématique.

      ## Choisir le bon moment

      Contrairement aux idées reçues, le croissant n'est pas nécessairement un rituel quotidien pour les Parisiens. C'est plutôt un plaisir du week-end ou une gourmandise occasionnelle. En semaine, beaucoup se contentent d'un café et éventuellement d'une tartine.

      Le croissant se déguste principalement au petit-déjeuner, jamais au déjeuner ou au dîner. L'achat se fait généralement entre 7h et 9h du matin, directement à la boulangerie du quartier.

      ## Sélectionner sa boulangerie

      Un Parisien authentique a SA boulangerie. Il ne choisit pas au hasard et peut parfaitement faire un détour de plusieurs rues pour se rendre dans son établissement favori. La file d'attente est souvent un bon indicateur de qualité.

      Le Parisien averti évite à tout prix les chaînes de boulangerie industrielles et préfère les artisans qui fabriquent sur place. Il reconnaît un bon croissant à sa forme bien galbée, sa couleur dorée (ni trop pâle, ni trop foncée) et son feuilletage visible.

      ## Commander correctement

      À la boulangerie, le Parisien attend patiemment son tour sans manifester d'impatience visible (même s'il bouillonne intérieurement). Quand vient son tour, la commande est concise et précise :
      - "Un croissant, s'il vous plaît."
      - "Deux croissants et une baguette tradition, s'il vous plaît."

      Pas de "bonjour, j'aimerais..." ou de longues explications. L'efficacité prime.

      ## Manger comme un local

      Le vrai Parisien ne mange JAMAIS son croissant en marchant dans la rue. Cette habitude est immédiatement identifiée comme touristique. Le croissant se déguste :
      - À la maison
      - Assis à une terrasse de café
      - Éventuellement au bureau, mais discrètement

      Quant à la technique, le croissant se mange traditionnellement sans couverts, avec les doigts, en commençant par les pointes. Il se déguste nature, sans confiture ni beurre supplémentaire (le croissant contient déjà suffisamment de beurre).

      ## L'accompagnement idéal

      Le croissant s'accompagne presque toujours d'une boisson chaude :
      - Un café noir (expresso) est l'option la plus courante
      - Un café crème pour les plus gourmands
      - Un thé pour certains, mais c'est moins traditionnel

      Le jus d'orange pressé est une option acceptable, mais secondaire.

      ## Les fautes impardonables

      Pour ne pas se faire repérer comme touriste, évitez absolument :
      - De demander un croissant pour le déjeuner
      - De commander un cappuccino avec votre croissant
      - D'y ajouter du Nutella ou tout autre garniture
      - De le réchauffer au micro-ondes (sacrilège !)
      - De le tremper dans votre café comme un biscuit

      Suivez ces conseils, et vous passerez presque pour un Parisien authentique lors de votre prochaine dégustation de croissant dans la Ville Lumière.
    `,
    date: '2023-10-05',
    author: 'Julien Petit',
    image: 'https://images.pexels.com/photos/2280559/pexels-photo-2280559.jpeg',
    category: 'Culture'
  }
];