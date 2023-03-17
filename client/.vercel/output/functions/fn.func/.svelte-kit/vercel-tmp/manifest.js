export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","flow-chart.png","fonts/Lato-Black.ttf","fonts/Lato-BlackItalic.ttf","fonts/Lato-Bold.ttf","fonts/Lato-BoldItalic.ttf","fonts/Lato-Italic.ttf","fonts/Lato-Light.ttf","fonts/Lato-LightItalic.ttf","fonts/Lato-Regular.ttf","fonts/Lato-Thin.ttf","fonts/Lato-ThinItalic.ttf","fonts/Montserrat-Black.ttf","fonts/Montserrat-BlackItalic.ttf","fonts/Montserrat-Bold.ttf","fonts/Montserrat-BoldItalic.ttf","fonts/Montserrat-ExtraBold.ttf","fonts/Montserrat-ExtraBoldItalic.ttf","fonts/Montserrat-ExtraLight.ttf","fonts/Montserrat-ExtraLightItalic.ttf","fonts/Montserrat-Italic.ttf","fonts/Montserrat-Light.ttf","fonts/Montserrat-LightItalic.ttf","fonts/Montserrat-Medium.ttf","fonts/Montserrat-MediumItalic.ttf","fonts/Montserrat-Regular.ttf","fonts/Montserrat-SemiBold.ttf","fonts/Montserrat-SemiBoldItalic.ttf","fonts/Montserrat-Thin.ttf","fonts/Montserrat-ThinItalic.ttf","fonts/OFL.txt","Group 28.png","Group 29 (1).png","Group 30.png","image 14.png","image 15.png","image 16.png","image 17.png","image 18.png","image 19.png","image 20.png","image 200.png","image 25.png","image 28.png","image 29.png","image 3.png","image 30.png","image 31.png","image 32.png","image 33.png","image 43.png","image 6.png","navbar/Logo.png","Rectangle 68.jpg","Rectangle 69.jpg","Rectangle 69.png","Rectangle 70.png","Rectangle 71.jpg","Screenshot 2022-12-18 at 23.46 1.png","Screenshot 2023-01-23 at 16.13 1.png","shutterstock_champignon.png","strawberry-jam.png","valuechain_graph2-03 1.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".txt":"text/plain",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.fff47151.js","imports":["_app/immutable/entry/start.fff47151.js","_app/immutable/chunks/index.53b36b98.js","_app/immutable/chunks/singletons.d736045b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.653e5fe3.js","imports":["_app/immutable/entry/app.653e5fe3.js","_app/immutable/chunks/index.53b36b98.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/abouts",
				pattern: /^\/abouts\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/brands",
				pattern: /^\/brands\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/plantations",
				pattern: /^\/plantations\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
