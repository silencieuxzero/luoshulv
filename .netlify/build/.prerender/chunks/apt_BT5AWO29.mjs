const apt = new Proxy({"src":"/_astro/apt.B8sqI6ZI.jpg","width":640,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/luoshulv/src/assets/images/apt.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("E:/luoshulv/src/assets/images/apt.jpg");
							return target[name];
						}
					});

export { apt as default };
