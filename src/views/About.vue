<template>
    <div class="about-page">
        <h1>About This App</h1>
        <p>This page provides information about our Vue application.</p>
    </div>
</template>
  
<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            items: []
        };
    },
    async created() {
    },
    methods: {
    }
}
</script>
  
  <!-- Add your styles here -->
<style scoped>
.about-page {
    text-align: center;
    margin-top: 50px;
}
</style>
  