import { CauseItem, BeneficiaryStory, RegionImpact, CurrencyRate } from '../types';

export const CURRENCY_RATES: Record<string, CurrencyRate> = {
  PKR: { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee', rateAgainstPKR: 1 },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', rateAgainstPKR: 0.0036 },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', rateAgainstPKR: 0.0028 },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', rateAgainstPKR: 0.0033 },
  AED: { code: 'AED', symbol: 'AED', name: 'UAE Dirham', rateAgainstPKR: 0.0132 },
  SAR: { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal', rateAgainstPKR: 0.0135 },
};

export const BANK_DETAILS = {
  organizationName: 'Afiyat Welfare (Humanitarian Volunteer Initiative)',
  leadership: 'Sawera Ejaz & Volunteer Community',
  tagline: '100% Direct Hand-to-Hand Grassroots Delivery',
  banks: [
    {
      bankName: 'Meezan Bank Ltd (Islamic Banking)',
      accountTitle: 'Sawera Ejaz / Afiyat Welfare Trust',
      accountNumber: '0289-0105829103',
      iban: 'PK42MEZN0002890105829103',
      branch: 'Main Gulberg Branch, Lahore',
      swiftCode: 'MEZNPKKA',
    },
    {
      bankName: 'Bank Alfalah Islamic',
      accountTitle: 'Sawera Ejaz (Afiyat Welfare)',
      accountNumber: '5512-0039281745',
      iban: 'PK19ALFH0551200392817451',
      branch: 'Ferozepur Road, Lahore',
      swiftCode: 'ALFHPKKA',
    },
  ],
  mobileWallets: [
    {
      name: 'JazzCash Mobile Account & Merchant',
      accountNumber: '0300-8492041',
      tillId: '849204',
      accountTitle: 'Sawera Ejaz (Afiyat Welfare Official)',
    },
    {
      name: 'EasyPaisa Mobile Account & Merchant',
      accountNumber: '0300-8492041',
      tillId: '918342',
      accountTitle: 'Sawera Ejaz / Afiyat Welfare Fund',
    },
  ],
};

export const CAUSES_DATA: CauseItem[] = [
  {
    id: 'winter-relief-2026',
    title: 'Winter Warmth Drive 2026',
    urduTitle: 'سرمائی امداد مہم — سردی سے تحفظ',
    tagline: 'Deliver warm jackets, quilts, beanies, and winter packs to cold-stricken children & families.',
    category: 'Winter Relief',
    targetAmountPKR: 4500000,
    raisedAmountPKR: 3480000,
    beneficiariesCount: 14800,
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&w=1200&q=80',
    description: 'In the high mountains of Swat, Chitral, and Balochistan, sub-zero cold threatens children living in mud homes and tents. With lowered, accessible rates starting from just ₨ 500, every donor can easily sponsor a child or family.',
    impactMetrics: [
      '14,800+ Warm bundles delivered directly to doorsteps',
      'Zero middlemen — 100% volunteer delivery on ground',
      'Affordable packages starting from only PKR 500'
    ],
    suggestedPacks: [
      { name: 'Warm Beanie, Gloves & Socks', amountPKR: 500, description: 'Woolen thermal set protecting ears and hands' },
      { name: 'Double Warm Quilt / Blanket', amountPKR: 1200, description: 'Heavy double-ply winter quilt for chilly nights' },
      { name: '1 Child Heavy Warm Jacket', amountPKR: 1500, description: 'Thick fleece padded hooded winter coat' },
      { name: 'Complete Child Winter Kit', amountPKR: 2500, description: 'Jacket + Quilt + Beanie + Socks + Snow Shoes' },
      { name: 'Family Winter Pack', amountPKR: 5000, description: '2 Quilts + 2 Jackets + Thermal accessories for 4' },
      { name: 'Community Stove & Winter Fuel', amountPKR: 12000, description: 'Heating unit and wood fuel for tent cluster' }
    ],
    isZakatEligible: true,
    isUrgent: true,
  },
  {
    id: 'free-healthcare-camps',
    title: 'Free Mobile Healthcare & Medical Camps',
    urduTitle: 'مفت طبی کیمپ اور ادویات کی فراہمی',
    tagline: 'Free doctor checkups, medicines, and eye care for underserved rural communities.',
    category: 'Healthcare',
    targetAmountPKR: 3500000,
    raisedAmountPKR: 2620000,
    beneficiariesCount: 32500,
    iconName: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    description: 'Volunteer doctors and nurses travel with essential medicines, diagnostic tests, and maternal care kits to remote settlements.',
    impactMetrics: [
      '32,500+ free consultations & medications',
      'Free cataract eye checks and medicines',
      'Complete volunteer-led medical teams'
    ],
    suggestedPacks: [
      { name: 'Prescription Medicines for 1 Patient', amountPKR: 500, description: 'Fever, cough, antibiotics & pain relief medicines' },
      { name: 'Child Nutrition & Vitamins Kit', amountPKR: 1000, description: 'Iron, multivitamins, and oral rehydration salts' },
      { name: 'Eye Checkup & Glasses for 2 Patients', amountPKR: 1800, description: 'Screening and corrective prescription spectacles' },
      { name: 'Full Mobile Clinic Day Share', amountPKR: 6000, description: 'Covers essential medicines for 40 rural patients' }
    ],
    isZakatEligible: true,
    isUrgent: true,
  },
  {
    id: 'child-education-sponsorship',
    title: 'Bright Future: Child School Sponsorship',
    urduTitle: 'روشن مستقبل — تعلیمی کفالت پروگرام',
    tagline: 'Sponsor school bags, uniforms, books, and tuition for needy out-of-school children.',
    category: 'Education',
    targetAmountPKR: 2800000,
    raisedAmountPKR: 1950000,
    beneficiariesCount: 4200,
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    description: 'We keep underprivileged boys and girls in school by covering their educational expenses, books, bags, and stationery.',
    impactMetrics: [
      '4,200+ students supported across informal learning centers',
      'Affordable monthly student sponsorship at ₨ 1,200',
      'Special focus on girl child education'
    ],
    suggestedPacks: [
      { name: 'School Bag & Stationery Kit', amountPKR: 800, description: 'Durable school bag, notebooks, pencils & geometry box' },
      { name: '1 Month Child School Support', amountPKR: 1200, description: 'Covers tuition fee, books, and exam supplies' },
      { name: 'Complete Uniform & Shoes Pack', amountPKR: 1800, description: 'Stitched school uniform + socks and black shoes' },
      { name: 'Semester School Sponsorship (6 Months)', amountPKR: 7000, description: 'Half-year complete educational sponsorship' }
    ],
    isZakatEligible: true,
  },
  {
    id: 'ration-food-security',
    title: 'Monthly Food Ration Baskets for Widows',
    urduTitle: 'ماہانہ راشن اور خوراک کا تحفظ',
    tagline: 'Wholesome staple grocery packs for daily-wagers, widows, and needy households.',
    category: 'Food Security',
    targetAmountPKR: 3200000,
    raisedAmountPKR: 2490000,
    beneficiariesCount: 18200,
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
    description: 'With rising food inflation, basic staples like wheat flour, cooking oil, and rice are hard to afford. We deliver dignity grocery baskets directly to homes.',
    impactMetrics: [
      '18,200+ food baskets delivered directly',
      'Flour, rice, cooking oil, lentils, and sugar',
      '100% direct door-to-door verification'
    ],
    suggestedPacks: [
      { name: 'Flour (Atta) 10kg Bag', amountPKR: 1200, description: 'Pure whole wheat flour for daily bread' },
      { name: 'Basic Grocery Staples Pack', amountPKR: 1800, description: 'Cooking oil (2L), Rice (5kg), Lentils (2kg)' },
      { name: 'Half-Month Ration Basket', amountPKR: 2800, description: 'Essential 25kg food kit for a small family' },
      { name: 'Complete Monthly Family Ration Bag', amountPKR: 4800, description: 'Full ~40kg staple ration hamper for a family of 5-6' }
    ],
    isZakatEligible: true,
  },
  {
    id: 'clean-water-handpumps',
    title: 'Thirst Relief: Clean Water Hand Pumps',
    urduTitle: 'صاف پانی — نلکے اور واٹر پمپس',
    tagline: 'Installing durable water hand pumps in water-scarce desert and rural villages.',
    category: 'Clean Water',
    targetAmountPKR: 2500000,
    raisedAmountPKR: 1850000,
    beneficiariesCount: 22000,
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80',
    description: 'In water-stressed villages of Tharparkar and rural Punjab, installing a deep-bore hand pump gives potable sweet water for 15+ years.',
    impactMetrics: [
      '240+ hand pumps installed by volunteer team',
      'Sadaqah Jariyah plaque with donor’s choice of name',
      'Direct video confirmation provided to donor'
    ],
    suggestedPacks: [
      { name: 'Share in Community Water Pump', amountPKR: 1000, description: 'Contribute towards drilling and pipe installation' },
      { name: 'Half Water Pump Share', amountPKR: 12000, description: '50% share of hand pump installation' },
      { name: '1 Dedicated Deep Hand Pump (Sadaqah Jariyah)', amountPKR: 25000, description: 'Full installation + personalized engraved plaque + video' }
    ],
    isZakatEligible: true,
  },
];

export const BENEFICIARY_STORIES: BeneficiaryStory[] = [
  {
    id: 'story-1',
    name: 'Amina Bibi & Her 3 Children',
    location: 'Kalam Valley, Swat',
    program: 'Winter Relief Drive',
    title: '“Our tin roof freezes at night, but this warm quilt was a gift of life.”',
    quote: 'When the first snowfall hit, I had no firewood and my younger son was shivering. The Afiyat Welfare volunteer team reached our home with warm quilts, shoes, and jackets. My children can now sleep peacefully.',
    fullStory: 'Amina lost her husband two years ago and earns a meager living weaving wool. In sub-zero winter, Sawera Ejaz and her team traveled through snowbound roads to deliver winter packs and thermal blankets directly to Amina and other families.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    date: 'January 2026',
  },
  {
    id: 'story-2',
    name: 'Baba Ghulam Muhammad',
    location: 'Islamkot, Tharparkar',
    program: 'Free Healthcare & Eye Camp',
    title: '“After years of struggling to see, I can finally look at my grandchildren.”',
    quote: 'I could not afford private clinic fees. Afiyat’s volunteer doctors brought free medical checkups to our village. They treated me with so much respect and gave free eye drops and medicine.',
    fullStory: 'Baba Ghulam, 68, spent years isolated because of poor eyesight and chest infections. In Afiyat’s community medical camp, volunteer physicians screened villagers and provided 100% free prescription medicines with full follow-up support.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    date: 'December 2025',
  },
  {
    id: 'story-3',
    name: 'Zainab Fatima (Grade 6)',
    location: 'Chungi Amar Sidhu, Lahore',
    program: 'Education Sponsorship',
    title: '“I dream of becoming a teacher to help children like Afiyat helps me.”',
    quote: 'My father drives a rickshaw and was struggling with school fees. Afiyat gave me my books, uniform, and school bag. I scored 94% in my term exams!',
    fullStory: 'Zainab is bright, determined, and passionate about learning. When family hardship hit, Sawera Ejaz and Afiyat Welfare supported her education. Today, Zainab stands top in her class and attends free after-school tutoring.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    date: 'November 2025',
  },
];

export const REGIONS_DATA: RegionImpact[] = [
  {
    id: 'swat',
    name: 'Swat, Kalam & Upper Dir',
    province: 'Khyber Pakhtunkhwa',
    campsCount: 34,
    beneficiaries: '16,400+',
    primaryAid: 'Warm Jackets, Quilts, Woolen Caps, Snow Boots',
    description: 'High-altitude snowbound areas prone to freezing conditions. Volunteer-led door-to-door winter emergency distributions.',
    activeStatus: 'Active Relief Hub',
  },
  {
    id: 'thar',
    name: 'Tharparkar & Umerkot',
    province: 'Sindh',
    campsCount: 42,
    beneficiaries: '28,000+',
    primaryAid: 'Clean Water Hand Pumps, Free Medical Kits, Food Baskets',
    description: 'Arid desert zones battling water scarcity and seasonal illnesses. Over 240 clean water pumps installed.',
    activeStatus: 'Active Relief Hub',
  },
  {
    id: 'south-punjab',
    name: 'Rajanpur & Muzaffargarh',
    province: 'Punjab',
    campsCount: 29,
    beneficiaries: '19,500+',
    primaryAid: 'Free Medical Camps, Ration Drives, Child Education',
    description: 'Riverine agricultural communities. Regular mobile medicine camps and student sponsorships.',
    activeStatus: 'Mobile Camp Deployed',
  },
  {
    id: 'balochistan',
    name: 'Quetta, Bolan & Ziarat Belt',
    province: 'Balochistan',
    campsCount: 18,
    beneficiaries: '12,200+',
    primaryAid: 'Winter Warmth Packs, Water Wells, Orphan Support',
    description: 'Severe winter temperatures and water scarcity in mountain valleys. Community welfare and food security.',
    activeStatus: 'Active Relief Hub',
  },
  {
    id: 'lahore-urban',
    name: 'Lahore & Kasur Communities',
    province: 'Punjab',
    campsCount: 50,
    beneficiaries: '24,000+',
    primaryAid: 'Informal School Centers, Uniforms, Widow Ration Packs',
    description: 'Low-income neighborhoods and brick kiln communities. Regular school sponsorship and humanitarian relief.',
    activeStatus: 'Active Relief Hub',
  },
];

export const FAQS_DATA = [
  {
    question: 'How does Afiyat Welfare operate and who leads it?',
    answer: 'Afiyat Welfare is a grassroots humanitarian volunteer initiative led directly by Sawera Ejaz alongside compassionate community volunteers. It is not a government agency; it operates on direct public trust, 100% transparency, and personal accountability with zero administrative salary deductions.',
  },
  {
    question: 'Is my donation Zakat eligible?',
    answer: 'Yes, 100%. All Zakat contributions follow strict Islamic guidelines. When you donate Zakat, 100% of your funds are used exclusively to purchase and deliver tangible relief goods (warm clothing, food rations, emergency medicine) directly into the hands of eligible needy families (Mustahiq).',
  },
  {
    question: 'Why are your rates so affordable?',
    answer: 'We lowered our suggested donation rates (starting from just ₨ 500 for warm accessories, ₨ 1,200 for a blanket, ₨ 1,500 for a heavy jacket) so that students, young professionals, and families of all budgets can participate and earn reward. Every small bit counts!',
  },
  {
    question: 'How do you accept donations in Pakistan and from overseas?',
    answer: 'You can donate within Pakistan via JazzCash (0300-8492041 / Till: 849204), EasyPaisa (0300-8492041 / Till: 918342), or direct bank transfer to Meezan Bank / Bank Alfalah. Overseas donors can use international cards or direct bank wire with IBAN.',
  },
  {
    question: 'Can I get a digital pamphlet (پمفلٹ) or flyer to share on WhatsApp or print?',
    answer: 'Yes! Click the "Download Pamphlet (پمفلٹ)" button anywhere on the page to view, print, or share the official high-resolution Afiyat Winter Relief pamphlet on WhatsApp, social media, or in your neighborhood.',
  },
  {
    question: 'Can I dedicate a donation in memory of a loved one (Isal-e-Sawab / Sadaqah Jariyah)?',
    answer: 'Yes, when donating for a Water Hand Pump, Winter Relief, or Ration Pack, you can enter the name of your loved one. We provide photo and video confirmation of the distribution.',
  },
];
