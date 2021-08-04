const renderBookmarks = (title, bookmarks) => {
  const App = div(
    { className: 'wrap' },
    h1({ className: 'title' }, title),
    ul(
      bookmarks.map(({ title, list }) =>
        li(
          { className: 'category' },
          h2({ className: 'category__name' }, title),
          ul(
            { className: 'category__list' },
            list.map(({ name, desc, link }) =>
              li(
                { className: 'category__item' },
                a(
                  {
                    className: 'bookmark',
                    title: `${name}: ${link}`,
                    href: link,
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
    ),
  )
  render(App, document.getElementById('root'))
}

const loadJson = (json, callback = () => {}) => {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', json)
  xhr.responseType = 'json'
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      callback(xhr.response)
    }
  }
  xhr.send()
}
