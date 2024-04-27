import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as t,d as n,f as l,w as r,e as s,a}from"./app-9OmaxHRC.js";const B="/assets/image-20240114222645084-6qBrF1HV.png",d="/assets/image-20240115123654224-3EpMI7Kl.png",b="/assets/728da9773912b31b5e8bf4538918367adbb4e1e1-HGGiXGn_.png",y="/assets/image-20231217144250890-DdMug0Z2.png",v="/assets/abdc4828051fc5b3992b5edc69ce7c51-zEuBwwrU.png",u="/assets/b5aa335a22dc409897e8de5b1b13edc8tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-VzbO-A6_.webp",m="/assets/02f2d52bb7c64d22b5bf23f01672d570tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-Xs_f7NdQ.webp",A="/assets/be17ab517e3b47849770c008392260cbtplv-k3u1fbpfcp-zoom-in-crop-mark1512000-if4GcpNr.webp",F={},f=a(`<h1 id="typora配置" tabindex="-1"><a class="header-anchor" href="#typora配置" aria-hidden="true">#</a> typora配置</h1><h2 id="右键新建文件中没有-md" tabindex="-1"><a class="header-anchor" href="#右键新建文件中没有-md" aria-hidden="true">#</a> 右键新建文件中没有<code>.md</code></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">Windows Registry Editor Version 5.00</span></span>
<span class="line"><span style="color:#abb2bf;">[HKEY_CLASSES_ROOT\\.md]</span></span>
<span class="line"><span style="color:#abb2bf;">@=&quot;Typora.exe&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">[HKEY_CLASSES_ROOT\\.md\\ShellNew]</span></span>
<span class="line"><span style="color:#abb2bf;">&quot;NullFile&quot;=&quot;&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">[HKEY_CLASSES_ROOT\\Typora.exe]</span></span>
<span class="line"><span style="color:#abb2bf;">@=&quot;Markdown&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@=“Typora.exe”</code> 指定.md文件的运行程序 <code>@=“Markdown”</code> 指定右键新建的.md文件的默认名字, 也指定右键菜单新建相应选项名为 MarkDown</p><p>重名为<code>TyporaNewFile.reg</code>(后缀为<code>.reg</code>就行)，双击运行</p><h2 id="新建markdown时使用模板" tabindex="-1"><a class="header-anchor" href="#新建markdown时使用模板" aria-hidden="true">#</a> 新建markdown时使用模板</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">//Template.md</span></span>
<span class="line"><span style="color:#E06C75;">---</span></span>
<span class="line"><span style="color:#E06C75;"># 这是文章的标题</span></span>
<span class="line"><span style="color:#ABB2BF;">title: 页面配置</span></span>
<span class="line"><span style="color:#E06C75;"># 这是页面的图标</span></span>
<span class="line"><span style="color:#ABB2BF;">icon: file</span></span>
<span class="line"><span style="color:#E06C75;"># 这是侧边栏的顺序</span></span>
<span class="line"><span style="color:#ABB2BF;">order: 3</span></span>
<span class="line"><span style="color:#E06C75;"># 设置写作时间</span></span>
<span class="line"><span style="color:#ABB2BF;">date: 2020-01-01</span></span>
<span class="line"><span style="color:#E06C75;"># 一个页面可以有多个分类</span></span>
<span class="line"><span style="color:#ABB2BF;">category:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">-</span><span style="color:#ABB2BF;"> 使用指南</span></span>
<span class="line"><span style="color:#E06C75;"># 一个页面可以有多个标签</span></span>
<span class="line"><span style="color:#ABB2BF;">tag:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">-</span><span style="color:#ABB2BF;"> 页面配置</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">-</span><span style="color:#ABB2BF;"> 使用指南</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!--more--&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>把模板文件放到<code>C:\\Windows\\ShellNew</code>下</li><li><code>win + R</code>输入<code>regedit</code>打开注册表</li><li><code>ctl + F</code>搜<code>.md</code>，配置如下（没有的就新建）<strong>刚开始也是不行，多重复几遍就好了</strong></li></ol><figure><img src="`+B+`" alt="image-20240114222645084" tabindex="0" loading="lazy"><figcaption>image-20240114222645084</figcaption></figure><h2 id="微软输入法自定义快捷键快速修改日期" tabindex="-1"><a class="header-anchor" href="#微软输入法自定义快捷键快速修改日期" aria-hidden="true">#</a> 微软输入法自定义快捷键快速修改日期</h2><p>由于微软自带的日期格式<code>2024年1月15日</code>与blog匹配的格式不一样需要改成<code>2024-01-15</code>，步骤如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">打开输入法设置-&gt;词库和自学习-&gt;用户自定义的短语-&gt;添加或编辑自定义的短语-&gt;添加%yyyy%-%MM%-%dd%</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="image-20240115123654224" tabindex="0" loading="lazy"><figcaption>image-20240115123654224</figcaption></figure><h2 id="增加快捷键修改颜色功能" tabindex="-1"><a class="header-anchor" href="#增加快捷键修改颜色功能" aria-hidden="true">#</a> 增加快捷键修改颜色功能</h2>',14),C=a(`<h2 id="修改下划线的颜色和高度" tabindex="-1"><a class="header-anchor" href="#修改下划线的颜色和高度" aria-hidden="true">#</a> 修改下划线的颜色和高度</h2><p>默认的下划线样式就好像一条舔狗，死死地咬着文本不放</p><p>在主题文件夹下打开&quot;base.user.css&quot;文件（没有就新建），加入</p><p>方法一：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">/* 自定义红色下划线样式 */</span></span>
<span class="line"><span style="color:#abb2bf;">u {</span></span>
<span class="line"><span style="color:#abb2bf;">    text-decoration: underline;</span></span>
<span class="line"><span style="color:#abb2bf;">    text-decoration-color: red;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二（正在用）：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">u</span><span style="color:#ABB2BF;"> {</span><span style="color:#7F848E;font-style:italic;">/*处理下划线显示，对应快捷键Ctrl+U*/</span></span>
<span class="line"><span style="color:#ABB2BF;">    text-decoration: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    border-width: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/*下划线线条粗细*/</span></span>
<span class="line"><span style="color:#ABB2BF;">    border-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    border-style: </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/*下划线与文字距离*/</span></span>
<span class="line"><span style="color:#ABB2BF;">  }  </span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置代码快边框的样式" tabindex="-1"><a class="header-anchor" href="#设置代码快边框的样式" aria-hidden="true">#</a> 设置代码快边框的样式</h2><p>在主题文件夹下打开&quot;base.user.css&quot;文件（没有就新建），加入</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* 设置代码块边框样式 */</span></span>
<span class="line"><span style="color:#61AFEF;">#write</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.md-fences</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    border: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">rgb</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* 修改代码块的样式 */</span></span>
<span class="line"><span style="color:#ABB2BF;">#</span><span style="color:#E5C07B;">write</span><span style="color:#ABB2BF;"> .</span><span style="color:#E06C75;">md</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">fences</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">border</span><span style="color:#ABB2BF;">: 1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">solid</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">rgb</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">/*设置代码块的边框*/</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">webkit</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">font</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">smoothing</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">initial</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">margin</span><span style="color:#ABB2BF;">: 0.5</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/* padding: 0.3rem 0 !important; */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">padding</span><span style="color:#ABB2BF;">: 3</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> 5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">line</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;">: 1.55</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">border</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">radius</span><span style="color:#ABB2BF;">: 2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/*font-family: &#39;Roboto Mono&#39;, &#39;Source Sans Pro&#39;, &#39;Microsoft YaHei&#39;, &#39;微软雅黑&#39; !important;*/</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/*font-family: &#39;Roboto Mono&#39;, &#39;Source Sans Pro&#39;, &#39;Microsoft YaHei&#39;, &#39;微软雅黑&#39;;*/</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">font</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">family</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">Consolas</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;Source Han SerifCN&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">Georgia</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">Times</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;SimSun&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">important</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/*font-size: 0.9rem;*/</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">font</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">size</span><span style="color:#ABB2BF;">: 17</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">font</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">weight</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">normal</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">word</span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">wrap</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">normal</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**apply to code fences with plan text**/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改加粗样式" tabindex="-1"><a class="header-anchor" href="#修改加粗样式" aria-hidden="true">#</a> 修改加粗样式</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* 修改加粗样式 */</span></span>
<span class="line"><span style="color:#E06C75;">strong</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">#00F</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">1.05</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在CSS中，使用text-decoration属性来定义段落文本的下划线、删除线和顶划线。none即为默认值，可以用这个属性值也可以去掉已经有下划线或删除线或顶划线的样式</p><p>text-decoration是三个属性的缩写：text-decoration-line，text-decoration-color，text-decoration-style</p><p>1、text-decoration-line</p><p>定义：用来规定文本修饰要使用的线条类型。</p><p>取值：none，underline，line-through(规定文本中间将显示一条线)等等。</p><p>2、text-decoration-color</p><p>定义：用来规定文本修饰（下划线 underline、上划线 overline、中划线 line-through）的颜色。</p><p>取值：所有颜色表示法。</p><p>3、text-decoration-style</p><p>定义：用来规定线条如何显示。</p><p>取值：solid和double和dotted和dashed等等。</p><figure><img src="`+b+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>常用的CSS文本属性：</p><p>1、font-size 字体大小</p><p>2、color 字体颜色</p><p>3、line-height 行高</p><p>4、text-decoration 文本修饰(如下划线)</p><p>5、text-indent 文本缩进</p><p>6、background-color 背景颜色</p></blockquote><h2 id="标题、目录、大纲自动编号" tabindex="-1"><a class="header-anchor" href="#标题、目录、大纲自动编号" aria-hidden="true">#</a> 标题、目录、大纲自动编号</h2><p>在主题文件夹下打开&quot;base.user.css&quot;文件（没有就新建），加入</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* 注意：1. 计数是从第二级标题开始的，第一级标题做题目</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">        2. 必须得有一级标题才能计数，不能直接写第2级标题，否则乱序 */</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*文章内容自动编号*/</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/** initialize css counter */</span></span>
<span class="line"><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h2</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h3</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#E06C75;">h3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h4</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#E06C75;">h4</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h5</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#E06C75;">h5</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h6</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/** put counter result into headings */</span></span>
<span class="line"><span style="color:#61AFEF;">#write</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">h2</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h2;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">#write</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">h3</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">h3</span><span style="color:#D19A66;">.md-focus.md-heading</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">/** override the default style for focused headings */</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h3;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">#write</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">h4</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">h4</span><span style="color:#D19A66;">.md-focus.md-heading</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h4;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h4</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">#write</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">h5</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">h5</span><span style="color:#D19A66;">.md-focus.md-heading</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h5;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h4</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h5</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">#write</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">h6</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">h6</span><span style="color:#D19A66;">.md-focus.md-heading</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h6;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h4</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h5</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h6</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/** override the default style for focused headings */</span></span>
<span class="line"><span style="color:#61AFEF;">#write</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#E06C75;">h3</span><span style="color:#D19A66;">.md-focus</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#61AFEF;">#write</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#E06C75;">h4</span><span style="color:#D19A66;">.md-focus</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#61AFEF;">#write</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#E06C75;">h5</span><span style="color:#D19A66;">.md-focus</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#61AFEF;">#write</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#E06C75;">h6</span><span style="color:#D19A66;">.md-focus</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">h3</span><span style="color:#D19A66;">.md-focus</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">h4</span><span style="color:#D19A66;">.md-focus</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">h5</span><span style="color:#D19A66;">.md-focus</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">h6</span><span style="color:#D19A66;">.md-focus</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    border: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    border-radius: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    position: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    left:</span><span style="color:#D19A66;">initial</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    float: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    top:</span><span style="color:#D19A66;">initial</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-left: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    padding-right: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    vertical-align: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-weight: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    line-height: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*文章主题自动编号*/</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* No link underlines in TOC */</span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-inner</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    text-decoration: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">1.5</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h2toc</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">1.1</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h3toc</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">.9</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h4toc</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h4</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">4</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">.85</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h5toc</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h5</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">.8</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h6toc</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h6</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">6</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">.75</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h2</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">black</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h2toc;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h2</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.md-toc-inner</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h3</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">black</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h3toc;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h3</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.md-toc-inner</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h4</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">black</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h4toc;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h4toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h4</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.md-toc-inner</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h5</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">black</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h5toc;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h4toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h5toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h5</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.md-toc-inner</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h6</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">black</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h6toc;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h4toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h5toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h6toc</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.md-toc-h6</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.md-toc-inner</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    margin-left: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*文章大纲自动编号*/</span></span>
<span class="line"><span style="color:#D19A66;">.outline-h1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h2</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.outline-h2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h3</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.outline-h3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h4</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.outline-h4</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h5</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.outline-h5</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-reset: h6</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.outline-h2</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">.outline-item</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">.outline-label</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h2;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.outline-h3</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">.outline-item</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">.outline-label</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h3;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.outline-h4</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">.outline-item</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">.outline-label</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h4;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h4</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.outline-h5</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">.outline-item</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">.outline-label</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h5;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h4</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h5</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#D19A66;">.outline-h6</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">.outline-item</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">.outline-label</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    counter-increment: h6;</span></span>
<span class="line"><span style="color:#ABB2BF;">    content: </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h2</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h3</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h4</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h5</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;.&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">counter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">h6</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">&quot;. &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加代码块折叠按钮" tabindex="-1"><a class="header-anchor" href="#添加代码块折叠按钮" aria-hidden="true">#</a> 添加代码块折叠按钮</h2><p>先备份下面文件，然后在进行修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">D:\\Typora\\resources\\appsrc\\window\\frame.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文件 frame.js的末尾添加如下代码</p><h3 id="在单个代码块添加代码收缩按钮" tabindex="-1"><a class="header-anchor" href="#在单个代码块添加代码收缩按钮" aria-hidden="true">#</a> 在单个代码块添加代码收缩按钮</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 添加代码收缩功能</span></span>
<span class="line"><span style="color:#E5C07B;">content</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;mouseover&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setTimeout</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#E5C07B;">codeDivs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">div</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">index</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">div</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">firstChild</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">nodeName</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;BUTTON&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E5C07B;">button</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">className</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;contract-code-button&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E5C07B;">button</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerText</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;代码收缩&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E5C07B;">button</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">div</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">style</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;2.9em&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">						</span><span style="color:#E5C07B;">button</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerText</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;代码展开&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">						</span><span style="color:#E5C07B;">div</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">style</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;2.9em&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">					} </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">						</span><span style="color:#E5C07B;">button</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerText</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;代码收缩&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">						</span><span style="color:#E5C07B;">div</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">style</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;inherit&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">					}</span></span>
<span class="line"><span style="color:#ABB2BF;">				}</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E5C07B;">div</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">insertBefore</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">div</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">firstChild</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">			}</span></span>
<span class="line"><span style="color:#ABB2BF;">		});</span></span>
<span class="line"><span style="color:#ABB2BF;">	}, </span><span style="color:#D19A66;">1000</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加收缩文件全部代码块按钮" tabindex="-1"><a class="header-anchor" href="#添加收缩文件全部代码块按钮" aria-hidden="true">#</a> 添加收缩文件全部代码块按钮</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 添加收缩全部按钮</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">isAdd</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">content</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;load&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setTimeout</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">		</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">isAdd</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">footer</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementsByTagName</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;footer&quot;</span><span style="color:#ABB2BF;">)[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;font-style:italic;">// 全部收缩按钮</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">contractButton</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">contractButton</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerText</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;全部收缩&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">contractButton</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;contarctAllButton&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">contractButton</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">className</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;contract-all-button&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">contractButton</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">buttons</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementsByClassName</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;contract-code-button&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E5C07B;">buttons</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">button</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">index</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">button</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">parentNode</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E5C07B;">button</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerText</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;代码展开&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E5C07B;">div</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">style</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;2.9em&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">				});</span></span>
<span class="line"><span style="color:#ABB2BF;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#7F848E;font-style:italic;">// 全部展开按钮</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">expandButton</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">expandButton</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerText</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;全部展开&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">expandButton</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;expandAllButton&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">expandButton</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">className</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;expand-all-button&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">expandButton</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onclick</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">buttons</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementsByClassName</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;contract-code-button&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">				</span><span style="color:#E5C07B;">buttons</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">button</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">index</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">button</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">parentNode</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E5C07B;">button</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerText</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;代码收缩&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">					</span><span style="color:#E5C07B;">div</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">style</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;inherit&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">				});</span></span>
<span class="line"><span style="color:#ABB2BF;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">footer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">contractButton</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E5C07B;">footer</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">expandButton</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">			</span><span style="color:#E06C75;">isAdd</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">		}</span></span>
<span class="line"><span style="color:#ABB2BF;">	}, </span><span style="color:#D19A66;">1000</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),h={id:"文档间锚点、文档间跳转返回、突破typora的iframe登录限制、代码块收缩",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#文档间锚点、文档间跳转返回、突破typora的iframe登录限制、代码块收缩","aria-hidden":"true"},"#",-1),E={href:"https://so.csdn.net/so/search?q=iframe&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},q=a(`<h4 id="文档间锚点" tabindex="-1"><a class="header-anchor" href="#文档间锚点" aria-hidden="true">#</a> 文档间锚点</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">[]()    //ctrl + k 创建超链接</span></span>
<span class="line"><span style="color:#abb2bf;">[要展现的文字] (#标题名称) // 使用#可以实现跳转到标题</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#%E4%BF%AE%E6%94%B9%E4%B8%8B%E5%88%92%E7%BA%BF%E7%9A%84%E9%A2%9C%E8%89%B2%E5%92%8C%E9%AB%98%E5%BA%A6">跳转到修改下划线</a></p><p>使用Typora记录笔记的时候虽然支持页间跳转,但是不支持文档之间的跳转,很不方便。所以,我自己为Typora添加一点小功能,毕竟这是个伪装成Markdown编辑器的浏览器。</p><h4 id="文档间跳转返回" tabindex="-1"><a class="header-anchor" href="#文档间跳转返回" aria-hidden="true">#</a> 文档间跳转返回</h4><p>在使用超链接在一个md中跳转之后，我有时候希望返回到超链接的位置，所以我做了一个点击后就会返回的按钮。</p><h4 id="突破typora的iframe登录限制" tabindex="-1"><a class="header-anchor" href="#突破typora的iframe登录限制" aria-hidden="true">#</a> 突破Typora的iframe登录限制</h4><p>在Typora中Iframe是无法登录的，修改沙箱属性也没办法。所以我通过自建立节点的方式来脱离它的控制，这里我会使用百度脑图作为演示。</p><h4 id="代码块收缩" tabindex="-1"><a class="header-anchor" href="#代码块收缩" aria-hidden="true">#</a> 代码块收缩</h4><p>可以让代码块编程一行，便于排版吧，个人想加个这个功能，这功能可能不太大众。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">//# sourceMappingURL=http://typora/app/window/frame.js.map</span></span>
<span class="line"><span style="color:#abb2bf;">var content = document.getElementsByTagName(&quot;content&quot;)[0];</span></span>
<span class="line"><span style="color:#abb2bf;">var jumpTime = 100;</span></span>
<span class="line"><span style="color:#abb2bf;">var jumpCount = 5;</span></span>
<span class="line"><span style="color:#abb2bf;">var write = document.getElementById(&quot;write&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">var hasAddIframe = false;</span></span>
<span class="line"><span style="color:#abb2bf;">var codeDivs = document.getElementsByClassName(&quot;CodeMirror&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">content.addEventListener(&quot;mouseover&quot;, function() {</span></span>
<span class="line"><span style="color:#abb2bf;">    window.setTimeout(function() {</span></span>
<span class="line"><span style="color:#abb2bf;">        var elements = document.querySelectorAll(&quot;#write a&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">        // 为每一个标记都添加事件,用于存储锚点</span></span>
<span class="line"><span style="color:#abb2bf;">        for (let index = 0; index &lt; elements.length; index++) {</span></span>
<span class="line"><span style="color:#abb2bf;">            const element = elements[index];</span></span>
<span class="line"><span style="color:#abb2bf;">            if(element.getAttribute(&quot;isAddAnchorEvent&quot;) !== true){</span></span>
<span class="line"><span style="color:#abb2bf;">                element.addEventListener(&quot;mouseover&quot;, function(e) {</span></span>
<span class="line"><span style="color:#abb2bf;">                    var reg = new RegExp(&#39;\\#[^\\&quot;]+&#39;, [&quot;g&quot;]);</span></span>
<span class="line"><span style="color:#abb2bf;">                    var outText = element.outerHTML;</span></span>
<span class="line"><span style="color:#abb2bf;">                    var regResult = reg.exec(outText);</span></span>
<span class="line"><span style="color:#abb2bf;">                    if(regResult != null){</span></span>
<span class="line"><span style="color:#abb2bf;">                        var jumpValue = decodeURI(regResult[0]);</span></span>
<span class="line"><span style="color:#abb2bf;">                        window.localStorage.setItem(&quot;jump&quot;, jumpValue);</span></span>
<span class="line"><span style="color:#abb2bf;">                        console.log(jumpValue);</span></span>
<span class="line"><span style="color:#abb2bf;">                    }</span></span>
<span class="line"><span style="color:#abb2bf;">                }, true);</span></span>
<span class="line"><span style="color:#abb2bf;">                // 设置标记</span></span>
<span class="line"><span style="color:#abb2bf;">                element.setAttribute(&quot;isAddAnchorEvent&quot;,true);</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">    }, 1000);</span></span>
<span class="line"><span style="color:#abb2bf;">},true);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 跳转文档后，使用锚点</span></span>
<span class="line"><span style="color:#abb2bf;">content.addEventListener(&quot;load&quot;, function() {</span></span>
<span class="line"><span style="color:#abb2bf;">    window.setTimeout(function() {</span></span>
<span class="line"><span style="color:#abb2bf;">        var value = localStorage.getItem(&quot;jump&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">        if(value != null){</span></span>
<span class="line"><span style="color:#abb2bf;">           var name = value.substring(1,value.length);</span></span>
<span class="line"><span style="color:#abb2bf;">           var element;</span></span>
<span class="line"><span style="color:#abb2bf;">           var hs = document.querySelectorAll(&quot;h1,h2,h3,h4,h5,h6&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">           var top;</span></span>
<span class="line"><span style="color:#abb2bf;">           // 先搜索标题</span></span>
<span class="line"><span style="color:#abb2bf;">           hs.forEach(function(h) {</span></span>
<span class="line"><span style="color:#abb2bf;">               if (h.innerText.toLowerCase() == name.toLowerCase()) {</span></span>
<span class="line"><span style="color:#abb2bf;">                   element = h;</span></span>
<span class="line"><span style="color:#abb2bf;">                   top = h.offsetTop;</span></span>
<span class="line"><span style="color:#abb2bf;">                   return;</span></span>
<span class="line"><span style="color:#abb2bf;">               }</span></span>
<span class="line"><span style="color:#abb2bf;">           });</span></span>
<span class="line"><span style="color:#abb2bf;">           // 再搜索name</span></span>
<span class="line"><span style="color:#abb2bf;">           if(element == undefined){</span></span>
<span class="line"><span style="color:#abb2bf;">               var selector = &quot;[name=&quot; + name + &quot;]&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">               element = document.querySelector(selector);</span></span>
<span class="line"><span style="color:#abb2bf;">               top = findTop(element);</span></span>
<span class="line"><span style="color:#abb2bf;">           }</span></span>
<span class="line"><span style="color:#abb2bf;">           content.scrollTop=top;</span></span>
<span class="line"><span style="color:#abb2bf;">           console.log(&quot;跳转高度:&quot;  + top);</span></span>
<span class="line"><span style="color:#abb2bf;">       }</span></span>
<span class="line"><span style="color:#abb2bf;">    }, 1000);</span></span>
<span class="line"><span style="color:#abb2bf;">},true);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 删除锚点</span></span>
<span class="line"><span style="color:#abb2bf;">content.addEventListener(&quot;load&quot;, function() {</span></span>
<span class="line"><span style="color:#abb2bf;">    window.setTimeout(function() {</span></span>
<span class="line"><span style="color:#abb2bf;">       	 console.log(&quot;删除锚点记录&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">        // 开始删除jump</span></span>
<span class="line"><span style="color:#abb2bf;">        localStorage.removeItem(&quot;jump&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">    }, 30000);</span></span>
<span class="line"><span style="color:#abb2bf;">},true);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 解除Typora的登录限制功能，结合百度脑图</span></span>
<span class="line"><span style="color:#abb2bf;">content.addEventListener(&quot;mouseover&quot;, function() {</span></span>
<span class="line"><span style="color:#abb2bf;">    window.setTimeout(function() {</span></span>
<span class="line"><span style="color:#abb2bf;">        if(!hasAddIframe){</span></span>
<span class="line"><span style="color:#abb2bf;">            var iframeDivs = document.getElementsByName(&quot;iframe&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">            iframeDivs.forEach((iframeDiv)=&gt;{</span></span>
<span class="line"><span style="color:#abb2bf;">                if (iframeDiv!=null&amp;&amp;iframeDiv.childElementCount == 0) {</span></span>
<span class="line"><span style="color:#abb2bf;">                    var iframe = document.createElement(&quot;iframe&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">                    iframe.src = iframeDiv.getAttribute(&quot;style&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">                    iframe.sandbox = &quot;allow-scripts allow-same-origin allow-popups allow-top-navigation allow-pointer-lock allow-forms&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    iframe.scrolling = &quot;no&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    iframe.height = &quot;100%&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    iframe.width = &quot;100%&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    iframeDiv.appendChild(iframe);</span></span>
<span class="line"><span style="color:#abb2bf;">                }</span></span>
<span class="line"><span style="color:#abb2bf;">            });</span></span>
<span class="line"><span style="color:#abb2bf;">            console.log(&quot;添加iframe成功&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">            hasAddIframe = true;</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">    }, 1000);</span></span>
<span class="line"><span style="color:#abb2bf;">},true);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 添加代码收缩公共能</span></span>
<span class="line"><span style="color:#abb2bf;">content.addEventListener(&quot;mouseover&quot;, function() {</span></span>
<span class="line"><span style="color:#abb2bf;">  window.setTimeout(function() {</span></span>
<span class="line"><span style="color:#abb2bf;">      codeDivs.forEach((div,index)=&gt;{</span></span>
<span class="line"><span style="color:#abb2bf;">        if(div.firstChild.nodeName != &quot;BUTTON&quot;){</span></span>
<span class="line"><span style="color:#abb2bf;">            var button = document.createElement(&quot;button&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">            button.className = &quot;contract-code-button&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">            button.innerText =  &quot;代码收缩&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">            button.onclick = (e)=&gt;{</span></span>
<span class="line"><span style="color:#abb2bf;">              if(div.style.height != &quot;2.9em&quot;){</span></span>
<span class="line"><span style="color:#abb2bf;">                button.innerText =  &quot;代码展开&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                div.style.height = &quot;2.9em&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">              } else{</span></span>
<span class="line"><span style="color:#abb2bf;">                button.innerText =  &quot;代码收缩&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                div.style.height = &quot;inherit&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">              }</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">            div.insertBefore(button,div.firstChild)</span></span>
<span class="line"><span style="color:#abb2bf;">          }</span></span>
<span class="line"><span style="color:#abb2bf;">      });</span></span>
<span class="line"><span style="color:#abb2bf;">  }, 1000);</span></span>
<span class="line"><span style="color:#abb2bf;">},true);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 添加收缩全部按钮</span></span>
<span class="line"><span style="color:#abb2bf;">var isAdd = false;</span></span>
<span class="line"><span style="color:#abb2bf;">content.addEventListener(&quot;load&quot;, function() {</span></span>
<span class="line"><span style="color:#abb2bf;">    window.setTimeout(function() {</span></span>
<span class="line"><span style="color:#abb2bf;">        if(!isAdd){</span></span>
<span class="line"><span style="color:#abb2bf;">            var footer = document.getElementsByTagName(&quot;footer&quot;)[0];</span></span>
<span class="line"><span style="color:#abb2bf;">            </span></span>
<span class="line"><span style="color:#abb2bf;">            </span></span>
<span class="line"><span style="color:#abb2bf;">            // 全部收缩按钮</span></span>
<span class="line"><span style="color:#abb2bf;">            var contractButton = document.createElement(&quot;button&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">            contractButton.innerText = &quot;全部收缩&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">            contractButton.name=&quot;contarctAllButton&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">            contractButton.className = &quot;contract-all-button&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">            contractButton.onclick = (e)=&gt;{</span></span>
<span class="line"><span style="color:#abb2bf;">                var buttons = document.getElementsByClassName(&quot;contract-code-button&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">                buttons.forEach((button,index)=&gt;{</span></span>
<span class="line"><span style="color:#abb2bf;">                    var div = button.parentNode;</span></span>
<span class="line"><span style="color:#abb2bf;">                    button.innerText =  &quot;代码展开&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    div.style.height = &quot;2.9em&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                });</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">            </span></span>
<span class="line"><span style="color:#abb2bf;">            // 全部展开按钮</span></span>
<span class="line"><span style="color:#abb2bf;">            var expandButton = document.createElement(&quot;button&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">            expandButton.innerText = &quot;全部展开&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">            expandButton.name=&quot;expandAllButton&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">            expandButton.className = &quot;expand-all-button&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">            expandButton.onclick = (e)=&gt;{</span></span>
<span class="line"><span style="color:#abb2bf;">                var buttons = document.getElementsByClassName(&quot;contract-code-button&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">                buttons.forEach((button,index)=&gt;{</span></span>
<span class="line"><span style="color:#abb2bf;">                    var div = button.parentNode;</span></span>
<span class="line"><span style="color:#abb2bf;">                    button.innerText =  &quot;代码收缩&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    div.style.height = &quot;inherit&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                });</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">            footer.append(contractButton);</span></span>
<span class="line"><span style="color:#abb2bf;">            footer.append(expandButton);</span></span>
<span class="line"><span style="color:#abb2bf;">            isAdd = true;</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">    }, 1000);</span></span>
<span class="line"><span style="color:#abb2bf;">},true);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 添加业内返回跳转功能</span></span>
<span class="line"><span style="color:#abb2bf;">content.addEventListener(&quot;mouseover&quot;, function() {</span></span>
<span class="line"><span style="color:#abb2bf;">    window.setTimeout(function() {</span></span>
<span class="line"><span style="color:#abb2bf;">        var elements = document.querySelectorAll(&quot;a&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">        // 未添加事件</span></span>
<span class="line"><span style="color:#abb2bf;">        if(elements.length!=0){</span></span>
<span class="line"><span style="color:#abb2bf;">            // 为每一个标记都添加事件</span></span>
<span class="line"><span style="color:#abb2bf;">            for (let index = 0; index &lt; elements.length; index++) {</span></span>
<span class="line"><span style="color:#abb2bf;">                const element = elements[index];</span></span>
<span class="line"><span style="color:#abb2bf;">                element.addEventListener(&quot;click&quot;, function(e) {</span></span>
<span class="line"><span style="color:#abb2bf;">                if(e.ctrlKey==true){</span></span>
<span class="line"><span style="color:#abb2bf;">                    var footer = document.getElementsByTagName(&quot;footer&quot;)[0];</span></span>
<span class="line"><span style="color:#abb2bf;">                    var buttons =  document.querySelectorAll(&quot;[name=backButton]&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">                    if (buttons.length != 0) {</span></span>
<span class="line"><span style="color:#abb2bf;">                        removeChilds(footer,buttons);</span></span>
<span class="line"><span style="color:#abb2bf;">                    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">                    var button = document.createElement(&quot;button&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">                    var cancelButton = document.createElement(&quot;button&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">                    // 跳转的按钮</span></span>
<span class="line"><span style="color:#abb2bf;">                    button.innerText = &quot;返回&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    button.name=&quot;backButton&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    button.className = &quot;back-button&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    // 清除的按钮</span></span>
<span class="line"><span style="color:#abb2bf;">                    cancelButton.innerText = &quot;取消&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    cancelButton.name=&quot;backButton&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    cancelButton.className = &quot;cancel-button&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">                    </span></span>
<span class="line"><span style="color:#abb2bf;">                   </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">                    footer.append(button);</span></span>
<span class="line"><span style="color:#abb2bf;">                    footer.append(cancelButton);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">                    buttons =  document.querySelectorAll(&quot;[name=backButton]&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">                    button.onclick = (e) =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">                        e.cancelBubble = true;</span></span>
<span class="line"><span style="color:#abb2bf;">                        var jumpValue = localStorage.getItem(&quot;jump&quot;);</span></span>
<span class="line"><span style="color:#abb2bf;">                        var top = findTop(element);</span></span>
<span class="line"><span style="color:#abb2bf;">                        jumpTo(top,jumpTime,jumpCount);</span></span>
<span class="line"><span style="color:#abb2bf;">                        console.log(&quot;跳转高度:&quot;  + top);</span></span>
<span class="line"><span style="color:#abb2bf;">                        console.log(buttons);</span></span>
<span class="line"><span style="color:#abb2bf;">                        removeChilds(footer,buttons);</span></span>
<span class="line"><span style="color:#abb2bf;">                    };</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">                    cancelButton.onclick = (e) =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">                        e.cancelBubble = true;</span></span>
<span class="line"><span style="color:#abb2bf;">                        console.log(buttons);</span></span>
<span class="line"><span style="color:#abb2bf;">                        removeChilds(footer,buttons);</span></span>
<span class="line"><span style="color:#abb2bf;">                    };</span></span>
<span class="line"><span style="color:#abb2bf;">                }</span></span>
<span class="line"><span style="color:#abb2bf;">                }, true);</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">    }, 100);</span></span>
<span class="line"><span style="color:#abb2bf;">},true);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">function removeChilds(parent,children){</span></span>
<span class="line"><span style="color:#abb2bf;">	children.forEach((child,index)=&gt;{</span></span>
<span class="line"><span style="color:#abb2bf;">		parent.removeChild(child);</span></span>
<span class="line"><span style="color:#abb2bf;">	});</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">function findTop(element){</span></span>
<span class="line"><span style="color:#abb2bf;">    var topElement = element;</span></span>
<span class="line"><span style="color:#abb2bf;">    while(topElement.parentElement != write){</span></span>
<span class="line"><span style="color:#abb2bf;">		topElement = topElement.parentElement;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // ol元素中的特殊处理</span></span>
<span class="line"><span style="color:#abb2bf;">    if(topElement.nodeName.toLowerCase() == &quot;ol&quot; ||topElement.nodeName.toLowerCase() == &quot;ul&quot; ){</span></span>
<span class="line"><span style="color:#abb2bf;">       var liElement = element;</span></span>
<span class="line"><span style="color:#abb2bf;">       var array  = [];</span></span>
<span class="line"><span style="color:#abb2bf;">       var result = 0;</span></span>
<span class="line"><span style="color:#abb2bf;">       // 最外层</span></span>
<span class="line"><span style="color:#abb2bf;">       array.push(topElement.offsetTop);</span></span>
<span class="line"><span style="color:#abb2bf;">       // 直到ol次外层</span></span>
<span class="line"><span style="color:#abb2bf;">       while(liElement.parentElement.parentElement != write){</span></span>
<span class="line"><span style="color:#abb2bf;">            liElement = liElement.parentElement;</span></span>
<span class="line"><span style="color:#abb2bf;">            if(liElement.nodeName.toLowerCase() == &quot;li&quot;||liElement.nodeName.toLowerCase() == &quot;ol&quot; ||liElement.nodeName.toLowerCase() == &quot;ul&quot;){</span></span>
<span class="line"><span style="color:#abb2bf;">                console.log(liElement);</span></span>
<span class="line"><span style="color:#abb2bf;">                console.log(liElement.nodeName.toLowerCase() + &quot;:&quot; + liElement.offsetTop);</span></span>
<span class="line"><span style="color:#abb2bf;">                array.push(liElement.offsetTop);</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">       array.forEach((value)=&gt;{</span></span>
<span class="line"><span style="color:#abb2bf;">            result += value;</span></span>
<span class="line"><span style="color:#abb2bf;">       });</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">       return result;</span></span>
<span class="line"><span style="color:#abb2bf;">     }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">   return topElement.offsetTop;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"> function jumpTo(to, time, count) {</span></span>
<span class="line"><span style="color:#abb2bf;">    var from = content.scrollTop;</span></span>
<span class="line"><span style="color:#abb2bf;">    var length = to - from;</span></span>
<span class="line"><span style="color:#abb2bf;">    var everyLength = parseFloat(length / count);</span></span>
<span class="line"><span style="color:#abb2bf;">    var jumpCount=0;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    var interval = window.setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">        if(jumpCount++&gt;=count){</span></span>
<span class="line"><span style="color:#abb2bf;">        	content.scrollTop = to;</span></span>
<span class="line"><span style="color:#abb2bf;">        	clearInterval(interval);</span></span>
<span class="line"><span style="color:#abb2bf;">        }else{</span></span>
<span class="line"><span style="color:#abb2bf;">        	content.scrollTop += everyLength;</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">    }, time / count);</span></span>
<span class="line"><span style="color:#abb2bf;">}   </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typora清理不用的图片" tabindex="-1"><a class="header-anchor" href="#typora清理不用的图片" aria-hidden="true">#</a> typora清理不用的图片</h2><p>输入<code>G:\\笔记\\typora配置.md</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">#include &lt;fstream&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">#include &lt;sstream&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">#include &lt;vector&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">#include &lt;algorithm&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">class TyporaClean {</span></span>
<span class="line"><span style="color:#abb2bf;">public:</span></span>
<span class="line"><span style="color:#abb2bf;">    // 清理未使用的图片</span></span>
<span class="line"><span style="color:#abb2bf;">    static void CleanUnusedPic(const std::vector&lt;std::string&gt;&amp; allPicFiles, const std::vector&lt;std::string&gt;&amp; usedPicNames) {</span></span>
<span class="line"><span style="color:#abb2bf;">        if (allPicFiles.empty()) {</span></span>
<span class="line"><span style="color:#abb2bf;">            return;</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        std::string assetPath = getParentDirectory(allPicFiles[0]);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        for (const std::string&amp; curPicFile : allPicFiles) {</span></span>
<span class="line"><span style="color:#abb2bf;">            std::string curFileName = getFileName(curPicFile);</span></span>
<span class="line"><span style="color:#abb2bf;">            bool isUsed = std::find(usedPicNames.begin(), usedPicNames.end(), curFileName) != usedPicNames.end();</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">            if (!isUsed) {</span></span>
<span class="line"><span style="color:#abb2bf;">                std::cout &lt;&lt; &quot;已删除无用图片: &quot; &lt;&lt; curPicFile &lt;&lt; std::endl;</span></span>
<span class="line"><span style="color:#abb2bf;">                removeFile(curPicFile);</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 获取MD文件中使用到的所有图片名称</span></span>
<span class="line"><span style="color:#abb2bf;">    static std::vector&lt;std::string&gt; getUsedPicNames(const std::string&amp; curFile) {</span></span>
<span class="line"><span style="color:#abb2bf;">        std::string mdFileContent = readMdFileContent(curFile);</span></span>
<span class="line"><span style="color:#abb2bf;">        std::vector&lt;std::string&gt; imageNames = extractImageNames(mdFileContent);</span></span>
<span class="line"><span style="color:#abb2bf;">        return imageNames;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 执行单个MD文件的图片瘦身</span></span>
<span class="line"><span style="color:#abb2bf;">    static void CleanUnnecessaryPic(const std::string&amp; curFile, const std::string&amp; curAssetFile) {</span></span>
<span class="line"><span style="color:#abb2bf;">        std::vector&lt;std::string&gt; allPicFiles = getAllPicFiles(curAssetFile);</span></span>
<span class="line"><span style="color:#abb2bf;">        std::vector&lt;std::string&gt; usedPicNames = getUsedPicNames(curFile);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        CleanUnusedPic(allPicFiles, usedPicNames);</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 执行Typora瘦身程序</span></span>
<span class="line"><span style="color:#abb2bf;">    static void doSinglePicClean(const std::string&amp; curFile) {</span></span>
<span class="line"><span style="color:#abb2bf;">        std::string curFileName = getFileName(curFile);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        if (!endsWith(curFileName, &quot;.md&quot;)) {</span></span>
<span class="line"><span style="color:#abb2bf;">            return;</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        std::string curFilNameWithoutMd = curFileName.substr(0, curFileName.length() - 3);</span></span>
<span class="line"><span style="color:#abb2bf;">        std::string curAssetName = curFilNameWithoutMd + &quot;.assets&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        std::string curAssetAbsolutePath = getParentDirectory(curFile) + &quot;\\\\&quot; + curAssetName;</span></span>
<span class="line"><span style="color:#abb2bf;">        bool iscurAssetExist = directoryExists(curAssetAbsolutePath);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        if (iscurAssetExist) {</span></span>
<span class="line"><span style="color:#abb2bf;">            CleanUnnecessaryPic(curFile, curAssetAbsolutePath);</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 执行Typora瘦身程序</span></span>
<span class="line"><span style="color:#abb2bf;">    static void doClean(const std::string&amp; destPath) {</span></span>
<span class="line"><span style="color:#abb2bf;">        std::vector&lt;std::string&gt; allFiles = getAllFiles(destPath);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        for (const std::string&amp; curFile : allFiles) {</span></span>
<span class="line"><span style="color:#abb2bf;">            bool isDirectory = directoryExists(curFile);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">            if (isDirectory) {</span></span>
<span class="line"><span style="color:#abb2bf;">                std::string absolutePath = getAbsolutePath(curFile);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">                if (endsWith(absolutePath, &quot;.assets&quot;)) {</span></span>
<span class="line"><span style="color:#abb2bf;">                    continue;</span></span>
<span class="line"><span style="color:#abb2bf;">                }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">                doClean(absolutePath);</span></span>
<span class="line"><span style="color:#abb2bf;">            } else {</span></span>
<span class="line"><span style="color:#abb2bf;">                doSinglePicClean(curFile);</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 获取指定路径下的所有文件</span></span>
<span class="line"><span style="color:#abb2bf;">    static std::vector&lt;std::string&gt; getAllFiles(const std::string&amp; path) {</span></span>
<span class="line"><span style="color:#abb2bf;">        // 实现获取目录下所有文件的逻辑</span></span>
<span class="line"><span style="color:#abb2bf;">        // ...</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        return std::vector&lt;std::string&gt;(); // 占位符</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 获取指定路径下的所有图片文件</span></span>
<span class="line"><span style="color:#abb2bf;">    static std::vector&lt;std::string&gt; getAllPicFiles(const std::string&amp; path) {</span></span>
<span class="line"><span style="color:#abb2bf;">        // 实现获取目录下所有图片文件的逻辑</span></span>
<span class="line"><span style="color:#abb2bf;">        // ...</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        return std::vector&lt;std::string&gt;(); // 占位符</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 获取指定路径的父目录</span></span>
<span class="line"><span style="color:#abb2bf;">    static std::string getParentDirectory(const std::string&amp; path) {</span></span>
<span class="line"><span style="color:#abb2bf;">        // 实现获取父目录的逻辑</span></span>
<span class="line"><span style="color:#abb2bf;">        // ...</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        return &quot;&quot;; // 占位符</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 获取指定路径的绝对路径</span></span>
<span class="line"><span style="color:#abb2bf;">    static std::string getAbsolutePath(const std::string&amp; path) {</span></span>
<span class="line"><span style="color:#abb2bf;">        // 实现获取绝对路径的逻辑</span></span>
<span class="line"><span style="color:#abb2bf;">        // ...</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        return &quot;&quot;; // 占位符</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 从指定路径中获取文件名</span></span>
<span class="line"><span style="color:#abb2bf;">    static std::string getFileName(const std::string&amp; path) {</span></span>
<span class="line"><span style="color:#abb2bf;">        // 实现从路径中获取文件名的逻辑</span></span>
<span class="line"><span style="color:#abb2bf;">        // ...</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        return &quot;&quot;; // 占位符</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 判断字符串是否以指定后缀结尾</span></span>
<span class="line"><span style="color:#abb2bf;">    static bool endsWith(const std::string&amp; str, const std::string&amp; suffix) {</span></span>
<span class="line"><span style="color:#abb2bf;">        return str.size() &gt;= suffix.size() &amp;&amp; str.compare(str.size() - suffix.size(), suffix.size(), suffix) == 0;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 判断目录是否存在</span></span>
<span class="line"><span style="color:#abb2bf;">    static bool directoryExists(const std::string&amp; path) {</span></span>
<span class="line"><span style="color:#abb2bf;">        // 实现判断目录是否存在的逻辑</span></span>
<span class="line"><span style="color:#abb2bf;">        // ...</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        return false; // 占位符</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 读取MD文件的内容</span></span>
<span class="line"><span style="color:#abb2bf;">    static std::string readMdFileContent(const std::string&amp; curFile) {</span></span>
<span class="line"><span style="color:#abb2bf;">        // 实现读取MD文件内容的逻辑</span></span>
<span class="line"><span style="color:#abb2bf;">        // ...</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        return &quot;&quot;; // 占位符</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 从MD文件内容中提取图片名称</span></span>
<span class="line"><span style="color:#abb2bf;">    static std::vector&lt;std::string&gt; extractImageNames(const std::string&amp; mdFileContent) {</span></span>
<span class="line"><span style="color:#abb2bf;">        // 实现从MD文件内容中提取图片名称的逻辑</span></span>
<span class="line"><span style="color:#abb2bf;">        // ...</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">        return std::vector&lt;std::string&gt;(); // 占位符</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    // 删除指定文件</span></span>
<span class="line"><span style="color:#abb2bf;">    static void removeFile(const std::string&amp; filePath) {</span></span>
<span class="line"><span style="color:#abb2bf;">        // 实现删除文件的逻辑</span></span>
<span class="line"><span style="color:#abb2bf;">        // ...</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">};</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">int main(int argc, char* argv[]) {</span></span>
<span class="line"><span style="color:#abb2bf;">    std::string noteRootPath;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    if (argc == 1) {</span></span>
<span class="line"><span style="color:#abb2bf;">        noteRootPath = &quot;G:\\\\笔记\\\\&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">    } else {</span></span>
<span class="line"><span style="color:#abb2bf;">        noteRootPath = argv[1];</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    TyporaClean::doClean(noteRootPath);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">    return 0;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">MdCancelIma</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">md_dir</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;">    mdIma_dir </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> md_dir </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;.assets&quot;</span><span style="color:#7F848E;font-style:italic;">#填入对应assets文件路径</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> root, dirs, files </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> os.</span><span style="color:#61AFEF;">walk</span><span style="color:#ABB2BF;">(mdIma_dir):</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">with</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">open</span><span style="color:#ABB2BF;">(md_dir, </span><span style="color:#98C379;">&#39;r&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">encoding</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;utf-8&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> md:</span></span>
<span class="line"><span style="color:#ABB2BF;">            text </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> md.</span><span style="color:#61AFEF;">read</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> imaName </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> files:</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> text.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(imaName)</span><span style="color:#56B6C2;">==-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;删除的图片名为: &quot;</span><span style="color:#ABB2BF;">,imaName)</span></span>
<span class="line"><span style="color:#ABB2BF;">                path</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">mdIma_dir</span><span style="color:#56B6C2;">+</span><span style="color:#98C379;">&quot;</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">&quot;</span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">imaName</span></span>
<span class="line"><span style="color:#ABB2BF;">                os.</span><span style="color:#61AFEF;">remove</span><span style="color:#ABB2BF;">(path)</span></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">findmd</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">path</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">mdFiles</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> filename </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> os.</span><span style="color:#61AFEF;">listdir</span><span style="color:#ABB2BF;">(path) :</span></span>
<span class="line"><span style="color:#ABB2BF;">    	mdFile </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> os.path.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(path, filename)</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> os.path.</span><span style="color:#61AFEF;">isfile</span><span style="color:#ABB2BF;">(mdFile):</span></span>
<span class="line"><span style="color:#ABB2BF;">        	</span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> mdFile.</span><span style="color:#61AFEF;">endswith</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;.md&quot;</span><span style="color:#ABB2BF;">): </span></span>
<span class="line"><span style="color:#ABB2BF;">              	mdFiles.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(mdFiles)</span></span>
<span class="line"><span style="color:#ABB2BF;">        	</span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">findmd</span><span style="color:#ABB2BF;">(de_path, mdFile)</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">__name__</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;__main__&#39;</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    data </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">input</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;请输入md文件路径: &quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(data):</span></span>
<span class="line"><span style="color:#ABB2BF;">    	</span><span style="color:#61AFEF;">MdCancelIma</span><span style="color:#ABB2BF;">(data)</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">        path </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;G:</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">笔记&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">        mdFiles </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> []</span></span>
<span class="line"><span style="color:#ABB2BF;">        flag </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">input</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;遍历G:\\笔记文件下所有md文件，确认 1，取消 0&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">（flag </span><span style="color:#56B6C2;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">）:</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">findmd</span><span style="color:#ABB2BF;">(path, mdFiles)</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> mdFile </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> mdFiles:</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(mdFile)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="给typora的代码块设置默认语言" tabindex="-1"><a class="header-anchor" href="#给typora的代码块设置默认语言" aria-hidden="true">#</a> 给Typora的代码块设置默认语言</h3><p>打开Typora的安装目录： 右键图标，打开文件所在位置：然后依下边路径找到找到frame.js文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">Typora\\resources\\appsrc\\window</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),D={href:"https://so.csdn.net/so/search?q=%E5%AD%97%E7%AC%A6%E4%B8%B2&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},x=n("strong",null,"注意",-1),k=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#98C379;">&quot;select a language&quot;</span><span style="color:#ABB2BF;">)</span><span style="color:#56B6C2;">+</span><span style="color:#98C379;">&quot;&#39;&gt;&lt;/span&gt;&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#E5C07B;">t</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">childNodes</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">].</span><span style="color:#E06C75;">textContent</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">e</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+y+'" alt="image-20231217144250890" tabindex="0" loading="lazy"><figcaption>image-20231217144250890</figcaption></figure><p>重启Typora，在试试代码块就可以看到默认预言了，不过得按回车后才能被渲染</p><h2 id="如何设置高亮快捷键" tabindex="-1"><a class="header-anchor" href="#如何设置高亮快捷键" aria-hidden="true">#</a> 如何设置高亮快捷键</h2><p>设置方式：文件 &gt; 偏好设置 &gt; 通用 &gt; 打开高级设置 &gt; 会看到两个json文件，打开其中一个 &gt; 在 “keyBinding” 中添加 <code>&quot;Highlight&quot;:&quot;Ctrl+Shift+H&quot;</code>&gt; 保存 &gt; 另一个json文件也在 &quot;keyBinding&quot; 中添加 &quot;Highlight&quot;:&quot;<mark>Ctrl+Shift+H</mark>&quot; &gt; 保存</p><h2 id="win10上typora卡顿的问题及其解决方案" tabindex="-1"><a class="header-anchor" href="#win10上typora卡顿的问题及其解决方案" aria-hidden="true">#</a> win10上Typora卡顿的问题及其解决方案</h2><p>电脑上运行较多应用，<strong>内存占用较高</strong>，发现Typora特别卡顿,Typora使用了0号显卡，怀疑是导致其卡顿的原因。于是决定关闭GPU, 找到Typora的配置文件</p><figure><img src="'+v+`" alt="4544e7fbc99146958a485af81a2458cc" tabindex="0" loading="lazy"><figcaption>4544e7fbc99146958a485af81a2458cc</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">typora --&gt; 文件 --&gt; 偏好设置 --&gt; 通用 --&gt; 打开高级设置</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开后能看到两个配置文件</p><p>编辑<strong>conf.user.json</strong>,修改flags,保存并重启typora，就不再使用GPU了:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;"> &quot;flags&quot;: [[&quot;disable-gpu&quot;]]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>禁用GPU之后，软件启动的时候比之前慢，但是打开之后不卡顿了。</p><h2 id="上万字后打字出现卡顿" tabindex="-1"><a class="header-anchor" href="#上万字后打字出现卡顿" aria-hidden="true">#</a> 上万字后打字出现卡顿</h2><h3 id="关闭微软输入法的兼容模式" tabindex="-1"><a class="header-anchor" href="#关闭微软输入法的兼容模式" aria-hidden="true">#</a> 关闭微软输入法的兼容模式</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">微软拼音输入法设置–</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;">选项–</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;">常规—</span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;">兼容性</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="为typora选择使用-高性能-nvidia处理器" tabindex="-1"><a class="header-anchor" href="#为typora选择使用-高性能-nvidia处理器" aria-hidden="true">#</a> 为typora选择使用 “高性能 NVIDIA处理器”</h3><ol><li>打开电脑 NVIDIA控制面板，右键这个图标</li></ol><figure><img src="`+u+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ol start="2"><li>进入“管理3D设置”，点击程序设置，找到Typora，大家第一次可能电脑没有把Typora添加进来，大家就自己点击“添加”，然后找到 Typora</li></ol><figure><img src="'+m+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ol start="3"><li>选择使用 “高性能 NVIDIA处理器”</li></ol><figure><img src="'+A+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ol start="4"><li>最后点击右下角“应用”，恭喜你！重新获得了一个流畅的Typora！</li></ol><p><em>注意： 如果以上方法都不行的话，证明可能是你的电脑CPU计算能力不行了，该换电脑了！</em></p>',25);function w(T,_){const o=p("RouterLink"),e=p("ExternalLinkIcon");return c(),t("div",null,[f,n("p",null,[l(o,{to:"/others/autohotkey%E7%AC%94%E8%AE%B0.html"},{default:r(()=>[s("autohotkey笔记")]),_:1})]),C,n("h3",h,[g,s(" 文档间锚点、文档间跳转返回、突破Typora的"),n("a",E,[s("iframe"),l(e)]),s("登录限制、代码块收缩")]),q,n("p",null,[s("右键选择打开方式，用记事本打开，然后Ctrl+F全局搜索以下"),n("a",D,[s("字符串"),l(e)]),s("，然后按照下图将其后的双引号里面的内容改写。保存退出 "),x,s("：最好先备份frame.js文件，改写之后要保存再退出")]),k])}const S=i(F,[["render",w],["__file","typora配置.html.vue"]]);export{S as default};
