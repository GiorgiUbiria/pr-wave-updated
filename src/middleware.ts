import { defineMiddleware } from "astro:middleware";
import { defaultLang } from "./i18n/ui";

export const onRequest = defineMiddleware((context, next) => {
  const { url } = context;
  const [, lang] = url.pathname.split('/');

  // If accessing root path, no redirect needed since default language is hidden
  if (url.pathname === '/') {
    return next();
  }

  // If the URL starts with the default language, redirect to the same path without it
  if (lang === defaultLang) {
    const newPath = url.pathname.replace(`/${defaultLang}`, '');
    return Response.redirect(new URL(newPath, url), 302);
  }

  return next();
}); 