
import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturedBooks } from '@/components/ui/FeaturedBooks';
import { BookCard } from '@/components/ui/BookCard';
import { NewsletterForm } from '@/components/ui/NewsletterForm';
import { toast } from '@/hooks/use-toast';

const featuredBooks = [
  {
    id: '1',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    price: 24.99,
    isBestseller: true
  },
  {
    id: '2',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverImage: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 19.99
  },
  {
    id: '3',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    coverImage: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    price: 22.50,
    isNew: true
  },
  {
    id: '4',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverImage: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    price: 21.99
  },
  {
    id: '5',
    title: 'The Vanishing Half',
    author: 'Brit Bennett',
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2730&q=80',
    price: 18.99,
    isBestseller: true
  }
];

const saleBooks = [
  {
    id: '11',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    price: 12.99,
    originalPrice: 19.99,
    isSale: true
  },
  {
    id: '12',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverImage: 'https://images.unsplash.com/photo-1531928351158-2f736078e0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 10.50,
    originalPrice: 15.99,
    isSale: true
  },
  {
    id: '13',
    title: '1984',
    author: 'George Orwell',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80',
    price: 11.25,
    originalPrice: 16.99,
    isSale: true
  },
  {
    id: '14',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    price: 9.99,
    originalPrice: 14.99,
    isSale: true
  },
  {
    id: '15',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    coverImage: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 13.49,
    originalPrice: 19.99,
    isSale: true
  }
];

const heroFeaturedBook = {
  id: 'hero-featured',
  title: 'The Art of Storytelling',
  author: 'Emma Roberts',
  coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80',
  price: 28.99
};

const categories = [
  {
    name: 'Fiction',
    image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80'
  },
  {
    name: 'Non-Fiction',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Sci-Fi',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1811&q=80'
  },
  {
    name: 'Mystery',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  }
];

const newReleases = [
  {
    id: '21',
    title: 'The Invisible Life of Addie LaRue',
    author: 'V.E. Schwab',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80',
    price: 23.99,
    isNew: true
  },
  {
    id: '22',
    title: 'Mexican Gothic',
    author: 'Silvia Moreno-Garcia',
    coverImage: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    price: 21.50,
    isNew: true
  },
  {
    id: '23',
    title: 'The Four Winds',
    author: 'Kristin Hannah',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    price: 24.99,
    isNew: true
  },
  {
    id: '24',
    title: 'The Paris Library',
    author: 'Janet Skeslien Charles',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    price: 22.95,
    isNew: true
  },
  {
    id: '25',
    title: 'The Sanatorium',
    author: 'Sarah Pearse',
    coverImage: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    price: 20.99,
    isNew: true
  }
];

const Index = () => {
  const [showCta, setShowCta] = useState(true);

  const handleCloseCta = () => {
    setShowCta(false);
    toast({
      title: "Offer dismissed",
      description: "You can still get our deals by signing up to our newsletter",
      duration: 3000,
    });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80"
            alt="Books in a library"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
        </div>
        
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl animate-slide-up mb-8 md:mb-0">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 text-sm font-medium rounded-full mb-4">
                Curated Selection of Books
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Discover Stories That Inspire
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Explore our vast collection of captivating reads, from timeless classics to the latest bestsellers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/books"
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Browse Collection
                </Link>
                <Link
                  to="/books?filter=new"
                  className="bg-white hover:bg-secondary border border-border px-6 py-3 rounded-md font-medium transition-colors"
                >
                  New Releases
                </Link>
              </div>
            </div>
            
            {/* Featured Book Display */}
            <div className="md:ml-8 animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent to-primary/60 rounded-lg blur opacity-60 group-hover:opacity-80 transition duration-1000"></div>
                <div className="relative">
                  <Link to={`https://www.facebook.com/events/982433676810707/`} className="block" target='_blank'>
                    <div className="bg-white p-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                      <div className="relative w-48 h-64 sm:w-56 sm:h-72">
                        <img 
                          src={heroFeaturedBook.coverImage} 
                          alt={heroFeaturedBook.title} 
                          className="w-full h-full object-cover rounded-md"
                        />
                        <div className="absolute top-2 right-2 bg-accent/90 text-white text-xs px-2 py-1 rounded-sm font-medium">
                          Join Our Event
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <h3 className="font-medium text-base line-clamp-1">{heroFeaturedBook.title}</h3>
                        <p className="text-sm text-muted-foreground">{heroFeaturedBook.author}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-accent/10">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'cursive' }}>Browse Categories</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Explore our vast collection organized by genres for every type of reader.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 staggered-fade-in">
            {categories.map((category, i) => (
              <Link
                key={i}
                to={`/books?category=${category.name.toLowerCase()}`}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-medium">{category.name}</h3>
                    <span className="flex items-center text-white/80 text-sm mt-2 group-hover:translate-x-1 transition-transform">
                      Explore <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Books Section - with animated person icon */}
      <section className="py-12 relative">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-10 relative">
            <div className="absolute -left-4 lg:-left-12 top-1/2 transform -translate-y-1/2 hidden md:block">
              <div className="animate-bounce">
                <img 
                  src="/lovable-uploads/50bc96b1-f5b6-444b-a262-fd6e60cba464.png" 
                  alt="Staff picks mascot" 
                  style={{ height: "180px",
                    width: "180px"
                   }} 
                  />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold" style={{ fontFamily: 'cursive' }}>Staff Picks</h2>
            <p className="text-muted-foreground font-reading mt-3 max-w-2xl mx-auto">Handpicked favorites from our passionate book experts.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 staggered-fade-in">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      {showCta && (
        <section className="py-8">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <button 
                onClick={handleCloseCta}
                className="absolute top-4 right-4 z-10"
                aria-label="Close offer"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="bg-amber-50 md:w-1/2 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-red-500 opacity-90"></div>
                  <img 
                    src="/lovable-uploads/91422c89-8b3b-4117-a2c6-5cb976ac84d9.png" 
                    alt="Bookstore with framed pictures" 
                    className="relative z-10 object-contain h-full w-full p-6 max-h-80 md:max-h-none"
                  />
                </div>
                
                <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">📚 30% OFF</h2>
                    <p className="text-gray-600 mb-2">on Your First Purchase! 🎉</p>
                    <p className="text-gray-600 italic mb-3">"Capture the Story, Frame the Moment!"</p>
                    <p className="text-gray-600 mb-6">🛒 Shop now and bring your favorite bookish vibes to life!</p>
                    
                    <div className="mb-4">
                      <div className="flex">
                        <input 
                          type="text" 
                          placeholder="Promotion code: 30OFF" 
                          className="flex-grow px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent"
                          defaultValue="30OFF"
                        />
                        <button className="bg-red-500 text-white px-4 flex items-center justify-center rounded-r-md">
                          GO
                        </button>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-md font-medium transition-colors mb-4">
                      SHOP NOW
                    </button>
                    
                    <button className="text-gray-700 hover:underline text-sm">
                      I'll check later
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Sale Books Section */}
      <FeaturedBooks
        title="Spring Sale - Up to 30% Off"
        subtitle="Limited time offers on these popular titles. Use code SPRING30 at checkout."
        books={saleBooks}
        image="/lovable-uploads/a9ae38ce-e9de-41d7-acb5-5401e9bb0351.png"
        cursiveHeading={true}
      />
      
      {/* New Releases Section */}
      <FeaturedBooks
        title="New Releases"
        subtitle="The latest additions to our ever-growing collection."
        books={newReleases}
        cursiveHeading={true}
      />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'cursive' }}>Join Our Community</h2>
              <p className="text-muted-foreground mt-3">
                Subscribe to our newsletter for exclusive offers, reading recommendations, and author updates.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
