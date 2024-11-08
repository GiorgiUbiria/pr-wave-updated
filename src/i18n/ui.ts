export const languages = {
  en: 'English',
  ka: 'ქართული',
} as const;

export const defaultLang = 'ka' as const;

export const ui = {
  ka: {
    'hero.title': 'თქვენი წარმატების ციფრული პარტნიორი',
    'hero.subtitle': 'გავზარდოთ თქვენი ბიზნესი ერთად',
    'nav.services': 'სერვისები',
    'nav.about': 'ჩვენს შესახებ',
    'nav.team': 'გუნდი',
    'nav.contact': 'კონტაქტი',
    'nav.getStarted': 'დაწყება',
    'services.title': 'ჩვენი სერვისები',
    'services.subtitle': 'კომპლექსური გადაწყვეტილებები თქვენი ბრენდის წარმატებისთვის',
    'services.social.title': 'სოციალური მედიის მართვა',
    'services.social.description': 'სოციალური მედიის კამპანიების სტრატეგიული დაგეგმვა და განხორციელება',
    'services.content.title': 'კონტენტის შექმნა',
    'services.content.description': 'მიმზიდველი კონტენტის შექმნა სამიზნე აუდიტორიისთვის',
    'services.brand.title': 'ბრენდის სტრატეგია',
    'services.brand.description': 'ბრენდის განვითარება და პოზიციონირება ბაზარზე',
    'services.marketing.title': 'ციფრული მარკეტინგი',
    'services.marketing.description': 'მონაცემებზე დაფუძნებული მარკეტინგული კამპანიები',
    'services.analytics.title': 'ანალიტიკა და რეპორტინგი',
    'services.analytics.description': 'დეტალური ანალიზი და ანგარიშგება სოციალური მედიის ეფექტურობის გასაზომად',
    'services.community.title': 'საზოგადოების მართვა',
    'services.community.description': 'აქტიური ჩართულობა და საზოგადოების განვითარება ბრენდის ლოიალურობისთვის',
  },
  en: {
    'hero.title': 'Your Digital Success Partner',
    'hero.subtitle': 'Let\'s grow your business together',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive solutions tailored to elevate your brand\'s presence and engagement',
    'services.social.title': 'Social Media Management',
    'services.social.description': 'Strategic planning and execution of social media campaigns to boost your brand\'s online presence.',
    'services.content.title': 'Content Creation',
    'services.content.description': 'Engaging, platform-optimized content that resonates with your target audience.',
    'services.brand.title': 'Brand Strategy',
    'services.brand.description': 'Comprehensive brand development and positioning to stand out in your market.',
    'services.marketing.title': 'Digital Marketing',
    'services.marketing.description': 'Data-driven marketing campaigns across multiple digital channels.',
    'services.analytics.title': 'Analytics & Reporting',
    'services.analytics.description': 'Detailed insights and analytics to measure and optimize your social media performance.',
    'services.community.title': 'Community Management',
    'services.community.description': 'Active engagement and community building to foster brand loyalty.',
  },
} as const;

// Type for translation keys
export type UiKeys = keyof typeof ui[typeof defaultLang];