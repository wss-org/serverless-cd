import{p as e,K as a,_ as t,d as o,e as l,f as r,i as s,r as n,R as i,N as c,j as u,v as p,P as h,s as f,M as g,C as m,O as d,Q as b,l as v}from"./index.js";import{N as y,b as C}from"./index7.js";import{N as x}from"./index12.js";import{D as V}from"./task.js";var N,S,P,E=y.Group,F=x.AutoComplete,I=a.noop,T=(S=N=function(e){function a(t){o(this,a);var r=l(this,e.call(this,t));P.call(r);var s="value"in t?t.value:t.defaultValue,n="filterValue"in t?t.filterValue:t.defaultFilterValue;return r.state={value:void 0===s?"":s,filterValue:n},r.highlightKey=null,r}return t(a,e),a.getDerivedStateFromProps=function e(a,t){var o={};if("value"in a&&a.value!==t.value){var l=a.value;o.value=null==l?"":a.value}if("filterValue"in a&&a.filterValue!==t.filterValue){var r=a.filterValue;o.filterValue=void 0===r?"":r}return Object.keys(o).length>0?o:null},a.prototype.focus=function e(){var a;(a=this.inputRef).focus.apply(a,arguments)},a.prototype.render=function e(){var t,o=this.props,l=o.shape,h=o.filter,f=o.hasIcon,g=o.disabled,m=o.placeholder,d=o.type,b=o.className,v=o.style,y=o.size,V=o.prefix,N=o.searchText,S=o.dataSource,P=o.filterProps,I=o.buttonProps,T=o.fillProps,w=o.popupContent,j=o.followTrigger,k=o.hasClear,H=o.visible,K=o.locale,O=o.rtl,B=o.icons,z=o.autoHighlightFirstItem,A=r(o,["shape","filter","hasIcon","disabled","placeholder","type","className","style","size","prefix","searchText","dataSource","filterProps","buttonProps","fillProps","popupContent","followTrigger","hasClear","visible","locale","rtl","icons","autoHighlightFirstItem"]),D=s(((t={})[V+"search"]=!0,t[V+"search-"+l]=!0,t[""+V+d]=d,t[""+V+y]=y,t[V+"disabled"]=!!g,t[b]=!!b,t)),R=null,M=null,G=null,L=B.search;if(!n.exports.isValidElement(B.search)&&B.search&&(L=i.createElement("span",null,B.search)),"simple"===l){var Q,W=s(((Q={})[V+"search-icon"]=!0,Q[I.className]=!!I.className,Q[V+"search-symbol-icon"]=!L,Q));f&&(R=i.cloneElement(L||i.createElement(c,{type:"search"}),u({role:"button","aria-disabled":g,"aria-label":K.buttonText},I,{className:W,onClick:this.onSearch,onKeyDown:this.onKeyDown})))}else{var $,_=s((($={})[V+"search-btn"]=!0,$[I.className]=!!I.className,$));G=i.createElement(C,u({tabIndex:"0","aria-disabled":g,"aria-label":K.buttonText,className:_,disabled:g},I,{onClick:this.onSearch,onKeyDown:this.onKeyDown}),f?L||i.createElement(c,{type:"search",className:V+"search-symbol-icon"}):null,N?i.createElement("span",{className:V+"search-btn-text"},N):null)}h.length>0&&(M=i.createElement(x,u({},P,{followTrigger:j,hasBorder:!1,dataSource:h,size:y,disabled:g,value:this.state.filterValue,onChange:this.onFilterChange})));var q=p.pickOthers(a.propTypes,A);void 0!==H&&(q.visible=Boolean(H));var J=p.pickAttrsWith(A,"data-"),U=i.createElement(E,{addonBefore:M,className:V+"search-left",addonBeforeClassName:V+"search-left-addon"},i.createElement(F,u({"aria-label":K.buttonText},q,{followTrigger:j,role:"searchbox",hasClear:k,className:V+"search-input",size:y,fillProps:T,placeholder:m,dataSource:S,innerAfter:R,onPressEnter:this.onPressEnter,value:this.state.value,onChange:this.onChange,onToggleHighlightItem:this.onToggleHighlightItem,autoHighlightFirstItem:z,popupContent:w,disabled:g,ref:this.saveInputRef})));return i.createElement("span",u({className:D,style:v},J,{dir:O?"rtl":void 0}),G?i.createElement(E,{addonAfter:G},U):U)},a}(i.Component),N.propTypes={prefix:h.string,shape:h.oneOf(["normal","simple"]),type:h.oneOf(["primary","secondary","normal","dark"]),size:h.oneOf(["large","medium"]),defaultValue:h.string,value:h.oneOfType([h.string,h.number]),onChange:h.func,onSearch:h.func,defaultFilterValue:h.string,fillProps:h.string,filter:h.array,filterValue:h.string,onFilterChange:h.func,dataSource:h.array,placeholder:h.string,searchText:h.node,style:h.object,className:h.string,filterProps:h.object,buttonProps:h.object,popupContent:h.node,followTrigger:h.bool,visible:h.bool,hasClear:h.bool,hasIcon:h.bool,disabled:h.bool,locale:h.object,rtl:h.bool,icons:h.object,autoHighlightFirstItem:h.bool,onToggleHighlightItem:h.func},N.defaultProps={prefix:"next-",shape:"normal",type:"normal",size:"medium",hasIcon:!0,filter:[],locale:f.Search,buttonProps:{},onChange:I,onSearch:I,onFilterChange:I,onToggleHighlightItem:I,hasClear:!1,disabled:!1,icons:{},autoHighlightFirstItem:!0},P=function e(){var a=this;this.onChange=function(e,t){for(var o=arguments.length,l=Array(o>2?o-2:0),r=2;r<o;r++)l[r-2]=arguments[r];var s;a.props.disabled||("value"in a.props||a.setState({value:e}),(s=a.props).onChange.apply(s,[e,t].concat(l)),"enter"===t&&(a.highlightKey="",a.props.onSearch(e,a.state.filterValue)))},this.onPressEnter=function(){a.highlightKey||a.onSearch()},this.onSearch=function(){a.props.disabled||a.props.onSearch(a.state.value,a.state.filterValue)},this.onFilterChange=function(e){"filterValue"in a.props||a.setState({filterValue:e}),a.props.onFilterChange(e)},this.onToggleHighlightItem=function(e){for(var t,o=arguments.length,l=Array(o>1?o-1:0),r=1;r<o;r++)l[r-1]=arguments[r];a.highlightKey=e,(t=a.props).onToggleHighlightItem.apply(t,[e].concat(l))},this.onKeyDown=function(e){a.props.disabled||e.keyCode===g.ENTER&&a.onSearch()},this.saveInputRef=function(e){e&&e.getInstance()&&(a.inputRef=e.getInstance())}},S);T.displayName="Search";var w=e(T),j=m.config(w,{transfrom:function e(a,t){var o=a.onInputFocus,l=a.overlayVisible,s=a.combox,n,i=r(a,["onInputFocus","overlayVisible","combox"]);return o&&(t("onInputFocus","onFocus","Search"),i.onFocus=o),"overlayVisible"in a&&(t("overlayVisible","visible","Search"),i.visible=l),s&&(t("combox","popupContent","Search"),i.popupContent=s),i}}),k=function(){return k=Object.assign||function(e){for(var a,t=1,o=arguments.length;t<o;t++)for(var l in a=arguments[t])Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l]);return e},k.apply(this,arguments)},H=function(){for(var e=0,a=0,t=arguments.length;a<t;a++)e+=arguments[a].length;for(var o=Array(e),l=0,a=0;a<t;a++)for(var r=arguments[a],s=0,n=r.length;s<n;s++,l++)o[l]=r[s];return o},K,O=d(i.forwardRef((function(e,a){var t=n.exports.useState(!1),o=t[0],l=t[1],r=n.exports.useState(!1),c=r[0],u=r[1],p=n.exports.useCallback((function(a){l(!0),"function"==typeof e.onFocus&&e.onFocus(a)}),[e.onFocus]),h=n.exports.useCallback((function(a){l(!1),"function"==typeof e.onBlur&&e.onBlur(a)}),[e.onBlur]),f=n.exports.useCallback((function(a){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];u(a),"function"==typeof e.onVisibleChange&&e.onVisibleChange.apply(e,H([a],t))}),[e.onVisibleChange]),g=b(),m=n.exports.useMemo((function(){var a,t=k({align:"tl bl",offset:[0,g]},null===(a=e.filterProps)||void 0===a?void 0:a.popupProps),o;return k(k({},e.filterProps),{popupProps:t})}),[g,e.filterProps]);return i.createElement(j,k({},e,{ref:a,onFocus:p,onBlur:h,onVisibleChange:f,className:s(e.className,e.searchText?"custom-search-text":null,!!o&&"focusing",!!c&&"visible",!!e.disabled&&"disabled",e.searchText?null:"next-search-no-custom-search-text"),filterProps:m}))})));const B=e=>{const{className:a,status:t,showLabel:o=!0}=e,l=V[t];return i.createElement(i.Fragment,null,!v.exports.isEmpty(l)&&i.createElement("span",{className:a,style:{whiteSpace:"nowrap"}},i.createElement(c,{type:l.icon,className:`mr-4 ${l.color}`,size:"small"}),o&&i.createElement("span",{className:"text-middle"},l.label)))};var z=n.exports.memo(B);export{z as S,O as a};
