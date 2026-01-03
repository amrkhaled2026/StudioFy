
import React from 'react';
import { ServicePackage, SingleService } from './types';

export const COLORS = {
  gold: '#f9b000',
  black: '#000000',
  white: '#FFFFFF',
};

// Base64 of the provided "Studiofy Creative Media" logo
export const APP_LOGO = "data:image/png;base64,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";

export const PACKAGES: ServicePackage[] = [
  {
    id: 'graphic',
    title: 'باقة التصميم الجرافيكي',
    price: '1,800 - 2,200 ج.م / شهرياً',
    features: [
      '8 منشورات (Posts) لمنصات التواصل الاجتماعي',
      'كتابة محتوى إبداعي وجذاب باللغة العربية',
      'تصاميم احترافية تتماشى مع الهوية البصرية لبراندك',
      'جاهزة للنشر على فيسبوك وإنستجرام'
    ],
    description: 'مثالية للشركات التي تبحث عن تواجد مستمر واحترافي على السوشيال ميديا.',
    color: 'orange'
  },
  {
    id: 'video',
    title: 'باقة الفيديوهات القصيرة',
    price: '2,500 - 3,500 ج.م / شهرياً',
    features: [
      '4 فيديوهات قصيرة (مدة 10–120 ثانية لكل فيديو)',
      'مونتاج احترافي ونظيف وشامل النصوص المتحركة',
      'إضافة نصوص متحركة وشعار البراند الخاص بك',
      'مناسبة تماماً للـ Reels والإعلانات'
    ],
    description: 'فيديوهات ترويجية قصيرة مناسبة لمنصات التواصل الاجتماعي، الإعلانات، وزيادة الوعي بالعلامة التجارية.',
    color: 'blue'
  },
  {
    id: 'complete',
    title: 'الباقة الشاملة للسوشيال ميديا',
    price: '3,500 - 4,500 ج.م / شهرياً',
    features: [
      '8 منشورات (Posts) متنوعة',
      '4 فيديوهات قصيرة (Reels)',
      'تجهيز وتحسين صفحاتك (صورة الغلاف، البيانات)',
      'كتابة الكابشن واختيار الهاشتاجات المناسبة',
      'متابعة شهرية بسيطة للأداء + تقرير لمتابعة الأداء'
    ],
    description: 'الحل المتكامل لإدارة تواجدك الرقمي باحترافية تامة.',
    color: 'green',
    isPopular: true
  }
];

export const SINGLE_SERVICES: SingleService[] = [
  { name: 'تصميم منشور واحد (Post)', priceRange: '200 – 300 ج.م' },
  { name: 'فيديو قصير واحد (10–120 ثانية)', priceRange: '300 – 1200 ج.م' },
  { name: 'تصميم لوجو احترافي (Logo)', priceRange: '1,200 – 1,800 ج.م' }
];

export const CONTACT_INFO = {
  whatsapp: '01023407252',
  email: 'studiofy.media@gmail.com',
  whatsappLink: 'https://wa.me/201023407252'
};
