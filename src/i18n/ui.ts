export const languages = {
  en: 'English',
  ka: 'ქართული',
} as const;

export const languageAbbr = {
  en: {
    en: 'EN',
    ka: 'KA',
  },
  ka: {
    en: 'ინგლ',
    ka: 'ქართ',
  },
} as const;

export const defaultLang = 'ka' as const;

export const ui = {
  ka: {
    'nav.home': 'მთავარი',
    'nav.services': 'სერვისები',
    'nav.about': 'ჩვენს შესახებ',
    'nav.team': 'გუნდი',
    'nav.contact': 'კონტაქტი',
    'nav.getStarted': 'დაწყება',
    
    'hero.title': 'თქვენი წარმატების ციფრული პარტნიორი',
    'hero.subtitle': 'გავზარდოთ თქვენი ბიზნესი ერთად',
    
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

    'about.title': 'ჩვენს შესახებ',
    'about.description': 'ჩვენ ვართ გუნდი, რომელიც ქმნის ციფრულ გამოცდილებას',
    'about.mission': 'ჩვენი მისიაა დავეხმაროთ კომპანიებს ციფრული ტრანსფორმაციის გზაზე',
    
    'team.title': 'ჩვენი გუნდი',
    'team.subtitle': 'პროფესიონალები, რომლებიც ქმნიან თქვენს წარმატებას',
    
    'contact.title': 'დაგვიკავშირდით',
    'contact.subtitle': 'მზად ვართ თქვენი პროექტის განსახილველად',
    'contact.address': 'თბილისი, საქართველო',
    'contact.email': 'info@prwave.ge',
    'contact.phone': '+995 555 12 34 56',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    'hero.title': 'Your Digital Success Partner',
    'hero.subtitle': 'Let\'s grow your business together',
    
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive solutions tailored to elevate your brand\'s presence',
    'services.social.title': 'Social Media Management',
    'services.social.description': 'Strategic planning and execution of social media campaigns',
    'services.content.title': 'Content Creation',
    'services.content.description': 'Engaging content that resonates with your target audience',
    'services.brand.title': 'Brand Strategy',
    'services.brand.description': 'Develop and position your brand in the market',
    'services.marketing.title': 'Digital Marketing',
    'services.marketing.description': 'Data-driven marketing campaigns across channels',
    'services.analytics.title': 'Analytics & Reporting',
    'services.analytics.description': 'Detailed insights and analytics to measure performance',
    'services.community.title': 'Community Management',
    'services.community.description': 'Build and engage with your brand community',

    'about.title': 'About Us',
    'about.description': 'We are a team creating digital experiences',
    'about.mission': 'Our mission is to help companies in their digital transformation journey',
    
    'team.title': 'Our Team',
    'team.subtitle': 'Professionals dedicated to your success',
    
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to discuss your project',
    'contact.address': 'Tbilisi, Georgia',
    'contact.email': 'info@prwave.ge',
    'contact.phone': '+995 555 12 34 56',
  },
} as const;

export type UiKeys = keyof typeof ui[typeof defaultLang];