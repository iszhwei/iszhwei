import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as l,b as p,a as s}from"./app-2pke9_a8.js";const o={},e=s('<h1 id="二分查找总结" tabindex="-1"><a class="header-anchor" href="#二分查找总结" aria-hidden="true">#</a> 二分查找总结</h1><h2 id="使用条件" tabindex="-1"><a class="header-anchor" href="#使用条件" aria-hidden="true">#</a> 使用条件：</h2><p>线性表是有序表</p><blockquote><p>二分查找要求数据结构必须是顺序表，也就是类似于数组的<u>连续存储</u>，因为只有这样<u>才能一下定位出数组的中间位置（直接使用类似a[len / 2]）</u>，然后就可以把数组一分为二，进行后面的操作。 但是对于<u>链表，由于存储是离散的，不能像数组一样，快速定位中间位置，来把链表一分为二，所以一般的二分查找不能直接应用于链表</u></p></blockquote>',4),t=s(`<h2 id="基础版" tabindex="-1"><a class="header-anchor" href="#基础版" aria-hidden="true">#</a> 基础版</h2><h3 id="左闭右闭" tabindex="-1"><a class="header-anchor" href="#左闭右闭" aria-hidden="true">#</a> 左闭右闭</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">binary_search</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> start</span><span style="color:#C678DD;">=</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, end</span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">()</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;"> //注意end</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(start </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> end) {</span><span style="color:#7F848E;font-style:italic;">	//注意循环条件</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> start</span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">(end</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">start)</span><span style="color:#56B6C2;">/</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">	//计算中间下标</span></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[mid] </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> target)</span><span style="color:#7F848E;font-style:italic;"> 	//如果找到了，就返回下标</span></span>
<span class="line"><span style="color:#ABB2BF;">        	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> mid;</span></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[mid] </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> target) start</span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;">mid</span><span style="color:#56B6C2;">+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">	//如果发现这个数比目标数字小，就说明左半边都没有，直接从mid+1开始</span></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> end</span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;">mid</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">	//如果发现这个数比目标数字大，就说明右半边都没有，直接从mid-1开始</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="左闭右开" tabindex="-1"><a class="header-anchor" href="#左闭右开" aria-hidden="true">#</a> 左闭右开</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">binary_search</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> start</span><span style="color:#C678DD;">=</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, end</span><span style="color:#C678DD;">=</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">();</span><span style="color:#7F848E;font-style:italic;"> //注意end</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(start </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> end) {</span><span style="color:#7F848E;font-style:italic;">	//注意循环条件</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> start</span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">(end</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">start)</span><span style="color:#56B6C2;">/</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">	//计算中间下标</span></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[mid] </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> target)</span><span style="color:#7F848E;font-style:italic;"> 	//如果找到了，就返回下标</span></span>
<span class="line"><span style="color:#ABB2BF;">        	</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> mid;</span></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[mid] </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> target) start</span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;">mid</span><span style="color:#56B6C2;">+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">	//如果发现这个数比目标数字小，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">            //就说明左半边都没有，直接从mid+1开始</span></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> end</span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;">mid;</span><span style="color:#7F848E;font-style:italic;">	//因为右边界取不到，所有不需要减一</span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="升级版-可以有重复值" tabindex="-1"><a class="header-anchor" href="#升级版-可以有重复值" aria-hidden="true">#</a> 升级版（可以有重复值)</h2><p>当数组中有重复值的时候,返回该值第一个出现或者最后一个出现的下标. 比如<code>[1,2,2,2,2,2,3]</code>,如果返回第一个出现的地方,应该返回<code>1</code>,如果返回最后一个,应该返回<code>5</code>. 首先我们可以想到,可以通过二分法拿到某一个目标值,然后向左或者向右遍历找到边界 <strong>适用于</strong>： 一个就是很直接让你查找<mark>目标值的最左或者最右</mark>,另一个就是需要你查出<mark>目标值的区间起始下标</mark>.</p><h3 id="最左值" tabindex="-1"><a class="header-anchor" href="#最左值" aria-hidden="true">#</a> 最左值</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//缩小左区间求左边界</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">binary_search_L</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> left </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> (right </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> left)</span><span style="color:#56B6C2;">/</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[mid] </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> target)</span></span>
<span class="line"><span style="color:#ABB2BF;">            left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid;</span><span style="color:#7F848E;font-style:italic;">	//相等时让右边界为目标值，继续缩小左区间[left,mid)</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[left] </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> target)</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> left;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//F2</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Solution</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">public:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">search</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">       </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">()</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left</span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;">right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> left </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> (right </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> left)</span><span style="color:#56B6C2;">/</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(target </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[mid])</span></span>
<span class="line"><span style="color:#ABB2BF;">            left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">	//相等时让右边界为目标值，继续缩小左区间[left,mid)</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[left] </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> target)</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> left;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为什么该算法能够搜索左侧边界？</strong> 关键在对于 nums[mid]==target 这种情况的处理，找到 target 时不要立即返回，而是缩小搜索区间的上界 right ，在区间 [left,mid) 中继续搜索，即不断向左收缩，达到锁定左侧边界的目的。</p><h3 id="最右值" tabindex="-1"><a class="header-anchor" href="#最右值" aria-hidden="true">#</a> 最右值</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//向右逼近右边界 F1 左闭右开</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">binary_search_R</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left</span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;">right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> left </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> (right </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> left)</span><span style="color:#56B6C2;">/</span><span style="color:#D19A66;">2</span><span style="color:#56B6C2;">+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(target </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[mid])</span></span>
<span class="line"><span style="color:#ABB2BF;">            right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> right</span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> right </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span><span style="color:#7F848E;font-style:italic;">//或返回left[mid,right)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//F2 左闭右闭</span></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">search</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">vector</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">nums</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">target</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">empty</span><span style="color:#ABB2BF;">()) </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">size</span><span style="color:#ABB2BF;">() </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;">(left </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> right) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">auto</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> left </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> (right </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> left)</span><span style="color:#56B6C2;">/</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(target </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[mid]) right </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> left </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(right </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">nums</span><span style="color:#ABB2BF;">[right] </span><span style="color:#C678DD;">!=</span><span style="color:#ABB2BF;"> target)</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> right;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function B(c,r){return a(),l("div",null,[e,p("more"),t])}const F=n(o,[["render",B],["__file","二分查找总结.html.vue"]]);export{F as default};
