import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c as i,d as s,e as a,f as t,w as c,a as n}from"./app--8O2lHwG.js";const r="/assets/image-20240311104103732-B7pX7BnX.png",d={},B=n('<h1 id="打包和压缩" tabindex="-1"><a class="header-anchor" href="#打包和压缩" aria-hidden="true">#</a> 打包和压缩</h1><h2 id="tar的使用方法" tabindex="-1"><a class="header-anchor" href="#tar的使用方法" aria-hidden="true">#</a> tar的使用方法</h2><figure><img src="'+r+`" alt="image-20240311104103732" tabindex="0" loading="lazy"><figcaption>image-20240311104103732</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">tar</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">cfv</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">packet.tar</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">file</span><span style="color:#E5C07B;">*</span><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">#将file*打包成packet.tar</span></span>
<span class="line"><span style="color:#61AFEF;">tar</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">xfv</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">packet.tar</span><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">#从包文件中释放文件</span></span>
<span class="line"><span style="color:#61AFEF;">tar</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">cfvz</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">packet.tar.gz</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">test</span><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">#将test打包并压缩</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#tar rfvz packet.tar.gz file1	#error,压缩后不能追加</span></span>
<span class="line"><span style="color:#61AFEF;">tar</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">xfvz</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">packet.tar.gz</span><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">#解压缩</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),y=s("code",null,"z",-1),u=s("strong",null,"压缩/解压缩",-1),g=n(`<h2 id="gzip和bzip的介绍" tabindex="-1"><a class="header-anchor" href="#gzip和bzip的介绍" aria-hidden="true">#</a> gzip和bzip的介绍</h2><p>属于一种典型的压缩方法——<strong>哈夫曼编码树</strong>的方法</p><ul><li><p>gzip用来将文件<strong>压缩</strong>成后缀为<code>.gz</code>的压缩文件，或者将后缀为<code>.gz</code>的文件进行<strong>解压</strong>。</p></li><li><p>Bzip2用来将文件<strong>压缩</strong>成后缀名为<code>.bz2</code>的压缩文件，或者将后缀为<code>.bz2</code>的压缩文件<strong>解压</strong></p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">gzip/bzip2</span><span style="color:#ABB2BF;">  [选项] [压缩或解压缩的文件名] </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常用参数：</p><ul><li><p><code>-d</code>: 将压缩文件进行解压。</p></li><li><p><code>-v</code>： 在压缩或解压过程中显示解压或压缩的文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 将main.c 进行压缩，则使用</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">gzip/bzip2</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">–v</span><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">main.c</span><span style="color:#ABB2BF;">	</span><span style="color:#7F848E;font-style:italic;">#会将main.c 压缩成 main.c.gz 或者 main.c.bz2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 解压</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">gzip</span><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">–dv</span><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">main.c.gz</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">bzip2</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">–dv</span><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">main.c.bz2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="unzip命令处理-zip文件" tabindex="-1"><a class="header-anchor" href="#unzip命令处理-zip文件" aria-hidden="true">#</a> unzip命令处理.zip文件</h2><p>此项专门用于解压zip格式文档的工具，在成功解压同时亦会自动移除原始zip文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">unzip</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">filename.zip</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>解压</strong>看<strong>文件后缀</strong>选择相应工具</p><ul><li><code>***.tar</code>和<code>***.tar.gz</code>-tar</li><li><code>***.gz</code>-gzip</li><li><code>***.bz2</code>-bzip2</li></ul>`,12);function h(v,F){const e=o("font");return p(),i("div",null,[B,s("p",null,[y,a("使用gzip"),t(e,{color:"red"},{default:c(()=>[u]),_:1}),a("文件")]),g])}const z=l(d,[["render",h],["__file","打包和压缩.html.vue"]]);export{z as default};
