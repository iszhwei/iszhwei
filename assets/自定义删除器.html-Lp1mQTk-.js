import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as l,a}from"./app-m9pC5KT-.js";const p="/assets/b78c7f37ce1e48b39fa8f869bd33f9bd-GdbnWY3A.png",o={},e=a('<h1 id="自定义删除器" tabindex="-1"><a class="header-anchor" href="#自定义删除器" aria-hidden="true">#</a> 自定义删除器</h1><ul><li>并不是说所有资源的释放都是delete指针 进行释放的。</li><li>比如说，用智能指针来托管数组的资源，delete就得加个中括号[]了，</li><li>如果用智能指针管理的是文件资源，或者是其他资源，释放的方式不是delete。</li></ul><p>作用：<strong>能保证资源的绝对释放</strong></p><p><code>unique_ptr shared_ptr</code>都可以提供自定义删除器，本质上也就是智能指针<strong>第二参数给函数对象类</strong>，在类的operator()运算符重载资源释放工作，用法见下方代码：</p><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;memory&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;functional&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;thread&gt;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">namespace</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">MyDeletor</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">operator</span><span style="color:#ABB2BF;">()(</span><span style="color:#E5C07B;">T</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">ptr</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">const</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;call MyDeletor::operator()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">delete[]</span><span style="color:#ABB2BF;"> ptr;</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">typename</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">MyFileDeletor</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">operator</span><span style="color:#ABB2BF;">()(</span><span style="color:#E5C07B;">T</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">ptr</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">const</span></span>
<span class="line"><span style="color:#ABB2BF;">	{</span></span>
<span class="line"><span style="color:#ABB2BF;">		cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;call MyFileDeletor::operator()&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#61AFEF;">fclose</span><span style="color:#ABB2BF;">(ptr);</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">	unique_ptr</span><span style="color:#C678DD;">&lt;int</span><span style="color:#ABB2BF;">, MyDeletor</span><span style="color:#C678DD;">&lt;int&gt;&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ptr1</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"><span style="color:#ABB2BF;">	unique_ptr</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">FILE, MyFileDeletor</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">FILE</span><span style="color:#C678DD;">&gt;&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ptr2</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">fopen</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;aaa.txt&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;w&quot;</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//lambda表达式方法,lambda表达式也就是一个临时的函数对象</span></span>
<span class="line"><span style="color:#ABB2BF;">	unique_ptr</span><span style="color:#C678DD;">&lt;int</span><span style="color:#ABB2BF;">, function</span><span style="color:#C678DD;">&lt;void</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">&gt;&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ptr3</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">		[](</span><span style="color:#C678DD;">int*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">p</span><span style="color:#ABB2BF;">)-&gt;</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">			cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;lambda!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">delete</span><span style="color:#ABB2BF;">[]p;</span></span>
<span class="line"><span style="color:#ABB2BF;">		});</span></span>
<span class="line"><span style="color:#ABB2BF;">	unique_ptr</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">FILE, function</span><span style="color:#C678DD;">&lt;void</span><span style="color:#ABB2BF;">(FILE</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">&gt;&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ptr4</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">fopen</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;aaa.txt&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;w&quot;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">		[](</span><span style="color:#E5C07B;">FILE</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">p</span><span style="color:#ABB2BF;">)-&gt;</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">			cout </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;FILE deleter lambda!&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;&lt;</span><span style="color:#ABB2BF;"> endl;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#61AFEF;">fclose</span><span style="color:#ABB2BF;">(p);</span></span>
<span class="line"><span style="color:#ABB2BF;">		});</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>lamda表达式对象的类型如何确定？</strong></p><p>function函数对象类型，可以留下lamda表达式的类型</p>`,8),t=[e];function c(B,r){return n(),l("div",null,t)}const d=s(o,[["render",c],["__file","自定义删除器.html.vue"]]);export{d as default};
