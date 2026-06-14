import { c as createComponent } from './content-utils_C8ZdinW7.mjs';
import { m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './prerender_Bwfl1wrL.mjs';

const html = () => "<p>这是一个快节奏的世界，对吧？<br></p>\n<p>在这个世界，历史的车轮不断向前，我们每个人都被裹挟在时代的洪流中不断向前。日复一日的工作与学习似乎让我们很难再静下来思考一件事——<br></p>\n<blockquote>\n<p>我们究竟是为了什么而活？</p>\n</blockquote>\n<p>在如今，物质世界的极大满足并未让我们解放精神，而是陷入了一场又一场的内卷中，去禁锢、去压抑自己的精神世界，直到它蜷缩成一张纸片被我们埋在某个角落里。在物质生活的快车上，我们距离精神世界越来越远，直到忘记我们是谁。<br></p>\n<p>“所以，你为什么要建立这个博客？”<br></p>\n<section><h2 id=\"为了重新捡起那张纸片\">“为了重新捡起那张纸片。”<a class=\"anchor\" href=\"#为了重新捡起那张纸片\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2></section>";

				const frontmatter = {"title":"序言","published":"2026-02-07T00:00:00.000Z","description":"很高兴见到你。","tags":["随笔"],"category":"原创","draft":false,"pinned":true,"minutes":1,"words":208,"excerpt":"这是一个快节奏的世界，对吧？<br>"};
				const file = "E:/luoshulv/src/content/posts/xuyan.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
