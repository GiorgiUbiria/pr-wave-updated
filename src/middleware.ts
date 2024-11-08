import { defineMiddleware } from "astro:middleware";
import { defaultLang } from "./i18n/ui";

export const onRequest = defineMiddleware((context, next) => {
  const { url } = context;
  const [, lang] = url.pathname.split('/');

  // Always allow the root path - it will use defaultLang
  if (url.pathname === '/' || url.pathname === '') {
    context.locals.lang = defaultLang;
    return next();
  }

  // If the URL starts with the default language, redirect to the same path without it
  if (lang === defaultLang) {
    const newPath = url.pathname.replace(`/${defaultLang}`, '');
    return Response.redirect(new URL(newPath, url), 302);
  }

  // Handle static assets and special paths
  if (url.pathname.match(/\.(js|css|ico|jpg|png|svg|webp)$/) || url.pathname.startsWith('/_')) {
    return next();
  }

  // Set the language in context
  context.locals.lang = lang in ['ka', 'en'] ? lang : defaultLang;
  
  return next();
}); 