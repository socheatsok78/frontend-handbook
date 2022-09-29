import{_ as s,c as n,o as a,a as l}from"./app.d04e7e1e.js";const d='{"title":"Coding Guidelines","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intro","slug":"intro"},{"level":2,"title":"Names","slug":"names"},{"level":2,"title":"Types","slug":"types"},{"level":2,"title":"Comments","slug":"comments"},{"level":2,"title":"Strings","slug":"strings"},{"level":2,"title":"Style","slug":"style"}],"relativePath":"guide/coding-guideline.md","lastUpdated":1654837099000}',o={name:"guide/coding-guideline.md"},e=l(`<h1 id="coding-guidelines" tabindex="-1">Coding Guidelines <a class="header-anchor" href="#coding-guidelines" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This document is currently in a &quot;Work in Progress&quot; stage.</p></div><h2 id="intro" tabindex="-1">Intro <a class="header-anchor" href="#intro" aria-hidden="true">#</a></h2><p>These are Frontend coding guidelines</p><h2 id="names" tabindex="-1">Names <a class="header-anchor" href="#names" aria-hidden="true">#</a></h2><ul><li>Use PascalCase for <code>type</code> names</li><li>Use PascalCase for <code>enum</code> values</li><li>Use camelCase for <code>function</code> and <code>method</code> names</li><li>Use camelCase for <code>property</code> names and <code>local variables</code></li><li>Use whole words in names when possible</li></ul><h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><ul><li>Do not export types or functions unless you need to share it across multiple components</li><li>Do not introduce new types or values to the global namespace</li></ul><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-hidden="true">#</a></h2><ul><li>Use JSDoc style comments for <code>functions</code>, <code>interfaces</code>, <code>enums</code>, and <code>classes</code></li></ul><h2 id="strings" tabindex="-1">Strings <a class="header-anchor" href="#strings" aria-hidden="true">#</a></h2><ul><li>Use &quot;double quotes&quot; for strings shown to the user that need to be externalized (localized)</li><li>Use &#39;single quotes&#39; otherwise</li><li>All strings visible to the user need to be externalized</li></ul><h2 id="style" tabindex="-1">Style <a class="header-anchor" href="#style" aria-hidden="true">#</a></h2><ul><li>Use arrow functions <code>=&gt;</code> over anonymous function expressions</li></ul><div class="danger custom-block"><p class="custom-block-title">Incorrect</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// TypeScript</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// JavaScript</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">Correct</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// TypeScript</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// JavaScript</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"></span></code></pre></div></div><ul><li>Only surround arrow function parameters when necessary. For example, <code>(x) =&gt; x + x</code> is wrong but the following are correct:</li></ul><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> y</span></span>
<span class="line"></span></code></pre></div><ul><li>Always surround loop and conditional bodies with curly braces</li><li>Open curly braces always go on the same line as whatever necessitates them</li><li>Parenthesized constructs should have no surrounding whitespace. A single space follows commas, colons, and semicolons in those constructs. For example:</li></ul><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">foo</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,20),p=[e];function t(c,r,i,y,D,F){return a(),n("div",null,p)}var A=s(o,[["render",t]]);export{d as __pageData,A as default};
