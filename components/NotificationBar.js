import "../styles/scss/main.scss";

export const createNotificationBar = ({ text, Alternate,bgColor }) => {
  const template = `
<div class="notification-bar${Alternate ? " bg-dark" : ""}" style="background-color: ${bgColor}">
    ${text}
</div>
`;

  return new DOMParser().parseFromString(template, "text/html").body.firstChild;

};
