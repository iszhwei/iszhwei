import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as l,c,f as s,w as i,e,d as a,a as o}from"./app-m9pC5KT-.js";const d="/assets/image-20240407090807653-HuQc8VSf.png",g="/assets/image-20240407084815669-dKe13a-9.png",p="/assets/image-20240407085829027-J7sFBZDd.png",u="/assets/image-20240407090151306-eSiXjJ7C.png",f="/assets/image-20240407090705269-BAGM_qIQ.png",h={},_=o('<h1 id="范式设计" tabindex="-1"><a class="header-anchor" href="#范式设计" aria-hidden="true">#</a> 范式设计</h1><h2 id="范式设计好处" tabindex="-1"><a class="header-anchor" href="#范式设计好处" aria-hidden="true">#</a> 范式设计好处</h2><ol><li>主要是为了<strong>减少数据冗余</strong></li><li>如果冗余太多，那么数据插入、删除、更新的时候，要对多条记录的同样的数据进行更新删除，可能会产生问题</li></ol><h2 id="第一范式-1nf" tabindex="-1"><a class="header-anchor" href="#第一范式-1nf" aria-hidden="true">#</a> 第一范式（1NF）</h2><blockquote><p>满足第一范式才被称为关系型数据库。<strong>每一列保持原子特性</strong>，不能再分割。</p></blockquote>',5),b=a("strong",null,"一对多",-1),m=a("h2",{id:"第二范式-2nf",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#第二范式-2nf","aria-hidden":"true"},"#"),e(" 第二范式（2NF）")],-1),x=a("strong",null,"一对多",-1),v=o(`<p>例如：选课关系表为SelectCourse(学号, 姓名, 年龄, 课程名称, 成绩, 学分)，（学号，课程名称）是联合主键，但是<u>学分字段只和课程名称有关，和学号无关，相当于只依赖联合主键的其中一个字段</u>，不符合第二范式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">表1</span></span>
<span class="line"><span style="color:#abb2bf;">学号 姓名 年龄 成绩 课程id</span></span>
<span class="line"><span style="color:#abb2bf;">表2</span></span>
<span class="line"><span style="color:#abb2bf;">课程id 课程名称 学分</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="image-20240407090807653" tabindex="0" loading="lazy"><figcaption>image-20240407090807653</figcaption></figure><h2 id="第三范式-3nf" tabindex="-1"><a class="header-anchor" href="#第三范式-3nf" aria-hidden="true">#</a> 第三范式（3NF）</h2><blockquote><p><strong>属性不依赖于其它非主属性</strong></p></blockquote><p>示例：学生关系表为Student（学号， 姓名， 年龄， 所在学院， 学院地点， 学院电话），学号是主键，<u>但是学院电话只依赖于所在学院，并不依赖于主键学号，因此该设计不符合第三范式</u>，应该把学院专门设计成一张表，学生表和学院表，两个是一对多的关系。</p><figure><img src="'+g+'" alt="image-20240407084815669" tabindex="0" loading="lazy"><figcaption>image-20240407084815669</figcaption></figure>',7),k=o('<h2 id="bc范式-bcnf" tabindex="-1"><a class="header-anchor" href="#bc范式-bcnf" aria-hidden="true">#</a> BC范式（BCNF）</h2><blockquote><p><strong>每个表只有一个候选键</strong>（除了主键，其他键是可以重复存储的）</p></blockquote><p><strong>候选键</strong>：在一个数据库中<u>每行的值都不相同</u>，则可称为候选键</p><p>示例：在上面第三范式的noNF表，中可以看出，<u>每一个员工的email都是唯一的（不可能两个人用同一个email）</u>，则此表不符合BC范式，<strong>拆成一对一</strong></p><figure><img src="'+p+'" alt="image-20240407085829027" tabindex="0" loading="lazy"><figcaption>image-20240407085829027</figcaption></figure><h2 id="第四范式-4nf" tabindex="-1"><a class="header-anchor" href="#第四范式-4nf" aria-hidden="true">#</a> 第四范式（4NF）</h2><blockquote><p><strong>消除表中的多值依赖</strong></p></blockquote><p>也就是说<strong>可以减少维护数据一致性</strong>的工作。比上图的noNF表中的<u>skill技能这个字段，有的人是“java，mysql”，有的人描述的是“Java，MySQL”，这样数据就不一致了</u>，解决办法就是<strong>将多值属性放入一个新表</strong>，所以满足第四范式的关系图如下：</p><figure><img src="'+u+'" alt="image-20240407090151306" tabindex="0" loading="lazy"><figcaption>image-20240407090151306</figcaption></figure><figure><img src="'+f+'" alt="image-20240407090705269" tabindex="0" loading="lazy"><figcaption>image-20240407090705269</figcaption></figure>',10),y=a("h2",{id:"不满足的范式的表怎么办",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#不满足的范式的表怎么办","aria-hidden":"true"},"#"),e(" 不满足的范式的表怎么办")],-1),q=a("p",null,[e("视情况"),a("strong",null,"拆分"),e("成一对一、一对多、多对多的关系")],-1);function N(B,F){const n=r("font");return l(),c("div",null,[_,s(n,{color:"red"},{default:i(()=>[e("不满足")]),_:1}),e("则设计成"),b,e("的实体关系。例如地址字段，可以再细分为省，市，区等不可再分割（即原子特性）的字段"),m,a("blockquote",null,[a("p",null,[e("主要针对联合主键，"),a("strong",null,[s(n,{color:"green"},{default:i(()=>[e("非联合主键的其他列必须依赖联合主键的")]),_:1}),s(n,{color:"red"},{default:i(()=>[e("所有列")]),_:1})]),e("，"),s(n,{color:"red"},{default:i(()=>[e("不能只依赖联合主键的部分字段")]),_:1})])]),s(n,{color:"red"},{default:i(()=>[e("不满足")]),_:1}),e("则设计成"),x,e("的实体关系。"),v,s(n,{color:"red"},{default:i(()=>[e("有时为了增加查询速度，适当的冗余是被允许的")]),_:1}),k,s(n,{color:"red"},{default:i(()=>[e("**一般关系型数据库满足第三范式即可，范式越高，多表联合查询越大，SQL效率越低**")]),_:1}),y,q])}const z=t(h,[["render",N],["__file","范式设计.html.vue"]]);export{z as default};
