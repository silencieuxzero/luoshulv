const scp = new Proxy({"src":"/_astro/scp.C5yL0xmT.jpg","width":1920,"height":1079,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/luoshulv/src/assets/images/scp.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("E:/luoshulv/src/assets/images/scp.jpg");
							return target[name];
						}
					});

export { scp as default };
