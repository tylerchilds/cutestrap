import getBlobURL from './getBlobUrl.js';

export default function boilerplate(config) {
  const cssURL = getBlobURL(config.css, 'text/css');

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>Cutestrap Customizer</title>

      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="apple-touch-fullscreen" content="yes">

      <link href="https://www.cutestrap.com/css/hotlinks/cutestrap.min.css" rel="stylesheet" type="text/css" />
      <link href="${cssURL}" rel="stylesheet" type="text/css" />
    </head>
    <body>
      <header class="header">
        <h1><a href="#">Title</a></h1>
      </header>

      <nav class="navigation">
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </nav>

      <main class="main">
        <h2>About</h2>
        <p>
          When using a CSS Framework, it's really easy to make your website look identical to every other website that uses that framework.
        </p>
        <p>
          Cutestrap aims to provide simple ways to leverage the framework, compared to fighting it, to achieve your design requirements.
        </p>
        <p>
          The Customizer quickly gives you a boilerplate with:
      </p>
        <ul>
          <li>Theme</li>
          <li>Layout</li>
          <li>Baseline Grid</li>
          <li>Line Height</li>
        </ul>
        <p>
          Layouts are not actually part of Cutestrap because they will likely be the most unique part of your design. CSS Grid is very powerful and the Customizer highlights how the same markup can be used in conjunction with CSS Grid and Cutestrap to give your website flexibility when you need to redesign.
        </p>
      </main>

      <footer class="footer">
        <section class="grid">
          <p>
            &hearts; <a href="https://www.tylerchilds.com">Tyler Childs</a>
          </p>
          <p class="ta-right">
            ©2019
          </p>
        </section>
      </footer>
    </body>
  </html>`;
}
