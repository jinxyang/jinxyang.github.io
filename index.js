const init = (bookmarks) => {
  const App = div(
    { className: 'wrap' },
    h1({ className: 'title' }, 'Bookmarks'),
    ul(
      bookmarks.map(({ title, list }) =>
        li(
          { className: 'category' },
          h2({ className: 'category__name' }, title.toUpperCase()),
          ul(
            { className: 'category__list' },
            list.map(({ name, desc, link }) =>
              li(
                {
                  className: 'bookmark',
                  title: `${name}: ${link}`,
                  onclick: () => window.open(link),
                },
                h3({ className: 'bookmark__name' }, name),
                p({ className: 'bookmark__desc' }, desc),
                p(
                  {
                    className: 'bookmark__link',
                  },
                  link,
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  )
  render(App, document.getElementById('root'))
}

window.onload = () => {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', './bookmarks.json')
  xhr.responseType = 'json'
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      init(xhr.response)
    }
  }
  xhr.send()
}
