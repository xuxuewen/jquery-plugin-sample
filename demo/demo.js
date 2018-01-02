import $ from 'jquery';
import '../src';

$(document).ready(()=>{
  // 找到页面的dom
  $('.demo-wrap li').helloWorld({
    color:'red',
    complete:()=>{
      console.log('sds')
    }
  }).addClass();
})
