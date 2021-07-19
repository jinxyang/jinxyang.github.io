const list = [
  {
    name: 'Interesting',
    link: './categories/interesting.html',
  },
  {
    name: 'Tools',
    link: './categories/tools.html',
  },
  {
    name: 'Movies',
    link: './categories/movies.html',
  },
  {
    name: 'Music',
    link: './categories/music.html',
  },
  {
    name: 'Code',
    link: './categories/code.html',
  },
  {
    name: 'Resources',
    link: './categories/resources.html',
  },
  {
    name: 'Mac',
    link: './categories/mac.html',
  },
  {
    name: 'Chrome',
    link: './categories/chrome.html',
  },
  {
    name: 'VSCode',
    link: './categories/vscode.html',
  },
]

const App = div(
  { className: 'wrap' },
  h1({ className: 'title', style: 'display: none' }, 'Bookmarks'),
  ul(
    { className: 'list' },
    list.map(({ name, link }) =>
      li(
        { className: 'category', onclick: () => (window.location.href = link) },
        h2({ className: 'category__name' }, name),
      ),
    ),
  ),
)

render(App, document.getElementById('root'))
