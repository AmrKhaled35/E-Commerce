import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import AnimatedSection from '../components/UI/AnimatedSection';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: "Traditions",
      description: "Nous perpétuons les méthodes artisanales transmises de génération en génération."
    },
    {
      title: "Qualité",
      description: "Nous utilisons uniquement des ingrédients de premier choix pour créer des pâtisseries exceptionnelles."
    },
    {
      title: "Créativité",
      description: "Nous innovons constamment tout en respectant l'héritage de la pâtisserie française."
    },
    {
      title: "Passion",
      description: "Notre amour pour la pâtisserie se reflète dans chaque création qui sort de nos fours."
    }
  ];

  const teamMembers = [
    {
      name: "Marie Durand",
      role: "Chef Pâtissière",
      image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg",
      description: "Formée auprès des plus grands noms de la pâtisserie française, Marie apporte sa créativité et sa maîtrise technique à chaque création."
    },
    {
      name: "Thomas Laurent",
      role: "Boulanger en Chef",
      image: "https://images.pexels.com/photos/8477897/pexels-photo-8477897.jpeg",
      description: "Avec plus de 15 ans d'expérience, Thomas est le gardien de nos traditions boulangères et le créateur de nos viennoiseries légendaires."
    },
    {
      name: "Sophie Moreau",
      role: "Chocolatière",
      image: "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg",
      description: "Spécialiste du chocolat, Sophie crée des œuvres d'art gourmandes qui ravissent les yeux autant que les papilles."
    }
  ];

  const timeline = [
    {
      year: "1987",
      title: "L'ouverture",
      description: "Ouverture de la première boutique La Petite Pâtisserie dans le 6ème arrondissement de Paris."
    },
    {
      year: "1995",
      title: "Reconnaissance",
      description: "Obtention du titre 'Meilleur Croissant de Paris' et expansion de notre gamme de viennoiseries."
    },
    {
      year: "2005",
      title: "Nouvelle Génération",
      description: "Transmission de l'entreprise à la deuxième génération, avec l'arrivée de Claire Dubois à la direction."
    },
    {
      year: "2012",
      title: "Expansion",
      description: "Ouverture de notre deuxième boutique dans le Marais, élargissant notre présence dans la capitale."
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Lancement de notre boutique en ligne pour partager nos créations avec toute la France."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Notre Histoire" 
        subtitle="Découvrez l'héritage et la passion qui animent La Petite Pâtisserie depuis 1987" 
        bgImage="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
      />
      
      {/* Our Story */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-coffee-800 mb-6">L'origine de notre passion</h2>
              <p className="text-coffee-700 mb-4">
                Fondée en 1987 par Jean-Pierre Dubois, La Petite Pâtisserie est née d'un rêve simple : 
                offrir aux Parisiens des pâtisseries authentiques préparées selon les traditions françaises.
              </p>
              <p className="text-coffee-700 mb-4">
                Jean-Pierre, issu d'une longue lignée de boulangers originaires de Normandie, a appris l'art 
                de la pâtisserie auprès des plus grands maîtres français avant d'ouvrir sa propre boutique 
                dans le cœur historique de Paris.
              </p>
              <p className="text-coffee-700">
                Ce qui a commencé comme une petite boutique familiale s'est transformé au fil des années 
                en une institution respectée, tout en préservant l'esprit artisanal et l'attention aux 
                détails qui ont fait sa réputation.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg" 
                alt="Notre boulangerie" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-lg hidden md:block">
                <p className="font-script text-2xl text-burgundy-700">Depuis 1987</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-burgundy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-coffee-800 mb-4">Nos Valeurs</h2>
            <p className="text-coffee-700 max-w-2xl mx-auto">
              Ces principes guident chaque aspect de notre travail quotidien et nous 
              permettent de maintenir l'excellence qui définit La Petite Pâtisserie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="font-serif text-xl text-burgundy-700 mb-4">{value.title}</h3>
                <p className="text-coffee-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-coffee-800 mb-4">Notre Équipe</h2>
            <p className="text-coffee-700 max-w-2xl mx-auto">
              Derrière chaque création se trouve une équipe passionnée d'artisans qui perpétuent 
              les traditions de la pâtisserie française avec dévouement et créativité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-coffee-800 mb-1">{member.name}</h3>
                  <p className="text-burgundy-700 font-medium mb-3">{member.role}</p>
                  <p className="text-coffee-700">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 bg-burgundy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-coffee-800 mb-4">Notre Histoire</h2>
            <p className="text-coffee-700 max-w-2xl mx-auto">
              Découvrez les moments clés qui ont façonné La Petite Pâtisserie au fil des années.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <div key={event.year} className="relative pl-8 pb-8 border-l-2 border-burgundy-300 last:pb-0">
                <div className="absolute -left-2 top-0 w-6 h-6 bg-burgundy-600 rounded-full"></div>
                <div className="mb-8">
                  <h3 className="font-serif text-xl text-coffee-800 mb-2">{event.year} - {event.title}</h3>
                  <p className="text-coffee-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;