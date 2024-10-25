import{_ as e,c as t,o,a4 as a}from"./chunks/framework.B358x4hV.js";const g=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"en/start/introduction.md","filePath":"en/start/introduction.md"}'),i={name:"en/start/introduction.md"},n=a('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p><code>simple-mind-map</code> 【Chinese name: 思绪 mind map】 is a simple and powerful web mind map library, not dependent on any specific framework. Can help you quickly develop mind mapping products.</p><blockquote><p>If you just want to use mind mapping, you can also use the demo of this project as a regular online mind mapping tool. Click on the 【Online Demo】 in the upper right corner to start using it.</p><p>Additionally, a client is provided for download, support <code>Windows</code>、<code>Mac</code> and <code>Linux</code>, <a href="./../client.html">Click here to learn more</a>。</p></blockquote><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>Pluggable architecture, in addition to core functions, other functions are provided as plugins, which can be used as needed to reduce packaging volume</li><li>Support logical structure chart(Left and Right Logical Structure Diagram), mind map, Organizational chart, directory organization chart, timeline (horizontal and vertical), fishbone chart and other structures</li><li>Built-in multiple themes, allowing for highly customizable styles, and supporting registration of new themes</li><li>Node content supports text (regular text, rich text), images, icons, hyperlinks, notes, labels, summaries, and math formulas</li><li>Nodes support drag and drop (drag and move, freely adjust), multiple node shapes, Support for expanding node content, and fully customize node content using DDM</li><li>Support canvas dragging and scaling</li><li>Supports two multi node selection methods: mouse button drag selection and Ctrl+left button selection</li><li>Supoorts to export as <code>json</code>、<code>png</code>、<code>svg</code>、<code>pdf</code>、<code>markdown</code>、<code>xmind</code>、<code>txt</code>, support import from <code>json</code>、<code>xmind</code>、<code>markdown</code></li><li>Support shortcut keys, forward and backward, correlation lines, search and replacement, small maps, watermarks, scrollbar, Hand drawn style, and rainbow lines</li><li>Provide rich configurations to meet various scenarios and usage habits</li><li>Support collaborative editing</li><li>Support demonstration mode</li></ul><p>The official provides the following plugins, which can be introduced as needed (a certain function may not be effective because you did not introduce the corresponding plugin). Please refer to the documentation for specific usage methods:</p><blockquote><p>RichText（Node Rich Text Plugin）、Select（Mouse Multiple Selection Node Plugin）、Drag（Node drag plugin）、AssociativeLine（Associate Line Plugin）、Export（Export plugin）、KeyboardNavigation（Keyboard navigation plugin）、MiniMap（Mini Map Plugin）、Watermark（Watermark plugin）、TouchEvent（Mobile touch event support plugin）、NodeImgAdjust（Drag and adjust node image size plugin）、Search（Search plugin）、Painter（Node Format Brush Plugin）、Scrollbar（Scroll bar plugin）、Formula（Mathematical Formula Plugin）、Cooperate（Collaborative editing plugin）、RainbowLines（Rainbow Line Plugin）、Demonstrate（Demonstration mode plugin）、OuterFrame（Outer frame plugin）、HandDrawnLikeStyle（Hand drawn style plugin）[charge]、Notation（Node marker plugin）[charge]、Numbers（Node Number Plugin）[charge]、Freemind（Freemind format import and export plugin）[charge]、Excel（Excel format import and export plugin）[charge]、Checkbox（To Do Plugin）[charge]</p></blockquote><p>Features that will not be implemented in this project:</p><blockquote><p>1.Free nodes, i.e. multiple root nodes;</p><p>2.Continue adding nodes after the summary node;</p><p>If you need the above features, this library may not meet your needs.</p></blockquote><h2 id="repository-catalog-introduction" tabindex="-1">Repository Catalog Introduction <a class="header-anchor" href="#repository-catalog-introduction" aria-label="Permalink to &quot;Repository Catalog Introduction&quot;">​</a></h2><p>1.<code>simple-mind-map</code></p><p>This is a mind map library that is framework-agnostic and can be used with frameworks such as Vue and React, or without a framework.</p><p>2.<code>web</code></p><p>This is an online mind map built using the <code>simple-mind-map</code> library and based on <code>Vue2.x</code> and <code>ElementUI</code>. Features include:</p><ul><li>Toolbar, which supports inserting and deleting nodes, and editing node images, icons, hyperlinks, notes, tags, and summaries</li><li>Sidebar, with panels for basic style settings, node style settings, outline, theme selection, and structure selection</li><li>Import and export functionality; data is saved in the browser&#39;s local storage by default, but it also supports creating, opening, and editing local files on the computer directly</li><li>Right-click menu, which supports operations such as expanding, collapsing, and organizing layout</li><li>Bottom bar, which supports node and word count statistics, switching between edit and read-only modes, zooming in and out, and switching to full screen, support mini map</li></ul><p>Provide document page service.</p><p>3.<code>dist</code></p><p>The folder containing the packaged resources for the <code>web</code> folder.</p><h2 id="special-note" tabindex="-1">Special Note <a class="header-anchor" href="#special-note" aria-label="Permalink to &quot;Special Note&quot;">​</a></h2><p>When applying this project to actual projects, please first experience in depth whether it can meet your needs.</p><p>This project may not have fully tested every function point, so there may be bugs. In addition, when the number of nodes is very large, there may be some performance issues. Because everyone can accept different levels of congestion, you can test the maximum number of nodes yourself. Generally speaking, within 500 nodes, it is more smooth, while over 1000 nodes have more noticeable lag.</p><p>In v0.10.4+version, a performance mode has been added to only render nodes within the visible area of the canvas, which can improve rendering speed under large data volumes. You can experience it by turning on the &#39;openPerformance&#39; instantiation option, and in the online demo, you can turn on the &#39;Basic Styles&#39; - &#39;Enable Performance Mode&#39; switch.</p><p>If you have suggestions or find bugs, you can submit <a href="https://github.com/wanglin2/mind-map/issues" target="_blank" rel="noreferrer">issues</a> here.</p><p>The built-in themes and icons in the project part come from:<a href="https://naotu.baidu.com/" target="_blank" rel="noreferrer">Baidu Mind Map</a>、<a href="https://www.zhixi.com/" target="_blank" rel="noreferrer">Zhixi Mind Map</a>。Respect the copyright, and do not use the theme and icons directly for commercial projects.</p><h2 id="why-not" tabindex="-1">Why not？ <a class="header-anchor" href="#why-not" aria-label="Permalink to &quot;Why not？&quot;">​</a></h2><p>1.<a href="https://www.zhixi.com/" target="_blank" rel="noreferrer">Zhixi</a></p><p>Zhixi is a free mind mapping product that supports multi end synchronization. The UI design is beautiful and the features are complete, but it is not open source, so it can only be used as a user and cannot be used in your project.</p><p>There are many other online mind mapping products similar to Zhixi, such as <a href="https://gitmind.cn/" target="_blank" rel="noreferrer">GitMind</a>、<a href="http://www.mindline.cn/" target="_blank" rel="noreferrer">MindLine</a>、<a href="https://www.mindmeister.com/zh" target="_blank" rel="noreferrer">MinMeister</a>、<a href="https://mubu.com/" target="_blank" rel="noreferrer">Mubu</a> and so on, There are many searches on search engines, but these products either require fees or are developed by small companies, and their stability and sustainability cannot be guaranteed. Of course, the most crucial thing is that they are not open-source.</p><p>2.<a href="https://github.com/fex-team/kityminder-core" target="_blank" rel="noreferrer">kityminder-core</a></p><p><code>kityminder-core</code> is an open source brain mapping tool developed by Baidu. It has powerful functions and good performance, but it is no longer maintained. Therefore, the code is relatively old, and the interface beauty is relatively ordinary. In addition, bugs can only be fixed by yourself, and the functions can only be developed by yourself. It has high requirements for front-end development capabilities.</p><p>3.<a href="https://github.com/hizzgdev/jsmind" target="_blank" rel="noreferrer">jsmind</a>、<a href="https://github.com/ssshooter/mind-elixir-core" target="_blank" rel="noreferrer">Mind-elixir</a>、<a href="https://github.com/ondras/my-mind" target="_blank" rel="noreferrer">my-mind</a>、<a href="https://github.com/awehook/blink-mind" target="_blank" rel="noreferrer">blink-mind</a>、<a href="https://github.com/luvsic3/remind" target="_blank" rel="noreferrer">remind</a>、<a href="https://github.com/hellowuxin/vue3-mindmap" target="_blank" rel="noreferrer">vue3-mindmap</a>、<a href="https://github.com/zyascend/ZMindMap" target="_blank" rel="noreferrer">ZMindMap</a>、<a href="https://github.com/RockyRen/mindmaptree" target="_blank" rel="noreferrer">mindmaptree</a>...</p><p>These open-source mind maps are also good, each with its own characteristics, but they also have certain drawbacks, such as stopping updates, average interface aesthetics, less functionality, relying on a certain framework, and so on.</p><p>In summary, in open-source mind maps, it is difficult to find a better choice than <code>simple-mind-map</code>. Of course, <code>simple-mind-map</code> is far from being the best, and it also has many shortcomings. However, <code>simple-mind-map</code> has always been in a fast iteration process, and we welcome you to join and improve it together.</p><h2 id="browser-compatibility" tabindex="-1">Browser Compatibility <a class="header-anchor" href="#browser-compatibility" aria-label="Permalink to &quot;Browser Compatibility&quot;">​</a></h2><p>We recommend using the latest version of the <code>Chrome</code> browser.</p><p>Limited testing situation:</p><p>Normal operation: <code>360</code> extreme speed browser（v13.5.2036.0）、<code>opera</code> browser（v71.0.3770.284）、<code>Firefox</code>（v98.0.2）.</p><p>Unsupported: <code>IE</code> browser.</p><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><p><a href="https://github.com/wanglin2/mind-map/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT</a>. You can use it for commercial purposes without retaining the copyright statement of &#39;mind-map&#39;. If you don&#39;t want to keep it, you can contact the author.</p>',40),r=[n];function s(d,l,c,p,u,h){return o(),t("div",null,r)}const f=e(i,[["render",s]]);export{g as __pageData,f as default};
