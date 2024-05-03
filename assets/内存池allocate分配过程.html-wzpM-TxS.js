import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as l,a}from"./app-mYdPlPhZ.js";const e="/assets/watermark_type_ZHJvaWRzYW5zZmFsbGJhY2s_shadow_50_text_Q1NETiBAQnVnTWFrZXItc2hlbg___size_20_color_FFFFFF_t_70_g_se_x_16-MCZhOoOh.png",p={},o=a('<h1 id="内存池allocate分配过程" tabindex="-1"><a class="header-anchor" href="#内存池allocate分配过程" aria-hidden="true">#</a> 内存池allocate分配过程</h1><p>根据想分配的内存大小，先定位到<code>_S_free_list</code> 相应的元素<code>__my_free_list</code>（总共16个元素）</p><ul><li><p>如果<code>__my_free_list</code>下没有挂着空闲的chunk块，那直接从备用内存或者使用malloc申请chunk块，然后分配空间</p></li><li><p>如果还有空闲的chunk块，那就使得<code>_S_free_list</code> 相应的元素指向<code>__my_free_list</code>下面挂着的下一块空闲的内存块，然后把前一块内存分配出去</p></li></ul><figure><img src="'+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">template</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">threads</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">inst</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">__default_alloc_template</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">	//...</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_Lock</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">friend</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_Lock</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_Lock</span><span style="color:#ABB2BF;"> {</span><span style="color:#7F848E;font-style:italic;">	//出作用域自动解锁</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">_Lock</span><span style="color:#ABB2BF;">() { __NODE_ALLOCATOR_LOCK; }</span><span style="color:#7F848E;font-style:italic;">	//构造函数加锁</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">~_Lock</span><span style="color:#ABB2BF;">() { __NODE_ALLOCATOR_UNLOCK; }</span><span style="color:#7F848E;font-style:italic;">	//析构函数解锁</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  	/* __n must be &gt; 0      */</span></span>
<span class="line"><span style="color:#ABB2BF;">  	</span><span style="color:#C678DD;">static</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void*</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">allocate</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">size_t</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">__n</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  	{</span></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#C678DD;">void</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> __ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      	</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (__n </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">size_t</span><span style="color:#ABB2BF;">) _MAX_BYTES) {</span><span style="color:#7F848E;font-style:italic;">	//enum {_MAX_BYTES = 128};</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">      		//超过128字节，使用一级空间配置器，底层malloc方法开辟内存</span></span>
<span class="line"><span style="color:#ABB2BF;">            __ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> malloc_alloc::</span><span style="color:#61AFEF;">allocate</span><span style="color:#ABB2BF;">(__n);	</span></span>
<span class="line"><span style="color:#ABB2BF;">    	}</span></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span><span style="color:#7F848E;font-style:italic;">	//小于128则通过内存池管理</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            //定义一个指针指向__n个字节应该在内存池哪个块分配</span></span>
<span class="line"><span style="color:#ABB2BF;">      		_Obj</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> __STL_VOLATILE</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> __my_free_list</span></span>
<span class="line"><span style="color:#ABB2BF;">          		</span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> _S_free_list </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_S_freelist_index</span><span style="color:#ABB2BF;">(__n);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#ifndef</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_NOTHREADS</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            //对于自由链表的增删改要加锁，不是线程安全的</span></span>
<span class="line"><span style="color:#ABB2BF;">      		_Lock __lock_instance;</span></span>
<span class="line"><span style="color:#C678DD;">#endif</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        	//result为第一个chunk块地址</span></span>
<span class="line"><span style="color:#ABB2BF;">      		_Obj</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> __RESTRICT __result </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">__my_free_list;</span></span>
<span class="line"><span style="color:#ABB2BF;">      		</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (__result </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">                //若__result下没有挂着空闲的chunk块，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">                //_S_refill直接构造chunk后分配，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">                //_S_round_up(__n)指的是内存池每个块的大小，</span></span>
<span class="line"><span style="color:#ABB2BF;">        		__ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_S_refill</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">_S_round_up</span><span style="color:#ABB2BF;">(__n));</span></span>
<span class="line"><span style="color:#ABB2BF;">      		</span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span><span style="color:#7F848E;font-style:italic;">//如果不为空，则ret指向链表的第一个节点</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">                //因为第一个chunk块要被分配出去了，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">                //也就是_S_free_list的元素直接指向后面的节点</span></span>
<span class="line"><span style="color:#ABB2BF;">        		</span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;">__my_free_list </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">__result </span><span style="color:#ABB2BF;">-&gt; </span><span style="color:#E06C75;">_M_free_list_link</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        		__ret </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> __result;</span><span style="color:#7F848E;font-style:italic;">// 这时候是要把__result分配出去</span></span>
<span class="line"><span style="color:#ABB2BF;">      		}</span></span>
<span class="line"><span style="color:#ABB2BF;">    	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> __ret;</span></span>
<span class="line"><span style="color:#ABB2BF;">  	};</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[o];function t(i,r){return n(),l("div",null,c)}const _=s(p,[["render",t],["__file","内存池allocate分配过程.html.vue"]]);export{_ as default};
