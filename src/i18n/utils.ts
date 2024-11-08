import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (!lang || !(lang in ui)) return defaultLang;
  return lang as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    if (!ui[lang] || !ui[lang][key]) {
      return ui[defaultLang][key];
    }
    return ui[lang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    if (!path) return l === defaultLang ? '/' : `/${l}`;
    
    // Remove leading slash if present
    const cleanPath = path.replace(/^\//, '');
    return l === defaultLang ? `/${cleanPath}` : `/${l}/${cleanPath}`;
  }
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/');
  
  // Remove first empty string and language code if present
  parts.shift(); // Remove first empty string
  if (parts[0] in ui) parts.shift(); // Remove language code if present
  
  return '/' + parts.join('/');
}