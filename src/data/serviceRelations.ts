import serviceRelationsData from './serviceRelationsData.json';

export interface RelatedLink {
  title: string;
  titleEn: string;
  url: string;
  desc?: string;
  descEn?: string;
  flag?: string;
}

export interface ServiceRelation {
  serviceId: string;
  isHub: boolean;
  familyId: 'performance' | 'seo' | 'geo' | 'web' | 'technology' | 'content' | 'cross-family';
  parentHub?: RelatedLink;
  subServices?: RelatedLink[];
  siblingServices?: RelatedLink[];
  relatedFamilies?: RelatedLink[];
  relatedBranches: { title: string; titleEn: string; slug: string }[];
  relatedMarkets: { title: string; titleEn: string; slug: string; flag: string }[];
  relatedArticles: RelatedLink[];
}

export const SERVICE_RELATIONS: Record<string, ServiceRelation> = serviceRelationsData as unknown as Record<string, ServiceRelation>;
