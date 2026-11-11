export type CurrencyCode = 'PKR' | 'USD' | 'GBP' | 'EUR' | 'AED' | 'SAR';

export interface CurrencyRate {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateAgainstPKR: number; // e.g. 1 USD = 280 PKR -> rate = 0.00357
}

export interface CauseItem {
  id: string;
  title: string;
  urduTitle: string;
  tagline: string;
  category: 'Winter Relief' | 'Healthcare' | 'Education' | 'Food Security' | 'Clean Water' | 'Zakat';
  targetAmountPKR: number;
  raisedAmountPKR: number;
  beneficiariesCount: number;
  iconName: string;
  image: string;
  description: string;
  impactMetrics: string[];
  suggestedPacks: {
    name: string;
    amountPKR: number;
    description: string;
  }[];
  isZakatEligible: boolean;
  isUrgent?: boolean;
}

export interface BeneficiaryStory {
  id: string;
  name: string;
  location: string;
  age?: number;
  program: string;
  title: string;
  quote: string;
  fullStory: string;
  image: string;
  date: string;
}

export interface RegionImpact {
  id: string;
  name: string;
  province: string;
  campsCount: number;
  beneficiaries: string;
  primaryAid: string;
  description: string;
  activeStatus: 'Active Relief Hub' | 'Mobile Camp Deployed' | 'Scheduled';
}

export interface DonationRecord {
  receiptId: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  causeId: string;
  causeName: string;
  amount: number;
  currency: CurrencyCode;
  amountPKR: number;
  paymentMethod: 'jazzcash' | 'easypaisa' | 'bank_transfer' | 'credit_card';
  date: string;
  isZakat: boolean;
  notes?: string;
  transactionRef: string;
}

export interface VolunteerApplication {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  profession: string;
  availability: string;
  interests: string[];
  notes?: string;
}
