import { c as createAstro, d as createComponent, r as renderTemplate } from '../astro_Uumv-BHX.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Sitemap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sitemap;
  const res = await fetch("http://localhost:3000/api/routes/sitemap");
  const data = await res.json();
  console.log(data);
  data.map((r) => {
    return `<url><loc>https://deberen.nl${r.path}</loc><lastmod>${r.lastmod}</lastmod></url>`;
  });
  const xmlString = `

<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="deberen.nl/sitemap.xsl"?>

<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${data.join("")}</urlset>`.trim();
  return renderTemplate`${xmlString}`;
}, "/Users/lorenzo/Documents/development/projects/website/src/pages/sitemap.xml.astro", void 0);

const $$file = "/Users/lorenzo/Documents/development/projects/website/src/pages/sitemap.xml.astro";
const $$url = "/sitemap.xml";

export { $$Sitemap as default, $$file as file, $$url as url };
