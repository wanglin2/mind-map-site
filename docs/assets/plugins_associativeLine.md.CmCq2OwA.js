import{_ as a,o as e,c as i,a5 as s}from"./chunks/framework.D1Ej91Qw.js";const u=JSON.parse('{"title":"AssociativeLine 插件","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/associativeLine.md","filePath":"plugins/associativeLine.md"}'),n={name:"plugins/associativeLine.md"},t=s(`<h1 id="associativeline-插件" tabindex="-1">AssociativeLine 插件 <a class="header-anchor" href="#associativeline-插件" aria-label="Permalink to &quot;AssociativeLine 插件&quot;">​</a></h1><blockquote><p>v0.4.5+</p></blockquote><blockquote><p>调整关联线控制点的功能从v0.4.6+开始支持</p></blockquote><blockquote><p>关联性支持文本编辑从v0.5.11+开始支持</p></blockquote><p>该插件用于支持添加关联线。</p><p>配置请参考<a href="./../api/constructor/constructor-options.html#_6-associativeline插件">实例化选项</a>。</p><h2 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AssociativeLine </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map/src/plugins/AssociativeLine.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// import AssociativeLine from &#39;simple-mind-map/src/AssociativeLine.js&#39; v0.6.0以下版本使用该路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(AssociativeLine)</span></span></code></pre></div><p>注册完且实例化<code>MindMap</code>后可通过<code>mindMap.associativeLine</code>获取到该实例。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>支持修改关联线的粗细和颜色，分为默认状态和激活状态。配置如下：</p><ul><li><p><code>associativeLineWidth</code>：关联线默认状态的粗细，默认值为<code>2</code></p></li><li><p><code>associativeLineColor</code>：关联线默认状态的颜色，默认值为<code>rgb(51, 51, 51)</code></p></li><li><p><code>associativeLineActiveWidth</code>：关联线激活状态的粗细，默认值为<code>8</code></p></li><li><p><code>associativeLineActiveColor</code>：关联线激活状态的颜色，默认值为<code>rgba(2, 167, 240, 1)</code></p></li></ul><p>配置以主题的方式提供，所以如果想要修改这四个属性，可以通过<code>mindMap.setThemeConfig(config)</code>方法进行修改。</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="mindmap-associativeline-linelist" tabindex="-1">mindMap.associativeLine.lineList <a class="header-anchor" href="#mindmap-associativeline-linelist" aria-label="Permalink to &quot;mindMap.associativeLine.lineList&quot;">​</a></h3><p>当前所有连接线数据，数组类型，数组的每一项也是一个数组：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 连接线节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clickPath, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 不可见的点击线节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    node, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 起始节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    toNode </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 目标节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="mindmap-associativeline-activeline" tabindex="-1">mindMap.associativeLine.activeLine <a class="header-anchor" href="#mindmap-associativeline-activeline" aria-label="Permalink to &quot;mindMap.associativeLine.activeLine&quot;">​</a></h3><p>当前激活的连接线，数组类型，同<code>lineList</code>数组的每一项的结构。</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="cancelcreateline" tabindex="-1">cancelCreateLine() <a class="header-anchor" href="#cancelcreateline" aria-label="Permalink to &quot;cancelCreateLine()&quot;">​</a></h3><blockquote><p>v0.10.5+</p></blockquote><p>中途取消创建关联线。</p><h3 id="renderalllines" tabindex="-1">renderAllLines() <a class="header-anchor" href="#renderalllines" aria-label="Permalink to &quot;renderAllLines()&quot;">​</a></h3><p>重新渲染所有关联线。</p><h3 id="removealllines" tabindex="-1">removeAllLines() <a class="header-anchor" href="#removealllines" aria-label="Permalink to &quot;removeAllLines()&quot;">​</a></h3><p>移除所有关联线。</p><h3 id="createlinefromactivenode" tabindex="-1">createLineFromActiveNode() <a class="header-anchor" href="#createlinefromactivenode" aria-label="Permalink to &quot;createLineFromActiveNode()&quot;">​</a></h3><p>从当前激活节点开始创建关联线，如果有多个激活节点，默认为第一个节点。</p><p>调用该方法后，会从第一个激活节点到当前鼠标实时位置渲染一条关联线，当点击某个目标节点后则代表创建完成，会在第一个激活节点和点击节点之间渲染一条关联线。</p><h3 id="createline-fromnode" tabindex="-1">createLine(fromNode) <a class="header-anchor" href="#createline-fromnode" aria-label="Permalink to &quot;createLine(fromNode)&quot;">​</a></h3><p>从指定节点开始创建关联线。</p><p>调用该方法后，会从指定节点到当前鼠标实时位置渲染一条关联线，当点击某个目标节点后则代表创建完成，会在指定节点和点击节点之间渲染一条关联线。</p><h3 id="addline-fromnode-tonode" tabindex="-1">addLine(fromNode, toNode) <a class="header-anchor" href="#addline-fromnode-tonode" aria-label="Permalink to &quot;addLine(fromNode, toNode)&quot;">​</a></h3><p>直接添加一条关联线。</p><p>调用该方法，会直接创建一条从<code>fromNode</code>到<code>toNode</code>节点的关联线。</p><h3 id="removeline" tabindex="-1">removeLine() <a class="header-anchor" href="#removeline" aria-label="Permalink to &quot;removeLine()&quot;">​</a></h3><p>删除当前激活的关联线。点击某条关联线则视为激活。</p><h3 id="clearactiveline" tabindex="-1">clearActiveLine() <a class="header-anchor" href="#clearactiveline" aria-label="Permalink to &quot;clearActiveLine()&quot;">​</a></h3><p>清除当前激活的关联线的激活状态。</p><h3 id="front" tabindex="-1">front() <a class="header-anchor" href="#front" aria-label="Permalink to &quot;front()&quot;">​</a></h3><blockquote><p>v0.8.0+</p></blockquote><p>关联线顶层显示。</p><h3 id="back" tabindex="-1">back() <a class="header-anchor" href="#back" aria-label="Permalink to &quot;back()&quot;">​</a></h3><blockquote><p>v0.8.0+</p></blockquote><p>关联线回到原有层级。</p>`,46),o=[t];function l(r,c,d,p,h,k){return e(),i("div",{"data-pagefind-body":!0},o)}const v=a(n,[["render",l]]);export{u as __pageData,v as default};
