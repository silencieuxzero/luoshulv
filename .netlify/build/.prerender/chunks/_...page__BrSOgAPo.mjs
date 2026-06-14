import { P as PAGE_SIZE, $ as $$MainGridLayout } from './MainGridLayout_zscWBrzL.mjs';
import { c as createComponent, d as getSortedPosts } from './content-utils_D8KsiDKd.mjs';
import { a as renderComponent, r as renderTemplate } from './prerender_3I2M0cI9.mjs';
import $$Pagination from './Pagination_CbXjQys7.mjs';
import $$PostPage from './PostPage_DLJ2co9G.mjs';

const getStaticPaths = (async ({ paginate }) => {
  const allBlogPosts = await getSortedPosts();
  return paginate(allBlogPosts, { pageSize: PAGE_SIZE });
});
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const len = page.data.length;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPage", $$PostPage, { "page": page })} ${renderComponent($$result2, "Pagination", $$Pagination, { "class": "mx-auto onload-animation", "page": page, "style": `animation-delay: calc(var(--content-delay) + ${len * 50}ms)` })} ` })}`;
}, "E:/luoshulv/src/pages/[...page].astro", void 0);

const $$file = "E:/luoshulv/src/pages/[...page].astro";
const $$url = "/[...page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
