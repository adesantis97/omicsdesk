/**
 * Shared schema.org building blocks.
 *
 * Keep the organisation and person identifiers byte-identical everywhere they
 * appear: Google merges entities by @id, so a drifting id reads as two
 * different organisations rather than one.
 */

export const SITE = 'https://omicsdesk.com';

export const ORG_ID = `${SITE}/#organization`;
export const PERSON_ID = `${SITE}/#alessandro`;

export const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'OmicsDesk',
  url: `${SITE}/`,
  email: 'hello@omicsdesk.com',
  description:
    'Expert biological interpretation of omics data for small biotech and academic labs: RNA-seq, single-cell, proteomics, ChIP/ATAC-seq, methylation and multi-omics.',
  logo: {
    '@type': 'ImageObject',
    url: `${SITE}/logo.png`,
    width: 821,
    height: 160,
  },
  sameAs: ['https://www.linkedin.com/company/omicsdesk'],
  founder: { '@id': PERSON_ID },
};

export const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Alessandro De Santis',
  url: `${SITE}/`,
  jobTitle: 'Bioinformatician',
  worksFor: { '@id': ORG_ID },
  sameAs: ['https://www.linkedin.com/company/omicsdesk'],
};

/** Absolute URL for a site-relative path. */
export const abs = (path: string) =>
  path.startsWith('http') ? path : `${SITE}${path.startsWith('/') ? '' : '/'}${path}`;
