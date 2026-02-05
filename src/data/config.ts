// Configuration file - Lusia Rachmilov Insurance

export interface Link {
  title: string;
  url: string;
  icon?: string;
  color?: string;
  description?: string;
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
    title: "ביטוח פנסיוני, פיננסי ותכנון פרישה",
    bio: "עושים סדר בפנסיה, בביטוחים ובכסף - בגובה העיניים ובלי אותיות קטנות",
    image: "/luc1.png",
  },
  contact: {
    phone: "053-278-6070",
    whatsapp: "972532786070",
    email: "office@lusia-ins.co.il",
  },
  links: [
    {
      title: "בדיקת תיק פנסיוני מקיף",
      url: "#contact",
      icon: "piggy-bank",
      description: "ניתוח מלא של קרנות פנסיה, ביטוחי מנהלים וקופות גמל. בודקים שהמסלול מתאים, שהעמלות סבירות, ושהכיסויים הביטוחיים תואמים את הצרכים האישיים שלכם.",
    },
    {
      title: "תכנון פרישה מלא",
      url: "#contact",
      icon: "sunset",
      description: "ליווי מקצועי בתהליך הפרישה — חישוב קצבאות, מיסוי, קיבוע זכויות, החלטות הוניות והבנת התמונה הכלכלית המלאה. כדי שתגיעו ליום הפרישה עם שקט ובטחון.",
    },
    {
      title: "השלמת תיק ביטוחי",
      url: "#contact",
      icon: "shield",
      description: "התאמה והשלמה של ביטוח חיים, אובדן כושר עבודה, ביטוח בריאות ומחלות קשות. כיסויים ביטוחיים נבנים כשבריאים — ברגע האמת, כבר לא תמיד ניתן לתקן.",
    },
    {
      title: "פתרונות פיננסים וחיסכון",
      url: "#contact",
      icon: "wallet",
      description: "ניהול והכוונת כספים פנויים, קופות גמל להשקעה, פוליסות חיסכון ופתרונות מותאמים אישית. הכסף שלכם צריך לעבוד בשבילכם — לא לשכב בעו\"ש.",
    },
    {
      title: "ליווי מעסיקים ועובדים",
      url: "#contact",
      icon: "users",
      description: "ניהול מערך פנסיוני לעובדים, עמידה בדרישות החוק, תפעול שוטף ומענה אישי לכל עובד. מלווה יחד עם חברת תפעול מקצועית, עם מעקב שוטף ושקט לבעל העסק.",
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
