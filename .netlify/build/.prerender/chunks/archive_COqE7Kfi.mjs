import { $ as $$MainGridLayout } from './MainGridLayout_zscWBrzL.mjs';
import { c as createComponent, b as getSortedPostsList, i as i18n, I as I18nKey } from './content-utils_D8KsiDKd.mjs';
import { a as renderComponent, r as renderTemplate } from './prerender_3I2M0cI9.mjs';

const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const sortedPostsList = await getSortedPostsList();
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive) }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", null, { "sortedPosts": sortedPostsList, "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "@components/ArchivePanel.svelte", "client:component-export": "default" })} ` })}`;
}, "E:/luoshulv/src/pages/archive.astro", void 0);

const $$file = "E:/luoshulv/src/pages/archive.astro";
const $$url = "/archive/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Archive,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
