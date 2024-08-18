import{_ as a,o as t,c as e,a5 as s}from"./chunks/framework.D1Ej91Qw.js";const u=JSON.parse('{"title":"Markdown parse","description":"","frontmatter":{},"headers":[],"relativePath":"en/api/markdown.md","filePath":"en/api/markdown.md"}'),i={name:"en/api/markdown.md"},o=s('<h1 id="markdown-parse" tabindex="-1">Markdown parse <a class="header-anchor" href="#markdown-parse" aria-label="Permalink to &quot;Markdown parse&quot;">​</a></h1><blockquote><p>v0.4.7+</p></blockquote><p>Provides methods for importing and exporting <code>Markdown</code> files.</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> markdown </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;simple-mind-map/src/parse/markdown.js&#39;</span></span></code></pre></div><p>If you are using the file in the format of <code>umd</code>, you can obtain it in the following way:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;simple-mind-map/dist/simpleMindMap.umd.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">simpleMindMap.markdown</span></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="transformtomarkdown-data" tabindex="-1">transformToMarkdown(data) <a class="header-anchor" href="#transformtomarkdown-data" aria-label="Permalink to &quot;transformToMarkdown(data)&quot;">​</a></h3><ul><li><code>data</code>: Mind map data can be obtained using the <code>mindMap.getData()</code> method.</li></ul><p>Convert mind map data into <code>Markdown</code> format data, and the returned data is a string.</p><h3 id="transformmarkdownto-mdcontent" tabindex="-1">transformMarkdownTo(mdContent) <a class="header-anchor" href="#transformmarkdownto-mdcontent" aria-label="Permalink to &quot;transformMarkdownTo(mdContent)&quot;">​</a></h3><ul><li><code>mdContent</code>: The <code>Markdown</code> data to convert, string type.</li></ul><p>Convert the <code>Markdown</code> string into node tree data and return a <code>Promise</code> instance. You can use the <code>mindMap.setData()</code> method to render the converted data onto the canvas.</p>',15),n=[o];function d(r,p,h,l,c,k){return t(),e("div",{"data-pagefind-body":!0},n)}const g=a(i,[["render",d]]);export{u as __pageData,g as default};
