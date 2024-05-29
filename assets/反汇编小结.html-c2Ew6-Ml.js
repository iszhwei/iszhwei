import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as t,c as a,d as e,e as l,f as c,w as d,a as r}from"./app-2pke9_a8.js";const i={},u=r(`<h1 id="反汇编小结" tabindex="-1"><a class="header-anchor" href="#反汇编小结" aria-hidden="true">#</a> 反汇编小结</h1><p>记录一下常用的反汇编指令方便查看</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">objdump </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;">M intel </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;">d </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;">C binary_file</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-M intel</code>：指定输出为 <strong>Intel 语法</strong>。</li><li><code>-d</code>：<strong>反汇编</strong>二进制文件中的机器指令。</li><li><code>-C</code>：显示低级的反汇编，并尝试将代码中的地址转换为<strong>符号名（即函数名）</strong>。</li></ul><h2 id="d-和-s的区别" tabindex="-1"><a class="header-anchor" href="#d-和-s的区别" aria-hidden="true">#</a> -d 和 -S的区别</h2>`,5),_=e("li",null,[e("code",null,"-d"),l("或"),e("code",null,"--disassemble"),l("： "),e("ul",null,[e("li",null,[l("这个选项用于反汇编目标 ELF 文件中包含可执行指令的节区（section）中的内容。换句话说，它会将"),e("strong",null,"机器代码转化为汇编代码")])])],-1),p=e("code",null,"-S",-1),h=e("code",null,"--source",-1),m=e("strong",null,"混合显示源代码和反汇编代码",-1),f=e("code",null,"-g",-1),B=e("code",null,"objdump -S",-1),g=e("code",null,"objdump -d",-1);function b(v,x){const n=o("font");return t(),a("div",null,[u,e("ul",null,[_,e("li",null,[p,l("或"),h,l("： "),e("ul",null,[e("li",null,[l("这个选项用于"),m,l("。"),e("strong",null,[c(n,{color:"red"},{default:d(()=>[l("当编译目标文件时，如果没有指定 "),f,l(" 参数")]),_:1})]),l("，"),B,l(" 的效果可能与 "),g,l(" 类似，因为缺少源代码信息。")])])])])])}const D=s(i,[["render",b],["__file","反汇编小结.html.vue"]]);export{D as default};
