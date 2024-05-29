import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,a as e}from"./app-2pke9_a8.js";const l={},o=e(`<h1 id="wget使用方法" tabindex="-1"><a class="header-anchor" href="#wget使用方法" aria-hidden="true">#</a> wget使用方法</h1><p>基本的语法是：wget [参数列表] URL</p><h2 id="使用wget下载单个文件" tabindex="-1"><a class="header-anchor" href="#使用wget下载单个文件" aria-hidden="true">#</a> 使用<code>wget</code>下载单个文件</h2><p>以下的例子是从网络下载一个文件并保存在当前目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">wget</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">http://cn.wordpress.org/wordpress-3.1-zh_CN.zip</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在下载的过程中会显示进度条，包含（下载完成百分比，已经下载的字节，当前下载速度，剩余下载时间）。</p><h2 id="使用wget-i下载多个文件" tabindex="-1"><a class="header-anchor" href="#使用wget-i下载多个文件" aria-hidden="true">#</a> 使用<code>wget -i</code>下载多个文件</h2><p>首先，保存一份下载链接文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">cat</span><span style="color:#ABB2BF;"> &gt; </span><span style="color:#98C379;">filelist.txt</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">url1</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">url2</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">url3</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">url4</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着使用这个文件和参数-i下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">wget</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-i</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">filelist.txt</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用wget-o下载并重命名" tabindex="-1"><a class="header-anchor" href="#使用wget-o下载并重命名" aria-hidden="true">#</a> 使用<code>wget -O</code>下载并重命名</h2><p>wget默认会以最后一个符合”/”的后面的字符来命令，对于动态链接的下载通常文件名会不正确。</p><blockquote><p>错误：下面的例子会下载一个文件并以名称download.php?id=1080保存</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> wget http:</span><span style="color:#7F848E;font-style:italic;">//www.centos.bz/download?id=1 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即使下载的文件是zip格式，它仍然以download.php?id=1080命令。</p></blockquote><p>正确：为了解决这个问题，我们可以使用参数-O来指定一个文件名：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">wget</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-O</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">wordpress.zip</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">http://www.centos.bz/download.php?id=</span><span style="color:#D19A66;">1080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用wget-c断点续传" tabindex="-1"><a class="header-anchor" href="#使用wget-c断点续传" aria-hidden="true">#</a> 使用<code>wget -c</code>断点续传</h2><p>使用wget -c重新启动下载中断的文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">wget</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-c</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">http://cn.wordpress.org/wordpress-3.1-zh_CN.zip</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当文件特别大或者网络特别慢的时候，往往一个文件还没有下载完，连接就已经被切断，此时就需要断点续传。wget的断点续传是自动的，只需要使用-c参数，例如： <code>wget -c http://the.url.of/incomplete/file</code> 使用断点续传要求服务器支持断点续传。<code>-t</code>参数表示重试次数，例如需要重试100次，那么就写<code>-t 100</code>，如果设成<code>-t 0</code>，那么表示无穷次重试，直到连接成功。<code>-T</code>参数表示<strong>超时等待时间</strong>，例如<u><code>-T 120</code>，表示等待120秒连接不上就算超时</u>。</p><h2 id="使用wget-b后台下载" tabindex="-1"><a class="header-anchor" href="#使用wget-b后台下载" aria-hidden="true">#</a> 使用<code>wget -b</code>后台下载</h2><p>对于下载<strong>非常大的文件</strong>的时候，我们可以使用参数-b进行后台下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">wget</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-b</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">http://cn.wordpress.org/wordpress-3.1-zh_CN.zip</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Continuing</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">background,</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">pid</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1840</span><span style="color:#98C379;">.</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Output</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">will</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">be</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">written</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">to</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`</span><span style="color:#61AFEF;">wget-log</span><span style="color:#98C379;">\`</span><span style="color:#56B6C2;">.</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">你可以使用以下命令来察看下载进度</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">tail</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-f</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">wget-log</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用wget-ftp下载" tabindex="-1"><a class="header-anchor" href="#使用wget-ftp下载" aria-hidden="true">#</a> 使用wget FTP下载</h2><p>你可以使用wget来完成ftp链接的下载。 使用wget<strong>匿名ftp下载</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">wget</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">ftp-url</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用wget<strong>用户名和密码认证</strong>的ftp下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">wget</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">–ftp-user=USERNAME</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">–ftp-password=PASSWORD</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">url</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="伪装代理名称下载" tabindex="-1"><a class="header-anchor" href="#伪装代理名称下载" aria-hidden="true">#</a> 伪装代理名称下载</h2><p>有些网站能通过根据判断代理名称不是浏览器而拒绝你的下载请求。不过你可以通过–user-agent参数伪装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">wget</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">–user-agent=&quot;Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">下载链接</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用wget-–tries增加重试次数" tabindex="-1"><a class="header-anchor" href="#使用wget-–tries增加重试次数" aria-hidden="true">#</a> 使用wget –tries增加重试次数</h2><p>如果网络有问题或下载一个大文件也有可能失败。wget默认重试20次连接下载文件。 如果需要，你可以使用–tries增加重试次数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">wget</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">–tries=</span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">URL</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,34),p=[o];function r(c,t){return a(),n("div",null,p)}const B=s(l,[["render",r],["__file","wget使用.html.vue"]]);export{B as default};
