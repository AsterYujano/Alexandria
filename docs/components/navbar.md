---
title: Navbar
---

# Header

## Simple Header

This header only have a logo

<pieces-Navbar></pieces-Navbar>

```html
<nav class="_navbar">
	<div class="_nav-logo">
		<a class="_nav-item" href="/">
			<img src="/img/logo.png" alt="logo">
		</a>
	</div>	
</nav>
```

```css
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
```

## Basic header

::: tip Be patient <Badge text="alpha" type="warn"/> <Badge text="0.1.1+"/>
This is not finished yet.
:::
