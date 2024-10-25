import{_ as s}from"./chunks/待办.JLwdde1l.js";import{_ as i,a}from"./chunks/wechat.BdsPlIbf.js";import{_ as t,c as e,o as p,a4 as n}from"./chunks/framework.B358x4hV.js";const F=JSON.parse('{"title":"Checkbox 收费插件","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/checkbox.md","filePath":"plugins/checkbox.md"}'),h={name:"plugins/checkbox.md"},d=n('<h1 id="checkbox-收费插件" tabindex="-1">Checkbox 收费插件 <a class="header-anchor" href="#checkbox-收费插件" aria-label="Permalink to &quot;Checkbox 收费插件&quot;">​</a></h1><p>Checkbox插件提供待办的功能，即可以给节点添加一个勾选框，点击勾选框可以切换完成和未完成的状态。</p><img src="'+s+'" style="width:800px;"><p>你可以在在线版中通过在节点上【单击鼠标右键】-【单击添加待办】来进行体验。</p><h2 id="收费" tabindex="-1">收费 <a class="header-anchor" href="#收费" aria-label="Permalink to &quot;收费&quot;">​</a></h2><p>扫码转账备注你要购买的插件，以及你的邮箱地址（如果达到文字上限，那么你可以分两次付款），然后会将插件文件发送到你的邮箱。购买请在充分的使用和考虑后进行，如果你对前端开发不太熟悉，不知道如何使用插件，那么请谨慎考虑购买，没有特殊原因不会退费。如果你发现了 bug，或者有需求，可以提交相关的 issue。</p><p>价格：￥ 29.9，包含未打包的源码和打包后的文件。</p><p style="display:flex;align-items:flex-end;"><img src="'+i+'" style="width:300px;"><img src="'+a+`" style="width:300px;"></p><h2 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h2><p>1.引用打包后的文件：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Checkbox </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;checkbox.cjs.min.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或 import Checkbox from &#39;checkbox.esm.min.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Checkbox)</span></span></code></pre></div><p>2.引用未打包的源码</p><p>可以先进入到插件目录执行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span></code></pre></div><p>然后进入到你的项目根目录执行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> simple-mind-map-plugin-checkbox</span></span></code></pre></div><p>然后就可以直接导入进行使用：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Checkbox </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map-plugin-checkbox&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Checkbox, opt)</span></span></code></pre></div><p>注册完且实例化<code>MindMap</code>后可通过<code>mindMap.checkbox</code>获取到该实例。</p><p>注册插件时支持传入一些配置项<code>opt</code>：</p><table tabindex="0"><thead><tr><th>字段名称</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>width</td><td>Number</td><td>20</td><td>待办图标的大小</td></tr><tr><td>height</td><td>Number</td><td>20</td><td>待办图标的大小</td></tr><tr><td>checkedIcon</td><td>String</td><td></td><td>待办已完成的图标，svg字符串，不指定会使用默认的图标，需要注意去除svg字符串中的fill属性，否则颜色可能不生效</td></tr><tr><td>unCheckedIcon</td><td>String</td><td></td><td>待办未完成的图标，svg字符串</td></tr><tr><td>colorIsFollowNode</td><td>Boolean</td><td>true</td><td>图标颜色是否跟随节点文本的颜色</td></tr><tr><td>color</td><td>String</td><td>#3f9cfc</td><td>如果colorIsFollowNode设置为false时会使用该颜色</td></tr></tbody></table><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><p>注册了本插件后会在思维导图实例上新增<code>SET_CHECKBOX</code>命令，给节点设置编号使用该命令：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SET_CHECKBOX&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, appointNodes, checkboxData)</span></span></code></pre></div><p>该命令可以传递两个参数：</p><ul><li><p><code>appointNodes</code>：给指定的节点实例设置待办数据，可以传单个节点实例，也可以传递一个节点实例数组，如果传空数组，则会给当前激活的节点添加待办；</p></li><li><p><code>checkboxData</code>：要设置的待办数据，如果传<code>null</code>，那么代表删除待办，否则请传递一个对象，对象的详细字段如下：</p></li></ul><table tabindex="0"><thead><tr><th>字段名称</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>done</td><td>Boolean</td><td></td><td>待办是否已完成</td></tr></tbody></table><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SET_CHECKBOX&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [], {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   done: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>设置编号后数据会以<code>checkbox</code>为名称保存到节点的<code>data</code>数据中。</p>`,30),l=[d];function o(k,c,r,g,E,b){return p(),e("div",null,l)}const C=t(h,[["render",o]]);export{F as __pageData,C as default};
