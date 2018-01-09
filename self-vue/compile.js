// vm 代表的是vue的一个实例，同时是mvvm的一个虚拟DOM对象
// 真实DOM非常的消耗内存 vm可以将很多次的修改最后集中成为一次，
// 这样就不需要频繁地去修改DOM
function Compile(el,vm) {
    this.vm = vm;
    this.el = document.querySelector(el);
    this.fragment = null;
    this.init();
}

Compile.prototype = {
    init () {
        // 接管模板去编译，页面上现在显示的不是html，只是模板，
        // 我们需要从头开始处理模板
        // fragment 是模板碎片
        this.fragment = this.nodeToFragment(this.el);
        this.compileElement(this.fragment);
        this.el.appendChild(this.fragment);
    },
    compileElement(el){
        var childNodes = el.childNodes;
        [].slice.call(childNodes).forEach((node) => {
            // console.log(node);
            var reg = /\{\{(.*)\}\}/;
            var text = node.textContent;
            if(this.isElementNode(node)){
                // 如果这里是一个节点，那么就去分析节点
                this.Compile(node);
            }else if(this.isTextNode(node) && reg.test(text)){
                this.compileText(node,reg.exec(text)[1]);
            }

            // 递归
            if(node.childNodes && node.childNodes.length){
                this.compileElement(node);
            }
        });
    },
    isElementNode(node){
        return node.nodeType == 1;
    },
    isTextNode(node){
        return node.nodeType == 3;
    },
    Compile(node){

    },
    compileText(node,exp){
        var initText = this.vm[exp];
        this.updateText(node,initText);
    },
    updateText(node,value){
        // console.log(node,value);
        node.textContent = typeof value == 'undefined' ? '' : value
    },
    nodeToFragment: function(el){
        var fragment = document.createDocumentFragment();
        // 新拷贝一份，模板进行html编译，将它替换原有的el.innerHTML
        // 文档碎片不会留下任何痕迹
        var child = el.firstChild;
        // console.log(child);
        while(child){
            // console.log(child);
            fragment.appendChild(child);
            child = el.firstChild;
        }
        return fragment;
    }
}