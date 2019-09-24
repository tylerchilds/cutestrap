const dark = `
html {
  --color-primary-shade1: hsl(350, 80%, 60%);
  --color-primary: hsl(350, 80%, 45%);
  --color-primary-tint1: hsl(350, 80%, 35%);
  --color-accent-shade1: hsl(170, 80%, 60%);
  --color-accent: hsl(170, 80%, 45%);
  --color-accent-tint1: hsl(170, 80%, 35%);
  --color-link: hsl(230, 80%, 60%);
  --color-link-visited: hsl(290, 80%, 60%);
  --color-link-hover: hsl(230, 60%, 50%);
  --color-link-active: hsl(350, 60%, 50%);
  --color-neutral-shade4: hsl(170, 10%, 98%);
  --color-neutral-shade3: hsl(170, 10%, 94%);
  --color-neutral-shade2: hsl(170, 10%, 85%);
  --color-neutral-shade1: hsl(170, 10%, 68%);
  --color-neutral: hsl(170, 10%, 55%);
  --color-neutral-tint1: hsl(170, 10%, 41%);
  --color-neutral-tint2: hsl(170, 10%, 30%);
  --color-neutral-tint3: hsl(170, 10%, 18%);
  --color-neutral-tint4: hsl(170, 10%, 2%);
}
`;

const legalpad = `
html {
  --color-primary-shade1: hsl(200, 80%, 60%);
  --color-primary: hsl(200, 80%, 45%);
  --color-primary-tint1: hsl(200, 80%, 35%);
  --color-accent-shade1: hsl(50, 80%, 60%);
  --color-accent: hsl(50, 80%, 45%);
  --color-accent-tint1: hsl(50, 80%, 35%);
}

body {
  background: hsl(50, 50%, 90%);
  color: hsl(200, 50%, 10%);
}
`;

const themes = {
  dark,
  legalpad
};


export default themes;
