<template>
  <div class="box"></div>
  <span class="span1">测试10px</span>
  <span class="span2">测试12px</span>
</template>

<style scoped>
.box {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 100px 100px 100px 100px;
  border-color: pink transparent red transparent;
}
.span1 {
  font-size: 120px;
  display: inline-block;
}
.span2 {
  display: inline-block;
  font-size: 120px;
}
</style>
