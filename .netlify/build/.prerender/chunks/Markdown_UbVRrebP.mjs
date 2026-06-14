import { c as createComponent } from './content-utils_D8KsiDKd.mjs';
import { m as maybeRenderHead, b as addAttribute, h as renderSlot, r as renderTemplate } from './prerender_3I2M0cI9.mjs';
import { r as renderScript } from './MainGridLayout_zscWBrzL.mjs';

const $$Markdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Markdown;
  const className = Astro2.props.class;
  return renderTemplate`${maybeRenderHead()}<div data-pagefind-body${addAttribute(`prose dark:prose-invert prose-base !max-w-none custom-md ${className}`, "class")}> <!--<div class="prose dark:prose-invert max-w-none custom-md">--> <!--<div class="max-w-none custom-md">--> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "E:/luoshulv/src/components/misc/Markdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/luoshulv/src/components/misc/Markdown.astro", void 0);

export { $$Markdown as default };
