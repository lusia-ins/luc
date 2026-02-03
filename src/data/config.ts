// Configuration file - Lusia Rachmilov Insurance

export interface Link {
  title: string;
  url: string;
  icon?: string;
  color?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface YouTubeShort {
  id: string;
  title: string;
  description: string;
}

export interface Config {
  profile: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  links: Link[];
  socialLinks: SocialLink[];
  youtubeShorts: YouTubeShort[];
  theme: {
    primaryColor: string;
    backgroundColor: string;
  };
}

export const config: Config = {
  profile: {
    name: "לוסיה רחמילוב",
    title: "סדר בפנסיה, שקט בראש",
    bio: "ליווי פיננסי עצמאי לאנשי הייטק - מיפוי מלא, תכנית אחת ברורה",
    image: "/luc1.png",
  },
  contact: {
    phone: "053-278-6070",
    whatsapp: "972532786070",
    email: "office@lusia-ins.co.il",
  },
  links: [
    {
      title: "ביטוח חיים ריסק",
      url: "#life-risk",
      icon: "heart",
    },
    {
      title: "ביטוח חיים עם חיסכון",
      url: "#life-savings",
      icon: "piggy-bank",
    },
    {
      title: "ביטוח משולב",
      url: "#combined",
      icon: "shield",
    },
    {
      title: "ביטוח בריאות פרטי",
      url: "#health",
      icon: "activity",
    },
    {
      title: "קביעת פגישת ייעוץ",
      url: "https://wa.me/972532786070?text=היי לוסיה, אשמח לקבוע פגישת ייעוץ",
      icon: "calendar",
    },
  ],
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/lusia_ins",
      icon: "instagram",
    },
  ],
  youtubeShorts: [
    {
      id: "KhxU3hT6YQw",
      title: "יש כסף נזיל ועדיין מרגישים שאין ביטחון?",
      description: "ניהול פיננסי הוא לא רק תשואות, הוא ביטחון ויציבות",
    },
    {
      id: "6UMTYDG-rOM",
      title: "תדמית עצמית - ליווי פיננסי וביטוחי",
      description: "ליווי לאורך החיים עם שקיפות ואחריות מלאה",
    },
    {
      id: "88WVDy_NerQ",
      title: "כסף בעו\"ש הוא הפסד שקט",
      description: "הכסף שלכם אמור לשרת מטרה - לא להישחק בשקט",
    },
    {
      id: "gAmDG7wOAjA",
      title: "תכנון פרישה - החלטה שלא ניתן לקבל בלי לראות את כל התמונה",
      description: "תכנון פרישה מקצועי - יכול לשמור על רמת חייכם ל-20 שנים",
    },
    {
      id: "RCo9z_-l3Xc",
      title: "פנסיה ברורה מאפשרת בחירה",
      description: "פנסיה שלא מנוהלת - תנהל אתכם בפנסיה",
    },
    {
      id: "OyAUguopVtw",
      title: "בפנסיה - אתם משלמים על רכיבים נוספים",
      description: "כיסויים שלא תמיד מותאמים עבורכם",
    },
    {
      id: "bZrBxoTzhPQ",
      title: "גם ללא תואר בכלכלה אפשר להרוויח",
      description: "אפשר לנהל כסף נכון גם בלי להבין בהשקעות",
    },
    {
      id: "ZZvoDvroD14",
      title: "ניהול פנסיוני לעובדים",
      description: "שקט לבעל העסק, ביטחון לעובדים",
    },
  ],
  theme: {
    primaryColor: "#046bd2",
    backgroundColor: "#f9fafb",
  },
};
