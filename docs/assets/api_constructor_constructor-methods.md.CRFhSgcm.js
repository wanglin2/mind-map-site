import{_ as t,o as e,c as d,a5 as a}from"./chunks/framework.D1Ej91Qw.js";const m=JSON.parse('{"title":"构造函数","description":"","frontmatter":{},"headers":[],"relativePath":"api/constructor/constructor-methods.md","filePath":"api/constructor/constructor-methods.md"}'),o={name:"api/constructor/constructor-methods.md"},i=a(`<h1 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h1><h2 id="静态方法" tabindex="-1">静态方法 <a class="header-anchor" href="#静态方法" aria-label="Permalink to &quot;静态方法&quot;">​</a></h2><h3 id="definetheme-name-config" tabindex="-1">defineTheme(name, config) <a class="header-anchor" href="#definetheme-name-config" aria-label="Permalink to &quot;defineTheme(name, config)&quot;">​</a></h3><blockquote><p>v0.2.23+</p></blockquote><p>定义新主题。</p><p><code>name</code>：新主题名称</p><p><code>config</code>：主题数据</p><p><code>simple-mind-map</code>内置了众多主题，另外你也可以注册新主题，建议在实例化之前进行注册，这样在实例化时可以直接使用新注册的主题，使用示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MindMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注册新主题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;主题名称&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1.实例化时使用新注册的主题</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mindMap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MindMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    theme: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;主题名称&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2.动态切换新主题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;主题名称&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>主题的所有配置可以参考<a href="https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/default.js" target="_blank" rel="noreferrer">默认主题</a>。<code>defineTheme</code>方法会把你传入的配置和默认配置做合并。大部分主题其实需要自定义的部分不是很多，一个典型的自定义主题配置可以参考<a href="https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/blueSky.js" target="_blank" rel="noreferrer">blueSky</a>。</p><h3 id="useplugin-plugin-opt" tabindex="-1">usePlugin(plugin, opt = {}) <a class="header-anchor" href="#useplugin-plugin-opt" aria-label="Permalink to &quot;usePlugin(plugin, opt = {})&quot;">​</a></h3><blockquote><p>v0.3.0+</p></blockquote><ul><li><code>opt</code>：v0.4.0+，插件参数。如果某个插件支持自定义选项的话可以通过这个参数传入。</li></ul><p>注册插件，如果需要使用非核心的一些功能，比如小地图、水印等，可以通过该方法进行注册。可链式调用。</p><p>注意：插件需要在实例化<code>MindMap</code>前注册。</p><h3 id="hasplugin-plugin" tabindex="-1">hasPlugin(plugin) <a class="header-anchor" href="#hasplugin-plugin" aria-label="Permalink to &quot;hasPlugin(plugin)&quot;">​</a></h3><blockquote><p>v0.4.0+</p></blockquote><p>获取是否注册了某个插件，返回的是插件在注册插件列表里的索引，为<code>-1</code>则代表插件没有注册。</p><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="getelrectinfo" tabindex="-1">getElRectInfo() <a class="header-anchor" href="#getelrectinfo" aria-label="Permalink to &quot;getElRectInfo()&quot;">​</a></h3><p>更新容器元素的位置和大小信息。当容器元素在页面中的位置发生了改变之后务必调用该方法更新信息。如果容器元素大小也发生了改变，那么请调用<code>resize</code>方法。</p><h3 id="updatedata-data" tabindex="-1">updateData(data) <a class="header-anchor" href="#updatedata-data" aria-label="Permalink to &quot;updateData(data)&quot;">​</a></h3><blockquote><p>v0.9.9+</p></blockquote><p>更新画布数据，如果新的数据是在当前画布节点数据基础上增删改查后形成的，那么可以使用该方法来更新画布数据。性能会更好，不会重新创建所有节点，而是会尽可能的复用。</p><h3 id="cleardraw" tabindex="-1">clearDraw() <a class="header-anchor" href="#cleardraw" aria-label="Permalink to &quot;clearDraw()&quot;">​</a></h3><blockquote><p>v0.8.0+</p></blockquote><p>清空<code>lineDraw</code>、<code>associativeLineDraw</code>、<code>nodeDraw</code>、<code>otherDraw</code>容器。</p><h3 id="destroy" tabindex="-1">destroy() <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy()&quot;">​</a></h3><blockquote><p>v0.6.0+</p></blockquote><p>销毁思维导图。会移除注册的插件、移除监听的事件、删除画布的所有节点。</p><h3 id="getsvgdata-paddingx-0-paddingy-0-ignorewatermark-false-addcontenttoheader-addcontenttofooter-node" tabindex="-1">getSvgData({ paddingX = 0, paddingY = 0, ignoreWatermark = false, addContentToHeader, addContentToFooter, node }) <a class="header-anchor" href="#getsvgdata-paddingx-0-paddingy-0-ignorewatermark-false-addcontenttoheader-addcontenttofooter-node" aria-label="Permalink to &quot;getSvgData({ paddingX = 0, paddingY = 0, ignoreWatermark = false, addContentToHeader, addContentToFooter, node })&quot;">​</a></h3><blockquote><p>v0.3.0+</p></blockquote><p><code>paddingX</code>：水平内边距</p><p><code>paddingY</code>：垂直内边距</p><p><code>ignoreWatermark</code>：v0.8.0+，不要绘制水印，如果不需要绘制水印的场景可以传<code>true</code>，因为绘制水印非常慢</p><p><code>addContentToHeader</code>：v0.9.9+，Function，可以返回要追加到头部的自定义内容，详细介绍见【实例化选项】中的该配置</p><p><code>addContentToFooter</code>：v0.9.9+，Function，可以返回要追加到尾部的自定义内容，详细介绍见【实例化选项】中的该配置</p><p><code>node</code>: v0.9.11+, 节点实例，如果传了，那么仅导出该节点的内容</p><p>获取<code>svg</code>数据，返回一个对象，详细结构如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  svg, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Element，思维导图图形的整体svg元素，包括：svg（画布容器）、g（实际的思维导图组）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  svgHTML, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// String，svg字符串，即html字符串，可以直接渲染到你准备的小地图容器内</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  rect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Object，思维导图图形未缩放时的位置尺寸等信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  origWidth, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Number，画布宽度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  origHeight, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Number，画布高度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scaleX, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Number，思维导图图形的水平缩放值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scaleY, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Number，思维导图图形的垂直缩放值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  clipData</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v0.9.11+，如果传了node，即导出指定节点的内容，那么会返回该字段，代表从完整的图片中裁剪出该节点区域的位置坐标数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="render-callback" tabindex="-1">render(callback) <a class="header-anchor" href="#render-callback" aria-label="Permalink to &quot;render(callback)&quot;">​</a></h3><ul><li><code>callback</code>：<code>v0.3.2+</code>，<code>Function</code>，当重新渲染完成时调用</li></ul><p>触发整体渲染，会进行节点复用，性能较<code>reRender</code>会更好一点，如果只是节点位置变化了可以调用该方法进行渲染</p><h3 id="rerender-callback" tabindex="-1">reRender(callback) <a class="header-anchor" href="#rerender-callback" aria-label="Permalink to &quot;reRender(callback)&quot;">​</a></h3><ul><li><code>callback</code>：<code>v0.3.2+</code>，<code>Function</code>，当重新渲染完成时调用</li></ul><p>整体重新渲染，会清空画布，节点也会重新创建，性能不好，慎重使用</p><h3 id="resize" tabindex="-1">resize() <a class="header-anchor" href="#resize" aria-label="Permalink to &quot;resize()&quot;">​</a></h3><p>容器尺寸变化后，需要调用该方法进行适应</p><h3 id="setmode-mode" tabindex="-1">setMode(mode) <a class="header-anchor" href="#setmode-mode" aria-label="Permalink to &quot;setMode(mode)&quot;">​</a></h3><blockquote><p>v0.1.7+</p></blockquote><p>切换模式为只读或编辑。</p><p><code>mode</code>：readonly、edit</p><h3 id="on-event-fn" tabindex="-1">on(event, fn) <a class="header-anchor" href="#on-event-fn" aria-label="Permalink to &quot;on(event, fn)&quot;">​</a></h3><p>监听事件，事件列表：</p><table tabindex="0"><thead><tr><th>事件名称</th><th>描述</th><th>回调参数</th></tr></thead><tbody><tr><td>data_change</td><td>渲染树数据变化，可以监听该方法获取最新数据</td><td>data（当前渲染树数据）</td></tr><tr><td>view_data_change（v0.1.1+）</td><td>视图变化数据，比如拖动或缩放时会触发</td><td>data（当前视图状态数据）</td></tr><tr><td>back_forward</td><td>前进或回退</td><td>activeHistoryIndex（当前在历史数据数组里的索引）、length（当前历史数据数组的长度）</td></tr><tr><td>draw_click</td><td><em>画布的单击事件</em></td><td>e（事件对象）</td></tr><tr><td>svg_mousedown</td><td>svg画布的鼠标按下事件</td><td>e（事件对象）</td></tr><tr><td>mousedown</td><td>el元素的鼠标按下事件</td><td>e（事件对象）、this（Event事件类实例）</td></tr><tr><td>mousemove</td><td>el元素的鼠标移动事件</td><td>e（事件对象）、this（Event事件类实例）</td></tr><tr><td>drag</td><td>如果是按住左键拖动的话会触发拖动事件</td><td>e（事件对象）、this（Event事件类实例）</td></tr><tr><td>mouseup</td><td>el元素的鼠标松开事件</td><td>e（事件对象）、this（Event事件类实例）</td></tr><tr><td>mousewheel</td><td>鼠标滚动事件</td><td>e（事件对象）、dir（向上up还是向下down滚动。v0.9.2+已改为dirs，数组类型，即支持同时保存多个方向）、this（Event事件类实例）、isTouchPad（v0.6.1+，是否是触控板触发的事件）</td></tr><tr><td>contextmenu</td><td>svg画布的鼠标右键菜单事件</td><td>e（事件对象）</td></tr><tr><td>node_click</td><td>节点的单击事件</td><td>this（节点实例）、e（事件对象）</td></tr><tr><td>node_mousedown</td><td>节点的鼠标按下事件</td><td>this（节点实例）、e（事件对象）</td></tr><tr><td>node_mouseup</td><td>节点的鼠标松开事件</td><td>this（节点实例）、e（事件对象）</td></tr><tr><td>node_dblclick</td><td>节点的双击事件</td><td>this（节点实例）、e（事件对象）</td></tr><tr><td>node_contextmenu</td><td>节点的右键菜单事件</td><td>e（事件对象）、this（节点实例）</td></tr><tr><td>node_mouseenter（v0.4.1+）</td><td>节点的鼠标移入事件</td><td>this（节点实例）、e（事件对象）</td></tr><tr><td>node_mouseleave（v0.4.1+）</td><td>节点的鼠标移出事件</td><td>this（节点实例）、e（事件对象）</td></tr><tr><td>before_node_active</td><td>节点激活前事件</td><td>this（节点实例）、activeNodeList（当前激活的所有节点列表）</td></tr><tr><td>node_active</td><td>节点激活事件</td><td>this（节点实例）、activeNodeList（当前激活的所有节点列表）</td></tr><tr><td>expand_btn_click</td><td>节点展开或收缩事件</td><td>this（节点实例）</td></tr><tr><td>before_show_text_edit</td><td>节点文本编辑框即将打开事件</td><td></td></tr><tr><td>hide_text_edit</td><td>节点文本编辑框关闭事件【关联线的文本编辑结束也会触发该事件，此时没有回调参数，所以需要做好防御性编程】</td><td>textEditNode（文本编辑框DOM节点）、activeNodeList（当前激活的所有节点列表）、node（v0.10.2+，当前文本编辑的节点实例）</td></tr><tr><td>scale</td><td>画布放大缩小事件</td><td>scale（缩放比例）</td></tr><tr><td>translate（v0.9.10+）</td><td>画布移动事件</td><td>x（水平位移）、y（垂直位移）</td></tr><tr><td>node_img_dblclick（v0.2.15+）</td><td>节点内图片的双击事件</td><td>this（节点实例）、e（事件对象）</td></tr><tr><td>node_img_mouseenter（v0.6.5+）</td><td>节点内图片的鼠标移入事件</td><td>this（节点实例）、imgNode（图片节点）、e（事件对象）</td></tr><tr><td>node_img_mouseleave（v0.6.5+）</td><td>节点内图片的鼠标移出事件</td><td>this（节点实例）、imgNode（图片节点）、e（事件对象）</td></tr><tr><td>node_img_mousemove（v0.6.5+）</td><td>节点内图片的鼠标移动事件</td><td>this（节点实例）、imgNode（图片节点）、e（事件对象）</td></tr><tr><td>node_tree_render_end（v0.2.16+）</td><td>节点树渲染完毕事件</td><td></td></tr><tr><td>node_tree_render_start（v0.10.0+）</td><td>节点树开始渲染事件</td><td></td></tr><tr><td>rich_text_selection_change（v0.4.0+）</td><td>当注册了<code>RichText</code>插件时可用。当节点编辑时，文本选区发生改变时触发</td><td>hasRange（是否存在选区）、rectInfo（选区的尺寸和位置信息）、formatInfo（选区的文本格式化信息）</td></tr><tr><td>transforming-dom-to-images（v0.4.0+）</td><td>当注册了<code>RichText</code>插件时可用。当<code>svg</code>中存在<code>DOM</code>节点时，导出为图片时会将<code>DOM</code>节点转换为图片，转换过程中会触发该事件，可用通过该事件给用户提示，告知目前转换到的节点</td><td>index（当前转换到的节点索引）、len（一共需要转换的节点数量）</td></tr><tr><td>node_dragging（v0.4.5+）</td><td>当某个节点被拖拽时触发</td><td>node（当前被拖拽的节点）</td></tr><tr><td>node_dragend（v0.4.5+）</td><td>节点被拖拽结束时触发</td><td>{ overlapNodeUid, prevNodeUid, nextNodeUid }（v0.6.12+，本次节点移动到的节点uid，比如本次移动到了节点A上，那么overlapNodeUid就是节点A的uid，如果移动到了B节点的前面，那么nextNodeUid就是节点B的uid，你可以通过mindMap.renderer.findNodeByUid(uid)方法来获取节点实例）</td></tr><tr><td>associative_line_click（v0.4.5+）</td><td>点击某条关联线时触发</td><td>path（连接线节点）、clickPath（不可见的点击线节点）、node（起始节点）、toNode（目标节点）</td></tr><tr><td>svg_mouseenter（v0.5.1+）</td><td>鼠标移入svg画布时触发</td><td>e（事件对象）</td></tr><tr><td>svg_mouseleave（v0.5.1+）</td><td>鼠标移出svg画布时触发</td><td>e（事件对象）</td></tr><tr><td>node_icon_click（v0.6.10+）</td><td>点击节点内的图标时触发</td><td>this（节点实例）、item（点击的图标名称）、e（事件对象）、node(图标节点，v0.9.9+)</td></tr><tr><td>node_icon_mouseenter（v0.9.9+）</td><td>鼠标移入节点内的图标时触发</td><td>this（节点实例）、item（点击的图标名称）、e（事件对象）、node(图标节点)</td></tr><tr><td>node_icon_mouseleave（v0.9.9+）</td><td>鼠标移出节点内的图标时触发</td><td>this（节点实例）、item（点击的图标名称）、e（事件对象）、node(图标节点)</td></tr><tr><td>view_theme_change（v0.6.12+）</td><td>调用了setTheme方法设置主题后触发</td><td>theme（设置的新主题名称）</td></tr><tr><td>set_data（v0.7.3+）</td><td>调用了setData方法动态设置思维导图数据时触发</td><td>data（新的思维导图数据）</td></tr><tr><td>resize（v0.8.0+）</td><td>容器尺寸改变后触发，实际上是当思维导图实例的<code>resize</code>方法被调用后触发</td><td></td></tr><tr><td>beforeDestroy（v0.9.0+）</td><td>思维导图销毁前触发，即调用了destroy方法触发</td><td></td></tr><tr><td>body_mousedown（v0.9.2+）</td><td>document.body的鼠标按下事件</td><td>e（事件对象）</td></tr><tr><td>body_click</td><td>document.body的点击事件</td><td>e（事件对象）</td></tr><tr><td>data_change_detail（v0.9.3+）</td><td>渲染树数据变化的明细，会返回一个数组，每一项代表一个更新点，每一项都是一个对象，存在一个<code>type</code>属性，代表明细的类型，包含<code>create</code>（创建节点）、<code>update</code>（更新节点）、<code>delete</code>（删除节点），存在一个<code>data</code>属性，代表当前更新的节点数据，如果是<code>update</code>类型，还会存在一个<code>oldData</code>属性，保存了更新前该节点的数据</td><td>arr（明细数据）</td></tr><tr><td>layout_change（v0.9.4+）</td><td>修改结构时触发，即调用了mindMap.setLayout()方法时触发</td><td>layout（新的结构）</td></tr><tr><td>node_cooperate_avatar_click（v0.9.9+）</td><td>协同编辑时，鼠标点击人员头像时触发</td><td>userInfo(人员信息)、 this(当前节点实例)、 node(头像节点)、 e(事件对象)</td></tr><tr><td>node_cooperate_avatar_mouseenter（v0.9.9+）</td><td>协同编辑时，鼠标移入人员头像时触发</td><td>userInfo(人员信息)、 this(当前节点实例)、 node(头像节点)、 e(事件对象)</td></tr><tr><td>node_cooperate_avatar_mouseleave（v0.9.9+）</td><td>协同编辑时，鼠标移除人员头像时触发</td><td>userInfo(人员信息)、 this(当前节点实例)、 node(头像节点)、 e(事件对象)</td></tr><tr><td>exit_demonstrate（v0.9.11+）</td><td>退出演示模式时触发</td><td></td></tr><tr><td>demonstrate_jump（v0.9.11+）</td><td>演示模式中，切换步骤时触发</td><td>currentStepIndex（当前播放到的步骤索引，从0开始计数）、stepLength（总的播放步骤数量）</td></tr><tr><td>node_tag_click（v0.9.12+）</td><td>节点标签的点击事件</td><td>this(当前节点实例)、item（点击的标签内容）、index（v0.10.3+，该标签在标签列表里的索引）、tagNode（v0.10.3+，标签节点，@svgdotjs/svg.js库的G实例，可以用于获取标签位置和大小信息）</td></tr><tr><td>node_layout_end（v0.10.1+）</td><td>单个节点内容布局完成的事件</td><td>this(当前节点实例)</td></tr><tr><td>node_attachmentClick（v0.9.10+）</td><td>节点附件图标的点击事件</td><td>this(当前节点实例)、e（事件对象）、node（图标节点）</td></tr><tr><td>node_attachmentContextmenu（v0.9.10+）</td><td>节点附件图标的右键点击事件</td><td>this(当前节点实例)、e（事件对象）、node（图标节点）</td></tr><tr><td>before_update_config（v0.10.4+）</td><td>更新配置前触发，即当调用了<code>mindMap.updateConfig</code>方法更新配置时触发</td><td>opt（未更新前的配置对象，引用对象，而非拷贝，所以当after_update_config事件触发后，该对象也会同步变化，所以需要缓存你需要的某个配置字段）</td></tr><tr><td>after_update_config（v0.10.4+）</td><td>更新配置后触发</td><td>opt（更新后的配置对象）</td></tr><tr><td>node_note_click（v0.10.6+）</td><td>节点备注图标的点击事件</td><td>this(当前节点实例)、e（事件对象）、node（图标节点）</td></tr></tbody></table><h3 id="emit-event-args" tabindex="-1">emit(event, ...args) <a class="header-anchor" href="#emit-event-args" aria-label="Permalink to &quot;emit(event, ...args)&quot;">​</a></h3><p>触发事件，可以是上面表格里的事件，也可以是自定义事件</p><h3 id="off-event-fn" tabindex="-1">off(event, fn) <a class="header-anchor" href="#off-event-fn" aria-label="Permalink to &quot;off(event, fn)&quot;">​</a></h3><p>解绑事件</p><h3 id="settheme-theme-notrender-false" tabindex="-1">setTheme(theme, notRender = false) <a class="header-anchor" href="#settheme-theme-notrender-false" aria-label="Permalink to &quot;setTheme(theme, notRender = false)&quot;">​</a></h3><ul><li><code>notRender</code>：v0.8.0+，是否不要调用render方法更新画布。</li></ul><p>切换主题，可选主题见上面的选项表格</p><h3 id="gettheme" tabindex="-1">getTheme() <a class="header-anchor" href="#gettheme" aria-label="Permalink to &quot;getTheme()&quot;">​</a></h3><p>获取当前主题</p><h3 id="setthemeconfig-config-notrender-false" tabindex="-1">setThemeConfig(config, notRender = false) <a class="header-anchor" href="#setthemeconfig-config-notrender-false" aria-label="Permalink to &quot;setThemeConfig(config, notRender = false)&quot;">​</a></h3><ul><li><code>notRender</code>：v0.8.0+，是否不要调用render方法更新画布。</li></ul><p>设置主题配置，<code>config</code>同上面选项表格里的选项<code>themeConfig</code></p><h3 id="getcustomthemeconfig" tabindex="-1">getCustomThemeConfig() <a class="header-anchor" href="#getcustomthemeconfig" aria-label="Permalink to &quot;getCustomThemeConfig()&quot;">​</a></h3><p>获取自定义主题配置</p><h3 id="getthemeconfig-prop" tabindex="-1">getThemeConfig(prop) <a class="header-anchor" href="#getthemeconfig-prop" aria-label="Permalink to &quot;getThemeConfig(prop)&quot;">​</a></h3><p>获取某个主题配置属性值</p><h3 id="getconfig-prop" tabindex="-1">getConfig(<em>prop</em>) <a class="header-anchor" href="#getconfig-prop" aria-label="Permalink to &quot;getConfig(*prop*)&quot;">​</a></h3><blockquote><p>0.2.24+</p></blockquote><p><code>prop</code>：获取指定配置的值，不传则返回整个配置</p><p>获取配置，即<code>new MindMap(opt)</code>的<code>opt</code></p><h3 id="updateconfig-opt" tabindex="-1">updateConfig(<em>opt</em> = {}) <a class="header-anchor" href="#updateconfig-opt" aria-label="Permalink to &quot;updateConfig(*opt* = {})&quot;">​</a></h3><blockquote><p>0.2.24+</p></blockquote><p><code>opt</code>：要更新的配置</p><p>更新配置，即更新<code>new MindMap(opt)</code>的<code>opt</code>，可以只更新部分数据，比如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableFreeDrag: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开启节点自由拖拽</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>该方法只做更新配置的事情，没有其他副作用，比如触发画布重新渲染之类的</p><h3 id="getlayout" tabindex="-1">getLayout() <a class="header-anchor" href="#getlayout" aria-label="Permalink to &quot;getLayout()&quot;">​</a></h3><p>获取当前的布局结构</p><h3 id="setlayout-layout-notrender-false" tabindex="-1">setLayout(layout, notRender = false) <a class="header-anchor" href="#setlayout-layout-notrender-false" aria-label="Permalink to &quot;setLayout(layout, notRender = false)&quot;">​</a></h3><ul><li><code>notRender</code>：v0.8.0+，是否不要调用render方法更新画布。</li></ul><p>设置布局结构，可选值见上面选项表格的<code>layout</code>字段</p><h3 id="execcommand-name-args" tabindex="-1">execCommand(name, ...args) <a class="header-anchor" href="#execcommand-name-args" aria-label="Permalink to &quot;execCommand(name, ...args)&quot;">​</a></h3><p>执行命令，每执行一个命令就会在历史堆栈里添加一条记录用于回退或前进。所有命令如下：</p><table tabindex="0"><thead><tr><th>命令名称</th><th>描述</th><th>参数</th></tr></thead><tbody><tr><td>SELECT_ALL</td><td>全选</td><td></td></tr><tr><td>BACK</td><td>回退指定的步数</td><td>step（要回退的步数，默认为1）</td></tr><tr><td>FORWARD</td><td>前进指定的步数</td><td>step（要前进的步数，默认为1）</td></tr><tr><td>INSERT_NODE</td><td>插入同级节点，操作节点为当前激活的节点或指定节点，如果有多个激活节点，只会对第一个有效（v0.7.2+支持对多个激活节点同时插入兄弟节点）</td><td>openEdit（v0.4.6+，是否激活新插入的节点并进入编辑模式，默认为<code>true</code>）、 appointNodes（v0.4.7+，可选，指定要插入兄弟节点的节点，指定多个节点可以传一个数组）、 appointData（可选，指定新创建节点的数据，比如{text: &#39;xxx&#39;, ...}，详细结构可以参考<a href="https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js" target="_blank" rel="noreferrer">exampleData.js</a>）、 appointChildren（v0.6.14+，可选，指定新创建节点的子节点，数组类型）</td></tr><tr><td>INSERT_CHILD_NODE</td><td>插入子节点，操作节点为当前激活的节点或指定节点</td><td>openEdit（v0.4.6+，是否激活新插入的节点并进入编辑模式，默认为<code>true</code>）、 appointNodes（v0.4.7+，可选，指定节点，指定多个节点可以传一个数组）、 appointData（可选，指定新创建节点的数据，比如{text: &#39;xxx&#39;, ...}，详细结构可以参考<a href="https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js" target="_blank" rel="noreferrer">exampleData.js</a>）、 appointChildren（v0.6.14+，可选，指定新创建节点的子节点，数组类型）</td></tr><tr><td>UP_NODE</td><td>上移节点，操作节点为当前激活的节点，如果有多个激活节点，只会对第一个有效，对根节点或在列表里的第一个节点使用无效</td><td></td></tr><tr><td>DOWN_NODE</td><td>操作节点为当前激活的节点，如果有多个激活节点，只会对第一个有效，对根节点或在列表里的最后一个节点使用无效</td><td></td></tr><tr><td>REMOVE_NODE</td><td>删除节点，操作节点为当前激活的节点或指定节点</td><td>appointNodes（v0.4.7+，可选，指定节点，指定多个节点可以传一个数组）</td></tr><tr><td>PASTE_NODE</td><td>粘贴节点到节点，操作节点为当前激活的节点</td><td>data（要粘贴的节点数据，一般通过<code>renderer.copyNode()</code>方法和<code>renderer.cutNode()</code>方法获取）</td></tr><tr><td>CUT_NODE</td><td>剪切节点，操作节点为当前激活的节点，如果有多个激活节点，只会对第一个有效，对根节点使用无效</td><td>callback(回调函数，剪切的节点数据会通过调用该函数并通过参数返回)</td></tr><tr><td>SET_NODE_STYLE</td><td>修改节点单个样式</td><td>node（要设置样式的节点）、style（样式属性）、value（样式属性值）、isActive（v0.7.0+已废弃，布尔值，是否设置的是激活状态的样式）</td></tr><tr><td>SET_NODE_STYLEs（v0.6.12+）</td><td>修改节点多个样式</td><td>node（要设置样式的节点）、style（样式对象，key为样式属性，value为样式值）、isActive（v0.7.0+已废弃，布尔值，是否设置的是激活状态的样式）</td></tr><tr><td>SET_NODE_ACTIVE</td><td>设置节点是否激活（该命令仅更新节点数据中的激活字段和节点激活样式，如果你想实现和鼠标点击节点激活的效果，请直接使用节点实例的<code>active()</code>方法）</td><td>node（要设置的节点）、active（布尔值，是否激活）</td></tr><tr><td>CLEAR_ACTIVE_NODE</td><td>清除当前已激活节点的激活状态，操作节点为当前激活的节点</td><td></td></tr><tr><td>SET_NODE_EXPAND</td><td>设置节点是否展开</td><td>node（要设置的节点）、expand（布尔值，是否展开）</td></tr><tr><td>EXPAND_ALL</td><td>展开所有节点</td><td></td></tr><tr><td>UNEXPAND_ALL</td><td>收起所有节点</td><td>isSetRootNodeCenter（v0.9.11+，默认为true，收起所有节点后是否将根节点移至中心）</td></tr><tr><td>UNEXPAND_TO_LEVEL（v0.2.8+）</td><td>展开到指定层级</td><td>level（要展开到的层级，1、2、3...）</td></tr><tr><td>SET_NODE_DATA</td><td>更新节点数据，即更新节点数据对象里<code>data</code>对象的数据，注意这个命令不会触发视图的更新</td><td>node（要设置的节点）、data（对象，要更新的数据，如<code>{expand: true}</code>）</td></tr><tr><td>SET_NODE_TEXT</td><td>设置节点文本</td><td>node（要设置的节点）、text（要设置的文本字符串，换行可以使用<code>\\n</code>）、richText（v0.4.0+，如果要设置的是富文本字符，需要设为<code>true</code>）、resetRichText（v0.6.10+是否要复位富文本，默认为false，如果传true那么会重置富文本节点的样式）</td></tr><tr><td>SET_NODE_IMAGE</td><td>设置节点图片</td><td>node（要设置的节点）、imgData（对象，图片信息，结构为：<code>{url, title, width, height}</code>，图片的宽高必须要传）</td></tr><tr><td>SET_NODE_ICON</td><td>设置节点图标</td><td>node（要设置的节点）、icons（数组，预定义的图片名称组成的数组，可用图标可在<a href="https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/svg/icons.js" target="_blank" rel="noreferrer">icons.js</a>文件里的<code>nodeIconList</code>列表里获取到，图标名称为<code>type_name</code>，如<code>[&#39;priority_1&#39;]</code>）</td></tr><tr><td>SET_NODE_HYPERLINK</td><td>设置节点超链接</td><td>node（要设置的节点）、link（超链接地址）、title（超链接名称，可选）</td></tr><tr><td>SET_NODE_NOTE</td><td>设置节点备注</td><td>node（要设置的节点）、note（备注文字）</td></tr><tr><td>SET_NODE_ATTACHMENT（v0.9.10+）</td><td>设置节点附件</td><td>node（要设置的节点）、url（附件url）、name（附件名称，可选）</td></tr><tr><td>SET_NODE_TAG</td><td>设置节点标签</td><td>node（要设置的节点）、tag（v0.10.3以前的版本只支持字符串数组，即[&#39;标签&#39;]，v0.10.3+版本支持对象数组，即[{ text: &#39;标签&#39;, style: {} }]）</td></tr><tr><td>INSERT_AFTER（v0.1.5+）</td><td>将节点移动到另一个节点的后面</td><td>node（要移动的节点，（v0.7.2+支持传递节点数组实现同时移动多个节点））、 exist（目标节点）</td></tr><tr><td>INSERT_BEFORE（v0.1.5+）</td><td>将节点移动到另一个节点的前面，（v0.7.2+支持传递节点数组实现同时移动多个节点）</td><td>node（要移动的节点）、 exist（目标节点）</td></tr><tr><td>MOVE_NODE_TO（v0.1.5+）</td><td>移动节点作为另一个节点的子节点，（v0.7.2+支持传递节点数组实现同时移动多个节点）</td><td>node（要移动的节点）、 toNode（目标节点）</td></tr><tr><td>ADD_GENERALIZATION（v0.2.0+）</td><td>添加节点概要</td><td>data（概要的数据，对象格式，节点的数字段都支持，默认为{text: &#39;概要&#39;}）、openEdit（v0.9.11+，默认为true，是否默认进入文本编辑状态）</td></tr><tr><td>REMOVE_GENERALIZATION（v0.2.0+）</td><td>删除节点概要</td><td></td></tr><tr><td>SET_NODE_CUSTOM_POSITION（v0.2.0+）</td><td>设置节点自定义位置</td><td>node（要设置的节点）、 left（自定义的x坐标，默认为undefined）、 top（自定义的y坐标，默认为undefined）</td></tr><tr><td>RESET_LAYOUT（v0.2.0+）</td><td>一键整理布局</td><td></td></tr><tr><td>SET_NODE_SHAPE（v0.2.4+）</td><td>设置节点形状</td><td>node（要设置的节点）、shape（形状，全部形状：<a href="https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/core/render/node/Shape.js" target="_blank" rel="noreferrer">Shape.js</a>）</td></tr><tr><td>GO_TARGET_NODE（v0.6.7+）</td><td>定位到某个节点，如果该节点被收起，那么会自动展开到该节点</td><td>node（要定位到的节点实例或节点uid）、callback（v0.6.9+，定位完成后的回调函数，v0.9.8+接收一个参数，代表目标节点实例）</td></tr><tr><td>INSERT_MULTI_NODE（v0.7.2+）</td><td>给指定的节点同时插入多个同级节点，操作节点为当前激活的节点或指定节点</td><td>appointNodes（可选，指定节点，指定多个节点可以传一个数组）, nodeList（新插入节点的数据列表，数组类型）</td></tr><tr><td>INSERT_MULTI_CHILD_NODE（v0.7.2+）</td><td>给指定的节点同时插入多个子节点，操作节点为当前激活的节点或指定节点</td><td>appointNodes（可选，指定节点，指定多个节点可以传一个数组）, childList（新插入节点的数据列表，数组类型）</td></tr><tr><td>INSERT_FORMULA（v0.7.2+）</td><td>给节点插入数学公式，操作节点为当前激活的节点或指定节点</td><td>formula（要插入的数学公式，LaTeX 语法）, appointNodes（可选，指定要插入公式的节点，多个节点可以传数组，否则默认为当前激活的节点）</td></tr><tr><td>INSERT_PARENT_NODE（v0.8.0+）</td><td>给指定的节点插入父节点，操作节点为当前激活的节点或指定节点</td><td>openEdit（是否激活新插入的节点并进入编辑模式，默认为<code>true</code>）、 appointNodes（可选，指定要插入父节点的节点，指定多个节点可以传一个数组）、 appointData（可选，指定新创建节点的数据，比如{text: &#39;xxx&#39;, ...}，详细结构可以参考<a href="https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exampleData.js" target="_blank" rel="noreferrer">exampleData.js</a>）</td></tr><tr><td>REMOVE_CURRENT_NODE（v0.8.0+）</td><td>仅删除当前节点，操作节点为当前激活的节点或指定节点</td><td>appointNodes（可选，指定要删除的节点，指定多个节点可以传一个数组）</td></tr><tr><td>MOVE_UP_ONE_LEVEL（v0.9.6+）</td><td>将指定节点上移一个层级</td><td>node（可选，指定要上移层级的节点，不传则为当前激活节点中的第一个）</td></tr><tr><td>REMOVE_CUSTOM_STYLES（v0.9.7+）</td><td>一键去除某个节点的自定义样式</td><td>node（可选，指定要清除自定义样式的节点，不传则为当前激活节点中的第一个）</td></tr><tr><td>REMOVE_ALL_NODE_CUSTOM_STYLES（v0.9.7+）</td><td>一键去除多个节点或所有节点的自定义样式</td><td>appointNodes（可选，节点实例数组，指定要去除自定义样式的多个节点，如果不传则会去除当前画布所有节点的自定义样式）</td></tr></tbody></table><h3 id="setdata-data" tabindex="-1">setData(data) <a class="header-anchor" href="#setdata-data" aria-label="Permalink to &quot;setData(data)&quot;">​</a></h3><p>动态设置思维导图数据，纯节点数据</p><p><code>data</code>：思维导图结构数据。v0.9.9+支持传空对象或者null，画布会显示空白。</p><h3 id="setfulldata-data" tabindex="-1">setFullData(<em>data</em>) <a class="header-anchor" href="#setfulldata-data" aria-label="Permalink to &quot;setFullData(*data*)&quot;">​</a></h3><blockquote><p>v0.2.7+</p></blockquote><p>动态设置思维导图数据，包括节点数据、布局、主题、视图</p><p><code>data</code>：完整数据，结构可参考<a href="https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/example/exportFullData.json" target="_blank" rel="noreferrer">exportFullData</a></p><h3 id="getdata-withconfig" tabindex="-1">getData(withConfig) <a class="header-anchor" href="#getdata-withconfig" aria-label="Permalink to &quot;getData(withConfig)&quot;">​</a></h3><blockquote><p>v0.2.9+</p></blockquote><p>获取思维导图数据</p><p><code>withConfig</code>：<code>Boolean</code>，默认为<code>false</code>，即获取的数据只包括节点树，如果传<code>true</code>则会包含主题、布局、视图等数据</p><h3 id="export-type-isdownload-filename" tabindex="-1">export(type, isDownload, fileName) <a class="header-anchor" href="#export-type-isdownload-filename" aria-label="Permalink to &quot;export(type, isDownload, fileName)&quot;">​</a></h3><blockquote><p>需要先注册<code>Export</code>插件</p></blockquote><p>导出</p><p><code>type</code>：要导出的类型，可选值：png、svg、json、pdf（v0.2.1+）、smm（本质也是json）</p><p><code>isDownload</code>：是否需要直接触发下载，布尔值，默认为<code>false</code></p><p><code>fileName</code>：（v0.1.6+）导出文件的名称，默认为<code>思维导图</code></p><p>如果是导出为<code>png</code>，那么可以传递第四个参数：</p><p><code>transparent</code>：v0.5.7+, <code>Boolean</code>，默认为<code>false</code>，指定导出图片的背景是否是透明的</p><p>如果是导出为<code>svg</code>，那么可以传递第四个参数：</p><p><code>plusCssText</code>：附加的<code>css</code>样式，如果<code>svg</code>中存在<code>dom</code>节点，想要设置一些针对节点的样式可以通过这个参数传入</p><p>如果是导出为<code>json</code>或<code>smm</code>，那么可以传递第四个参数：</p><p><code>withConfig</code>：<code>Boolean</code>，默认为<code>true</code>，指定导出的数据中是否包含配置数据，否则只导出纯节点树数据</p><h3 id="topos-x-y" tabindex="-1">toPos(x, y) <a class="header-anchor" href="#topos-x-y" aria-label="Permalink to &quot;toPos(x, y)&quot;">​</a></h3><blockquote><p>v0.1.5+</p></blockquote><p>将浏览器可视窗口的坐标转换成相对于画布的坐标</p><h3 id="addplugin-plugin-opt" tabindex="-1">addPlugin(plugin, opt) <a class="header-anchor" href="#addplugin-plugin-opt" aria-label="Permalink to &quot;addPlugin(plugin, opt)&quot;">​</a></h3><blockquote><p>v0.4.0+</p></blockquote><p>注册插件，使用<code>MindMap.usePlugin</code>注册插件只能在实例化之前，实例化后注册的插件是不会生效的，所以如果想在实例化后注册插件可以使用实例的<code>addPlugin</code>方法。</p><h3 id="removeplugin-plugin" tabindex="-1">removePlugin(plugin) <a class="header-anchor" href="#removeplugin-plugin" aria-label="Permalink to &quot;removePlugin(plugin)&quot;">​</a></h3><blockquote><p>v0.4.0+</p></blockquote><p>移除注册的插件，无论是通过<code>usePlugin</code>还是<code>addPlugin</code>方法注册的插件都可以移除。</p>`,121),n=[i];function s(r,l,p,c,h,u){return e(),d("div",{"data-pagefind-body":!0},n)}const k=t(o,[["render",s]]);export{m as __pageData,k as default};
