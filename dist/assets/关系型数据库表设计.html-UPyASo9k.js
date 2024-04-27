import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as r,d as s,e as a,f as p,w as o,a as n}from"./app-9OmaxHRC.js";const d="/assets/image-20240404103638709-dJITta2z.png",b="/assets/image-20240404103955415-Ah0w__8C.png",t="/assets/image-20240404110003096-EnOUM5rn.png",m={},f=n(`<h1 id="关系型数据库表设计" tabindex="-1"><a class="header-anchor" href="#关系型数据库表设计" aria-hidden="true">#</a> 关系型数据库表设计</h1><h2 id="一对一" tabindex="-1"><a class="header-anchor" href="#一对一" aria-hidden="true">#</a> 一对一</h2><p>主要是通过外键实现</p><p><strong>父表</strong>：被依赖/关联的表</p><p><strong>子表</strong>：设置外键的表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">#用户表 User  父表</span></span>
<span class="line"><span style="color:#abb2bf;">uid  name age sex</span></span>
<span class="line"><span style="color:#abb2bf;">1100 zhang 20 M</span></span>
<span class="line"><span style="color:#abb2bf;">1000 liu 19 F</span></span>
<span class="line"><span style="color:#abb2bf;">2000 wang 21 M</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">#身份信息 Info 子表</span></span>
<span class="line"><span style="color:#abb2bf;">cardid addrinfo</span></span>
<span class="line"><span style="color:#abb2bf;">131331 aaaaa</span></span>
<span class="line"><span style="color:#abb2bf;">646465 bbbbb</span></span>
<span class="line"><span style="color:#abb2bf;">894946 ccccc</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u=s("strong",null,"子表添加一列",-1),v=s("strong",null,"父表的主键",-1),g=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">#用户表 User  父表</span></span>
<span class="line"><span style="color:#abb2bf;">uid  name age sex</span></span>
<span class="line"><span style="color:#abb2bf;">1100 zhang 20 M</span></span>
<span class="line"><span style="color:#abb2bf;">1000 liu 19 F</span></span>
<span class="line"><span style="color:#abb2bf;">2000 wang 21 M</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">#身份信息 Info 子表</span></span>
<span class="line"><span style="color:#abb2bf;">uid cardid addrinfo</span></span>
<span class="line"><span style="color:#abb2bf;">2000 131331 aaaaa</span></span>
<span class="line"><span style="color:#abb2bf;">1000 646465 bbbbb</span></span>
<span class="line"><span style="color:#abb2bf;">1100 894946 ccccc</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一对多" tabindex="-1"><a class="header-anchor" href="#一对多" aria-hidden="true">#</a> 一对多</h2><figure><img src="`+d+'" alt="image-20240404103638709" tabindex="0" loading="lazy"><figcaption>image-20240404103638709</figcaption></figure><h2 id="多对多" tabindex="-1"><a class="header-anchor" href="#多对多" aria-hidden="true">#</a> 多对多</h2><p>可以发现上述表中存在大量的冗余信息=》如果加减商品或者价格变动，需要修改多项数值</p><figure><img src="'+b+'" alt="image-20240404103955415" tabindex="0" loading="lazy"><figcaption>image-20240404103955415</figcaption></figure><figure><img src="'+t+'" alt="image-20240404110003096" tabindex="0" loading="lazy"><figcaption>image-20240404110003096</figcaption></figure>',7);function _(h,y){const e=i("font");return c(),r("div",null,[f,s("p",null,[a("在"),u,a("关联"),v,a("（"),p(e,{color:"red"},{default:o(()=>[a("类型要相同")]),_:1}),a("），一般放到服务层实现，现在不在mysql上做，减轻mysql压力")]),g])}const z=l(m,[["render",_],["__file","关系型数据库表设计.html.vue"]]);export{z as default};
