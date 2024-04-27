import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as l,a}from"./app--8O2lHwG.js";const p={},o=a(`<p>strtol()函数字符串转换成十进制、十六进制 、二进制、 八进制 long类型</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#C678DD;">long</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">strtol</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">const</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">char*</span><span style="color:#E06C75;"> </span><span style="color:#E06C75;font-style:italic;">str</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">char**</span><span style="color:#E06C75;"> </span><span style="color:#E06C75;font-style:italic;">endptr</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> </span><span style="color:#E06C75;font-style:italic;">base</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>str</code> 为要转换的字符串，<code>endstr</code> 为第一个不能转换的字符的指针，<code>base</code> 为字符串 <code>str</code> 所采用的进制。</p><p>参数 <code>base</code> 范围从2 至36，或0。</p><p><code>strtol()</code> 会扫描参数 str 字符串，<strong>跳过前面的空白字符</strong>（例如空格，tab缩进等，可以通过 isspace() 函数来检测），直到遇上数字或正负符号才开始做转换，再遇到非数字或字符串结束时(’\\0’)结束转换，并将结果返回。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;string&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> szNumbers</span><span style="color:#C678DD;">[]</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;2001 60c0c0 -1101110100110100100000 0x6fffff&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> pEnd;</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">long</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> li1, li2, li3, li4;</span></span>
<span class="line"><span style="color:#ABB2BF;">	li1 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">strtol</span><span style="color:#ABB2BF;">(szNumbers, </span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;">pEnd, </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">	//用十进制   解析2001</span></span>
<span class="line"><span style="color:#ABB2BF;">	li2 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">strtol</span><span style="color:#ABB2BF;">(pEnd, </span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;">pEnd, </span><span style="color:#D19A66;">16</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">		//用十六进制 解析60c0c0</span></span>
<span class="line"><span style="color:#ABB2BF;">	li3 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">strtol</span><span style="color:#ABB2BF;">(pEnd, </span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;">pEnd, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">		//用二进制   解析-1101110100110100100000</span></span>
<span class="line"><span style="color:#ABB2BF;">	li4 </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">strtol</span><span style="color:#ABB2BF;">(pEnd, </span><span style="color:#D19A66;">NULL</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;">		//自动判断   解析0x6fffff</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">printf</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;转换成10进制: </span><span style="color:#D19A66;">%ld</span><span style="color:#98C379;">、</span><span style="color:#D19A66;">%ld</span><span style="color:#98C379;">、</span><span style="color:#D19A66;">%ld</span><span style="color:#98C379;">、</span><span style="color:#D19A66;">%ld</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">, li1, li2, li3, li4);</span><span style="color:#7F848E;font-style:italic;">	//转换成10进制: 2001、6340800、-3624224、7340031</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">#获取8进制参数</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;cstdlib&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;unistd.h&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;cstdio&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//#include &lt;cstring&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//./my_mkdir new_directory 0777 #依然会受到umask的影响</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">argc</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">char**</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">argv</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(argc ！</span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        std::cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Args Error!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">mode_t</span><span style="color:#ABB2BF;"> mode </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">strtol</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">argv</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">], </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;">);</span><span style="color:#7F848E;font-style:italic;"> //字符串转8进制长整型数字</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">mkdir</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">argv</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">], mode);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> ret) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        //std::cout &lt;&lt; &quot;mkdir :&quot; &lt;&lt; strerror(ret) &lt;&lt; std::endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#61AFEF;">perror</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;mkdir&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>atoi</code>这个只能字符串转十进制</p>`,8),e=[o];function t(c,r){return n(),l("div",null,e)}const y=s(p,[["render",t],["__file","字符串转不同进制数字.html.vue"]]);export{y as default};
