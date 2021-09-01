(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[235],{6687:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>a});const a={key:"v-887cadce",path:"/drafts/compile-neovim.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Compiling Neovim from Source",slug:"compiling-neovim-from-source",children:[]}],filePathRelative:"drafts/compile-neovim.md",git:{updatedTime:1628285347e3,contributors:[]}}},2277:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>r});var a=e(6252);const i=(0,a.Wm)("h2",{id:"compiling-neovim-from-source",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#compiling-neovim-from-source","aria-hidden":"true"},"#"),(0,a.Uk)(" Compiling Neovim from Source")],-1),o=(0,a.Uk)("First, get the dependencies. For distributions other than Ubuntu or Arch, go "),t={href:"https://github.com/neovim/neovim/wiki/Building-Neovim#build-prerequisites",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("here"),c=(0,a.Uk)("."),p=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Ubuntu</span>\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gettext libtool libtool-bin autoconf automake cmake g++ pkg-config <span class="token function">unzip</span> build-essential\n<span class="token comment">#Arch</span>\n<span class="token function">sudo</span> pacman -S base-devel cmake <span class="token function">unzip</span> ninja tree-sitter\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Download and compile Neovim:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable"><span class="token variable">$(</span>mktemp -d<span class="token variable">)</span></span>\n<span class="token function">git</span> clone https://github.com/neovim/neovim\n<span class="token builtin class-name">cd</span> neovim\n<span class="token function">sudo</span> <span class="token function">make</span> <span class="token assign-left variable">CMAKE_BUILD_TYPE</span><span class="token operator">=</span>Release <span class="token function">install</span>\n<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>\n<span class="token function">sudo</span> <span class="token function">rm</span> -r neovim\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>or if you are on Arch you can get the development version from the AUR:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S neovim-git\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If you are on Gentoo you have to emerge the 9999 neovim version with luajit as the lua single target.</p>',6),r={render:function(n,s){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[i,(0,a.Wm)("p",null,[o,(0,a.Wm)("a",t,[l,(0,a.Wm)(e)]),c]),p],64)}}}}]);