import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as t,d as p,e as s,f as a,w as l,a as r}from"./app--8O2lHwG.js";const B={},i=p("h1",{id:"内存对齐",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#内存对齐","aria-hidden":"true"},"#"),s(" 内存对齐")],-1),y=p("h2",{id:"对齐规则",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#对齐规则","aria-hidden":"true"},"#"),s(" 对齐规则")],-1),d=p("h2",{id:"为什么要内存对齐",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#为什么要内存对齐","aria-hidden":"true"},"#"),s(" 为什么要内存对齐？")],-1),u=r(`<h2 id="内存对齐的三大规则" tabindex="-1"><a class="header-anchor" href="#内存对齐的三大规则" aria-hidden="true">#</a> 内存对齐的三大规则</h2><h3 id="数据成员对齐规则" tabindex="-1"><a class="header-anchor" href="#数据成员对齐规则" aria-hidden="true">#</a> 数据成员对齐规则</h3><p>结构(struct)(或联合(union))的数据成员，<strong>第一个数据成员放在offset(偏移)为0的地方</strong>，<u>以后每个数据成员的对齐按照 <code>#pragma pack</code> 指定的数值和这个<strong>数据成员自身长度</strong>中，<strong>比较小</strong>的那个进行</u></p><h3 id="结构-或联合-的整体对齐规则" tabindex="-1"><a class="header-anchor" href="#结构-或联合-的整体对齐规则" aria-hidden="true">#</a> 结构(或联合)的整体对齐规则</h3><p>在数据成员完成各自对齐之后，<strong>结构(或联合)本身也要进行对齐</strong>，对齐将按照 <code>#pragma pack</code> 指定的数 值和结构(或联合)<strong>最大数据成员长度</strong>中，比较小的那个进行。</p><h3 id="结构体作为成员" tabindex="-1"><a class="header-anchor" href="#结构体作为成员" aria-hidden="true">#</a> 结构体作为成员</h3><p>如果一个结构里有某些结构体成员，则内部结构体成员要从成员最大元素大小的整数倍和 #pragma pack指定的数值中最小的一个的整数倍的地址开始存储。 #pragma pack(n) 对齐系数</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//#pragma pack(8)</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::cout;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> std::endl;</span></span>
<span class="line"><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">xx</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">{ </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> a1; </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> b1;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> c1;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> d1; </span></span>
<span class="line"><span style="color:#ABB2BF;">} MyStructxx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">y</span></span>
<span class="line"><span style="color:#ABB2BF;">{ </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> b;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> a; </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> d;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> c;</span></span>
<span class="line"><span style="color:#ABB2BF;">}MyStruct2;</span></span>
<span class="line"><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">EE</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> a; </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> b; </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> c;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">FF</span></span>
<span class="line"><span style="color:#ABB2BF;">    { </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> a1; </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> b1; </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> c1; </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> d1;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }MyStructFF;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> d;</span></span>
<span class="line"><span style="color:#ABB2BF;">}MyStructEE;</span></span>
<span class="line"><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">DD</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> a; </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> b;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> c;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> d;</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">FF</span></span>
<span class="line"><span style="color:#ABB2BF;">    { </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">double</span><span style="color:#ABB2BF;"> a1;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> b1; </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> c1; </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> d1;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }MyStructFF;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> e;</span></span>
<span class="line"><span style="color:#ABB2BF;">}MyStructDD;</span><span style="color:#7F848E;font-style:italic;">//40</span></span>
<span class="line"><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">GG</span></span>
<span class="line"><span style="color:#ABB2BF;">{ </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">]; </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> h;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">A</span></span>
<span class="line"><span style="color:#ABB2BF;">    { </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> a; </span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#C678DD;">double</span><span style="color:#ABB2BF;"> b; </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">float</span><span style="color:#ABB2BF;"> c;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }MyStructA;</span></span>
<span class="line"><span style="color:#ABB2BF;">}MyStructGG;</span><span style="color:#7F848E;font-style:italic;">//32</span></span>
<span class="line"><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">SS</span></span>
<span class="line"><span style="color:#ABB2BF;">{ </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> a;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> b;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> c;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> d;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">FF</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> a1;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> b1;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">short</span><span style="color:#ABB2BF;"> c1;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> d1;</span><span style="color:#7F848E;font-style:italic;">//24[20]//21-23空出来,到这里21字节，不是struct里面最大的4的整数倍</span></span>
<span class="line"><span style="color:#ABB2BF;">    }MyStructFF;</span></span>
<span class="line"><span style="color:#C678DD;">#if</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> e;</span><span style="color:#7F848E;font-style:italic;">//[24],要4的整数倍,所以25-27为空</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //int e;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //double ww;</span></span>
<span class="line"><span style="color:#C678DD;">#endif</span></span>
<span class="line"><span style="color:#ABB2BF;">}MyStructSS;</span><span style="color:#7F848E;font-style:italic;">//28</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">argc</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">char</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">**</span><span style="color:#E06C75;font-style:italic;">argv</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot;sizeof(MyStructxx) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(MyStructxx) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot;sizeof(MyStruct1) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(MyStruct1) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot;sizeof(MyStruct2) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(MyStruct2) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot;sizeof(MyStructEE) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(MyStructEE) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot;sizeof(MyStructDD) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(MyStructDD) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    //cout &lt;&lt;&quot;sizeof(GG) = &quot; &lt;&lt; sizeof(GG) &lt;&lt; endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot;sizeof(MyStructGG) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(MyStructGG) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#98C379;">&quot;sizeof(MyStructSS) = &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">sizeof</span><span style="color:#ABB2BF;">(MyStructSS) </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}  </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(F,D){const n=o("font");return c(),t("div",null,[i,y,p("p",null,[s("对齐规则是"),p("strong",null,[s("按照成员的"),a(n,{color:"green"},{default:l(()=>[s("声明顺序")]),_:1}),s("，依次安排内存，其"),a(n,{color:"green"},{default:l(()=>[s("偏移量")]),_:1}),s("为"),a(n,{color:"green"},{default:l(()=>[s("成员")]),_:1}),s("大小的整数倍，"),a(n,{color:"red"},{default:l(()=>[s("0看做任何成员的整数倍")]),_:1}),s("，最后"),a(n,{color:"green"},{default:l(()=>[s("结构体")]),_:1}),s("的大小为"),a(n,{color:"green"},{default:l(()=>[s("最大成员")]),_:1}),s("的整数倍")])]),d,p("p",null,[s("1.平台原因(移植原因)：不是所有的硬件平台都能访问任意地址上的任意数据的；某些硬件平台只能在某些地址处取某些特定类型的数据，否则抛出硬件异常。 2.性能原因：数据结构(尤其是栈)应该尽可能地在自然边界上对齐。原因在于，为了访问未对齐的内存，处理器需要作两次内存访问；而对齐的内存访问仅需要一次访问。 解释二 原因有这么几点： "),p("strong",null,[s("1、"),a(n,{color:"green"},{default:l(()=>[s("CPU 对内存")]),_:1}),s("的读取不是连续的，而是"),a(n,{color:"green"},{default:l(()=>[s("分成块读取")]),_:1}),s("的，块的大小只能是1、2、4、8、16 ... 字节；")]),p("strong",null,[s("2、"),a(n,{color:"green"},{default:l(()=>[s("当读取操作的数据未对齐，则需要两次")]),_:1}),s("总线周期来"),a(n,{color:"green"},{default:l(()=>[s("访问内存")]),_:1}),s("，因此"),a(n,{color:"red"},{default:l(()=>[s("性能会大打折扣")]),_:1}),s("；")]),p("strong",null,[s("3、"),a(n,{color:"green"},{default:l(()=>[s("某些硬件平台只能从规定的相对地址处读取特定类型的数据")]),_:1}),s("，否则会"),a(n,{color:"red"},{default:l(()=>[s("产生异常")]),_:1}),s("。")])]),u])}const m=e(B,[["render",v],["__file","内存对齐.html.vue"]]);export{m as default};
