function fixName(c){return/^(?:serif|sans-serif|cursive|fantasy|monospace)$/.test(c)?c:'"'+c+'"'}
function init(c){var a=c["font-cjk"],e=c["font-latin"],f=c["font-fixed"],d=c["font-other"],b=[];a&&(d?(b.push("@font-face{font-style:normal;font-family:"+fixName(a)+";src:local("+fixName(d)+")}"),b.push("@font-face{font-style:bolder;font-family:"+fixName(a)+";src:local("+fixName(d)+")}"),b.push("@font-face{font-style:normal;font-family:"+fixName(a)+";src:local("+fixName(a)+");unicode-range:U+0-FF,U+2E80-9FFF,U+F900-FAFF,U+FE30-FE4F,U+20000-2FA1F}"),b.push("@font-face{font-style:bolder;font-family:"+
fixName(a)+";src:local("+fixName(a)+");unicode-range:U+0-FF,U+2E80-9FFF,U+F900-FAFF,U+FE30-FE4F,U+20000-2FA1F}")):(b.push("@font-face{font-style:normal;font-family:"+fixName(a)+";src:local("+fixName(a)+")}"),b.push("@font-face{font-style:bolder;font-family:"+fixName(a)+";src:local("+fixName(a)+")}")),e&&(b.push("@font-face{font-style:normal;font-family:"+fixName(a)+";src:local("+fixName(e)+");unicode-range:U+0-FF}"),b.push("@font-face{font-style:bolder;font-family:"+fixName(a)+";src:local("+fixName(e)+
");unicode-range:U+0-FF}")),b.push(":not(pre):not(code):not(textarea):not(tt):not(kbd):not(samp):not(var):not(md-icon):not(.icon):not([class*='codicon']):not([class*='action-label']):not(.xterm-screen):not(.xterm-viewport):not(.xterm-helpers):not(.terminal):not([class*='monaco-']):not([id*='terminal']):not(.terminal-wrapper):not(.xterm):not(.xterm-accessibility):not(.xterm-cursor-layer):not(.xterm-link-layer):not(.xterm-selection-layer):not(.xterm-decoration-container):not(.xterm-char-measure-element):not([class*='split-view']):not([class*='pane']):not([class*='scrollbar']):not([class*='slider']):not([class*='m-font']):not([class*='icon']):not(i):not([class*='fa']):not([class*='glyphicon']){font-family:"+fixName(a)+"!important}"),f||(b.push("pre,code,textarea,tt,kbd,samp,var{font-family:monospace!important}"),b.push("pre *,code *,textarea *,tt *,kbd *,samp *,var *{font-family:monospace!important}")));f&&(b.push("pre,code,textarea,tt,kbd,samp,var{font-family:"+fixName(f)+"!important}"),b.push("pre *,code *,textarea *,tt *,kbd *,samp *,var *{font-family:"+fixName(f)+"!important}"));
c=c.transformations;var g,h;for(g in c)for(a=c[g]||[],f=0;d=a[f];++f)e=d[0],d=d[1],h="",g&&e&&(d&&(h=";unicode-range:U+"+d.replace(/,/g,",U+")),b.push("@font-face{font-style:normal;font-family:"+fixName(g)+";src:local("+fixName(e)+")"+h+"}"),b.push("@font-face{font-style:bolder;font-family:"+fixName(g)+";src:local("+fixName(e)+")"+h+"}"));0<b.length&&((g=document.getElementById("Force_Custom_Fonts"))&&g.remove(),document.documentElement.insertBefore($$$("style",{innerHTML:b.join("")},{id:"Force_Custom_Fonts",
type:"text/css"}),document.documentElement.firstChild))}LocalConfig.get({off:!1},function(c){simpleErrorHandler(tl("error_settings_load"))||c.off||Config.get({"font-cjk":"","font-latin":"","font-fixed":"","font-other":"",transformations:{}},function(a){simpleErrorHandler(tl("error_settings_load"))||init(a)})});
