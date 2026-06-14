import * as $ from 'svelte/internal/server';
import { onMount } from 'svelte';
import { i as i18n, I as I18nKey, g as getPostUrlBySlug } from './content-utils_C8ZdinW7.mjs';

function ArchivePanel($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let tags = $$props['tags'];
		let categories = $$props['categories'];
		let sortedPosts = $.fallback($$props['sortedPosts'], () => [], true);
		const params = new URLSearchParams(window.location.search);

		tags = params.has("tag") ? params.getAll("tag") : [];
		categories = params.has("category") ? params.getAll("category") : [];

		const uncategorized = params.get("uncategorized");
		let groups = [];

		function formatDate(date) {
			const month = (date.getMonth() + 1).toString().padStart(2, "0");
			const day = date.getDate().toString().padStart(2, "0");

			return `${month}-${day}`;
		}

		function formatTag(tagList) {
			return tagList.map((t) => `#${t}`).join(" ");
		}

		onMount(async () => {
			let filteredPosts = sortedPosts;

			if (tags.length > 0) {
				filteredPosts = filteredPosts.filter((post) => Array.isArray(post.data.tags) && post.data.tags.some((tag) => tags.includes(tag)));
			}

			if (categories.length > 0) {
				filteredPosts = filteredPosts.filter((post) => post.data.category && categories.includes(post.data.category));
			}

			if (uncategorized) {
				filteredPosts = filteredPosts.filter((post) => !post.data.category);
			}

			const grouped = filteredPosts.reduce(
				(acc, post) => {
					const year = post.data.published.getFullYear();

					if (!acc[year]) {
						acc[year] = [];
					}

					acc[year].push(post);

					return acc;
				},
				{}
			);

			const groupedPostsArray = Object.keys(grouped).map((yearStr) => ({
				year: Number.parseInt(yearStr, 10),
				posts: grouped[Number.parseInt(yearStr, 10)]
			}));

			groupedPostsArray.sort((a, b) => b.year - a.year);
			groups = groupedPostsArray;
		});

		$$renderer.push(`<div class="card-base px-8 py-6"><!--[-->`);

		const each_array = $.ensure_array_like(groups);

		for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
			let group = each_array[$$index_1];

			$$renderer.push(`<div><div class="flex flex-row w-full items-center h-[3.75rem]"><div class="w-[15%] md:w-[10%] transition text-2xl font-bold text-right text-75">${$.escape(group.year)}</div> <div class="w-[15%] md:w-[10%]"><div class="h-3 w-3 bg-none rounded-full outline outline-[var(--primary)] mx-auto -outline-offset-[2px] z-50 outline-3"></div></div> <div class="w-[70%] md:w-[80%] transition text-left text-50">${$.escape(group.posts.length)} ${$.escape(i18n(group.posts.length === 1 ? I18nKey.postCount : I18nKey.postsCount))}</div></div> <!--[-->`);

			const each_array_1 = $.ensure_array_like(group.posts);

			for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
				let post = each_array_1[$$index];

				$$renderer.push(`<a${$.attr('href', getPostUrlBySlug(post.slug))}${$.attr('aria-label', post.data.title)} class="group btn-plain !block h-10 w-full rounded-lg hover:text-[initial]"><div class="flex flex-row justify-start items-center h-full"><div class="w-[15%] md:w-[10%] transition text-sm text-right text-50">${$.escape(formatDate(post.data.published))}</div> <div class="w-[15%] md:w-[10%] relative dash-line h-full flex items-center"><div class="transition-all mx-auto w-1 h-1 rounded group-hover:h-5 bg-[oklch(0.5_0.05_var(--hue))] group-hover:bg-[var(--primary)] outline outline-4 z-50 outline-[var(--card-bg)] group-hover:outline-[var(--btn-plain-bg-hover)] group-active:outline-[var(--btn-plain-bg-active)]"></div></div> <div class="w-[70%] md:max-w-[65%] md:w-[65%] text-left font-bold group-hover:translate-x-1 transition-all group-hover:text-[var(--primary)] text-75 pr-8 whitespace-nowrap overflow-ellipsis overflow-hidden">${$.escape(post.data.title)}</div> <div class="hidden md:block md:w-[15%] text-left text-sm transition whitespace-nowrap overflow-ellipsis overflow-hidden text-30">${$.escape(formatTag(post.data.tags))}</div></div></a>`);
			}

			$$renderer.push(`<!--]--></div>`);
		}

		$$renderer.push(`<!--]--></div>`);
		$.bind_props($$props, { tags, categories, sortedPosts });
	});
}

export { ArchivePanel as default };
