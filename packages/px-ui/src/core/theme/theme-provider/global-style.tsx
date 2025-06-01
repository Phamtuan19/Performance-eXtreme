import { createGlobalStyle, css } from 'styled-components';

const globalCSSVariables = css({
   ':root': {
      '--px-center-xy': 'translate(50%, -50%)',
      '--px-translate-top-left': 'translate(-50%, -50%)',
      '--px-translate-top-right': 'var(--px-center-xy)',
      '--px-translate-bottom-left': 'translate(-50%, 50%)',
      '--px-translate-bottom-right': 'translate(50%, 50%)',
   },
});

const GlobalStyle = createGlobalStyle`${globalCSSVariables}`;

export { GlobalStyle };
