const __ = new Proxy({"src":"/_astro/征酱.DUYn2q2b.jpg","width":960,"height":1222,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/luoshulv/src/assets/images/征酱.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("E:/luoshulv/src/assets/images/征酱.jpg");
							return target[name];
						}
					});

export { __ as default };
