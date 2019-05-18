import React from "react";
import { Head } from "react-static";

const defaultParams = {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
};

export default ({ id, params = defaultParams }) => ({
  Root: OldRoot => {
    const counter = `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(${id}, "init", ${JSON.stringify(params)});
`;

    const nos = `
<div><img src="https://mc.yandex.ru/watch/${id}" style="position:absolute; left:-9999px;" alt="" /></div>
`;

    return ({ children }) => {
      return (
        <OldRoot>
          <Head
            script={[
              {
                innerHTML: counter
              }
            ]}
            noscript={[
              {
                innerHTML: nos
              }
            ]}
          />
          {children}
        </OldRoot>
      );
    };
  }
});
