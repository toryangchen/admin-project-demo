(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45cd093a"],{"9b59":function(e,t,l){},c2be:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container order-list"},[l("div",{staticStyle:{"font-weight":"700","margin-bottom":"20px"}},[e._v("网点负责人：姓名占位")]),l("div",{staticClass:"search-condition"},[l("el-select",{attrs:{disabled:"",placeholder:"检测点"},model:{value:e.hospitalValue,callback:function(t){e.hospitalValue=t},expression:"hospitalValue"}},e._l(e.hospitalOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),l("el-select",{attrs:{placeholder:"订单状态"},model:{value:e.statusValue,callback:function(t){e.statusValue=t},expression:"statusValue"}},e._l(e.statusOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),l("el-select",{attrs:{placeholder:"采样医师"},model:{value:e.doctorValue,callback:function(t){e.doctorValue=t},expression:"doctorValue"}},e._l(e.doctorOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),l("el-date-picker",{attrs:{type:"date",placeholder:"选择采样时间"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),l("el-divider"),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"","highlight-current-row":""}},[l("el-table-column",{attrs:{align:"center",prop:"id",label:"订单编号"}}),l("el-table-column",{attrs:{prop:"userName",label:"下单用户"}}),l("el-table-column",{attrs:{prop:"phone",label:"联系电话"}}),l("el-table-column",{attrs:{prop:"testTitle",label:"检测项目",width:"180"}}),l("el-table-column",{attrs:{prop:"doctor",label:"采样医师"}}),l("el-table-column",{attrs:{prop:"payTime",label:"采样时间"}}),l("el-table-column",{attrs:{label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-tag",{attrs:{type:t.row.orderStatus+""}},[e._v(e._s(t.row.statusText))])]}}])}),l("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-link",{attrs:{type:"primary"},on:{click:function(l){return e.onTableClick(t.$index)}}},[e._v("查看")])]}}])})],1)],1)},o=[],r={name:"OrderList",data:function(){return{value1:[],input:"",statusValue:-2,statusOptions:[{value:-2,label:"所有订单"},{value:2,label:"待确认"},{value:3,label:"检测中"},{value:4,label:"检测完成"}],hospitalValue:-1,hospitalOptions:[{value:-1,label:"xx社区医院"}],doctorValue:"",doctorOptions:[{value:-1,label:"全部"},{value:1,label:"姓名占位"},{value:2,label:"姓名占位2"}],listLoading:!1,list:[{id:"20200101",userName:"Jack",testTitle:"过敏性皮肤过敏源检测",hospital:"西安市高新区xxxxx社区医院",orderStatus:2,orderPrice:"¥200",testStyle:0,payTime:"2023-03-06 14:35:06",statusText:"待确认",phone:"138xxxx0010",doctor:"姓名占位"},{id:"20200101",userName:"Jack",testTitle:"过敏性皮肤过敏源检测",hospital:"西安市高新区xxxxx社区医院",orderStatus:3,orderPrice:"¥200",testStyle:0,payTime:"2023-03-06 14:35:06",statusText:"检测中",phone:"138xxxx0010",doctor:"姓名占位"},{id:"20200101",userName:"Jack",testTitle:"过敏性皮肤过敏源检测",hospital:"西安市高新区xxxxx社区医院",orderStatus:4,orderPrice:"¥200",testStyle:0,payTime:"2023-03-06 14:35:06",statusText:"检测完成",phone:"138xxxx0010",doctor:"姓名占位"}]}},methods:{onTableClick:function(e){this.$router.push({path:"/orderManage/orderDetail",query:{id:20200101,userType:2},meta:{activeMenu:"/orderManage/hospitalOrder"}})}}},s=r,i=(l("eb6c"),l("2877")),u=Object(i["a"])(s,a,o,!1,null,"61a10b10",null);t["default"]=u.exports},eb6c:function(e,t,l){"use strict";l("9b59")}}]);