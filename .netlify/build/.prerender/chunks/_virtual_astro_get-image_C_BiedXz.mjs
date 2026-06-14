import { g as getImage$1 } from './deterministic-string_DXlK9Il-.mjs';

const imageConfig = {"endpoint":{"route":"/_image/"},"service":{"entrypoint":"@astrojs/netlify/image-service.js","config":{}},"dangerouslyProcessSVG":false,"domains":[],"remotePatterns":[],"responsiveStyles":false};
								Object.defineProperty(imageConfig, 'assetQueryParams', {
									value: undefined,
									enumerable: false,
									configurable: true,
								});
								const getImage = async (options) => await getImage$1(options, imageConfig);

export { getImage, imageConfig };
