import{_ as e,o as t,c as a,a5 as o}from"./chunks/framework.D1Ej91Qw.js";const v=JSON.parse('{"title":"Render instance","description":"","frontmatter":{},"headers":[],"relativePath":"en/api/render.md","filePath":"en/api/render.md"}'),d={name:"en/api/render.md"},n=o('<h1 id="render-instance" tabindex="-1">Render instance <a class="header-anchor" href="#render-instance" aria-label="Permalink to &quot;Render instance&quot;">​</a></h1><p>The <code>render</code> instance is responsible for the entire rendering process and can be accessed through <code>mindMap.renderer</code>.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="activenodelist" tabindex="-1">activeNodeList <a class="header-anchor" href="#activenodelist" aria-label="Permalink to &quot;activeNodeList&quot;">​</a></h3><p>Gets the current list of active nodes.</p><h3 id="root" tabindex="-1">root <a class="header-anchor" href="#root" aria-label="Permalink to &quot;root&quot;">​</a></h3><p>Node tree, also known as the mind map node instance tree.</p><h3 id="rendertree" tabindex="-1">renderTree <a class="header-anchor" href="#rendertree" aria-label="Permalink to &quot;renderTree&quot;">​</a></h3><p>The rendering tree, also known as the data tree of the mind map.</p><h3 id="layout" tabindex="-1">layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;layout&quot;">​</a></h3><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="activemultinode-nodelist" tabindex="-1">activeMultiNode(nodeList = []) <a class="header-anchor" href="#activemultinode-nodelist" aria-label="Permalink to &quot;activeMultiNode(nodeList = [])&quot;">​</a></h3><blockquote><p>v0.10.6+</p></blockquote><ul><li><code>nodeList</code>：Node instance list</li></ul><p>Manually activate multiple nodes. To activate a single node, please directly call the &#39;active()&#39; method of the node instance.</p><h3 id="cancelactivemultinode-nodelist" tabindex="-1">cancelActiveMultiNode(nodeList = []) <a class="header-anchor" href="#cancelactivemultinode-nodelist" aria-label="Permalink to &quot;cancelActiveMultiNode(nodeList = [])&quot;">​</a></h3><blockquote><p>v0.10.6+</p></blockquote><ul><li><code>nodeList</code>：Node instance list</li></ul><p>Manually deactivate multiple nodes. To deactivate a single node, please directly call the &#39;deactivate()&#39; method of the node instance.</p><h3 id="highlightnode-node-range" tabindex="-1">highlightNode(node, range) <a class="header-anchor" href="#highlightnode-node-range" aria-label="Permalink to &quot;highlightNode(node, range)&quot;">​</a></h3><blockquote><p>v0.9.0+</p></blockquote><ul><li><p><code>node</code>：Target node instance to highlight</p></li><li><p><code>range</code>：Optional, Array, a range array, [0, 1]</p></li></ul><p>Highlight a node or child node. If the &#39;range&#39; parameter is not passed, the specified &#39;node&#39; node is directly highlighted. If the &#39;range&#39; passes a range of child nodes to be highlighted, the child nodes of that range will be highlighted.</p><p>The highlight effect is wrapped by a rectangular box, and the stroke and fill style of the rectangle can be configured through the &#39;highlightNodeBoxStyle&#39; instantiation option.</p><h3 id="closehighlightnode" tabindex="-1">closeHighlightNode() <a class="header-anchor" href="#closehighlightnode" aria-label="Permalink to &quot;closeHighlightNode()&quot;">​</a></h3><blockquote><p>v0.9.0+</p></blockquote><p>隐藏节点高亮框。</p><h3 id="setrootnodecenter" tabindex="-1">setRootNodeCenter() <a class="header-anchor" href="#setrootnodecenter" aria-label="Permalink to &quot;setRootNodeCenter()&quot;">​</a></h3><blockquote><p>v0.8.0+</p></blockquote><p>Return to the central theme, that is, set the root node to the center of the canvas.</p><h3 id="setdata-data" tabindex="-1">setData(data) <a class="header-anchor" href="#setdata-data" aria-label="Permalink to &quot;setData(data)&quot;">​</a></h3><blockquote><p>v0.7.3+</p></blockquote><p>Dynamically set mind map data.</p><h3 id="clearactive" tabindex="-1">clearActive() <a class="header-anchor" href="#clearactive" aria-label="Permalink to &quot;clearActive()&quot;">​</a></h3><blockquote><p>v0.8.0+ abandoned</p></blockquote><p>Clears the currently active node.</p><h3 id="clearallactive" tabindex="-1">clearAllActive() <a class="header-anchor" href="#clearallactive" aria-label="Permalink to &quot;clearAllActive()&quot;">​</a></h3><blockquote><p>v0.8.0+ abandoned</p></blockquote><p>Clears all currently active nodes and triggers the <code>node_active</code> event.</p><h3 id="clearactivenode" tabindex="-1">clearActiveNode() <a class="header-anchor" href="#clearactivenode" aria-label="Permalink to &quot;clearActiveNode()&quot;">​</a></h3><blockquote><p>v0.8.0+</p></blockquote><p>Clears all currently active nodes and triggers the <code>node_active</code> event.</p><h3 id="clearactivenodelist" tabindex="-1">clearActiveNodeList() <a class="header-anchor" href="#clearactivenodelist" aria-label="Permalink to &quot;clearActiveNodeList()&quot;">​</a></h3><blockquote><p>v0.8.0+</p></blockquote><p>Clears all currently active nodes but not triggers the <code>node_active</code> event.</p><h3 id="starttextedit" tabindex="-1">startTextEdit() <a class="header-anchor" href="#starttextedit" aria-label="Permalink to &quot;startTextEdit()&quot;">​</a></h3><blockquote><p>v0.1.6+</p></blockquote><p>If there is a text editing requirement, this method can be called to disable the enter key and delete key related shortcuts to prevent conflicts.</p><h3 id="endtextedit" tabindex="-1">endTextEdit() <a class="header-anchor" href="#endtextedit" aria-label="Permalink to &quot;endTextEdit()&quot;">​</a></h3><blockquote><p>v0.1.6+</p></blockquote><p>End text editing, restore enter key and delete key related shortcuts.</p><h3 id="addactivenode-node" tabindex="-1">addActiveNode(node) <a class="header-anchor" href="#addactivenode-node" aria-label="Permalink to &quot;addActiveNode(node)&quot;">​</a></h3><blockquote><p>v0.8.0+ abandoned</p></blockquote><p>Add a node to the active list.</p><h3 id="addnodetoactivelist-node-notemitbeforenodeactiveevent-false" tabindex="-1">addNodeToActiveList(node, notEmitBeforeNodeActiveEvent = false) <a class="header-anchor" href="#addnodetoactivelist-node-notemitbeforenodeactiveevent-false" aria-label="Permalink to &quot;addNodeToActiveList(node, notEmitBeforeNodeActiveEvent = false)&quot;">​</a></h3><blockquote><p>v0.8.0+</p></blockquote><ul><li><code>notEmitBeforeNodeActiveEvent</code>：v0.9.12+，is not distribute the &#39;before_node_active&#39; event, which defaults to &#39;false&#39; and will be distributed;</li></ul><p>Add a node to the active list. If you want to manually activate a node to achieve the same effect as clicking with a mouse, please directly call the &#39;active()&#39; method of the node instance.</p><h3 id="removeactivenode-node" tabindex="-1">removeActiveNode(node) <a class="header-anchor" href="#removeactivenode-node" aria-label="Permalink to &quot;removeActiveNode(node)&quot;">​</a></h3><blockquote><p>v0.8.0+ abandoned</p></blockquote><p>Remove a node from the active list.</p><h3 id="removenodefromactivelist-node" tabindex="-1">removeNodeFromActiveList(node) <a class="header-anchor" href="#removenodefromactivelist-node" aria-label="Permalink to &quot;removeNodeFromActiveList(node)&quot;">​</a></h3><blockquote><p>v0.8.0+</p></blockquote><p>Remove a node from the active list.</p><h3 id="findactivenodeindex-node" tabindex="-1">findActiveNodeIndex(node) <a class="header-anchor" href="#findactivenodeindex-node" aria-label="Permalink to &quot;findActiveNodeIndex(node)&quot;">​</a></h3><p>Search for the index of a node in the active list.</p><h3 id="getnodeindex-node" tabindex="-1">getNodeIndex(node) <a class="header-anchor" href="#getnodeindex-node" aria-label="Permalink to &quot;getNodeIndex(node)&quot;">​</a></h3><p>Get the position index of a node among its siblings.</p><h3 id="setnodedatarender-node-data-notrender" tabindex="-1">setNodeDataRender(node, data, notRender) <a class="header-anchor" href="#setnodedatarender-node-data-notrender" aria-label="Permalink to &quot;setNodeDataRender(node, data, notRender)&quot;">​</a></h3><ul><li><code>notRender</code>: v0.6.9+, <code>Boolean</code>, Default is <code>false</code>, Do not trigger rendering.</li></ul><p>Set node <code>data</code>, i.e. the data in the data field, and will determine whether the node needs to be re-rendered based on whether the node size has changed, <code>data</code> is an object, e.g. <code>{text: &#39;I am new text&#39;}</code>.</p><h3 id="movenodeto-node-tonode" tabindex="-1">moveNodeTo(node, toNode) <a class="header-anchor" href="#movenodeto-node-tonode" aria-label="Permalink to &quot;moveNodeTo(node, toNode)&quot;">​</a></h3><blockquote><p>v0.1.5+</p></blockquote><p>Move a node as a child of another node.</p><h3 id="insertbefore-node-exist" tabindex="-1">insertBefore(node, exist) <a class="header-anchor" href="#insertbefore-node-exist" aria-label="Permalink to &quot;insertBefore(node, exist)&quot;">​</a></h3><blockquote><p>v0.1.5+</p></blockquote><p>Move a node in front of another node.</p><h3 id="insertafter-node-exist" tabindex="-1">insertAfter(node, exist) <a class="header-anchor" href="#insertafter-node-exist" aria-label="Permalink to &quot;insertAfter(node, exist)&quot;">​</a></h3><blockquote><p>v0.1.5+</p></blockquote><p>Move a node behind another node.</p><h3 id="movenodetocenter-node-resetscale" tabindex="-1">moveNodeToCenter(node, resetScale) <a class="header-anchor" href="#movenodetocenter-node-resetscale" aria-label="Permalink to &quot;moveNodeToCenter(node, resetScale)&quot;">​</a></h3><blockquote><p>v0.2.17+</p></blockquote><ul><li><code>resetScale</code>: v0.10.1+, Specify whether to reset the canvas scaling value to 100%. When you do not explicitly pass it, the default value is undefined, because the resetScaleOnMoveNodeToCenter configuration of the instantiation option also determines whether to reset scaling. Therefore, use the resetScaleOnMoveNodeToCenter configuration when you do not explicitly pass it, otherwise use the resetScale configuration</li></ul><p>Move a node to the center of the canvas.</p><h3 id="expandtonodeuid-uid-callback" tabindex="-1">expandToNodeUid(uid, callback) <a class="header-anchor" href="#expandtonodeuid-uid-callback" aria-label="Permalink to &quot;expandToNodeUid(uid, callback)&quot;">​</a></h3><blockquote><p>v0.6.7+</p></blockquote><ul><li><p><code>uid</code>: uid of node</p></li><li><p><code>callback</code>: Expand completed callback function</p></li></ul><p>Expand to the node of the specified uid.</p><h3 id="findnodebyuid-uid" tabindex="-1">findNodeByUid(uid) <a class="header-anchor" href="#findnodebyuid-uid" aria-label="Permalink to &quot;findNodeByUid(uid)&quot;">​</a></h3><blockquote><p>v0.6.7+</p></blockquote><ul><li><code>uid</code>: uid of node</li></ul><p>Find the corresponding node instance based on the uid.</p><h3 id="copy" tabindex="-1">copy() <a class="header-anchor" href="#copy" aria-label="Permalink to &quot;copy()&quot;">​</a></h3><blockquote><p>v0.6.8+</p></blockquote><p>Copy nodes. After calling this method, the current activated node data will be stored. and subsequent calls to the &#39;paste()&#39; method can be pasted.</p><p>If the browser and protocol (https) support &#39;js&#39; to manipulate clipboard data, the copied node data will also be added to the user&#39;s clipboard.</p><h3 id="cut" tabindex="-1">cut() <a class="header-anchor" href="#cut" aria-label="Permalink to &quot;cut()&quot;">​</a></h3><blockquote><p>v0.6.8+</p></blockquote><p>Cut a node. After calling this method, the currently active node will be cut and the node data will be stored. and subsequent calls to the &#39;paste()&#39; method can be pasted.</p><p>If the browser and protocol (https) support &#39;js&#39; to manipulate clipboard data, the copied node data will also be added to the user&#39;s clipboard.</p><h3 id="paste" tabindex="-1">paste() <a class="header-anchor" href="#paste" aria-label="Permalink to &quot;paste()&quot;">​</a></h3><blockquote><p>v0.6.8+</p></blockquote><p>Pasting nodes can be done by calling the &#39;copy()&#39; or &#39;cut()&#39; method after calling it.</p><p>If the browser and protocol (https) support &#39;js&#39; to manipulate clipboard data, data copied from other places can also be pasted. For example, you can paste&#39; simple mind map &#39;nodes across browsers. If it is non&#39; simple mind map &#39;node data, the text and images in the clipboard will be extracted and pasted. The text will be pasted as a child node by default, and the images will be added to the current node by default.</p><h3 id="clearcache" tabindex="-1">clearCache() <a class="header-anchor" href="#clearcache" aria-label="Permalink to &quot;clearCache()&quot;">​</a></h3><blockquote><p>v0.9.2+</p></blockquote><p>Empty the node cache pool.</p><h3 id="emitnodeactiveevent-node-null-activenodelist-this-activenodelist" tabindex="-1">emitNodeActiveEvent(node = null, activeNodeList = [...this.activeNodeList]) <a class="header-anchor" href="#emitnodeactiveevent-node-null-activenodelist-this-activenodelist" aria-label="Permalink to &quot;emitNodeActiveEvent(node = null, activeNodeList = [...this.activeNodeList])&quot;">​</a></h3><ul><li><p><code>node</code>：The node activated this time</p></li><li><p><code>activeNodeList</code>：All currently activated nodes</p></li></ul><p>Dispatch node activation event, which triggers <code>node_active</code> event.</p>',110),i=[n];function l(r,c,h,s,p,u){return t(),a("div",{"data-pagefind-body":!0},i)}const f=e(d,[["render",l]]);export{v as __pageData,f as default};
