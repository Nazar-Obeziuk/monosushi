"use strict";(self.webpackChunkmonosushi2=self.webpackChunkmonosushi2||[]).push([[812],{5812:(W,x,_)=>{_.r(x),_.d(x,{AdminModule:()=>X});var d=_(6814),g=_(8589),t=_(4946),y=_(8928);let O=(()=>{class n{constructor(e,o){this.accountService=e,this.router=o}logout(){this.router.navigate(["/"]),localStorage.removeItem("currentUser"),this.accountService.isUserLogin$.next(!0)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(y.B),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin"]],decls:15,vars:0,consts:[[1,"container"],[1,"admin__wrapper"],[1,"admin__wrapper_items"],["routerLink","discount","routerLinkActive","admin__item_active","type","button",1,"admin__item_btn"],["routerLink","category","routerLinkActive","admin__item_active","type","button",1,"admin__item_btn"],["routerLink","product","routerLinkActive","admin__item_active","type","button",1,"admin__item_btn"],["routerLink","orders","routerLinkActive","admin__item_active","type","button",1,"admin__item_btn"],["type","button",1,"admin__exit",3,"click"],[1,"admin__wrapper_content"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),t._uU(4,"\u0410\u043a\u0446\u0456\u0457"),t.qZA(),t.TgZ(5,"button",4),t._uU(6,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457"),t.qZA(),t.TgZ(7,"button",5),t._uU(8,"\u0422\u043e\u0432\u0430\u0440\u0438"),t.qZA(),t.TgZ(9,"button",6),t._uU(10,"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"),t.qZA(),t.TgZ(11,"button",7),t.NdJ("click",function(){return i.logout()}),t._uU(12,"\u0412\u0438\u0445\u0456\u0434"),t.qZA()(),t.TgZ(13,"div",8),t._UZ(14,"router-outlet"),t.qZA()()())},dependencies:[g.lC,g.rH,g.Od],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{box-sizing:border-box;height:100%}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:inherit;margin:0;padding:0;font-family:Comfortaa,sans-serif}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{list-style:none}.container[_ngcontent-%COMP%]{max-width:96%;margin:20px auto}.admin__wrapper[_ngcontent-%COMP%]{display:flex;gap:40px;margin:40px 0}.admin__wrapper_items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}.admin__exit[_ngcontent-%COMP%]{margin-top:20px;width:100px;height:60px;border-radius:10px;border:none;background:#b5d8f7;font-size:16px;font-weight:700;color:#252525;text-transform:uppercase;cursor:pointer}.admin__item_btn[_ngcontent-%COMP%]{width:200px;height:60px;background:none;border:none;font-size:16px;color:#252525;cursor:pointer;border-top:1px solid rgb(238,238,238);border-right:1px solid rgb(238,238,238);border-bottom:1px solid rgb(238,238,238)}.admin__item_active[_ngcontent-%COMP%]{border:none;border-top:5px solid #b5d8f7;font-weight:700;color:#252525}"]})}return n})();var r=_(95),l=_(3960),M=_(5776),Z=_(9862);let b=(()=>{class n{constructor(e,o){this.http=e,this.afs=o,this.categoryCollection=(0,M.hJ)(this.afs,"categories")}getAllFirebase(){return(0,l.BS)(this.categoryCollection,{idField:"id"})}getOneFirebase(e){const o=(0,l.JU)(this.afs,`categories/${e}`);return(0,l._1)(o,{idField:"id"})}createFirebase(e){return(0,l.ET)(this.categoryCollection,e)}updateFirebase(e,o){const i=(0,l.JU)(this.afs,`categories/${o}`);return(0,l.r7)(i,{...e})}deleteFirebase(e){const o=(0,l.JU)(this.afs,`categories/${e}`);return(0,l.oe)(o)}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(Z.eN),t.LFG(l.gg))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var C=_(5861),s=_(4426);let P=(()=>{class n{constructor(e){this.storage=e,this.uploadPercent=0}uploadFile(e,o,i){var a=this;return(0,C.Z)(function*(){const u=`${e}/${o}`;let m="";if(i)try{const p=(0,s.iH)(a.storage,u),h=(0,s.B0)(p,i);(0,s.e9)(h).subscribe(f=>{a.uploadPercent=f.progress}),yield h,m=yield(0,s.Jt)(p)}catch(p){console.error(p)}else console.log("wrong formatt of file");return Promise.resolve(m)})()}deleteUploadFile(e){const o=(0,s.iH)(this.storage,e);return(0,s.oq)(o)}valueByControl(e){throw new Error("Method not implemented.")}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(s.Ke))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function A(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",10)(2,"div",11)(3,"input",12),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw(2);return t.KtG(a.upload(i))}),t.qZA()(),t.TgZ(4,"div",13),t._UZ(5,"div",14),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(5),t.Udp("width",e.uploadPercent,"%")}}function w(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",15),t._UZ(2,"img",16),t.TgZ(3,"button",17),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.deleteImage())}),t._uU(4,"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("src",e.valueByControl("imagePath"),t.LSH)}}function v(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4)(2,"form",5),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addCategory())}),t.TgZ(3,"div",6),t._UZ(4,"input",7)(5,"input",8),t.qZA(),t.YNc(6,A,6,2,"ng-container",3),t.YNc(7,w,5,1,"ng-container",3),t.TgZ(8,"button",9),t._uU(9),t.qZA()()(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("formGroup",e.categoryForm),t.xp6(4),t.Q6J("ngIf",!e.isUploaded),t.xp6(1),t.Q6J("ngIf",e.isUploaded),t.xp6(1),t.Q6J("disabled",e.categoryForm.invalid),t.xp6(1),t.Oqu(e.editStatus?"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438":"\u0414\u043e\u0434\u0430\u0442\u0438")}}function F(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr",27)(1,"td",28),t._uU(2),t.ALo(3,"slice"),t.qZA(),t.TgZ(4,"td",29),t._uU(5),t.qZA(),t.TgZ(6,"td",30),t._uU(7),t.ALo(8,"slice"),t.qZA(),t.TgZ(9,"td",31),t._UZ(10,"img",32),t.qZA(),t.TgZ(11,"td",33)(12,"button",34),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.editCategory(a))}),t._uU(13,"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),t.qZA(),t.TgZ(14,"button",35),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.deleteCategory(a))}),t._uU(15,"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"),t.qZA()()()}if(2&n){const e=c.$implicit;t.xp6(2),t.hij(" \u2116 ",(e.id+"").length>10?t.Dn7(3,4,e.id+"",0,10)+"...":e.id," "),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.hij(" ",e.path.length>30?t.Dn7(8,8,e.path,0,30)+"...":e.path," "),t.xp6(3),t.Q6J("src",e.imagePath,t.LSH)}}function T(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"div",18)(2,"table",19)(3,"tr",20)(4,"th",21),t._uU(5,"\u2116"),t.qZA(),t.TgZ(6,"th",22),t._uU(7,"\u041d\u0430\u0437\u0432\u0430"),t.qZA(),t.TgZ(8,"th",23),t._uU(9,"\u0428\u043b\u044f\u0445"),t.qZA(),t.TgZ(10,"th",24),t._uU(11,"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"),t.qZA(),t.TgZ(12,"th",25),t._uU(13,"\u0414\u0456\u0457"),t.qZA()(),t.YNc(14,F,16,12,"tr",26),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(14),t.Q6J("ngForOf",e.adminCategories)}}let U=(()=>{class n{constructor(e,o,i){this.categoryService=e,this.imageService=o,this.fb=i,this.adminCategories=[],this.editStatus=!1,this.isUploaded=!1,this.uploadPercent=0,this.isModalOpen=!1}ngOnInit(){this.initCategoryForm(),this.loadCategories()}changeCategoryModal(){this.isModalOpen=!this.isModalOpen}initCategoryForm(){this.categoryForm=this.fb.group({name:[null,r.kI.required],path:[null,r.kI.required],imagePath:[null,r.kI.required]})}loadCategories(){this.categoryService.getAllFirebase().subscribe(e=>{this.adminCategories=e})}addCategory(){this.editStatus?this.categoryService.updateFirebase(this.categoryForm.value,this.currentCategoryId).then(()=>{this.loadCategories()}):(this.editStatus=!1,this.categoryService.createFirebase(this.categoryForm.value).then(()=>{this.loadCategories()})),this.editStatus=!1,this.categoryForm.reset(),this.isUploaded=!1,this.uploadPercent=0}editCategory(e){this.categoryForm.patchValue({name:e.name,path:e.path,imagePath:e.imagePath}),this.editStatus=!0,this.currentCategoryId=e.id,this.isUploaded=!0}deleteCategory(e){this.categoryService.deleteFirebase(e.id).then(()=>{this.loadCategories()})}upload(e){const o=e?.target.files[0];this.imageService.uploadFile("images",o.name,o).then(i=>{this.categoryForm.patchValue({imagePath:i}),this.isUploaded=!0}).catch(i=>{console.log(i)})}deleteImage(){this.imageService.deleteUploadFile(this.valueByControl("imagePath")).then(()=>{this.isUploaded=!1,this.uploadPercent=0,this.categoryForm.patchValue({imagePath:null})})}valueByControl(e){return this.categoryForm.get(e)?.value}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(b),t.Y36(P),t.Y36(r.qu))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-category"]],decls:6,vars:2,consts:[[1,"container"],[1,"wrapper"],[1,"wrapper__add_discount",3,"click"],[4,"ngIf"],[1,"forms"],[3,"formGroup","ngSubmit"],[1,"form__header"],["formControlName","name","type","text","id","name","placeholder","*\u041d\u0430\u0437\u0432\u0430",1,"form__name"],["formControlName","path","type","text","id","path","placeholder","*\u0428\u043b\u044f\u0445",1,"form__path"],["type","submit",1,"form__button",3,"disabled"],[1,"category__file_wrapper"],[1,"file"],["type","file","id","formFile",1,"form__file",3,"change"],[1,"progress"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress__item"],[1,"file__load"],["alt","",1,"admin__img",3,"src"],["type","button",1,"image__button",3,"click"],[1,"table__wrapper"],[1,"table"],[1,"table__header"],[1,"header__sharp","table__item"],[1,"header__name","table__item"],[1,"header__way","table__item"],[1,"header__image","table__item"],[1,"header__actions","table__item"],["class","table__main",4,"ngFor","ngForOf"],[1,"table__main"],[1,"main__sharp","table__item"],[1,"main__name","table__item"],[1,"main__path","table__item"],[1,"main__image","table__item"],["alt","",1,"main__image_item",3,"src"],[1,"main__actions","table__item"],["type","button",1,"actions__edit","actions__btn",3,"click"],["type","button",1,"actions__delete","actions__btn",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return i.changeCategoryModal()}),t._uU(3,"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e"),t.qZA(),t.YNc(4,v,10,5,"ng-container",3),t.YNc(5,T,15,1,"ng-container",3),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngIf",i.isModalOpen),t.xp6(1),t.Q6J("ngIf",!i.isModalOpen))},dependencies:[d.sg,d.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,d.OU],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{box-sizing:border-box;height:100%}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:inherit;margin:0;padding:0;font-family:Comfortaa,sans-serif}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{list-style:none}.container[_ngcontent-%COMP%]{width:1200px}.wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;gap:20px}.wrapper__add_discount[_ngcontent-%COMP%]{width:300px;height:60px;background:none;border:1px solid #b5d8f7;border-radius:10px;font-size:18px;font-weight:700;color:#252525;text-transform:uppercase;outline:none;cursor:pointer;transition:.4s}.wrapper__add_discount[_ngcontent-%COMP%]:hover{background:#b5d8f7;border:1px solid #b5d8f7}.forms[_ngcontent-%COMP%]{width:60%;margin-top:20px;display:flex;justify-content:center;flex-direction:column;gap:20px}.description[_ngcontent-%COMP%], .title[_ngcontent-%COMP%], .file[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-bottom:20px}.password[_ngcontent-%COMP%], .form__button[_ngcontent-%COMP%]{margin-top:20px}.admin__img[_ngcontent-%COMP%]{height:100px}.form__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.form__name[_ngcontent-%COMP%], .form__path[_ngcontent-%COMP%]{width:49%;height:52px;border:1px solid lightgray;border-radius:10px;font-size:16px;outline-color:#add8e6;padding-left:12px}.form__file[_ngcontent-%COMP%]{width:100%;height:52px;border:1px solid lightgray;border-radius:10px;font-size:16px;outline-color:#add8e6;padding:14px 0 0 12px;margin-top:20px}.form__button[_ngcontent-%COMP%]{width:100%;height:60px;background:#b5d8f7;border:none;border-radius:6px;cursor:pointer;color:#252525;font-size:22px}.table[_ngcontent-%COMP%]{border-collapse:separate}.file__load[_ngcontent-%COMP%]{width:100%;height:100%;background:rgb(247,247,247);border-radius:6px;padding:20px;display:flex;align-items:center;justify-content:flex-start;gap:10px;margin-top:20px}.image__button[_ngcontent-%COMP%]{width:120px;height:40px;background:red;color:#fff;font-size:16px;border:none;border-radius:6px;cursor:pointer}.progress[_ngcontent-%COMP%]{width:100%;height:20px;border-radius:10px;background:rgb(236,236,236);margin-top:14px}.progress__item[_ngcontent-%COMP%]{height:100%;border-radius:10px;background:#b5d8f7}.table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.table__wrapper[_ngcontent-%COMP%]{width:100%}.table__header[_ngcontent-%COMP%]{width:100%;border-bottom:2px solid #b5d8f7}.table__main[_ngcontent-%COMP%]{border-bottom:2px solid lightgray}.table__item[_ngcontent-%COMP%]{padding:20px 0}.header__sharp[_ngcontent-%COMP%], .header__name[_ngcontent-%COMP%], .header__title[_ngcontent-%COMP%], .header__desc[_ngcontent-%COMP%], .header__image[_ngcontent-%COMP%], .header__actions[_ngcontent-%COMP%]{color:#252525;text-align:left}.header__sharp[_ngcontent-%COMP%]{width:16%}.header__name[_ngcontent-%COMP%]{width:20%}.header__way[_ngcontent-%COMP%]{width:30%;text-align:left}.header__image[_ngcontent-%COMP%], .header__actions[_ngcontent-%COMP%]{width:17%}.main__image_item[_ngcontent-%COMP%]{height:60px}.main__actions[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;gap:10px}.actions__edit[_ngcontent-%COMP%], .actions__delete[_ngcontent-%COMP%]{font-weight:700;color:#b5d8f7;font-size:16px;background:none;border:none;text-align:left;cursor:pointer}"]})}return n})();var q=_(8522);function k(n,c){if(1&n&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e.name)}}function J(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",19)(2,"div",20)(3,"input",21),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw(2);return t.KtG(a.upload(i))}),t.qZA()()(),t.BQk()}}function D(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",22),t._UZ(2,"img",23),t.TgZ(3,"button",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.deleteImage())}),t._uU(4,"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("src",e.valueByControl("imagePath"),t.LSH)}}function S(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4)(2,"form",5),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addProduct())}),t.TgZ(3,"div",6)(4,"select",7),t.YNc(5,k,2,2,"option",8),t.qZA()(),t.TgZ(6,"div",9),t._UZ(7,"input",10)(8,"input",11),t.qZA(),t.TgZ(9,"div",12),t._UZ(10,"input",13),t.qZA(),t.TgZ(11,"div",14),t._UZ(12,"input",15)(13,"input",16),t.qZA(),t.YNc(14,J,4,0,"ng-container",3),t.YNc(15,D,5,1,"ng-container",3),t.TgZ(16,"button",17),t._uU(17),t.qZA()()(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("formGroup",e.productForm),t.xp6(3),t.Q6J("ngForOf",e.adminCategories),t.xp6(9),t.Q6J("ngIf",!e.isUploaded),t.xp6(1),t.Q6J("ngIf",e.isUploaded),t.xp6(1),t.Q6J("disabled",e.productForm.invalid),t.xp6(1),t.Oqu(e.editStatus?"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438":"\u0414\u043e\u0434\u0430\u0442\u0438")}}function I(n,c){1&n&&(t.TgZ(0,"span"),t._uU(1,"..."),t.qZA())}function N(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr",38)(1,"td",39),t._uU(2),t.ALo(3,"slice"),t.qZA(),t.TgZ(4,"td",40),t._uU(5),t.qZA(),t.TgZ(6,"td",41),t._uU(7),t.qZA(),t.TgZ(8,"td",42),t._uU(9),t.qZA(),t.TgZ(10,"td",43),t._uU(11),t.ALo(12,"slice"),t.YNc(13,I,2,0,"span",3),t.qZA(),t.TgZ(14,"td",44),t._uU(15),t.qZA(),t.TgZ(16,"td",45),t._uU(17),t.qZA(),t.TgZ(18,"td",46),t._UZ(19,"img",47),t.qZA(),t.TgZ(20,"td",48)(21,"button",49),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.editProduct(a))}),t._uU(22,"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),t.qZA(),t.TgZ(23,"button",50),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.deleteProduct(a))}),t._uU(24,"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"),t.qZA()()()}if(2&n){const e=c.$implicit,o=t.oxw(2);t.xp6(2),t.hij(" \u2116 ",(e.id+"").length>10?t.Dn7(3,10,e.id+"",0,10)+"...":e.id," "),t.xp6(3),t.Oqu(e.category.name),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.path),t.xp6(2),t.hij(" ",t.Dn7(12,14,e.ingredients,0,30)," "),t.xp6(2),t.Q6J("ngIf",e.ingredients.length>30),t.xp6(2),t.Oqu(e.weight),t.xp6(2),t.Oqu(e.price),t.xp6(2),t.Q6J("src",e.imagePath,t.LSH),t.xp6(4),t.Q6J("disabled",o.editStatus)}}function Q(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"div",25)(2,"table",26)(3,"tr",27)(4,"th",28),t._uU(5,"\u2116"),t.qZA(),t.TgZ(6,"th",29),t._uU(7,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f"),t.qZA(),t.TgZ(8,"th",30),t._uU(9,"\u041d\u0430\u0437\u0432\u0430"),t.qZA(),t.TgZ(10,"th",31),t._uU(11,"\u0428\u043b\u044f\u0445"),t.qZA(),t.TgZ(12,"th",32),t._uU(13,"\u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442\u0438"),t.qZA(),t.TgZ(14,"th",33),t._uU(15,"\u0412\u0430\u0433\u0430"),t.qZA(),t.TgZ(16,"th",34),t._uU(17,"\u0426\u0456\u043d\u0430"),t.qZA(),t.TgZ(18,"th",35),t._uU(19,"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"),t.qZA(),t.TgZ(20,"th",36),t._uU(21,"\u0414\u0456\u0457"),t.qZA()(),t.YNc(22,N,25,18,"tr",37),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(22),t.Q6J("ngForOf",e.adminProducts)}}let B=(()=>{class n{constructor(e,o,i,a){this.categoryService=e,this.productService=o,this.imageService=i,this.fb=a,this.adminCategories=[],this.adminProducts=[],this.editStatus=!1,this.uploadPercent=0,this.isUploaded=!1,this.isFormOpen=!1,this.currentProductId=0}ngOnInit(){this.initProductForm(),this.loadCategories(),this.loadProducts()}toggleProductForm(){this.isFormOpen=!this.isFormOpen}initProductForm(){this.productForm=this.fb.group({category:[null,r.kI.required],name:[null,r.kI.required],path:[null,r.kI.required],ingredients:[null,r.kI.required],weight:[null,r.kI.required],price:[null,r.kI.required],imagePath:[null,r.kI.required],count:[1]})}loadCategories(){this.categoryService.getAllFirebase().subscribe(e=>{this.adminCategories=e,this.productForm.patchValue({category:this.adminCategories[0].id})})}loadProducts(){this.productService.getAllFirebase().subscribe(e=>{this.adminProducts=e})}addProduct(){this.editStatus?this.productService.updateFirebase(this.productForm.value,this.currentCategoryId).then(()=>{this.productForm.value.count=1,this.loadProducts(),this.isFormOpen=!1,this.editStatus=!1}):this.productService.createFirebase(this.productForm.value).then(()=>{this.loadProducts(),this.productForm.reset(),this.productForm.value.count=1,this.isFormOpen=!1,this.isUploaded=!1,this.editStatus=!1})}editProduct(e){this.productForm.patchValue({category:e.category,name:e.name,path:e.path,ingredients:e.ingredients,weight:e.weight,price:e.price,imagePath:e.imagePath}),this.isFormOpen=!0,this.isUploaded=!0,this.editStatus=!0,this.currentCategoryId=e.id}deleteProduct(e){this.productService.deleteFirebase(e.id).then(()=>{this.loadProducts()})}upload(e){const o=e.target.files[0];this.imageService.uploadFile("images",o.name,o).then(i=>{this.productForm.patchValue({imagePath:i}),this.isUploaded=!0}).catch(i=>{console.log(i)})}deleteImage(){this.imageService.deleteUploadFile(this.valueByControl("imagePath")).then(()=>{this.isUploaded=!1,this.uploadPercent=0,this.productForm.patchValue({imagePath:null})}).catch(e=>{console.log(e)})}valueByControl(e){return this.productForm.get(e)?.value}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(b),t.Y36(q.M),t.Y36(P),t.Y36(r.qu))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-product"]],decls:6,vars:2,consts:[[1,"container"],[1,"wrapper"],[1,"wrapper__add_discount",3,"click"],[4,"ngIf"],[1,"forms"],[3,"formGroup","ngSubmit"],[1,"form__rolls_wrapper"],["formControlName","category",1,"rolls__select","product__input"],["class","rolls__select_option",3,"ngValue",4,"ngFor","ngForOf"],[1,"form__header"],["formControlName","name","type","text","id","name","placeholder","*\u041d\u0430\u0437\u0432\u0430",1,"form__name","product__input"],["formControlName","path","type","text","id","path","placeholder","*\u0428\u043b\u044f\u0445",1,"form__path","product__input"],[1,"form__ing_wrapper"],["formControlName","ingredients","type","text","placeholder","*\u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442\u0438",1,"ing__input","product__input"],[1,"form__info_wrapper"],["formControlName","weight","type","text","placeholder","*\u0412\u0430\u0433\u0430",1,"form__info_weight","product__input"],["formControlName","price","type","number","placeholder","*\u0426\u0456\u043d\u0430",1,"form__info_price","product__input"],["type","submit",1,"form__button",3,"disabled"],[1,"rolls__select_option",3,"ngValue"],[1,"category__file_wrapper"],[1,"file"],["type","file","id","formFile",1,"form__file",3,"change"],[1,"file__load"],["alt","",1,"admin__img",3,"src"],["type","button",1,"image__button",3,"click"],[1,"table__wrapper"],[1,"table"],[1,"table__header"],[1,"header__sharp","table__item"],[1,"header__category","table__item"],[1,"header__name","table__item"],[1,"header__way","table__item"],[1,"header__ingradients","table__item"],[1,"header__weight","table__item"],[1,"header__price","table__item"],[1,"header__image","table__item"],[1,"header__actions","table__item"],["class","table__main",4,"ngFor","ngForOf"],[1,"table__main"],[1,"main__sharp","table__item"],[1,"main__category","table__item"],[1,"main__name","table__item"],[1,"main__path","table__item"],[1,"main__ing","table__item"],[1,"main__weight","table__item"],[1,"main__price","table__item"],[1,"main__image","table__item"],["alt","",1,"main__image_item",3,"src"],[1,"main__actions","table__item"],["type","button",1,"actions__edit","actions__btn",3,"click"],["type","button",1,"actions__delete","actions__btn",3,"disabled","click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return i.toggleProductForm()}),t._uU(3,"\u0414\u043e\u0434\u0430\u0442\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"),t.qZA(),t.YNc(4,S,18,6,"ng-container",3),t.YNc(5,Q,23,1,"ng-container",3),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngIf",i.isFormOpen),t.xp6(1),t.Q6J("ngIf",!i.isFormOpen))},dependencies:[d.sg,d.O5,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.sg,r.u,d.OU],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{box-sizing:border-box;height:100%}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:inherit;margin:0;padding:0;font-family:Comfortaa,sans-serif}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{list-style:none}.container[_ngcontent-%COMP%]{width:1200px}.wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;gap:20px}.wrapper__add_discount[_ngcontent-%COMP%]{width:300px;height:60px;background:none;border:1px solid #b5d8f7;border-radius:10px;font-size:18px;font-weight:700;color:#252525;text-transform:uppercase;outline:none;cursor:pointer;transition:.4s}.wrapper__add_discount[_ngcontent-%COMP%]:hover{background:#b5d8f7;border:1px solid #b5d8f7}.forms[_ngcontent-%COMP%]{width:60%;margin-top:20px;display:flex;justify-content:center;flex-direction:column;gap:20px}.admin__img[_ngcontent-%COMP%]{height:100px;margin-top:20px}.form__header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between}.form__name[_ngcontent-%COMP%], .form__path[_ngcontent-%COMP%]{width:49%}.form__info_wrapper[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between}.form__info_weight[_ngcontent-%COMP%], .form__info_price[_ngcontent-%COMP%]{width:49%}.form__file[_ngcontent-%COMP%]{width:100%;height:56px;border:1px solid lightgray;border-radius:10px;background:none;padding:16px 12px 0;font-size:16px;color:#252525;margin-bottom:20px}.form__button[_ngcontent-%COMP%]{width:300px;height:60px;background:#b5d8f7;border:none;border-radius:6px;cursor:pointer;color:#252525;font-size:22px;margin-top:20px}.rolls__select[_ngcontent-%COMP%]{width:100%}.product__input[_ngcontent-%COMP%]{height:56px;border:1px solid lightgray;border-radius:10px;background:none;padding:0 12px;font-size:16px;color:#252525;margin-bottom:20px;outline-color:#b5d8f7}.ing__input[_ngcontent-%COMP%]{width:100%}.image__button[_ngcontent-%COMP%]{width:80px;height:40px;background:red;color:#fff;font-size:16px;border:none;border-radius:4px;cursor:pointer}.table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.table__wrapper[_ngcontent-%COMP%]{width:100%}.table__header[_ngcontent-%COMP%]{width:100%;border-bottom:2px solid #b5d8f7}.table__item[_ngcontent-%COMP%]{padding:20px 0;text-align:left}.table__main[_ngcontent-%COMP%]{border-bottom:2px solid lightgray}.main__image_item[_ngcontent-%COMP%]{height:50px}.main__actions[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;gap:10px}.actions__btn[_ngcontent-%COMP%]{font-weight:700;color:#b5d8f7;font-size:16px;background:none;border:none;text-align:left;cursor:pointer}"]})}return n})();var Y=_(3819);function E(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"div",13)(3,"input",14),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw(2);return t.KtG(a.upload(i))}),t.qZA()(),t.TgZ(4,"div",15),t._UZ(5,"div",16),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(5),t.Udp("width",e.uploadPercent,"%")}}function z(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",17),t._UZ(2,"img",18),t.TgZ(3,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.deleteImage())}),t._uU(4,"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("src",e.valueByControl("imagePath"),t.LSH)}}function L(n,c){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4)(2,"form",5),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addDiscount())}),t.TgZ(3,"div",6),t._UZ(4,"input",7)(5,"input",8),t.qZA(),t.TgZ(6,"div",9),t._UZ(7,"textarea",10),t.qZA(),t.YNc(8,E,6,2,"ng-container",3),t.YNc(9,z,5,1,"ng-container",3),t.TgZ(10,"button",11),t._uU(11),t.qZA()()(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("formGroup",e.discountForm),t.xp6(6),t.Q6J("ngIf",!e.isUploaded),t.xp6(1),t.Q6J("ngIf",e.isUploaded),t.xp6(1),t.Q6J("disabled",e.discountForm.invalid),t.xp6(1),t.Oqu(e.editStatus?"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438":"\u0414\u043e\u0434\u0430\u0442\u0438")}}function j(n,c){1&n&&(t.TgZ(0,"span"),t._uU(1,"..."),t.qZA())}function H(n,c){1&n&&(t.TgZ(0,"span"),t._uU(1,"..."),t.qZA())}function G(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr",30)(1,"td",31),t._uU(2),t.qZA(),t.TgZ(3,"td",31),t._uU(4),t.qZA(),t.TgZ(5,"td",32),t._uU(6),t.ALo(7,"slice"),t.YNc(8,j,2,0,"span",3),t.qZA(),t.TgZ(9,"td",33),t._uU(10),t.ALo(11,"slice"),t.YNc(12,H,2,0,"span",3),t.qZA(),t.TgZ(13,"td",34),t._UZ(14,"img",35),t.qZA(),t.TgZ(15,"td",36)(16,"button",37),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.editDiscount(a))}),t._uU(17,"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),t.qZA(),t.TgZ(18,"button",38),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.deleteDiscount(a))}),t._uU(19,"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"),t.qZA()()()}if(2&n){const e=c.$implicit,o=t.oxw(2);t.xp6(2),t.Oqu(o.discountDate),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.hij(" ",t.Dn7(7,7,e.title,0,30)," "),t.xp6(2),t.Q6J("ngIf",e.title.length>30),t.xp6(2),t.hij(" ",t.Dn7(11,11,e.description,0,60)," "),t.xp6(2),t.Q6J("ngIf",e.description.length>60),t.xp6(2),t.Q6J("src",e.imagePath,t.LSH)}}function $(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"div",20)(2,"table",21)(3,"tr",22)(4,"th",23),t._uU(5,"\u0414\u0430\u0442\u0430"),t.qZA(),t.TgZ(6,"th",24),t._uU(7,"\u041d\u0430\u0437\u0432\u0430"),t.qZA(),t.TgZ(8,"th",25),t._uU(9,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),t.qZA(),t.TgZ(10,"th",26),t._uU(11,"\u041e\u043f\u0438\u0441"),t.qZA(),t.TgZ(12,"th",27),t._uU(13,"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"),t.qZA(),t.TgZ(14,"th",28),t._uU(15,"\u0414\u0456\u0457"),t.qZA()(),t.YNc(16,G,20,15,"tr",29),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(16),t.Q6J("ngForOf",e.adminDiscounts)}}const K=[{path:"",component:O,children:[{path:"category",component:U},{path:"product",component:B},{path:"discount",component:(()=>{class n{constructor(e,o,i){this.discountService=e,this.fb=o,this.storage=i,this.adminDiscounts=[],this.editStatus=!1,this.isUploaded=!1,this.uploadPercent=0,this.isModalOpen=!1,this.date=new Date,this.discountDate=`${this.date.getMonth()+1}.${this.date.getFullYear()}`}ngOnInit(){this.initDiscountForm(),this.loadDiscounts()}changeDiscountModal(){this.isModalOpen=!this.isModalOpen}initDiscountForm(){this.discountForm=this.fb.group({name:[null,r.kI.required],title:[null,r.kI.required],description:[null,r.kI.required],imagePath:[null,r.kI.required]})}loadDiscounts(){this.discountService.getAllFirebase().subscribe(e=>{this.adminDiscounts=e})}addDiscount(){this.editStatus?this.discountService.updateFirebase(this.discountForm.value,this.currentDiscountId).then(()=>{this.loadDiscounts()}):(this.editStatus=!1,this.discountService.createFirebase(this.discountForm.value).then(()=>{this.loadDiscounts()})),this.editStatus=!1,this.discountForm.reset(),this.isUploaded=!1,this.uploadPercent=0}editDiscount(e){this.discountForm.patchValue({name:e.name,title:e.title,description:e.description}),this.editStatus=!0,this.currentDiscountId=e.id}deleteDiscount(e){this.discountService.deleteFirebase(e.id).then(()=>{this.loadDiscounts()})}upload(e){const o=e?.target.files[0];this.uploadFile("images",o.name,o).then(i=>{this.discountForm.patchValue({imagePath:i}),this.isUploaded=!0}).catch(i=>{console.log(i)})}uploadFile(e,o,i){var a=this;return(0,C.Z)(function*(){const u=`${e}/${o}`;let m="";if(i)try{const p=(0,s.iH)(a.storage,u),h=(0,s.B0)(p,i);(0,s.e9)(h).subscribe(f=>{a.uploadPercent=f.progress}),yield h,m=yield(0,s.Jt)(p)}catch(p){console.log(p)}else console.log("wrong formatt of file");return Promise.resolve(m)})()}deleteImage(){const e=(0,s.iH)(this.storage,this.valueByControl("imagePath"));(0,s.oq)(e).then(()=>{this.isUploaded=!1,this.uploadPercent=0,this.discountForm.patchValue({imagePath:null})})}valueByControl(e){return this.discountForm.get(e)?.value}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(Y.r),t.Y36(r.qu),t.Y36(s.Ke))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-discount"]],decls:6,vars:2,consts:[[1,"container"],[1,"wrapper"],[1,"wrapper__add_discount",3,"click"],[4,"ngIf"],[1,"forms"],[3,"formGroup","ngSubmit"],[1,"form__header"],["formControlName","name","type","text","id","name","placeholder","*\u041d\u0430\u0437\u0432\u0430",1,"form__name"],["formControlName","title","type","text","id","title","placeholder","*\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",1,"form__title"],[1,"description"],["formControlName","description","name","description","id","description","name","","cols","30","rows","10","placeholder","*\u041e\u043f\u0438\u0441",1,"form__textarea"],["type","submit",1,"form__button",3,"disabled"],[1,"category__file_wrapper"],[1,"file"],["type","file","id","formFile",1,"form__file",3,"change"],[1,"progress"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress__item"],[1,"file__load"],["alt","",1,"admin__img",3,"src"],["type","button",1,"image__button",3,"click"],[1,"table__wrapper"],[1,"table"],[1,"table__header"],[1,"header__sharp","table__item"],[1,"header__name","table__item"],[1,"header__title","table__item"],[1,"header__desc","table__item"],[1,"header__image","table__item"],[1,"header__actions","table__item"],["class","table__main",4,"ngFor","ngForOf"],[1,"table__main"],[1,"main__sharp","table__item"],[1,"main__title","table__item"],[1,"main__desc","table__item"],[1,"main__image","table__item"],["alt","",1,"main__image_item",3,"src"],[1,"main__actions","table__item"],["type","button",1,"actions__edit","actions__btn",3,"click"],["type","button",1,"actions__delete","actions__btn",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return i.changeDiscountModal()}),t._uU(3,"\u0414\u043e\u0434\u0430\u0442\u0438 \u0430\u043a\u0446\u0456\u044e"),t.qZA(),t.YNc(4,L,12,5,"ng-container",3),t.YNc(5,$,17,1,"ng-container",3),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngIf",i.isModalOpen),t.xp6(1),t.Q6J("ngIf",!i.isModalOpen))},dependencies:[d.sg,d.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,d.OU],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{box-sizing:border-box;height:100%}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:inherit;margin:0;padding:0;font-family:Comfortaa,sans-serif}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{list-style:none}.container[_ngcontent-%COMP%]{width:1200px}.wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;gap:20px}.wrapper__add_discount[_ngcontent-%COMP%]{width:300px;height:60px;background:none;border:1px solid #b5d8f7;border-radius:10px;font-size:18px;font-weight:700;color:#252525;text-transform:uppercase;outline:none;cursor:pointer;transition:.4s}.wrapper__add_discount[_ngcontent-%COMP%]:hover{background:#b5d8f7;border:1px solid #b5d8f7}.forms[_ngcontent-%COMP%]{width:60%;margin-top:20px;display:flex;justify-content:center;flex-direction:column;gap:20px}.description[_ngcontent-%COMP%], .title[_ngcontent-%COMP%], .file[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-bottom:20px}.password[_ngcontent-%COMP%], .form__button[_ngcontent-%COMP%]{margin-top:20px}.admin__img[_ngcontent-%COMP%]{height:100px}.form__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.form__name[_ngcontent-%COMP%], .form__title[_ngcontent-%COMP%]{width:49%;height:52px;border:1px solid lightgray;border-radius:10px;font-size:16px;outline-color:#add8e6;padding-left:12px}.form__textarea[_ngcontent-%COMP%]{width:100%;height:160px;border:1px solid lightgray;border-radius:10px;font-size:16px;outline-color:#add8e6;padding-left:12px;padding-top:12px;margin-top:20px;resize:none}.form__file[_ngcontent-%COMP%]{width:100%;height:52px;border:1px solid lightgray;border-radius:10px;font-size:16px;outline-color:#add8e6;padding:14px 0 0 12px}.form__button[_ngcontent-%COMP%]{width:100%;height:60px;background:#b5d8f7;border:none;border-radius:6px;cursor:pointer;color:#252525;font-size:22px}.table[_ngcontent-%COMP%]{border-collapse:separate}.file__load[_ngcontent-%COMP%]{width:100%;height:100%;background:rgb(247,247,247);border-radius:6px;padding:20px;display:flex;align-items:center;justify-content:flex-start;gap:10px}.image__button[_ngcontent-%COMP%]{width:120px;height:40px;background:red;color:#fff;font-size:16px;border:none;border-radius:6px;cursor:pointer}.progress[_ngcontent-%COMP%]{width:100%;height:20px;border-radius:10px;background:rgb(236,236,236);margin-top:14px}.progress__item[_ngcontent-%COMP%]{height:100%;border-radius:10px;background:#b5d8f7}.table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.table__wrapper[_ngcontent-%COMP%]{width:100%}.table__header[_ngcontent-%COMP%]{width:100%;border-bottom:2px solid #b5d8f7}.table__main[_ngcontent-%COMP%]{border-bottom:2px solid lightgray}.table__item[_ngcontent-%COMP%]{padding:20px 0}.header__sharp[_ngcontent-%COMP%], .header__name[_ngcontent-%COMP%], .header__title[_ngcontent-%COMP%], .header__desc[_ngcontent-%COMP%], .header__image[_ngcontent-%COMP%], .header__actions[_ngcontent-%COMP%]{color:#252525;text-align:left}.header__sharp[_ngcontent-%COMP%], .header__name[_ngcontent-%COMP%]{width:12%}.header__title[_ngcontent-%COMP%]{width:20%}.header__desc[_ngcontent-%COMP%]{width:34%}.header__image[_ngcontent-%COMP%]{width:12%}.header__actions[_ngcontent-%COMP%]{width:10%}.main__image_item[_ngcontent-%COMP%]{height:60px}.main__actions[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;gap:10px}.actions__edit[_ngcontent-%COMP%], .actions__delete[_ngcontent-%COMP%]{font-weight:700;color:#b5d8f7;font-size:16px;background:none;border:none;text-align:left}"]})}return n})()},{path:"orders",component:(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-orders"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"admin-orders works!"),t.qZA())}})}return n})()}]}];let V=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(K),g.Bz]})}return n})();var R=_(6208);let X=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[d.ez,V,R.m]})}return n})()}}]);