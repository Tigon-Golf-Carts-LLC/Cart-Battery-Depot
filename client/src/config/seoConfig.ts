// SEO Configuration for Cart Battery Depot
// This file contains all meta tag configurations for dynamic generation

export interface SEOConfig {
  // Site-wide configuration
  siteName: string;
  siteUrl: string;
  defaultImage: string;
  defaultImageWidth: string;
  defaultImageHeight: string;
  defaultImageType: string;
  
  // Social Media
  facebookPageUrl: string;
  twitterHandle: string;
  socialProfileUrl: string;
  
  // Search Engine Verification Codes
  googleVerification: string;
  bingVerification: string;
  pinterestVerification: string;
  yandexVerification: string;
  
  // Default values
  defaultType: 'website' | 'article';
  locale: string;
}

export interface PageMetaData {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  type?: 'website' | 'article';
  modifiedTime?: string;
  keywords?: string;
}

// Main SEO Configuration
export const seoConfig: SEOConfig = {
  // Site Information
  siteName: 'Cart Battery Depot',
  siteUrl: 'https://cartbatterydepot.com',
  defaultImage: 'https://cartbatterydepot.com/cart-battery-depot-logo.png',
  defaultImageWidth: '800',
  defaultImageHeight: '800',
  defaultImageType: 'image/png',
  
  // Social Media Links
  facebookPageUrl: 'https://facebook.com/cartbatterydepot',
  twitterHandle: '@CartBatteryDepot',
  socialProfileUrl: 'https://twitter.com/cartbatterydepot',
  
  // Search Engine Verification (Update these with real codes when available)
  googleVerification: '',  // Add Google Search Console verification code
  bingVerification: '',    // Add Bing Webmaster Tools verification code
  pinterestVerification: '', // Add Pinterest domain verification code
  yandexVerification: '',  // Add Yandex Webmaster verification code
  
  // Defaults
  defaultType: 'website',
  locale: 'en_US',
};

// Page-specific meta data configurations
export const pageMetaData: Record<string, PageMetaData> = {
  '/': {
    title: 'Cart Battery Depot - Golf Cart Batteries | LSV, NEV & MSV Battery Experts',
    description: 'Cart Battery Depot specializes in Golf Cart Batteries, Low Speed Vehicle (LSV) Batteries, Neighborhood Electric Vehicle (NEV) Batteries, and Medium Speed Vehicle (MSV) Batteries. Over 10,000 satisfied customers nationwide. Call 1-844-888-7732',
    url: 'https://cartbatterydepot.com',
    type: 'website',
    keywords: 'golf cart batteries, LSV batteries, NEV batteries, MSV batteries, electric vehicle batteries, cart battery depot',
  },
  '/products': {
    title: 'Battery Products - Golf Cart, LSV, NEV & MSV Batteries | Cart Battery Depot',
    description: 'Browse our complete lineup of 96+ Golf Cart Batteries, LSV, NEV & MSV battery configurations. Choose from Flooded, AGM, Gel, and Lithium technologies. Expert support available.',
    url: 'https://cartbatterydepot.com/products',
    type: 'website',
    keywords: 'battery products, golf cart batteries, 6V batteries, 8V batteries, 12V batteries, lithium batteries',
  },
  '/products/golf-cart': {
    title: 'Golf Cart Batteries - 6V, 8V & 12V Options | Cart Battery Depot',
    description: 'Premium Golf Cart Batteries in 6V, 8V, and 12V configurations. Choose from Flooded Lead-Acid, AGM, Gel, and Lithium technologies. Expert advice: 1-844-888-7732',
    url: 'https://cartbatterydepot.com/products/golf-cart',
    type: 'website',
    keywords: 'golf cart batteries, 6V golf cart battery, 8V golf cart battery, 12V golf cart battery',
  },
  '/products/lsv': {
    title: 'LSV Batteries - Low Speed Vehicle Power Solutions | Cart Battery Depot',
    description: 'Low Speed Vehicle (LSV) Batteries designed for optimal performance. Available in multiple voltages and technologies. Trusted by thousands nationwide.',
    url: 'https://cartbatterydepot.com/products/lsv',
    type: 'website',
    keywords: 'LSV batteries, low speed vehicle batteries, electric vehicle batteries',
  },
  '/products/nev': {
    title: 'NEV Batteries - Neighborhood Electric Vehicle Solutions | Cart Battery Depot',
    description: 'Neighborhood Electric Vehicle (NEV) Batteries for reliable performance. Multiple voltage systems and battery technologies available.',
    url: 'https://cartbatterydepot.com/products/nev',
    type: 'website',
    keywords: 'NEV batteries, neighborhood electric vehicle batteries, electric cart batteries',
  },
  '/products/msv': {
    title: 'MSV Batteries - Medium Speed Vehicle Power | Cart Battery Depot',
    description: 'Medium Speed Vehicle (MSV) Batteries for enhanced performance. Professional-grade power solutions for demanding applications.',
    url: 'https://cartbatterydepot.com/products/msv',
    type: 'website',
    keywords: 'MSV batteries, medium speed vehicle batteries, high performance batteries',
  },
  '/battery-guide': {
    title: 'Battery Guide - Complete Golf Cart & EV Battery Information | Cart Battery Depot',
    description: 'Expert guide to Golf Cart Batteries, LSV, NEV & MSV power systems. Learn about battery technologies, maintenance, and selection. Call 1-844-888-7732',
    url: 'https://cartbatterydepot.com/battery-guide',
    type: 'article',
    keywords: 'battery guide, golf cart battery guide, battery maintenance, battery selection',
  },
  '/battery-selector': {
    title: 'Battery Selector Tool - Find Your Perfect Battery Match | Cart Battery Depot',
    description: 'Use our Battery Selector Quiz to find the optimal battery from our complete lineup of 96+ Golf Cart, LSV, NEV & MSV battery configurations.',
    url: 'https://cartbatterydepot.com/battery-selector',
    type: 'website',
    keywords: 'battery selector, battery finder, golf cart battery selector',
  },
  '/contact': {
    title: 'Contact Cart Battery Depot - Expert Battery Support | Call 1-844-888-7732',
    description: 'Contact Cart Battery Depot for expert advice on Golf Cart Batteries, LSV, NEV & MSV solutions. Call 1-844-888-7732 or request a quote online.',
    url: 'https://cartbatterydepot.com/contact',
    type: 'website',
    keywords: 'contact cart battery depot, battery experts, golf cart battery support',
  },
  '/cart': {
    title: 'Shopping Cart - Cart Battery Depot',
    description: 'Review your selected Golf Cart Batteries and complete your purchase. Fast nationwide shipping available.',
    url: 'https://cartbatterydepot.com/cart',
    type: 'website',
  },
};

// Helper function to get current timestamp in ISO 8601 format
export const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};

// Helper function to get meta data for a specific page
export const getPageMeta = (pathname: string): PageMetaData => {
  // Check for exact match
  if (pageMetaData[pathname]) {
    return pageMetaData[pathname];
  }
  
  // Check for dynamic product pages
  if (pathname.startsWith('/product/')) {
    return {
      title: 'Battery Details - Cart Battery Depot',
      description: 'View detailed specifications and pricing for this battery. Expert support available at 1-844-888-7732',
      url: `https://cartbatterydepot.com${pathname}`,
      type: 'article',
    };
  }
  
  // Default fallback
  return pageMetaData['/'];
};
