const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8cbdfedd.js","app":"_app/immutable/entry/app.b2a57222.js","imports":["_app/immutable/entry/start.8cbdfedd.js","_app/immutable/chunks/index.f06e6e30.js","_app/immutable/chunks/singletons.95b27895.js","_app/immutable/chunks/index.8dc491d2.js","_app/immutable/entry/app.b2a57222.js","_app/immutable/chunks/index.f06e6e30.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-12228e4a.js'),
			() => import('./chunks/1-8ad7d149.js'),
			() => import('./chunks/2-3f01b8e6.js'),
			() => import('./chunks/3-c54af618.js')
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
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
