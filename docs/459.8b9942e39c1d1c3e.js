"use strict";(self.webpackChunkmonosushi2=self.webpackChunkmonosushi2||[]).push([[459],{5459:(v,a,i)=>{i.r(a),i.d(a,{ProductModule:()=>O});var _=i(6814),c=i(8589),t=i(4946),d=i(8522);function g(e,u){1&e&&(t.TgZ(0,"span"),t._uU(1,"..."),t.qZA())}function l(e,u){1&e&&(t.TgZ(0,"span"),t._uU(1,"..."),t.qZA())}const p=function(e,u){return[e,u]};function f(e,u){if(1&e&&(t.TgZ(0,"div",13)(1,"div",14),t._UZ(2,"img",15),t.qZA(),t.TgZ(3,"div",16)(4,"h3",17),t._uU(5),t.ALo(6,"slice"),t.YNc(7,g,2,0,"span",18),t.qZA(),t.TgZ(8,"div",19)(9,"p",20),t._uU(10),t.ALo(11,"slice"),t.YNc(12,l,2,0,"span",18),t.qZA(),t.TgZ(13,"h4",21),t._uU(14),t.qZA()(),t.TgZ(15,"div",22)(16,"p",23)(17,"span",24),t._uU(18),t.qZA(),t._uU(19," \u0433\u0440\u043d"),t.qZA(),t.TgZ(20,"div",25)(21,"button",26),t._uU(22,"-"),t.qZA(),t.TgZ(23,"span",27),t._uU(24,"1"),t.qZA(),t.TgZ(25,"button",28),t._uU(26,"+"),t.qZA()(),t.TgZ(27,"button",29),t._uU(28,"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438"),t.qZA()()()()),2&e){const n=u.$implicit;t.xp6(2),t.Q6J("routerLink",t.WLB(17,p,"/product/"+n.category.path,n.id))("src",n.imagePath,t.LSH),t.xp6(2),t.Q6J("routerLink",t.WLB(20,p,"/product/"+n.category.path,n.id)),t.xp6(1),t.hij(" ",t.Dn7(6,9,n.name,0,22)," "),t.xp6(2),t.Q6J("ngIf",n.name.length>22),t.xp6(3),t.hij(" ",t.Dn7(11,13,n.ingredients,0,30)," "),t.xp6(2),t.Q6J("ngIf",n.ingredients.length>30),t.xp6(2),t.Oqu(n.weight),t.xp6(4),t.Oqu(n.price)}}let h=(()=>{class e{constructor(n,o,r){this.productService=n,this.activatedRoute=o,this.router=r,this.userProducts=[],this.eventSubscription=this.router.events.subscribe(s=>{s instanceof c.m2&&this.getProducts()})}ngOnInit(){}ngOnDestroy(){this.eventSubscription.unsubscribe()}getProducts(){const n=this.activatedRoute.snapshot.paramMap.get("category");this.productService.getAllByCategoryFirebase(n).subscribe(o=>{this.userProducts=o})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(d.M),t.Y36(c.gz),t.Y36(c.F0))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product"]],decls:32,vars:1,consts:[[1,"box"],[1,"product__section"],[1,"container"],[1,"product__wrapper"],[1,"product__wrapper_title"],[1,"product__text_title"],[1,"product__wrapper_nav"],[1,"product__nav"],[1,"product__nav_list"],["href","",1,"nav__list_item","nav__list_active"],["href","",1,"nav__list_item"],[1,"product__main_wrapper"],["class","product__card",4,"ngFor","ngForOf"],[1,"product__card"],[1,"card__image_wrapper"],["alt","",1,"product__card_image",3,"routerLink","src"],[1,"card__info_wrapper"],[1,"card__info_title",3,"routerLink"],[4,"ngIf"],[1,"card__info_desc"],[1,"info__desc_ing"],[1,"info__desc_weight"],[1,"card__info_order"],[1,"info__order_price"],[1,"order__price_bold"],[1,"info__order_count"],[1,"order__count_minus","order__count_btn"],[1,"order__count_text"],[1,"order__count_plus","order__count_btn"],["type","button",1,"info__order_button"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"p",5),t._uU(6,"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0438"),t.qZA()(),t.TgZ(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),t._uU(11,"\u0412\u0441\u0456"),t.qZA()(),t.TgZ(12,"li",8)(13,"a",10),t._uU(14,"\u0420\u043e\u043b\u0438 \u0424\u0456\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0456\u044f"),t.qZA()(),t.TgZ(15,"li",8)(16,"a",10),t._uU(17,"\u0420\u043e\u043b\u0438 \u041a\u0430\u043b\u0456\u0444\u043e\u0440\u043d\u0456\u044f"),t.qZA()(),t.TgZ(18,"li",8)(19,"a",10),t._uU(20,"\u0417\u0430\u043f\u0435\u0447\u0435\u043d\u0456 \u0420\u043e\u043b\u0438"),t.qZA()(),t.TgZ(21,"li",8)(22,"a",10),t._uU(23,"\u0424\u0456\u0440\u043c\u043e\u0432\u0456 \u0421\u0443\u0448\u0456"),t.qZA()(),t.TgZ(24,"li",8)(25,"a",10),t._uU(26,"\u041f\u0440\u0435\u043c\u0456\u0443\u043c \u0421\u0443\u0448\u0456"),t.qZA()(),t.TgZ(27,"li",8)(28,"a",10),t._uU(29,"\u0420\u043e\u043b\u0438 \u041c\u0430\u043a\u0456"),t.qZA()()()(),t.TgZ(30,"div",11),t.YNc(31,f,29,23,"div",12),t.qZA()()()()()),2&o&&(t.xp6(31),t.Q6J("ngForOf",r.userProducts))},dependencies:[_.sg,_.O5,c.rH,_.OU],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{box-sizing:border-box;height:100%}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:inherit;margin:0;padding:0;font-family:Comfortaa,sans-serif}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{list-style:none}.product__wrapper_title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.product__wrapper_nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:60px}.product__text_title[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#5a5a5a;border-top:5px solid #b5d8f7}.product__nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.product__main_wrapper[_ngcontent-%COMP%]{margin-top:40px;display:flex;align-items:center;gap:1%;flex-wrap:wrap}.product__card[_ngcontent-%COMP%]{width:24%;height:400px;padding:14px;display:flex;align-items:center;justify-content:space-between;flex-direction:column;border:2px solid transparent;border-radius:6px;margin-top:1.5%}.product__card[_ngcontent-%COMP%]:hover{animation-name:_ngcontent-%COMP%_borderFill;animation-duration:1s;animation-iteration-count:1;animation-fill-mode:forwards}.product__card_image[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:contain;cursor:pointer}.container[_ngcontent-%COMP%]{max-width:96%;margin:40px auto}@keyframes _ngcontent-%COMP%_borderFill{25%{border-top:2px solid #b5d8f7}50%{border-top:2px solid #b5d8f7;border-right:2px solid #b5d8f7}75%{border-top:2px solid #b5d8f7;border-right:2px solid #b5d8f7;border-bottom:2px solid #b5d8f7}to{border:2px solid #b5d8f7}}.nav__list_item[_ngcontent-%COMP%]{width:168px;height:60px;border:1px solid lightgray;display:flex;align-items:center;justify-content:center;color:#252525;font-size:16px;font-weight:700}.nav__list_active[_ngcontent-%COMP%]{border-top:4px solid #b5d8f7;border-left:none;border-bottom:none;border-right:none}.card__image_wrapper[_ngcontent-%COMP%]{height:50%;width:100%;display:flex;align-items:center;justify-content:center}.card__info_wrapper[_ngcontent-%COMP%]{width:100%;height:42%;display:flex;align-items:center;justify-content:space-between;flex-direction:column}.card__info_title[_ngcontent-%COMP%]{font-size:20px;color:#252525;cursor:pointer}.card__info_desc[_ngcontent-%COMP%], .card__info_order[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between}.info__desc_weight[_ngcontent-%COMP%]{color:#5a5a5a}.info__order_count[_ngcontent-%COMP%]{width:100px;height:46px;border:1px solid lightgray;border-radius:8px;display:flex;align-items:center;justify-content:space-between;padding:0 4px}.info__order_button[_ngcontent-%COMP%]{width:110px;height:46px;background:#b5d8f7;border:2px solid #b5d8f7;border-radius:8px;font-size:13px;font-weight:700;text-transform:uppercase;color:#252525;cursor:pointer;transition:.4s}.info__order_button[_ngcontent-%COMP%]:hover{background:none}.order__price_bold[_ngcontent-%COMP%]{font-weight:700;color:#252525}.order__count_btn[_ngcontent-%COMP%]{width:26px;height:32px;background:none;border:none;font-size:20px;color:#252525;border-radius:10px;cursor:pointer;transition:.3s}.order__count_btn[_ngcontent-%COMP%]:hover{background:#b5d8f7}"]})}return e})();var m=i(8358);function x(e,u){if(1&e){const n=t.EpF();t.TgZ(0,"div",1)(1,"section",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"ul",6)(6,"li",7)(7,"a",8),t._uU(8,"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"),t.qZA()(),t.TgZ(9,"li",7)(10,"a",9),t._uU(11,"\u0420\u043e\u043b\u0438"),t.qZA()(),t.TgZ(12,"li",7)(13,"a",10),t._uU(14,"\u0420\u043e\u043b\u0438 \u0424\u0456\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0456\u044f"),t.qZA()(),t.TgZ(15,"li",7)(16,"a",10),t._uU(17,"\u0424\u0456\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0456\u044f \u0417 \u041b\u043e\u0441\u043e\u0441\u0435\u043c"),t.qZA()()()(),t.TgZ(18,"div",11)(19,"div",12)(20,"div",13),t._UZ(21,"img",14),t.qZA(),t.TgZ(22,"div",15)(23,"h2",16),t._uU(24),t.qZA(),t.TgZ(25,"p",17)(26,"span",18),t._uU(27,"\u0421\u043a\u043b\u0430\u0434: "),t.qZA(),t._uU(28),t.qZA(),t.TgZ(29,"div",19)(30,"p",20)(31,"span",21),t._uU(32,"\u0412\u0430\u0433\u0430:"),t.qZA(),t._uU(33),t.qZA()(),t.TgZ(34,"div",22)(35,"div",23)(36,"p",24)(37,"span",25),t._uU(38),t.qZA(),t._uU(39," \u0433\u0440\u043d"),t.qZA()(),t.TgZ(40,"div",26)(41,"button",27),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.countOfProduct(r.currentProduct,!1))}),t._uU(42,"-"),t.qZA(),t.TgZ(43,"span",28),t._uU(44),t.qZA(),t.TgZ(45,"button",29),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.countOfProduct(r.currentProduct,!0))}),t._uU(46,"+"),t.qZA()(),t.TgZ(47,"div",30)(48,"button",31),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.addProductToBasket(r.currentProduct))}),t._uU(49,"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438"),t.qZA()()()()()()()()()()}if(2&e){const n=t.oxw();t.xp6(21),t.Q6J("src",n.currentProduct.imagePath,t.LSH),t.xp6(3),t.Oqu(n.currentProduct.name),t.xp6(4),t.hij(" ",n.currentProduct.ingredients,""),t.xp6(5),t.hij(" ",n.currentProduct.weight,""),t.xp6(5),t.Oqu(n.currentProduct.price*n.currentProduct.count),t.xp6(6),t.Oqu(n.currentProduct.count)}}const b=[{path:":category",component:h},{path:":category/:id",component:(()=>{class e{constructor(n,o,r){this.activatedRoute=n,this.orderService=o,this.productService=r}ngOnInit(){this.activatedRoute.data.subscribe(n=>{this.currentProduct=n.productInfo})}countOfProduct(n,o){o?++n.count:!o&&n.count>1&&--n.count}addProductToBasket(n){let o=[];if(localStorage.length>0&&localStorage.getItem("basket"))if(o=JSON.parse(localStorage.getItem("basket")),o.some(r=>r.id===n.id)){const r=o.findIndex(s=>s.id===n.id);o[r].count+=n.count}else o.push(n);else o.push(n);localStorage.setItem("basket",JSON.stringify(o)),n.count=1,this.orderService.changeBasket.next(!0)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(c.gz),t.Y36(m.p),t.Y36(d.M))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-info"]],decls:1,vars:1,consts:[["class","box",4,"ngIf"],[1,"box"],[1,"product__info_section"],[1,"container"],[1,"product__info_wrapper"],[1,"product__nav_wrapper"],[1,"product__nav_list"],[1,"nav__list_item"],["routerLink","/",1,"list__item_link"],["routerLink","/product/rolls",1,"list__item_link"],["href","",1,"list__item_link"],[1,"product__wrapper"],[1,"product__info_item"],[1,"product__image_wrapper"],["alt","",1,"product__image_item",3,"src"],[1,"product__desc_wrapper"],[1,"product__desc_title"],[1,"product__desc_text"],[1,"product__desc_bold"],[1,"product__desc_weight"],[1,"desc__weight_text"],[1,"product__weight_bold"],[1,"product__desc_info"],[1,"product__desc_sum"],[1,"desc__sum_text"],[1,"desc__sum_item"],[1,"product__desc_count"],[1,"desc__count_minus","desc__count_btn",3,"click"],[1,"desc__count_text"],[1,"desc__count_plus","desc__count_btn",3,"click"],[1,"product__desc_basket"],["type","button",1,"desc__basket_button",3,"click"]],template:function(o,r){1&o&&t.YNc(0,x,50,6,"div",0),2&o&&t.Q6J("ngIf",r.currentProduct)},dependencies:[_.O5,c.rH],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{box-sizing:border-box;height:100%}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:inherit;margin:0;padding:0;font-family:Comfortaa,sans-serif}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{list-style:none}.product__wrapper[_ngcontent-%COMP%]{max-width:70%;margin:120px auto}.product__info_item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.product__nav_list[_ngcontent-%COMP%]{display:flex;align-items:center;gap:30px}.product__image_wrapper[_ngcontent-%COMP%]{width:50%}.product__image_item[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.product__desc_wrapper[_ngcontent-%COMP%]{width:44%;height:100%;display:flex;justify-content:space-between;flex-direction:column}.product__desc_title[_ngcontent-%COMP%]{width:340px;font-size:42px;font-weight:700}.product__desc_text[_ngcontent-%COMP%]{margin-top:20px}.product__desc_bold[_ngcontent-%COMP%]{font-weight:700;color:#b5d8f7}.product__desc_weight[_ngcontent-%COMP%]{margin-top:12px}.product__desc_info[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between;margin-top:50px}.product__desc_count[_ngcontent-%COMP%]{width:120px;height:46px;border:1px solid lightgray;border-radius:8px;display:flex;align-items:center;justify-content:space-between;padding:0 4px}.product__weight_bold[_ngcontent-%COMP%]{font-weight:700;color:#b5d8f7}.container[_ngcontent-%COMP%]{max-width:94%;margin:30px auto}.nav__list_item[_ngcontent-%COMP%]:not(:first-child){list-style-type:disc}.list__item_link[_ngcontent-%COMP%]{font-size:14px;color:#252525}.desc__weight_text[_ngcontent-%COMP%]{color:#252525}.desc__sum_text[_ngcontent-%COMP%]{font-size:18px;color:#252525}.desc__sum_item[_ngcontent-%COMP%]{font-weight:700;font-size:20px}.desc__count_btn[_ngcontent-%COMP%]{width:32px;height:32px;background:none;border:none;font-size:20px;color:#252525;border-radius:10px;cursor:pointer;transition:.3s}.desc__count_btn[_ngcontent-%COMP%]:hover{background:#b5d8f7}.desc__basket_button[_ngcontent-%COMP%]{width:110px;height:46px;background:#b5d8f7;border:2px solid #b5d8f7;border-radius:8px;font-size:13px;font-weight:700;text-transform:uppercase;color:#252525;cursor:pointer;transition:.4s}.desc__basket_button[_ngcontent-%COMP%]:hover{background:none}"]})}return e})(),resolve:{productInfo:(()=>{class e{constructor(n){this.productService=n}resolve(n,o){return this.productService.getOneFirebase(n.paramMap.get("id"))}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(d.M))};static#n=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}];let P=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(b),c.Bz]})}return e})();var C=i(6208);let O=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[_.ez,P,C.m]})}return e})()}}]);