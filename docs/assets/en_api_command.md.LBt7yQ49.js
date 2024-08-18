import{_ as a,o as e,c as o,a5 as t}from"./chunks/framework.D1Ej91Qw.js";const f=JSON.parse('{"title":"Command instance","description":"","frontmatter":{},"headers":[],"relativePath":"en/api/command.md","filePath":"en/api/command.md"}'),n={name:"en/api/command.md"},r=t('<h1 id="command-instance" tabindex="-1">Command instance <a class="header-anchor" href="#command-instance" aria-label="Permalink to &quot;Command instance&quot;">​</a></h1><p>The <code>command</code> instance is responsible for adding and executing commands. It includes many built-in commands and can also be added manually. A command refers to an operation that needs to add a copy to the history stack data. The <code>mindMap.command</code> instance can be obtained through this.&quot;</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="history" tabindex="-1">history <a class="header-anchor" href="#history" aria-label="Permalink to &quot;history&quot;">​</a></h3><p>The current list of all historical data. Do not manually modify the array.</p><h3 id="activehistoryindex" tabindex="-1">activeHistoryIndex <a class="header-anchor" href="#activehistoryindex" aria-label="Permalink to &quot;activeHistoryIndex&quot;">​</a></h3><p>The current historical data index. Do not manually modify this property.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><p>Please use the command &#39;Back&#39; or &#39;FORWARD&#39; to move forward or backward.</p><h3 id="pause" tabindex="-1">pause() <a class="header-anchor" href="#pause" aria-label="Permalink to &quot;pause()&quot;">​</a></h3><blockquote><p>v0.9.11+</p></blockquote><p>Pause collecting historical data.</p><h3 id="recovery" tabindex="-1">recovery() <a class="header-anchor" href="#recovery" aria-label="Permalink to &quot;recovery()&quot;">​</a></h3><blockquote><p>v0.9.11+</p></blockquote><p>Restore the collection of historical data.</p><h3 id="add-name-fn" tabindex="-1">add(name, fn) <a class="header-anchor" href="#add-name-fn" aria-label="Permalink to &quot;add(name, fn)&quot;">​</a></h3><p>Add a command.</p><p><code>name</code>: Command name</p><p><code>fn</code>: Method to be executed by the command</p><h3 id="remove-name-fn" tabindex="-1">remove(name, fn) <a class="header-anchor" href="#remove-name-fn" aria-label="Permalink to &quot;remove(name, fn)&quot;">​</a></h3><p>Remove a command.</p><p><code>name</code>: Name of the command to be removed</p><p><code>fn</code>: Method to be removed, if not provided all methods for the command will be removed</p><h3 id="getcopydata" tabindex="-1">getCopyData() <a class="header-anchor" href="#getcopydata" aria-label="Permalink to &quot;getCopyData()&quot;">​</a></h3><p>Get a copy of the rendering tree data. That is, the data of the current canvas.</p><h3 id="clearhistory" tabindex="-1">clearHistory() <a class="header-anchor" href="#clearhistory" aria-label="Permalink to &quot;clearHistory()&quot;">​</a></h3><p>Clear the history stack data</p>',27),d=[r];function i(c,h,s,m,l,p){return e(),o("div",{"data-pagefind-body":!0},d)}const b=a(n,[["render",i]]);export{f as __pageData,b as default};
