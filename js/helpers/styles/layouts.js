const landing = `
body{
  padding: var(--rhythm) var(--rhythm-half);
  max-width: 65rem;
}
.header {
 text-align: center;
}

.navigation {
  text-align: center;
}

.navigation ul {
  display: flex;
  list-style-type: none;
  margin-left: 0;
  justify-content: center;
}

.navigation li {
  padding: 0 var(--rhythm-half);
}
`;

const sidebar = `
body {
  display: grid;
  grid-template-areas:
    "header     header"
    "navigation main"
    "footer footer";
  grid-template-columns: 10em 1fr;
}

.header {
  grid-area: header;
  padding: 0 var(--rhythm-half);
}

/* Navigation Styles */
.navigation {
  background: var(--color-neutral-tint4);
  grid-area: navigation;
  padding: var(--rhythm-double) var(--rhythm-half) var(--rhythm);
}

.main {
  grid-area: main;
  min-width: 0;
  padding: 0 var(--rhythm-half);
}

.footer {
  grid-area: footer;
  min-width: 0;
  padding: var(--rhythm);
}
`;

const layouts = {
  landing,
  sidebar
};

export default layouts;
