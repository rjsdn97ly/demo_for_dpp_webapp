import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.63146678.js","app":"_app/immutable/entry/app.155fb380.js","imports":["_app/immutable/entry/start.63146678.js","_app/immutable/chunks/index.f06e6e30.js","_app/immutable/chunks/singletons.1179def3.js","_app/immutable/chunks/index.8dc491d2.js","_app/immutable/entry/app.155fb380.js","_app/immutable/chunks/index.f06e6e30.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/path01",
				pattern: /^\/path01\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
