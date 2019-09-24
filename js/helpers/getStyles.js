import layouts from './styles/layouts.js';
import themes from './styles/themes.js';

function getThemeStyles(theme) {
  return `
/* Theme Specific Styles */
${themes[theme]}
`;
}

function getLayoutStyles(layout) {
  return `
/* Layout Specific Styles */
${layouts[layout]}
`;
}

export default function getStyles({theme, layout, rhythm, lineHeight, responsive}) {
  const rhythmFloat = parseFloat(rhythm);

  const wildCardStyles = `* {
  /* Sets our Baseline Grid */
  --rhythm: ${rhythmFloat}rem;

  /* Sets font-size relative to rhythm */
  --line-height-ratio: ${lineHeight};
}
`;

  const responsiveWildCard = `
@media (max-width: 55rem) {
  * {
    --rhythm: ${rhythmFloat - .3}rem;
  }
}

@media (min-width: 110rem) {
  * {
    --rhythm: ${rhythmFloat + .3}rem;
  }
}
`;

  const responsiveStyles = responsive ? responsiveWildCard : '';
  const themeStyles = themes[theme] ? getThemeStyles(theme) : '';
  const layoutStyles = layouts[layout] ? getLayoutStyles(layout) : '';

  return `${wildCardStyles}${responsiveStyles}${themeStyles}${layoutStyles}`;
}
