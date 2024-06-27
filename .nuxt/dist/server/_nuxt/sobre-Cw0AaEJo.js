import { _ as __nuxt_component_0 } from "./nuxt-img-CSFHrIuO.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-D3jPBkif.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./index-BabADJUJ.js";
import "@unhead/shared";
import "defu";
import "ufo";
import "h3";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
import "klona";
import "devalue";
import "destr";
import "gsap";
import "gsap/ScrollTrigger.js";
import "gsap/ScrollToPlugin.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-fluid my-content" }, _attrs))} data-v-70df7dd7><div class="row" data-v-70df7dd7><div class="offset-lg-2 col-lg-3" data-v-70df7dd7><h1 data-v-70df7dd7>Designer de produtos digitais com experiência em criação de marca e desenvolvimento.</h1></div><div class="offset-lg-1 col-lg-4" data-v-70df7dd7><p data-v-70df7dd7> Experiência profissional de mais de 10 anos no digital em visual design. Trabalhou em times gerenciados com base em metodologias ágeis e produtos escaláveis, participou do processo end-to-end. Contribuiu em agência, startups e e-commerce. <br data-v-70df7dd7><br data-v-70df7dd7>A capacidade de desenvolver o front-end se deu com a necessidade de entregar além dos desenhos de interfaces e com aprendizados com desenvolvedores incríveis.Como forma de estudo esse portfólio foi desenvolvido com <a href="https://nuxt.com/" target="_blank" data-v-70df7dd7>Nuxt</a>. <br data-v-70df7dd7><br data-v-70df7dd7>Possui experiência com criação de identidade visual. Última experiência profissional na <a href="https://www.innocean.com/br-en/" target="_blank" data-v-70df7dd7>Innocean</a>, uma agência de publicidade, onde eu atendia a <a href="https://hyundai.com.br/" target="_blank" data-v-70df7dd7> Hyundai</a>, junto do time de digital. </p><picture data-v-70df7dd7>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/andre-oliveira-designer.png" }, null, _parent));
  _push(`</picture></div><div class="offset-lg-2 col-lg-3" data-v-70df7dd7><h1 data-v-70df7dd7>Além do trabalho e para o trabalho.</h1></div><div class="offset-lg-1 col-lg-4" data-v-70df7dd7><p data-v-70df7dd7> Treino Crossfit e jiu-jitsu. Atualmente estou tentando encontrar a melhor forma de conciliar os dois treinos durante a semana. Correr ou caminhar no parque, para mim, é uma terapia. <br data-v-70df7dd7><br data-v-70df7dd7>Sou apreciador de carros, seja antigo (lazanhona) ou novo. O céu com sua imensidão e cores me hipnotiza. Eu tenho algo platônico pelos cachorros de rua que não sei explicar. <br data-v-70df7dd7><br data-v-70df7dd7>Veja os meus projetos. </p><ul class="ao-nav" data-v-70df7dd7><li data-v-70df7dd7>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/projetos" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projetos`);
      } else {
        return [
          createTextVNode("Projetos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sobre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sobre = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-70df7dd7"]]);
export {
  sobre as default
};
//# sourceMappingURL=sobre-Cw0AaEJo.js.map
