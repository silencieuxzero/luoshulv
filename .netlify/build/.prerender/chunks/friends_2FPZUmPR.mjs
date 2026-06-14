import { c as createComponent } from './content-utils_C8ZdinW7.mjs';
import { m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './prerender_Bwfl1wrL.mjs';

const html = () => "";

				const frontmatter = {"minutes":1,"words":0,"excerpt":""};
				const file = "E:/luoshulv/src/content/spec/friends.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
