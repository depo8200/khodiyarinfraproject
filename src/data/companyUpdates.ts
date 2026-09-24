import { CompanyUpdate } from '../types';

/**
 * Company Updates Data Architecture (Level 6)
 * 
 * Strict Verification Principle:
 * In accordance with Khodiyar Infraproject's content standards, only verified corporate milestones,
 * official capability additions, and certified operational announcements are published here.
 * No speculative or fabricated announcements are permitted.
 * 
 * When verified announcements occur, add them to this array following the CompanyUpdate interface.
 */
export const COMPANY_UPDATES: CompanyUpdate[] = [];

export const getCompanyUpdateBySlug = (slug: string): CompanyUpdate | undefined => {
  return COMPANY_UPDATES.find((item) => item.slug === slug);
};
