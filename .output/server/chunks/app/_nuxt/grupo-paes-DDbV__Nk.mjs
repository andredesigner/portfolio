import { _ as __nuxt_component_0 } from './nuxt-img-CSFHrIuO.mjs';
import { mergeProps, useSSRContext } from 'vue';
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-fluid my-content" }, _attrs))}><div class="row"><div class="offset-lg-2 col-lg-4"><h1>Lorem ipsum dolor sit amet consectetur.</h1></div><div class="col-lg-4"><p>Experi\xEAncia profissional de mais de 10 anos no digital em visual design. Trabalhou em times gerenciados com base em metodologias \xE1geis e produtos escal\xE1veis, participou do processo end-to-end. Contribuiu em ag\xEAncia, startups e e-commerce.</p></div><div class="offset-lg-1 col-lg-10 col-12"><picture>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img-project.png",
    class: "mb-4"
  }, null, _parent));
  _push(`</picture></div><div class="offset-lg-1 col-lg-5 col-12"><picture>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img-project-1.png",
    class: "mb-4"
  }, null, _parent));
  _push(`</picture></div><div class="col-lg-5 col-12"><picture>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img-project-1.png",
    class: "mb-4"
  }, null, _parent));
  _push(`</picture></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projetos/grupo-paes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const grupoPaes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { grupoPaes as default };
//# sourceMappingURL=grupo-paes-DDbV__Nk.mjs.map
