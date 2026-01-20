import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

// English translations
const en = {
  pdfViewer: {
    loading: 'Loading document...',
    error: 'Error loading document',
    errorLoading: 'Failed to load PDF document',
    openInNewTab: 'Open in new tab',
    download: 'Download',
    previousPage: 'Previous page',
    nextPage: 'Next page',
    pageOf: 'Page {{current}} of {{total}}',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    actualSize: 'Actual size',
    thumbnails: 'Thumbnails',
    search: 'Search',
    searchPlaceholder: 'Search in document...',
    searchNotImplemented:
      'Search functionality is not implemented in this demo',
    print: 'Print',
    fullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen'
  }
}

// Arabic translations
const ar = {
  pdfViewer: {
    loading: 'جاري تحميل المستند...',
    error: 'خطأ في تحميل المستند',
    errorLoading: 'فشل تحميل ملف PDF',
    openInNewTab: 'فتح في نافذة جديدة',
    download: 'تحميل',
    previousPage: 'الصفحة السابقة',
    nextPage: 'الصفحة التالية',
    pageOf: 'صفحة {{current}} من {{total}}',
    zoomIn: 'تكبير',
    zoomOut: 'تصغير',
    actualSize: 'الحجم الفعلي',
    thumbnails: 'الصور المصغرة',
    search: 'بحث',
    searchPlaceholder: 'ابحث في المستند...',
    searchNotImplemented: 'وظيفة البحث غير متوفرة في هذه النسخة التجريبية',
    print: 'طباعة',
    fullscreen: 'وضع ملء الشاشة',
    exitFullscreen: 'الخروج من وضع ملء الشاشة'
  }
}

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    ar: {translation: ar}
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
