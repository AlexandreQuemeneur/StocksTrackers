<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/dashboard">Dashboard</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavComponent',

    }
</script>

<style lang="scss" scoped>
ul{
    display: flex;
    justify-content: flex-end;
    li{
        margin-right: 10px;
    }
}

</style>