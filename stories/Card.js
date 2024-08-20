import '../styles/scss/main.scss'

export const createCard = ({ primary = true, label }) => {
  const template = `
<div class="card storybook-card${primary ? " storybook-card--primary" : ""}">
    ${label}
</div>
    `;
  return new DOMParser().parseFromString(template, "text/html").body.firstChild;
};
