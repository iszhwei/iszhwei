import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as t,c as i,f as e,w as o,e as n,d as s,a}from"./app-m9pC5KT-.js";const r="/assets/image-20240310234105841-D4Mcxff1.png",d={},y=a(`<h1 id="makefile使用方法" tabindex="-1"><a class="header-anchor" href="#makefile使用方法" aria-hidden="true">#</a> makefile使用方法</h1><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><p>先建立一个名为<code>makefile</code>或者是<code>Makefile</code>的文件，然后在里面写入符合语法规则的编译命令，完成以后只需要在<u>文件所在目录</u>使用<code>make</code>命令就能运行编译命令</p><h2 id="书写规则" tabindex="-1"><a class="header-anchor" href="#书写规则" aria-hidden="true">#</a> 书写规则</h2><p>从第一行命令开始，先确认目标文件，根据目标文件确定所需的依赖文件，然后递归地找到依赖文件的依赖文件，直到依赖文件是没有子依赖文件</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#注释   书写格式</span></span>
<span class="line"><span style="color:#61AFEF;">[目标文件]</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">[依赖文件]</span></span>
<span class="line"><span style="color:#E5C07B;">&lt;tab&gt;[command]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原则" tabindex="-1"><a class="header-anchor" href="#原则" aria-hidden="true">#</a> 原则</h2>`,7),C=a(`<h2 id="伪目标" tabindex="-1"><a class="header-anchor" href="#伪目标" aria-hidden="true">#</a> 伪目标</h2><p>以不会存在的文件名作为目标。make伪目标，命令会一直执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">make</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">.PHONY</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">#查看定义了哪些伪目标</span></span>
<span class="line"><span style="color:#61AFEF;">make</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">clean</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;"># 清除所有生成的目标文件和最终程序 </span></span>
<span class="line"><span style="color:#61AFEF;">make</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">rebuild</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">#重新编译</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量名" tabindex="-1"><a class="header-anchor" href="#变量名" aria-hidden="true">#</a> 变量名</h2>`,4),v=s("strong",null,"自定义变量",-1),B=s("code",null,"变量名:=变量内容（字符串）",-1),m=s("code",null,"$(变量名)",-1),u=s("strong",null,"字符串替换",-1),b=a("<li><p><strong>自动变量</strong>：变量内容会随着规则自动变化</p><table><thead><tr><th>变量</th><th>说明</th></tr></thead><tbody><tr><td>$@</td><td>目标文件</td></tr><tr><td>$&lt;</td><td>第一个依赖文件</td></tr><tr><td>$^</td><td>所有依赖文件，以空格分隔</td></tr><tr><td>$?</td><td>日期新于目标文件的所有相关文件列表，逗号分隔</td></tr><tr><td>$(@D)</td><td>目标文件的目录名部分</td></tr><tr><td>$(@F)</td><td>目标文件的文件名部分</td></tr></tbody></table></li><li><p><strong>预定义变量</strong></p></li>",2),E=a(`<table><thead><tr><th style="text-align:left;">变量名</th><th style="text-align:left;">功能</th><th>默认含义</th></tr></thead><tbody><tr><td style="text-align:left;">AR</td><td style="text-align:left;">打包库文件</td><td>ar</td></tr><tr><td style="text-align:left;">AS</td><td style="text-align:left;">汇编程序</td><td>as</td></tr><tr><td style="text-align:left;"><strong>CC</strong></td><td style="text-align:left;">C编译器</td><td>gcc</td></tr><tr><td style="text-align:left;"><strong>CPP</strong></td><td style="text-align:left;">C预编译器</td><td>$(CC) -E</td></tr><tr><td style="text-align:left;"><strong>CXX</strong></td><td style="text-align:left;">C++编译器</td><td>g++</td></tr><tr><td style="text-align:left;"><strong>RM</strong></td><td style="text-align:left;">删除</td><td>rm –f</td></tr><tr><td style="text-align:left;">ARFLAGS</td><td style="text-align:left;">库选项</td><td>无</td></tr><tr><td style="text-align:left;">ASFLAGS</td><td style="text-align:left;">汇编选项</td><td>无</td></tr><tr><td style="text-align:left;">CFLAGS</td><td style="text-align:left;">C编译器选项</td><td>无</td></tr><tr><td style="text-align:left;">CPPFLAGS</td><td style="text-align:left;">C预编译器选项</td><td>无</td></tr><tr><td style="text-align:left;"><strong>CXXFLAGS</strong></td><td style="text-align:left;">C++编译器选项</td><td>无</td></tr></tbody></table><h3 id="和-的区别" tabindex="-1"><a class="header-anchor" href="#和-的区别" aria-hidden="true">#</a> = 和 := 的区别</h3><p>使用 <code>=</code> 赋值的变量被称为<strong>递归展开变量</strong>。这可能导致变量的值在每次引用时都可能不同。</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">A</span><span style="color:#E5C07B;"> </span><span style="color:#ABB2BF;">=</span><span style="color:#E5C07B;"> </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">B</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;">  </span></span>
<span class="line"><span style="color:#E06C75;">B</span><span style="color:#E5C07B;"> </span><span style="color:#ABB2BF;">=</span><span style="color:#E5C07B;"> Hello  </span></span>
<span class="line"><span style="color:#E5C07B;">  </span></span>
<span class="line"><span style="color:#61AFEF;">all</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">  </span></span>
<span class="line"><span style="color:#E5C07B;">	</span><span style="color:#C678DD;">@</span><span style="color:#E5C07B;">echo </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">A</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;">  # 输出 &quot;Hello&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h=s("code",null,":=",-1),F=s("strong",null,"直接展开变量",-1),f=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">A</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">:=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">$(</span><span style="color:#61AFEF;">B</span><span style="color:#98C379;">)</span><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#61AFEF;">B</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">Hello</span><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#61AFEF;">all:</span><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#61AFEF;">@echo</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">$(</span><span style="color:#61AFEF;">A</span><span style="color:#98C379;">)</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 输出空行，因为A在赋值时B还未定义</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通配符和模式匹配" tabindex="-1"><a class="header-anchor" href="#通配符和模式匹配" aria-hidden="true">#</a> 通配符和模式匹配</h2><h3 id="使用bash的规则来应用通配符" tabindex="-1"><a class="header-anchor" href="#使用bash的规则来应用通配符" aria-hidden="true">#</a> 使用bash的规则来应用通配符</h3><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">clean</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E5C07B;">    rm -rf *.o</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> <code>%</code>通配符</h3><ol><li><p><code>%表达式</code> 可以作某个规则的目标（目标：上一个规则的依赖）</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">CXX</span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;">g++</span></span>
<span class="line"><span style="color:#E06C75;">out</span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;">main</span></span>
<span class="line"><span style="color:#E06C75;">objs</span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;">main.o add.o</span></span>
<span class="line"><span style="color:#98C379;">$(</span><span style="color:#E06C75;">out</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;">:</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">objs</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#E5C07B;">	</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">CXX</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> $^ -o $@</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#main.o:main.c</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#	$(CXX) -c $^ -o $@</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#add.o:add.c</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#	$(CXX) -c $^ -o $@</span></span>
<span class="line"><span style="color:#D19A66;">%</span><span style="color:#61AFEF;">.o</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">%</span><span style="color:#E06C75;">.c</span></span>
<span class="line"><span style="color:#E5C07B;">	</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">CXX</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> -c $^ -o $@	#把main.o add.o用%.o匹配出来，再用%.c重新组合成main.c add.c</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>%表达式</code>根据变量内容生成新的内容</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">srcs</span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;"> main.c add.c sub.c</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#objs:=main.o add.o sub.o</span></span>
<span class="line"><span style="color:#E06C75;">objs</span><span style="color:#ABB2BF;">:=</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">srcs:%.c=%.o</span><span style="color:#98C379;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="内置函数" tabindex="-1"><a class="header-anchor" href="#内置函数" aria-hidden="true">#</a> 内置函数</h2><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 格式</span></span>
<span class="line"><span style="color:#98C379;">$(</span><span style="color:#E06C75;">[function] [arguments]</span><span style="color:#98C379;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>wildcard</code>函数可以使用通配符，找到所有满足通配符的文件名</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">srcfiles</span><span style="color:#ABB2BF;">:=</span><span style="color:#98C379;">$(</span><span style="color:#56B6C2;">wildcard</span><span style="color:#98C379;"> src/</span><span style="color:#D19A66;">*</span><span style="color:#98C379;">.c)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>subst</code>函数来实现文本替换</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 语法</span></span>
<span class="line"><span style="color:#98C379;">$(</span><span style="color:#56B6C2;">subst</span><span style="color:#98C379;"> from,to,text)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 示例</span></span>
<span class="line"><span style="color:#E06C75;">ORIGINAL_TEXT</span><span style="color:#E5C07B;"> </span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;"> Hello, World!  </span></span>
<span class="line"><span style="color:#E06C75;">REPLACED_TEXT</span><span style="color:#E5C07B;"> </span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;"> </span><span style="color:#98C379;">$(</span><span style="color:#56B6C2;">subst</span><span style="color:#98C379;"> World,Makefile,$(</span><span style="color:#E06C75;">ORIGINAL_TEXT</span><span style="color:#98C379;">))</span><span style="color:#E5C07B;"> </span><span style="color:#7F848E;font-style:italic;">#Hello, Makefile!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>patsubst</code>函数来实现模式文本替换</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#98C379;">$(</span><span style="color:#56B6C2;">patsubst</span><span style="color:#98C379;"> pattern,replacement,text)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 示例</span></span>
<span class="line"><span style="color:#E06C75;">SRCS</span><span style="color:#E5C07B;"> </span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;"> main.c util.c file.c  </span></span>
<span class="line"><span style="color:#E06C75;">OBJS</span><span style="color:#E5C07B;"> </span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;"> </span><span style="color:#98C379;">$(</span><span style="color:#56B6C2;">patsubst</span><span style="color:#98C379;"> </span><span style="color:#D19A66;">%</span><span style="color:#98C379;">.c,</span><span style="color:#D19A66;">%</span><span style="color:#98C379;">.o,$(</span><span style="color:#E06C75;">SRCS</span><span style="color:#98C379;">))</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h2><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">LIST</span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;">one two three</span></span>
<span class="line"><span style="color:#61AFEF;">all</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E5C07B;">	for i in </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">LIST</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;">; do echo $$i; done</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 等价于</span></span>
<span class="line"><span style="color:#61AFEF;">all</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E5C07B;">	for i in one two three; do echo $i; done</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="make命令的-f指定makefile文件" tabindex="-1"><a class="header-anchor" href="#make命令的-f指定makefile文件" aria-hidden="true">#</a> make命令的<code>-f</code>指定makefile文件</h2><p>有些时候makefile文件的名字不希望以makefile或者Makefile来命名，此时可以使用make命令的<code>-f</code>参数来指定makefile文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">make</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-f</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">newMake</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="指定源文件生成一个可执行程序" tabindex="-1"><a class="header-anchor" href="#指定源文件生成一个可执行程序" aria-hidden="true">#</a> 指定源文件生成一个可执行程序</h3><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># makefile目录下的指定源文件生成一个可执行程序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 定义编译器</span></span>
<span class="line"><span style="color:#E06C75;">CC</span><span style="color:#E5C07B;"> </span><span style="color:#ABB2BF;">=</span><span style="color:#E5C07B;"> gcc</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 定义源文件</span></span>
<span class="line"><span style="color:#E06C75;">SRCS</span><span style="color:#E5C07B;"> </span><span style="color:#ABB2BF;">=</span><span style="color:#E5C07B;"> main.c util.c	</span><span style="color:#7F848E;font-style:italic;">#指定源文件生成一个可执行程序</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#SRCS:=$(wildcard *.c)	#所有的源文件生成一个可执行程序</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 定义目标文件</span></span>
<span class="line"><span style="color:#E06C75;">OBJS</span><span style="color:#E5C07B;"> </span><span style="color:#ABB2BF;">=</span><span style="color:#E5C07B;"> </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">SRCS:.c=.o</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 定义最终目标</span></span>
<span class="line"><span style="color:#E06C75;">TARGET</span><span style="color:#E5C07B;"> </span><span style="color:#ABB2BF;">=</span><span style="color:#E5C07B;"> my_program</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 伪目标，当只输入make时执行</span></span>
<span class="line"><span style="color:#61AFEF;">all</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;"> </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">TARGET</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 链接目标文件生成最终程序</span></span>
<span class="line"><span style="color:#98C379;">$(</span><span style="color:#E06C75;">TARGET</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;">: </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">OBJS</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#E5C07B;">	</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">CC</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">OBJS</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> -o </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">TARGET</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 编译源文件生成目标文件</span></span>
<span class="line"><span style="color:#D19A66;">%</span><span style="color:#61AFEF;">.o</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">%</span><span style="color:#E06C75;">.c</span></span>
<span class="line"><span style="color:#E5C07B;">	</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">CC</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> -c $&lt; -o $@</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Phony目标，确保clean总是被执行，即使存在名为clean的文件或目录  </span></span>
<span class="line"><span style="color:#56B6C2;">.PHONY</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;"> clean rebuild</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 清除所有生成的目标文件和最终程序  </span></span>
<span class="line"><span style="color:#61AFEF;">clean</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E5C07B;">	rm -f </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">OBJS</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">TARGET</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重新编译</span></span>
<span class="line"><span style="color:#61AFEF;">rebuild</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;"> clean all</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.PHONY</code>增加makefile的可读性</p><h3 id="每个源文件生成可执行程序" tabindex="-1"><a class="header-anchor" href="#每个源文件生成可执行程序" aria-hidden="true">#</a> 每个源文件生成可执行程序</h3><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">SRCS</span><span style="color:#ABB2BF;">:=</span><span style="color:#98C379;">$(</span><span style="color:#56B6C2;">wildcard</span><span style="color:#98C379;"> </span><span style="color:#D19A66;">*</span><span style="color:#98C379;">.c)</span></span>
<span class="line"><span style="color:#E06C75;">TARGETS</span><span style="color:#ABB2BF;">:=</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">SRCS:%.c=%</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#61AFEF;">all</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">TARGETS</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#E5C07B;">	for i in $^; do gcc -o $$i $$i.c;done</span></span>
<span class="line"><span style="color:#56B6C2;">.PHONY</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">clean</span></span>
<span class="line"><span style="color:#61AFEF;">clean</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E5C07B;">	rm </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">TARGETS</span><span style="color:#98C379;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不使用循环</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">CC</span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;">gcc</span></span>
<span class="line"><span style="color:#E06C75;">SRCS</span><span style="color:#ABB2BF;">:=</span><span style="color:#98C379;">$(</span><span style="color:#56B6C2;">wildcard</span><span style="color:#98C379;"> </span><span style="color:#D19A66;">*</span><span style="color:#98C379;">.c)</span></span>
<span class="line"><span style="color:#E06C75;">TARGETS</span><span style="color:#ABB2BF;">:=</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">SRCS:%.c=%</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#61AFEF;">all</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">TARGETS</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#D19A66;">%</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">%</span><span style="color:#E06C75;">.c</span></span>
<span class="line"><span style="color:#E5C07B;">	</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">CC</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> $^ -o $@</span></span>
<span class="line"><span style="color:#56B6C2;">.PHONY</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">clean</span></span>
<span class="line"><span style="color:#61AFEF;">clean</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E5C07B;">	rm </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">TARGETS</span><span style="color:#98C379;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有头文件的情况" tabindex="-1"><a class="header-anchor" href="#有头文件的情况" aria-hidden="true">#</a> 有头文件的情况</h3><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#bubbleSort.cc  bubbleSort.h  main.cc  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#Makefile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">CXX</span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;">g++</span></span>
<span class="line"><span style="color:#E06C75;">CXXFLAGS</span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;">-std=c++11</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#deps := $(wildcard *.h)                                               </span></span>
<span class="line"><span style="color:#E06C75;">srcs</span><span style="color:#ABB2BF;">:=</span><span style="color:#98C379;">$(</span><span style="color:#56B6C2;">wildcard</span><span style="color:#98C379;"> </span><span style="color:#D19A66;">*</span><span style="color:#98C379;">.cc)</span><span style="color:#E5C07B;"> </span><span style="color:#7F848E;font-style:italic;">#1.cc 2.cc 3.cc</span></span>
<span class="line"><span style="color:#E06C75;">objs</span><span style="color:#ABB2BF;">:=</span><span style="color:#98C379;">$(</span><span style="color:#56B6C2;">patsubst</span><span style="color:#98C379;"> </span><span style="color:#D19A66;">%</span><span style="color:#98C379;">.cc,</span><span style="color:#D19A66;">%</span><span style="color:#98C379;">.o,$(</span><span style="color:#E06C75;">srcs</span><span style="color:#98C379;">))</span></span>
<span class="line"><span style="color:#E06C75;">exe</span><span style="color:#ABB2BF;">:=</span><span style="color:#E5C07B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">all</span><span style="color:#ABB2BF;">:</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">exe</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#98C379;">$(</span><span style="color:#E06C75;">exe</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;">:</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">objs</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#E5C07B;">    </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">CXX</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> $^ -o $@</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#%:%.cc $(deps)</span></span>
<span class="line"><span style="color:#E5C07B;">    </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">CXX</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> $&lt; -o $@</span></span>
<span class="line"><span style="color:#D19A66;">%</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">%</span><span style="color:#E06C75;">.cc</span></span>
<span class="line"><span style="color:#E5C07B;">	</span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">CXX</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> $^ -o $@</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">.PHONY</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;"> clean rebuild</span></span>
<span class="line"><span style="color:#61AFEF;">clean</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E5C07B;">    </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">RM</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">exe</span><span style="color:#98C379;">)</span><span style="color:#E5C07B;"> </span><span style="color:#98C379;">$(</span><span style="color:#E06C75;">objs</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#61AFEF;">rebuild</span><span style="color:#ABB2BF;">:</span><span style="color:#E06C75;">clean all </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="image-20240310234105841" tabindex="0" loading="lazy"><figcaption>image-20240310234105841</figcaption></figure><h2 id="makefile-missing-separator-stop-怎么解决" tabindex="-1"><a class="header-anchor" href="#makefile-missing-separator-stop-怎么解决" aria-hidden="true">#</a> Makefile missing separator. Stop.怎么解决</h2><p>makefile的命令行，开头必须用tab键</p>',32);function A(g,k){const l=c("font");return t(),i("div",null,[y,e(l,{color:"red"},{default:o(()=>[n("**增量编译**")]),_:1}),n("，即只有目标文件比依赖旧或者目标文件不存在，才会执行命令"),C,s("ol",null,[s("li",null,[s("p",null,[v,n("："),B,n("。"),m,n("使用变量，实际上就是"),e(l,{color:"red"},{default:o(()=>[u]),_:1})])]),b]),E,s("p",null,[n("使用 "),h,n(" 赋值的变量被称为"),F,n("。在赋值时就被展开，之后不会再次展开，因此变量的值在赋值后就固定不变。这也是工作当中的"),e(l,{color:"red"},{default:o(()=>[n("主流用法")]),_:1})]),f])}const _=p(d,[["render",A],["__file","makefile使用方法.html.vue"]]);export{_ as default};
