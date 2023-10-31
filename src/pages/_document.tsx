import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme')
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light'
  }
  document.body.dataset.theme = getUserPreference();
`;

  return (
    <Html lang='en'>
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <script
          id='superflowToolbarScript'
          data-sf-platform='manual'
          async
          src='https://cdn.jsdelivr.net/npm/@usesuperflow/toolbar/superflow.min.js?apiKey=SoNazk1CobX8QnhENUBL&projectId=4747974572217089'
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
