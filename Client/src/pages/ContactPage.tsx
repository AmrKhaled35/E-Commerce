import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import PageHeader from '../components/UI/PageHeader';
import Button from '../components/UI/Button';
import AnimatedSection from '../components/UI/AnimatedSection';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div>
      <PageHeader 
        title="Contactez-Nous" 
        subtitle="Nous serions ravis d'entendre vos questions, commentaires ou suggestions" 
        bgImage="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg"
      />
      
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="font-serif text-2xl text-coffee-800 mb-6">Envoyez-nous un message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                    <p className="font-medium">Message envoyé avec succès!</p>
                    <p>Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-coffee-700 mb-1">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-coffee-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-300"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-coffee-700 mb-1">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-300"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="order">Question sur une commande</option>
                        <option value="product">Informations sur un produit</option>
                        <option value="catering">Service de traiteur</option>
                        <option value="suggestion">Suggestion</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-coffee-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-300"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Envoi en cours...' : (
                        <>
                          <Send size={18} />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <div>
                <h2 className="font-serif text-2xl text-coffee-800 mb-6">Informations de contact</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-burgundy-100 rounded-full p-3 mr-4">
                      <MapPin size={24} className="text-burgundy-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-coffee-800 mb-1">Adresse</h3>
                      <p className="text-coffee-700">123 Rue de la Boulangerie<br />75001 Paris, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-burgundy-100 rounded-full p-3 mr-4">
                      <Phone size={24} className="text-burgundy-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-coffee-800 mb-1">Téléphone</h3>
                      <p className="text-coffee-700">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-burgundy-100 rounded-full p-3 mr-4">
                      <Mail size={24} className="text-burgundy-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-coffee-800 mb-1">Email</h3>
                      <p className="text-coffee-700">info@lapetitepatisserie.fr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-burgundy-100 rounded-full p-3 mr-4">
                      <Clock size={24} className="text-burgundy-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-coffee-800 mb-1">Heures d'ouverture</h3>
                      <table className="text-coffee-700">
                        <tbody>
                          <tr>
                            <td className="pr-4">Lundi - Vendredi</td>
                            <td>7h00 - 19h30</td>
                          </tr>
                          <tr>
                            <td className="pr-4">Samedi</td>
                            <td>7h00 - 20h00</td>
                          </tr>
                          <tr>
                            <td className="pr-4">Dimanche</td>
                            <td>8h00 - 13h00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-serif text-xl text-coffee-800 mb-4">Retrouvez-nous</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.3519691156744!3d48.85661007928747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1647095757814!5m2!1sen!2sus"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg shadow-md"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Instagram Feed */}
          <div className="mt-20">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl text-coffee-800 mb-3">Suivez-nous sur Instagram</h2>
              <p className="text-coffee-700 max-w-2xl mx-auto">
                Découvrez notre quotidien, nos créations et les coulisses de notre pâtisserie.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <a href="#" className="block overflow-hidden rounded-lg group">
                <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg" alt="Instagram 1" className="w-full h-full object-cover" />
              </a>
              <a href="#" className="block overflow-hidden rounded-lg group">
                <img src="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg" alt="Instagram 2" className="w-full h-full object-cover" />
              </a>
              <a href="#" className="block overflow-hidden rounded-lg group">
                <img src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg" alt="Instagram 3" className="w-full h-full object-cover" />
              </a>
              <a href="#" className="block overflow-hidden rounded-lg group">
                <img src="https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg" alt="Instagram 4" className="w-full h-full object-cover" />
              </a>
              <a href="#" className="block overflow-hidden rounded-lg group">
                <img src="https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg" alt="Instagram 5" className="w-full h-full object-cover" />
              </a>
              <a href="#" className="block overflow-hidden rounded-lg group">
                <img src="https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg" alt="Instagram 6" className="w-full h-full object-cover" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;