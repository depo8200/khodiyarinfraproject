export interface TestimonialItem {
  id: string;
  clientName: string;
  clientCompany: string;
  clientRole: string;
  projectType: string;
  rating: number;
  reviewDate: string;
  reviewText: string;
  verified: boolean;
}

// Strictly adheres to honesty rule: NO FAKE REVIEWS INVENTED!
// Ready for verified client testimonials to be added dynamically.
export const VERIFIED_TESTIMONIALS: TestimonialItem[] = [
  // When real reviews are received, they are appended here.
];
