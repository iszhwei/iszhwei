import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o,c as l,d as e,e as a,f as i,a as n}from"./app-2pke9_a8.js";const c="/assets/image-20240115124235596-RiIUYDX7.png",d="/assets/image-20240115124252212-MEhhoyOD.png",h={},p=e("h1",{id:"工具分享",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#工具分享","aria-hidden":"true"},"#"),a(" 工具分享")],-1),m={id:"基因序列比对工具-mutialin",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#基因序列比对工具-mutialin","aria-hidden":"true"},"#",-1),g={href:"https://github.com/iszhwei/mutalin",target:"_blank",rel:"noopener noreferrer"},b=n('<p>虽然有很多优秀的软件能做双序列比对，但对于<strong>每个基因要对几十个甚至上百个样品测序结果比对</strong>步骤太繁琐，浪费大量时间和人力，因此编写了个小工具解放劳动力，现在把它分享出来，希望能对医学方向的同学和生物方面研究的同学提供些许帮助。 <mark><strong>这个软件尤其是对做基因编辑方向的同学简直就是福音</strong></mark><mark><strong>感觉有用的同学请不吝fork、star一下哦</strong></mark></p><blockquote><p><strong>这是一个基因序列比对工具，主要用于1个模板比对N个测序结果</strong></p></blockquote><h3 id="工具内容" tabindex="-1"><a class="header-anchor" href="#工具内容" aria-hidden="true">#</a> 工具内容</h3><ol><li>三个文件夹“result”、“sequence”、“wt”</li><li>multalin.exe</li></ol><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><ol><li>sequence文件夹用于存放测序后的结果。解压后的“.seq”和“.ab1”文件可以直接放在这个文件夹内</li><li>wt文件夹用于存放模板序列。每次比对只能放该基因的模板序列</li><li>比对后的结果以照片的形式保存在result文件夹内，为了方便日后查看又把结果自动存储到word内便于编辑</li><li>每次比对只需要改动wt内的模板序列和sequence内的测序结果，result内的结果照片会在比对开始自动清空</li></ol><figure><img src="'+c+'" alt="image-20240115124235596" tabindex="0" loading="lazy"><figcaption>image-20240115124235596</figcaption></figure><figure><img src="'+d+'" alt="image-20240115124252212" tabindex="0" loading="lazy"><figcaption>image-20240115124252212</figcaption></figure>',8),_={href:"https://githubfast.com/iszhwei/mutalin",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/iszhwei/mutalin",target:"_blank",rel:"noopener noreferrer"},x=n(`<h3 id="回答两点" tabindex="-1"><a class="header-anchor" href="#回答两点" aria-hidden="true">#</a> 回答两点：</h3><ol><li><p>有小伙伴问我模板格式是什么样的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">//template.txt	注意内容为fasta格式</span></span>
<span class="line"><span style="color:#abb2bf;">&gt;tempalteName   </span></span>
<span class="line"><span style="color:#abb2bf;">ATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATC</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>为什么不用PyQt做个好看点界面？首先<strong>实用为主</strong>，操作也很简单，暂时没必要。</p></li></ol>`,2);function k(C,T){const t=r("ExternalLinkIcon");return o(),l("div",null,[p,e("h2",m,[u,a(),e("a",g,[a("基因序列比对工具-mutialin"),i(t)])]),b,e("p",null,[e("a",_,[a("下载地址1：https://githubfast.com/iszhwei/mutalin"),i(t)])]),e("p",null,[e("a",f,[a("下载地址2：https://github.com/iszhwei/mutalin"),i(t)])]),x])}const G=s(h,[["render",k],["__file","tool.html.vue"]]);export{G as default};
