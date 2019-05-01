<template>
<!--
	<div class="_card">
    	<img class="image" src="https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/271052_Viator_Shutterstock_166828.jpg" alt="eiffel">
    	<header class="header">
    		<h2 class="subtitle">Destination</h2>
    		<h1 class="title">Eiffel tower</h1>
    	</header>
    	<div class="content">
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis tempora soluta saepe aspernatur deserunt eaque molestiae dignissimos itaque maxime adipisci dolores harum repellendus, natus suscipit, officia culpa quos, aliquid voluptatem!
    	</div>
    </div>-->
	
	<div class="sample_card">
		
		<div class="_card">
			<img class="_img" src="https://tailwindcss.com/img/card-top.jpg" alt="">
			<div class="card_content">
				<div class="card_title">
					Hello there
				</div>
				<div class="card_text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quae sequi maxime deserunt! Tempore porro, quaerat dolorum labore fuga voluptates ab commodi. Assumenda aliquam provident velit quaerat veniam, officia voluptate.
				</div>
			</div>
		</div>

	</div>
	

</template>

<script>

</script>

<style>
.sample_card {
	padding: 2.5rem;
	display: flex;
	justify-content: center;
	border-color: #dae1e7;
}

/**/

._card {
	box-shadow: 0 15px 30px 0 rgba(0,0,0,.11),0 5px 15px 0 rgba(0,0,0,.08);
	overflow: hidden;
	max-width: 30rem;
	border-radius: .25rem;
	line-height: 1.5;
}

._img {
	width: 100%;
	max-width: 100%;
	height: auto;
}

.card_content {
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
}

.card_title {
	font-size: 1.25rem;
	margin-bottom: .5rem;
	font-weight: 700;
}

.card_text {
	font-size: 1rem;
	color: #606f7b;
	margin: 0;
}



/* 
._card {
	width: 300px;
	border-radius: 0.5rem;
	box-shadow: 0 .25rem 1rem rgba(0, 0, 0, .12);
	overflow: hidden;
}

.image {
	max-width: 100%;
}

.header {
	padding: 1.25rem;
}

.subtitle {
	margin: 0 0 .25rem;
	font-size: .75rem;
	color: #666;
}

.title {
	margin: 0;
	font-size: 1.75rem;
}

.content {
	padding: 1.25rem;
	color: #666;
	line-height: 1.4;
}
*/
</style>