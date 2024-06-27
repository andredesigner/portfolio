import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'gsap';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-fluid my-content" }, _attrs))} data-v-6daecc50><div class="row" data-v-6daecc50><div class="offset-lg-2 col-lg-3" data-v-6daecc50><h1 data-v-6daecc50>Muito obrigado pela visita.</h1></div><div class="offset-lg-1 col-lg-4" data-v-6daecc50><p data-v-6daecc50>Fique a vontade para me mandar mensagem e marcar uma conversa ou um caf\xE9, ser\xE1 um prazer conhece-lo e me apresentar.</p><form data-v-6daecc50><div class="ao-input radius-top-left-right-10" data-v-6daecc50><input type="text" class="ao-form-control form-control shadow-none" id="name" required data-v-6daecc50><label for="name" class="ao-form-label form-label" data-v-6daecc50>Como costumam te chamar</label></div><div class="ao-input" data-v-6daecc50><input type="email" class="ao-form-control form-control shadow-none" id="e-mail" required data-v-6daecc50><label for="e-mail" class="ao-form-label form-label" data-v-6daecc50>Um e-mail para eu retornar</label></div><div class="ao-input radius-bottom-left-right-10" data-v-6daecc50><textarea for="message" class="ao-form-control ao-textarea form-control shadow-none" id="message" contenteditable required data-v-6daecc50></textarea><label for="message" class="ao-form-label form-label" data-v-6daecc50>Voc\xEA gosta de caf\xE9?</label></div><button type="submit" class="btn ao-btn" data-v-6daecc50>Enviar</button></form></div></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fale-comigo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faleComigo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6daecc50"]]);

export { faleComigo as default };
//# sourceMappingURL=fale-comigo-CTdltvDE.mjs.map
