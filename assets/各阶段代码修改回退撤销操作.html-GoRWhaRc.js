import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as d,d as a,e as s,f as i,w as e,a as o}from"./app-2pke9_a8.js";const r="/assets/d689346c77534c2eb455e18d19735103-j0ggVOut.png",p="/assets/da9c803ec6ad41e5a90c115565baeedc-bsSMckbi.png",g="/assets/aa7ab31118cc4e9bb1c119b8de678bad-T46dLMs1.png",u="/assets/a307c00fe503406393c6023309b4a882-UHuSuIyR.png",m="/assets/0dae376e6d4d4a398305f8cdbffd5614-lL4wwGBX.png",f="/assets/image-20240503035944714-w26RmPuM.png",_="/assets/dd74f044fea24211b51a01080d3fb97f-k3rxzVlq.png",h="/assets/6f9621caa955472c98673dd194f69af2-bahFNaGn.png",b="/assets/6c520f1fdf6c45c3ba72abbce909094b-S1FDg9M3.png",y="/assets/4ec56047da0d4e59a753000ad24e3e45-BMswtWUv.png",B="/assets/f59b51074f4b4acba5a7a2a841246854-O2TrTu3g.png",x="/assets/b8d11e4cfbaf4682943d8e332b32a12e-dXScrrhd.png",v="/assets/159e8d96a86d4b55853d12f8ca1f5f2d-rwFU8Bgh.png",A="/assets/11be6d575ceb4b90879a1d194ccb2e4a-loYd15Jo.png",F="/assets/cdb793594a114717869625813b9c6818-zlB5apw_.png",k={},z=o('<h1 id="各阶段代码修改回退撤销操作" tabindex="-1"><a class="header-anchor" href="#各阶段代码修改回退撤销操作" aria-hidden="true">#</a> 各阶段代码修改回退撤销操作</h1><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、还没有add-commit-放弃工作区的修改" tabindex="-1"><a class="header-anchor" href="#一、还没有add-commit-放弃工作区的修改" aria-hidden="true">#</a> 一、还没有add/commit，<strong>放弃工作区的修改</strong></h2><p>ubuntu客户端查看工作区状态，没有需要提交的文件</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>修改main.cpp</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7),E=o('<figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在git add之前我们发现有错误，想要放弃刚刚做的修改，回到修改前的状态</p><p>我们可以使用如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#git checkout -- 文件名</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">main.cpp</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),D=a("strong",null,"用本地仓库的main.cpp覆盖工作区的main.cpp",-1),C=a("figure",null,[a("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),w=a("h2",{id:"二、已经add-还未commit-放弃暂存区的修改",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#二、已经add-还未commit-放弃暂存区的修改","aria-hidden":"true"},"#"),s(" 二、已经add，还未commit，"),a("strong",null,"放弃暂存区的修改")],-1),H=a("p",null,"修改main.cpp并add到暂存区",-1),N=a("figure",null,[a("img",{src:f,alt:"image-20240503035944714",tabindex:"0",loading:"lazy"}),a("figcaption",null,"image-20240503035944714")],-1),V=a("strong",null,[s("此时工作区的文件还是处于被修改状态，可以通过"),a("code",null,"git checkout -- 文件名"),s("的方式放弃工作区的修改")],-1),M=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reset</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">HEAD</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">文件名</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、add-commit都已完成-放弃本地仓库的修改" tabindex="-1"><a class="header-anchor" href="#三、add-commit都已完成-放弃本地仓库的修改" aria-hidden="true">#</a> 三、add/commit都已完成，<strong>放弃本地仓库的修改</strong></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">#查看提交日志,找commit id</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">reset</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--hard</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">commitId</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将错误代码从工作区add到暂存区，然后commit到本地仓库</p><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>git log查看提交日志</strong></p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到<strong>本地仓库的提交已经领先于远程仓库</strong></p><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',10),S=a("li",null,[a("p",null,[a("strong",null,"其实没有删除我们刚才的提交，这仅仅只是修改的HEAD指针的指向"),s("，并且将工作区、暂存区的状态一并统一到了commit id为cf9c的状态。我们"),a("strong",null,[s("依然可以通过"),a("code",null,"git reset --hard"),s(" 提交的ID的方式改变HEAD指针的指向，恢复到任意的commit状态")])])],-1),T=o('<h2 id="四、add-commit-push都已完成-放弃远程仓库的修改" tabindex="-1"><a class="header-anchor" href="#四、add-commit-push都已完成-放弃远程仓库的修改" aria-hidden="true">#</a> 四、add/commit/push都已完成，<strong>放弃远程仓库的修改</strong></h2><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们<strong>先修改本地分支的HEAD指针到未修改的状态</strong></p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们希望<strong>用本地落后的分支覆盖远程领先的分支，push试试</strong>❌❌❌</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6),I=a("strong",null,[s("用"),a("code",null,"-f"),s("强制推送到远程分支，用落后的分支覆盖远程的分支")],-1),U=a("figure",null,[a("img",{src:A,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),G=a("h2",{id:"小结",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#小结","aria-hidden":"true"},"#"),s(" 小结")],-1),L=a("figure",null,[a("img",{src:F,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),O=a("code",null,"git checkout -- 文件名",-1),R=a("code",null,"--",-1),X=a("strong",null,"切换分支",-1),j=o("<li><code>git reset HEAD</code> 把git add之后，暂存区的内容全部撤销</li><li><code>git reset --hard commitid</code> 把提交到本地仓库中的代码改动进行回退</li><li><code>git push -f</code> 强制推送本地仓库代码到远程仓库</li><li><code>git reflog</code> 主要用于查看本地仓库的HEAD和分支的变化历史，即分支的创建、合并、删除等操作。</li><li><code>git log</code>：关注的是提交对象，即每次的代码变更。</li><li><code>git diff HEAD -- fileName</code> 查看<u>工作区file文件</u>和<u>仓库中该文件最新版本</u>的代码有什么区别</li>",6);function q(J,P){const n=l("font");return c(),d("div",null,[z,a("p",null,[s("git status查看工作区状态，"),i(n,{color:"red"},{default:e(()=>[s("提示工作区的main.cpp有修改")]),_:1})]),E,a("p",null,[s("由于还没有add以及commit，本地仓库的main.cpp仍然是修改前的main.cpp，只有工作区的main.cpp被改动了。这条命令的意思是，"),i(n,{color:"cornflowerblue"},{default:e(()=>[D]),_:1})]),C,w,H,N,a("p",null,[s("已经提交到暂存区，我们现在需要放弃暂存区的修改，"),i(n,{color:"red"},{default:e(()=>[V]),_:1})]),M,a("ul",null,[S,a("li",null,[i(n,{color:"green"},{default:e(()=>[s("commit id不需要全写，能区分开即可")]),_:1})])]),T,a("ul",null,[a("li",null,[s("我们发现"),i(n,{color:"red"},{default:e(()=>[s("更新不了，一定是要本地仓库比远程的新")]),_:1})])]),a("p",null,[s("这时我们可以"),I,s("。注意，"),a("mark",null,[i(n,{color:"red"},{default:e(()=>[s("强制推送前要用git log查看是否有别人也提交了，如果别人提交了，自己再用落后分支覆盖远程分支，这就会影响别人的修改")]),_:1})])]),U,G,L,a("ul",null,[a("li",null,[O,s(" 在git add之前，把工作区的代码用版本库中的代码覆盖掉，"),i(n,{color:"red"},{default:e(()=>[s("注意命令中的"),R,s("不能去掉，否则成"),X,s("的命令了")]),_:1})]),j])])}const K=t(k,[["render",q],["__file","各阶段代码修改回退撤销操作.html.vue"]]);export{K as default};
