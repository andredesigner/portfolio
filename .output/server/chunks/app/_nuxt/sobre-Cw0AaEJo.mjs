import { _ as __nuxt_component_0 } from './nuxt-img-CSFHrIuO.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-D3jPBkif.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './index-BabADJUJ.mjs';
import '@unhead/shared';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import 'vue-router';
import 'gsap';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-fluid my-content" }, _attrs))} data-v-70df7dd7><div class="row" data-v-70df7dd7><div class="offset-lg-2 col-lg-3" data-v-70df7dd7><h1 data-v-70df7dd7>Designer de produtos digitais com experi\xEAncia em cria\xE7\xE3o de marca e desenvolvimento.</h1></div><div class="offset-lg-1 col-lg-4" data-v-70df7dd7><p data-v-70df7dd7> Experi\xEAncia profissional de mais de 10 anos no digital em visual design. Trabalhou em times gerenciados com base em metodologias \xE1geis e produtos escal\xE1veis, participou do processo end-to-end. Contribuiu em ag\xEAncia, startups e e-commerce. <br data-v-70df7dd7><br data-v-70df7dd7>A capacidade de desenvolver o front-end se deu com a necessidade de entregar al\xE9m dos desenhos de interfaces e com\xA0aprendizados com desenvolvedores incr\xEDveis.Como forma de estudo esse portf\xF3lio foi desenvolvido com <a href="https://nuxt.com/" target="_blank" data-v-70df7dd7>Nuxt</a>. <br data-v-70df7dd7><br data-v-70df7dd7>Possui experi\xEAncia com cria\xE7\xE3o de identidade visual. \xDAltima experi\xEAncia profissional na <a href="https://www.innocean.com/br-en/" target="_blank" data-v-70df7dd7>Innocean</a>, uma ag\xEAncia de publicidade, onde eu atendia a <a href="https://hyundai.com.br/" target="_blank" data-v-70df7dd7>\xA0Hyundai</a>, junto do time de digital. </p><picture data-v-70df7dd7>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/andre-oliveira-designer.png" }, null, _parent));
  _push(`</picture></div><div class="offset-lg-2 col-lg-3" data-v-70df7dd7><h1 data-v-70df7dd7>Al\xE9m do trabalho e para o trabalho.</h1></div><div class="offset-lg-1 col-lg-4" data-v-70df7dd7><p data-v-70df7dd7> Treino Crossfit e jiu-jitsu. Atualmente estou tentando encontrar a melhor forma de conciliar os dois treinos durante a semana. Correr ou caminhar no parque, para mim, \xE9 uma terapia. <br data-v-70df7dd7><br data-v-70df7dd7>Sou apreciador de carros, seja antigo (lazanhona) ou novo. O c\xE9u com sua imensid\xE3o e cores me hipnotiza. Eu tenho algo plat\xF4nico pelos cachorros de rua que n\xE3o sei explicar. <br data-v-70df7dd7><br data-v-70df7dd7>Veja os meus projetos. </p><ul class="ao-nav" data-v-70df7dd7><li data-v-70df7dd7>`);
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

export { sobre as default };
//# sourceMappingURL=sobre-Cw0AaEJo.mjs.map
