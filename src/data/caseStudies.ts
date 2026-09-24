import { CaseStudy } from '../types';

/**
 * Case Studies Data Architecture (Level 6)
 * 
 * Strict Verification Principle:
 * In accordance with Khodiyar Infraproject's authentic content policy, we NEVER publish
 * fabricated clients, invented project locations, or fictitious tonnage numbers.
 * Verified case studies with client release authorization, structural shop drawing audits,
 * and completion certificates will be added here as formal documentation becomes available.
 * 
 * Future case studies will populate the fields defined by the CaseStudy interface.
 */
export const CASE_STUDIES: CaseStudy[] = [];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return CASE_STUDIES.find((item) => item.slug === slug);
};
