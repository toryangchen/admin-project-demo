(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b52c678"],{"30e4":function(t,e,l){"use strict";l("6d01")},"6d01":function(t,e,l){},"98b7":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container"},[l("div",{staticClass:"search-condition"},[l("el-select",{attrs:{placeholder:"检测点"},model:{value:t.hospitalValue,callback:function(e){t.hospitalValue=e},expression:"hospitalValue"}},t._l(t.hospitalOptions,(function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"","highlight-current-row":""}},[l("el-table-column",{attrs:{label:"序号",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),l("el-table-column",{attrs:{label:"医师姓名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.doctorName)+" ")]}}])}),l("el-table-column",{attrs:{label:"联系电话"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.doctorNumber)+" ")]}}])}),l("el-table-column",{attrs:{label:"采样订单总数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.count)+" ")]}}])}),l("el-table-column",{attrs:{label:"网点名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.hospitalName)+" ")]}}])}),l("el-table-column",{attrs:{label:"订单状态",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(-1===e.row.status?"已停用":0===e.row.status?"待审核":"正常")+" ")]}}])}),l("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?l("el-link",{attrs:{type:"primary"}},[t._v("审核通过")]):t._e(),1===e.row.status?l("el-link",{attrs:{type:"danger"}},[t._v("账户停用")]):t._e(),-1===e.row.status?l("el-link",{attrs:{type:"warning"}},[t._v("恢复正常")]):t._e()]}}])})],1)],1)},o=[],n={name:"OrderList",data:function(){return{listLoading:!1,hospitalValue:-1,hospitalOptions:[{value:-1,label:"全部检测点"},{value:0,label:"xx社区医院"}],list:[{id:"20200101",doctorName:"杨晨",doctorNumber:"13825270010",hospitalName:"西安市高新区xxxxx社区医院",count:100,status:0},{id:"20200101",doctorName:"杨晨2",doctorNumber:"13825270010",hospitalName:"西安市高新区xxxxx社区医院",count:110,status:1},{id:"20200101",doctorName:"杨晨3",doctorNumber:"13825270010",hospitalName:"西安市高新区xxxxx社区医院",count:120,status:-1}]}},methods:{onButtonClick:function(){this.dialogInfo.show=!0},handleClose:function(){this.dialogInfo.show=!1}}},s=n,u=(l("30e4"),l("2877")),r=Object(u["a"])(s,a,o,!1,null,"647da8d2",null);e["default"]=r.exports}}]);