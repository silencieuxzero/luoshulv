import { c as createComponent } from './content-utils_D8KsiDKd.mjs';
import { m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './prerender_3I2M0cI9.mjs';

const html = () => "<p>夏日的暴雨总是大而急的，雨滴砸在荷花绽开的池塘中，在平静的水面中激出一串串波纹。彩色的世界被笼盖在透明的帷幕下，又被帷幕分割重组。在光的作用下更显梦幻。</p>\n<p>在帷幕中奔跑的两个身影显得格外明显，也许是因为出门玩没带伞而被突然袭来的暴雨弄得措手不及。很快，两道彩色的身影便在这笼罩天地的帷幕中找到了一片短暂的容身之所——徽派建筑所具有的房檐下。帷幕依然笼罩的天地，天井中积满了水，在房檐下的湿透的两个身影站在一起。尽管被淋湿了，但依然开心，也许是因为他们已经很久没有体会到这种自由的快乐了。学校的生活总是黑暗而漫长的，所幸至少他们还能为自己和彼此歌唱，直到天亮的时刻。</p>\n<p>雨总是随着阴云而来，帷幕下的世界显得如此暗沉，白墙因被雨水打湿而变得更加在阴影下显得更加洁白，阵阵帷幕碎片从房瓦上落下变成了阵阵雾气笼罩在这片古建筑群中。</p>\n<p>“你喜欢下雨吗。”少年放下手中的卡片相机，看向旁边的女生。</p>\n<p>“不太喜欢……”</p>\n<p>“换种思路，这种在雨中自由而无拘无束的感觉很棒，不是吗，我们可以在这里多待一会。”少年笑着扬了扬手上的相机。“来拍张照吧，将这一刻永远保留下来。”</p>\n<p>一道亮光闪过，留下的是两个人又一张共同的回忆，或许是因为兴奋，少年的脸颊上带着一抹红晕。</p>";

				const frontmatter = {"title":"随笔-2","published":"2025-11-30T00:00:00.000Z","description":"莫听穿林打叶声，何妨吟啸且徐行。","tags":["随笔","OC"],"category":"原创","draft":false,"minutes":2,"words":470,"excerpt":"夏日的暴雨总是大而急的，雨滴砸在荷花绽开的池塘中，在平静的水面中激出一串串波纹。彩色的世界被笼盖在透明的帷幕下，又被帷幕分割重组。在光的作用下更显梦幻。"};
				const file = "E:/luoshulv/src/content/posts/story-2.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, Content as default, file, frontmatter, url };
