import{_ as i,o as s,c as a,a5 as e}from"./chunks/framework.D1Ej91Qw.js";const g=JSON.parse('{"title":"MiniMap插件","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/miniMap.md","filePath":"plugins/miniMap.md"}'),n={name:"plugins/miniMap.md"},p=e(`<h1 id="minimap插件" tabindex="-1">MiniMap插件 <a class="header-anchor" href="#minimap插件" aria-label="Permalink to &quot;MiniMap插件&quot;">​</a></h1><blockquote><p>v0.2.11+</p></blockquote><p>用于帮助快速开发小地图功能，小地图由两部分组成，一个是当前的画布内容，一个是视口框，当缩放、移动、元素过多时画布上可能只显示了思维导图的部分内容，可以通过视口框来查看当前视口所在位置，以及可以通过在小地图上拖动来快速定位。</p><h2 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MiniMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map/src/plugins/MiniMap.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// import MiniMap from &#39;simple-mind-map/src/MiniMap.js&#39; v0.6.0以下版本使用该路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(MiniMap)</span></span></code></pre></div><p>注册完且实例化<code>MindMap</code>后可通过<code>mindMap.miniMap</code>获取到该实例。</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="calculationminimap-boxwidth-boxheight" tabindex="-1">calculationMiniMap(boxWidth, boxHeight) <a class="header-anchor" href="#calculationminimap-boxwidth-boxheight" aria-label="Permalink to &quot;calculationMiniMap(boxWidth, boxHeight)&quot;">​</a></h3><p>计算小地图的渲染数据，该函数内会调用<code>getMiniMap()</code>方法，所以一般使用该函数即可。</p><p><code>boxWidth</code>：小地图容器的宽度</p><p><code>boxHeight</code>：小地图容器的高度</p><p>函数返回内容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      getImgUrl,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v0.8.0+，一个异步函数，你可以调用该函数，传递一个回调函数，回调函数可以接收一个参数，代表图片类型的小地图，你可以通过img标签进行渲染</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      svgHTML, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 小地图html，推荐使用getImgUrl方式获取图片类型的小地图，减少页面DOM数量，优化性能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      viewBoxStyle, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 视图框的位置信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      miniMapBoxScale, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 视图框的缩放值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      miniMapBoxLeft, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 视图框的left值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      miniMapBoxTop, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 视图框的top值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>小地图思路：</p><p>1.准备一个容器元素<code>container</code>，定位不为<code>static</code></p><p>如果使用的是富文本编辑模式，那么最好给<code>container</code>内部的元素去除一下默认样式，否则可能会出现节点内文本偏移的问题：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>2.在<code>container</code>内创建一个小地图容器元素<code>miniMapContainer</code>，绝对定位</p><p>3.在<code>container</code>内创建一个视口框元素<code>viewBoxContainer</code>，绝对定位，设置边框样式，过渡属性（可选）</p><p>4.监听<code>data_change</code>和<code>view_data_change</code>事件，在该事件内调用<code>calculationMiniMap</code>方法获取计算数据，然后将<code>svgHTML</code>渲染到<code>miniMapContainer</code>元素内，并且设置<code>miniMapContainer</code>元素的样式：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`scale(\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">miniMapBoxScale</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">})\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: miniMapBoxLeft </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: miniMapBoxTop </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><p>5.将<code>viewBoxStyle</code>对象设置为<code>viewBoxContainer</code>元素的样式</p><p>到这一步，当画布上的思维导图变化了，小地图也会实时更新，并且视口框元素会实时反映视口在思维导图图形上的位置</p><p>6.监听<code>container</code>元素的<code>mousedown</code>、<code>mousemove</code>事件，并且监听<code>window</code>的<code>mouseup</code>事件（如果将<code>mouseup</code>绑定到<code>container</code>元素上，那么鼠标移出<code>container</code>元素整个拖拽行为无法停止），分别调用下面即将介绍的三个方法即可实现鼠标拖动时画布上的思维导图也随之拖动的效果</p><p>7.在v0.10.2+版本，支持拖拽小地图内的视口框来实现同步拖拽画布，实现该特性可以监听<code>viewBoxContainer</code>元素的<code>mousedown</code>（需要阻止冒泡，否则会触发<code>container</code>元素的<code>mousedown</code>事件）、<code>mousemove</code>事件，分别调用小地图插件实例的<code>onViewBoxMousedown</code>和<code>onViewBoxMousemove</code>方法，同时需要监听mini_map_view_box_position_change事件来实时更新viewBoxContainer元素。</p><p>详细教程请参考<a href="./../course/course14.html">如何渲染一个小地图</a>。</p><h3 id="onmousedown-e" tabindex="-1">onMousedown(e) <a class="header-anchor" href="#onmousedown-e" aria-label="Permalink to &quot;onMousedown(e)&quot;">​</a></h3><p>小地图鼠标按下事件执行该函数。</p><p><code>e</code>：事件对象</p><h3 id="onmousemove-e-sensitivitynum-5" tabindex="-1">onMousemove(e, sensitivityNum = 5) <a class="header-anchor" href="#onmousemove-e-sensitivitynum-5" aria-label="Permalink to &quot;onMousemove(e, sensitivityNum = 5)&quot;">​</a></h3><p>小地图鼠标移动事件执行该函数。</p><p><code>e</code>：事件对象</p><p><code>sensitivityNum</code>：拖动灵敏度，灵敏度越大，在小地图上拖动相同距离时实际上的画布拖动距离就越大</p><h3 id="onmouseup" tabindex="-1">onMouseup() <a class="header-anchor" href="#onmouseup" aria-label="Permalink to &quot;onMouseup()&quot;">​</a></h3><p>小地图鼠标松开事件执行该函数。</p><h3 id="onviewboxmousedown-e" tabindex="-1">onViewBoxMousedown(e) <a class="header-anchor" href="#onviewboxmousedown-e" aria-label="Permalink to &quot;onViewBoxMousedown(e)&quot;">​</a></h3><blockquote><p>v0.10.2+</p></blockquote><p>视口框元素鼠标按下事件调用该方法。</p><h3 id="onviewboxmousemove-e" tabindex="-1">onViewBoxMousemove(e) <a class="header-anchor" href="#onviewboxmousemove-e" aria-label="Permalink to &quot;onViewBoxMousemove(e)&quot;">​</a></h3><blockquote><p>v0.10.2+</p></blockquote><p>视口框元素鼠标移动事件调用该方法。</p>`,41),o=[p];function t(h,l,d,k,c,r){return s(),a("div",{"data-pagefind-body":!0},o)}const m=i(n,[["render",t]]);export{g as __pageData,m as default};
