import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  name?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, name, type }) => {
  useEffect(() => {
    // Helper to find and update or create a meta tag
    const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}='${value}']`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update the document title
    if (title) {
      document.title = title;
    }

    // Standard metadata tags
    if (description) {
      setMetaTag('name', 'description', description);
    }
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // Open Graph tags
    if (title) {
      setMetaTag('property', 'og:title', title);
    }
    if (description) {
      setMetaTag('property', 'og:description', description);
    }
    if (type) {
      setMetaTag('property', 'og:type', type);
    }

    // Twitter tags
    if (title) {
      setMetaTag('name', 'twitter:title', title);
    }
    if (description) {
      setMetaTag('name', 'twitter:description', description);
    }
    if (name) {
      setMetaTag('name', 'twitter:creator', name);
    }
  }, [title, description, keywords, name, type]);

  return null; // This component does not render anything to the DOM itself
};

export default SEO;