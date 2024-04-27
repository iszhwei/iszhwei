import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as l,b as a,a as p}from"./app-9OmaxHRC.js";const e={},o=p(`<h2 id="顺序栈的实现" tabindex="-1"><a class="header-anchor" href="#顺序栈的实现" aria-hidden="true">#</a> 顺序栈的实现</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;stdexcept&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;cstring&gt;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SeqStack</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">SeqStack</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">cap</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        :</span><span style="color:#61AFEF;">_top</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        ,</span><span style="color:#61AFEF;">_cap</span><span style="color:#ABB2BF;">(cap)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        _pstack </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">[_cap]();</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">~SeqStack</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">delete[]</span><span style="color:#ABB2BF;"> _pstack;</span><span style="color:#7F848E;font-style:italic;">//不要用delete</span></span>
<span class="line"><span style="color:#ABB2BF;">        _pstack </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nullptr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">val</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(_top </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> _cap) {</span><span style="color:#7F848E;font-style:italic;"> //栈满了</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">expand</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">_cap);</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">_pstack</span><span style="color:#ABB2BF;">[_top] </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> val;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">_top;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">pop</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(_top </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">throw</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Stack is empty!!!&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">--</span><span style="color:#ABB2BF;">_top;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">top</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(_top </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">throw</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Stack is empty!!!&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_pstack</span><span style="color:#ABB2BF;">[_top</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">empty</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> _top </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;    </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">private:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">expand</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">size</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> newStack </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">[size];</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">memcpy</span><span style="color:#ABB2BF;">(newStack, _pstack, _top</span><span style="color:#56B6C2;">*</span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">delete[]</span><span style="color:#ABB2BF;"> _pstack;</span><span style="color:#7F848E;font-style:italic;">   //这里也是delete[]</span></span>
<span class="line"><span style="color:#ABB2BF;">        _pstack </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> newStack;</span></span>
<span class="line"><span style="color:#ABB2BF;">        _cap </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> size;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> _pstack;</span><span style="color:#7F848E;font-style:italic;">   //指向数据域</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _top;</span><span style="color:#7F848E;font-style:italic;">  //指向栈顶,也是栈的大小</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> _cap;</span><span style="color:#7F848E;font-style:italic;">    //栈的容量</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    SeqStack s;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">s</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">12</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">s</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">17</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">s</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">s</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">78</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //cout &lt;&lt; s.top() &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //s.pop();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //cout &lt;&lt; s.top() &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //s.pop();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //cout &lt;&lt; s.top() &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //s.pop();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //cout &lt;&lt; s.top() &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //s.pop();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">s</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">empty</span><span style="color:#ABB2BF;">()) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">s</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">top</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">s</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">pop</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">$./a.out</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">78</span></span>
<span class="line"><span style="color:#61AFEF;">100</span></span>
<span class="line"><span style="color:#61AFEF;">17</span></span>
<span class="line"><span style="color:#61AFEF;">12</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function c(B,t){return n(),l("div",null,[a("more"),o])}const y=s(e,[["render",c],["__file","新建 Markdown.html.vue"]]);export{y as default};
