import jsSnippets from './my-js-snippets.png'
import portfolio from './portfolio.jpg'

export default [
    {
        title: "Zap-Scrap",
        summery: "A web app that allows users to keep track of several stores location in zap website, It receives a spreadsheets, takes the stores details, scraps in zap website (with cheerio) to get information about each store, and update the results in the app ui, and in the spreadsheet. The app is built with Next.js 13 and deployed on vercel.",
        image_path: 'https://imgur.com/IXgRwD3.png',
        // image_path: 'https://i.imgur.com/IXgRwD3.png',
        // image_path: {jsSnippets},
        deployed_url: "https://scrap-zap.vercel.app",
        github_url: "https://github.com/amabelleS/scrap-zap",
        category: ["react", "node", "mongo"],
        key_techs: [ "Next.js", "Vercel", "cheerio"],
        isFeatured: false,
        id: 1,
    },
    {
        title: "my-js-snippets",
        summery: "A node cli that start a web service with advanced javascript sandbox (an interactive coding enviroment). The tool enables the user to write ES-07 code snipets, see it excuted in a preview window in the browser, and write comprehesive documentation using markdown. All the changes are saved to the local file system. Implementing Esbuils - An extremely fast JavaScript bundler. Also, managed mono-repo with lerna.",
        image_path: 'https://imgur.com/9BKOkLd.png',
        // image_path: {jsSnippets},
        deployed_url: "https://www.npmjs.com/package/my-js-snippets",
        github_url: "https://github.com/amabelleS/my-js-snippets",
        category: ["react", "node", "typescript", "esbuild", "redux", "lerna"],
        key_techs: ["React", "Redux", "Node", "Express", "TypeScript", "Esbuild", "Lerna"],
        isFeatured: true,
        id: 2,
    },
    {
        title: "My First Portfolio",
        summery: " I created a unique design by utilizing a media player as the background (react-player). I implemented this using React.js. I also used react-markdown and react-syntax-highlighter for the blog. Deployed on Firebase.",
        image_path: 'https://imgur.com/Vzg7FdT.png',
        // image_path: {portfolio},
        deployed_url: "https://amabelle-protfolio.web.app",
        github_url: "https://github.com/amabelleS/my-protfolio",
        category: ["react", "firebase"],
        key_techs: ["React", "Firebase", "react-player", "react-syntax-highlighter", "react-markdown"],
        isFeatured: false,
        id: 3,
    },
]