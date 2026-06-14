import { $ as $$MainGridLayout, r as renderScript } from './MainGridLayout_Ch6OJi5I.mjs';
import { c as createComponent, a as getEntry, r as renderEntry, i as i18n, I as I18nKey } from './content-utils_C8ZdinW7.mjs';
import { a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_Bwfl1wrL.mjs';
import $$Markdown from './Markdown_DdoRdh17.mjs';

const $$Friends = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Friends;
  const friendsPost = await getEntry("spec", "friends");
  if (!friendsPost) {
    throw new Error("About page content not found");
  }
  const { Content } = await renderEntry(friendsPost);
  const items = [
    {
      title: "Astro",
      imgurl: "https://avatars.githubusercontent.com/u/44914786?s=48&v=4",
      desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
      siteurl: "https://github.com/withastro/astro",
      tags: ["框架"]
    },
    {
      title: "时歌的博客",
      imgurl: "https://www.lapis.cafe/avatar.webp",
      desc: "理解以真实为本，但真实本身并不会自动呈现.",
      siteurl: "https://www.lapis.cafe/",
      tags: ["astro"]
    },
    {
      title: "伊卡的记事本",
      imgurl: "https://ikamusume7.org/",
      desc: "又菜又爱学.",
      siteurl: "https://ikamusume7.org/avatar.webp",
      tags: ["astro"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.friends), "description": i18n(I18nKey.friends) }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32"> <div class="card-base z-10 px-9 py-6 relative w-full "> <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 my-4" id="friends-list"> ${items.map((item) => renderTemplate`<div class="friend-card flex flex-nowrap items-stretch h-28 gap-4 rounded-[var(--radius-large)]"> <div class="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-900"> <img${addAttribute(item.imgurl, "src")} alt="站点头像" class="w-full h-full object-cover"> </div> <div class="grow w-full"> <div class="font-bold transition text-lg text-neutral-900 dark:text-neutral-100 mb-1">${item.title}</div> <div class="text-50 text-sm font-medium">${item.desc}</div> </div> <a${addAttribute(item.siteurl, "href")} target="_blank" rel="noopener noreferrer" class="flex btn-regular w-[3.25rem] rounded-lg bg-[var(--enter-btn-bg)] hover:bg-[var(--enter-btn-bg-hover)] active:bg-[var(--enter-btn-bg-active)] active:scale-95"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="transition text-[var(--primary)] text-4xl mx-auto iconify iconify--material-symbols" width="1em" height="1em" viewBox="0 0 24 24"> <path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"></path> </svg> </a> </div>`)} </div> ${renderComponent($$result2, "Markdown", $$Markdown, { "class": "mt-2" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} </div> </div>  ${renderScript($$result2, "E:/luoshulv/src/pages/friends.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "E:/luoshulv/src/pages/friends.astro", void 0);

const $$file = "E:/luoshulv/src/pages/friends.astro";
const $$url = "/friends/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Friends,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
