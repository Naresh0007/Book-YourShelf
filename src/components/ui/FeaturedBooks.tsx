
import React from 'react';
import { BookCard, BookProps } from './BookCard';

interface FeaturedBooksProps {
  title: string;
  subtitle?: string;
  books: BookProps[];
  image?: string;
  cursiveHeading?: boolean;
}

export const FeaturedBooks: React.FC<FeaturedBooksProps> = ({ 
  title, 
  subtitle,
  books,
  image,
  cursiveHeading = false,
}) => {
  return (
    <section className="py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-10 relative">
          <h2 
            className="text-2xl md:text-3xl font-display font-semibold"
            style={cursiveHeading ? { fontFamily: 'cursive' } : {}}
          >
            {title}
          </h2>
          {subtitle && <p className="text-muted-foreground font-reading mt-3 max-w-2xl mx-auto">{subtitle}</p>}
          
          {image && (
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <img 
                  src={image}
                  alt="Section image" 
                  className="w-16" 
                  style={{ height: "163px",
                    width: "163px"
                   }} 
/>            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 staggered-fade-in">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};
