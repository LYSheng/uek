var wuli=750;
function resize() {
    var dangqian=document.documentElement.clientWidth;
    var font=dangqian/wuli*100;
    document.documentElement.style.fontSize=font+'px';
}
resize();
window.onresize=resize;