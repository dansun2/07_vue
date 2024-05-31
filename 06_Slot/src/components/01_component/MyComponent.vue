<!--
    컴포넌트 lifecyle hooks를 사용하는 방식은 2가지가 있다.
    <script setup>으로 script에 setup 지시문을 추가하여 hooks를 바로 사용하는 방식과
    다음과 같이 사용하는 방식이다.
-->
<script>
    import { onMounted } from "vue";

    export default { // 이걸 내가 내보낼건데 기본값으로 내보낼것이다.
    setup() {
        onMounted(async () =>{ // 돔에 추가된 다음에 콜백함수 매개변수로 전달되어 호출
            console.log("hellow! vue");
        })
    }
}
</script>

<!--
    vue는 사용자의 화면에 보여지는 부분을 내보낼 때 다음괴ㅏ 같이 template 하위에 구성하여 작성한다.
    template는 다른 멜리먼트 요소를 감싸주는 역할을 수행하며 사용자의 화면에 랜더링 할 때 제거된다.
-->

<template>
    <h1>Hello vue</h1>
</template>


<!--
  현재 컴포넌트에서만 적용되는 스타일을 작성한다.
-->
<style scoped>
/* css를 정의하는 스코프 */
</style>