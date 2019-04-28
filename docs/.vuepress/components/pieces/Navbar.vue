<template>
    <nav class="_navbar">
    	<div class="_nav-logo">
    		<a class="_nav-item" href="/">
    			<img src="/img/logo.png" alt="logo">
    		</a>
    	</div>	
    </nav>
</template>

<script>

</script>

<style scoped>
._navbar, ._nav-logo {
	align-items: stretch;
	background-color: #F1F1F1;
	display: flex;
	min-height: 3.3rem;
}

._nav-item {
	align-items: center;
	display: flex;
	line-height: 1.5;
	padding: .5rem .75rem;
}

._navbar img {
	height: auto;
	max-height: 2rem;
	max-width: 100%;
}


</style>