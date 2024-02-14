<template>
    <nav class="navbar">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
    </nav>
</template>
  
<script>
export default {
    name: 'NavBar', 
}
</script>
  
<style scoped>
.navbar {
    background-color: #f0f0f0;
    /* 네비게이션 바의 배경색 */
    padding: 10px 20px;
    /* 네비게이션 바의 내부 패딩 */
}

.nav-link {
    text-decoration: none;
    /* 링크 밑줄 제거 */
    color: #333;
    /* 링크 색상 */
    margin-right: 15px;
    /* 링크 사이의 마진 */
    font-size: 16px;
    /* 글꼴 크기 */
}

.nav-link:hover {
    color: #007bff;
    /* 호버 시 링크 색상 변경 */
}</style>
  