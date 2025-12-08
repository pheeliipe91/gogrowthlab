import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: string;
    name?: string;
    image?: string;
}

export function SEO({
    title,
    description,
    canonical,
    type = 'website',
    name = 'GoGrowth.me',
    image = '/og-image.png'
}: SEOProps) {
    const siteUrl = 'https://gogrowth.me';
    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={fullCanonical} />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
        </Helmet>
    );
}
