import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, u as unescapeHTML, F as Fragment, e as addAttribute, g as renderSlot } from '../astro_Uumv-BHX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_B8zvRHOk.mjs';

const $$Astro$3 = createAstro();
const $$RichText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RichText;
  const { richText_html } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center xs:px-16 md:px-20"> <div class="max-w-primary w-primary mx-4"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(richText_html)}` })} </div> </div>`;
}, "/Users/lorenzo/Documents/development/projects/website/src/blocks/components/RichText.astro", void 0);

const $$Astro$2 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Container;
  const { size = "normal", blocks } = Astro2.props;
  const width = size === "normal" ? " w-primary" : "w-secondary";
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center"> <div${addAttribute(`${width} max-w-full px-4 lg:mx-4 lg:px-0`, "class")}> ${blocks ? blocks?.map((block) => {
    return renderTemplate`${renderComponent($$result, "BlockMap", $$BlockMap, { "block": block })}`;
  }) : renderTemplate`${renderSlot($$result, $$slots["default"])}`} </div> </div>`;
}, "/Users/lorenzo/Documents/development/projects/website/src/blocks/layouts/Container.astro", void 0);

const $$Astro$1 = createAstro();
const $$BlockMap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlockMap;
  console.log("should do blockmap");
  const blockMap = {
    // flex_layout: FlexLayout,
    container_layout: $$Container,
    rich_text: $$RichText
    // hero_header: HeroHeader,
    // cta_button: CTAButton,
    // card_list: CardList,
    // accordion: Accordion,
    // content_banner: ContentBanner,
    // quote: Quote,
    // shuffle: Shuffle,
    // full_width_card: FullWidthCard,
  };
  const { block } = Astro2.props;
  const mapBlock = () => {
    const module = blockMap[block.blockType];
    return module;
  };
  let DynamicComponent = mapBlock();
  return renderTemplate`${DynamicComponent && renderTemplate`${renderComponent($$result, "DynamicComponent", DynamicComponent, { ...block })}`}`;
}, "/Users/lorenzo/Documents/development/projects/website/src/blocks/BlockMap.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { path } = Astro2.params;
  const payload = Astro2.locals.payload;
  const routesDocs = await payload.find({
    collection: "routes",
    where: {
      path: {
        equals: path ?? "/"
      }
    }
  });
  var props;
  if (routesDocs.docs.length === 0) {
    return Astro2.redirect("/404");
  } else {
    props = routesDocs.docs[0].target.value;
  }
  console.log(props);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": props?.title }, { "default": ($$result2) => renderTemplate`${props?.blocks.map((block) => renderTemplate`${renderComponent($$result2, "BlockMap", $$BlockMap, { "block": block })}`)}` })}`;
}, "/Users/lorenzo/Documents/development/projects/website/src/pages/[...path].astro", void 0);

const $$file = "/Users/lorenzo/Documents/development/projects/website/src/pages/[...path].astro";
const $$url = "/[...path]";

export { $$ as default, $$file as file, $$url as url };
