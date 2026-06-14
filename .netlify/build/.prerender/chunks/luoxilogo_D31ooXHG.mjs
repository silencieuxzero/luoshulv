const luoxilogo = new Proxy({"src":"/_astro/luoxilogo.rfMDR4am.png","width":1440,"height":788,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/luoshulv/src/assets/images/luoxilogo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("E:/luoshulv/src/assets/images/luoxilogo.png");
							return target[name];
						}
					});

export { luoxilogo as default };
