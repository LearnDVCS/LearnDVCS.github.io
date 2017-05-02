# Colophon

This site makes use of GitHub's static site generation based on Jekyll. For setting up the Windows environment for building Jekyll sites locally, I used [this guide](https://labs.sverrirs.com/jekyll/) to get Jekyll installed and configured and added the following [gems which are used by GitHub](https://github.com/blog/2289-publishing-with-github-pages-now-as-easy-as-1-2-3):

- [Jekyll Optional Front Matter](https://github.com/benbalter/jekyll-optional-front-matter)
  - `gem install jekyll-optional-front-matter`
- [Jekyll Readme Index](https://github.com/benbalter/jekyll-readme-index)
  - `gem install jekyll-readme-index`
- [Jekyll Default Layout](https://github.com/benbalter/jekyll-default-layout)
  - `gem install jekyll-default-layout`
- [Jekyll Title from Headings](https://github.com/benbalter/jekyll-titles-from-headings)
  - `gem install jekyll-titles-from-headings`

I then updated the *_config.yml* file to include the following explicitly for my local builds (even though GitHub uses them in their automatic site generation).

```yaml
gems:
  - jekyll-optional-front-matter
  - jekyll-readme-index
  - jekyll-default-layout
  - jekyll-titles-from-headings
```

> **Tip:** It can be helpful to learn [how Jekyll generates the final static files](http://jekyllbootstrap.com/lessons/jekyll-introduction.html#toc_24).

> **TIP:** For additional site themes, check out [JekyllThemes.org](http://jekyllthemes.org/)
