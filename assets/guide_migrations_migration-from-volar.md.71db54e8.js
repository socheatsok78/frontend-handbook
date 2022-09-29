import{_ as e}from"./chunks/takeover-mode.47bb2b72.js";import{_ as o,c as a,o as t,a as s}from"./app.5d2f7bc5.js";var l="/assets/vscode-disable-volar.41981fd1.png",n="/assets/vscode-enable-vetur.3781d82f.png";const f='{"title":"Switch from Volar to Vetur","description":"","frontmatter":{},"headers":[{"level":2,"title":"Disable Volar","slug":"disable-volar"},{"level":2,"title":"Disable Takeover Mode","slug":"disable-takeover-mode"},{"level":2,"title":"Enable Vetur","slug":"enable-vetur"},{"level":2,"title":"(Optional) Uninstall @vue/runtime-dom","slug":"optional-uninstall-vue-runtime-dom"}],"relativePath":"guide/migrations/migration-from-volar.md","lastUpdated":1654782707000}',r={name:"guide/migrations/migration-from-volar.md"},i=s('<h1 id="switch-from-volar-to-vetur" tabindex="-1">Switch from Volar to Vetur <a class="header-anchor" href="#switch-from-volar-to-vetur" aria-hidden="true">#</a></h1><p>This is the guide for you to switch back from <strong>Volar</strong> to <strong>Vetur</strong>. This guide is only applicable if you are using <strong>Volar</strong> in a Vue 2 project.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If your tools and libraries implemented support for <strong>Volar</strong> and no issues occurred. You can continue using <strong>Volar</strong> within your Vue 2 project.</p></div><h2 id="disable-volar" tabindex="-1">Disable Volar <a class="header-anchor" href="#disable-volar" aria-hidden="true">#</a></h2><p>To avoid conflict please disable <code>Volar</code> it you have it install.</p><ol><li>In your project workspace, bring up the command palette with <code>Ctrl + Shift + P</code> (macOS: <code>Cmd + Shift + P</code>).</li><li>Type <code>volar</code> in the extension search box.</li><li>Click the little gear icon of &quot;Volar&quot;, and select &quot;Disable&quot; or &quot;Disable (Workspace)&quot;.</li><li>Reload the workspace.</li></ol><p><img src="'+l+'" alt="Vetur"></p><h2 id="disable-takeover-mode" tabindex="-1">Disable Takeover Mode <a class="header-anchor" href="#disable-takeover-mode" aria-hidden="true">#</a></h2><p>To disable Takeover Mode, you need to enable VSCode&#39;s built-in TS language service in your project&#39;s workspace only by following these steps:</p><ol><li>In your project workspace, bring up the command palette with <code>Ctrl + Shift + P</code> (macOS: <code>Cmd + Shift + P</code>).</li><li>Type <code>built</code> and select &quot;Extensions: Show Built-in Extensions&quot;.</li><li>Type <code>typescript</code> in the extension search box (do not remove <code>@builtin</code> prefix).</li><li>Click the little gear icon of &quot;TypeScript and JavaScript Language Features&quot;, and select &quot;Enable&quot; or &quot;Enable (Workspace)&quot;.</li><li>Reload the workspace. Takeover mode will be enabled when you open a Vue or TS file.</li></ol><p><img src="'+e+'" alt="TypeScript and JavaScript Language Features"></p><h2 id="enable-vetur" tabindex="-1">Enable Vetur <a class="header-anchor" href="#enable-vetur" aria-hidden="true">#</a></h2><ol><li>In your project workspace, bring up the command palette with <code>Ctrl + Shift + P</code> (macOS: <code>Cmd + Shift + P</code>).</li><li>Type <code>vetur</code> in the extension search box.</li><li>Click the little gear icon of &quot;Vetur&quot;, and select &quot;Enable&quot; or &quot;Enable (Workspace)&quot;.</li><li>Reload the workspace.</li></ol><p><img src="'+n+`" alt="Vetur"></p><h2 id="optional-uninstall-vue-runtime-dom" tabindex="-1">(Optional) Uninstall <code>@vue/runtime-dom</code> <a class="header-anchor" href="#optional-uninstall-vue-runtime-dom" aria-hidden="true">#</a></h2><p>The Volar extension requires Vue 3 types from the <code>@vue/runtime-dom</code>. Vue 3 itself includes the <code>@vue/runtime-dom</code> package. For Vue 2 you will have to install it yourself. Since we are reverting back to use Vetur, you have to uninstall <code>@vue/runtime-dom</code> package.</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Remove &quot;@vue/runtime-dom&quot; from package.json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devDependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">@vue/runtime-dom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">latest</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,17),c=[i];function p(d,u,h,m,v,g){return t(),a("div",null,c)}var D=o(r,[["render",p]]);export{f as __pageData,D as default};