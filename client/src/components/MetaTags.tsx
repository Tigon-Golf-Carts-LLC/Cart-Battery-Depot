import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { seoConfig, getPageMeta, getCurrentTimestamp } from '@/config/seoConfig';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  url?: string;
}

export default function MetaTags({ 
  title, 
  description, 
  image, 
  type, 
  url 
}: MetaTagsProps) {
  const [location] = useLocation();
  
  // Get page-specific meta data
  const pageMeta = getPageMeta(location);
  
  // Use provided values or fall back to page-specific or default values
  const metaTitle = title || pageMeta.title;
  const metaDescription = description || pageMeta.description;
  const metaImage = image || pageMeta.image || seoConfig.defaultImage;
  const metaType = type || pageMeta.type || seoConfig.defaultType;
  const metaUrl = url || pageMeta.url || `${seoConfig.siteUrl}${location}`;
  const modifiedTime = pageMeta.modifiedTime || getCurrentTimestamp();
  
  // Use page-specific image dimensions if provided, otherwise use defaults
  const imageWidth = pageMeta.imageWidth || seoConfig.defaultImageWidth;
  const imageHeight = pageMeta.imageHeight || seoConfig.defaultImageHeight;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {pageMeta.keywords && <meta name="keywords" content={pageMeta.keywords} />}
      
      {/* Open Graph Meta Tags for Facebook/Social Sharing */}
      <meta property="og:locale" content={seoConfig.locale} />
      <meta property="og:type" content={metaType} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      
      {/* Article-specific Open Graph tags */}
      {metaType === 'article' && seoConfig.facebookPageUrl && (
        <meta property="article:publisher" content={seoConfig.facebookPageUrl} />
      )}
      {metaType === 'article' && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      
      {/* Open Graph Image Tags */}
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:type" content={seoConfig.defaultImageType} />
      <meta property="og:image:alt" content={metaTitle} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {seoConfig.twitterHandle && (
        <meta name="twitter:site" content={seoConfig.twitterHandle} />
      )}
      <meta name="twitter:image:alt" content={metaTitle} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={metaUrl} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Search Engine Verification Tags (only if codes are provided) */}
      {seoConfig.googleVerification && (
        <meta name="google-site-verification" content={seoConfig.googleVerification} />
      )}
      {seoConfig.bingVerification && (
        <meta name="msvalidate.01" content={seoConfig.bingVerification} />
      )}
      {seoConfig.pinterestVerification && (
        <meta name="p:domain_verify" content={seoConfig.pinterestVerification} />
      )}
      {seoConfig.yandexVerification && (
        <meta name="yandex-verification" content={seoConfig.yandexVerification} />
      )}
      
      {/* Social Profile Link */}
      {seoConfig.socialProfileUrl && (
        <link rel="me" href={seoConfig.socialProfileUrl} />
      )}
    </Helmet>
  );
}
