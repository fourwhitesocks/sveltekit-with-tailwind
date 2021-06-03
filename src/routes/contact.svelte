<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script type="text/javascript">
	var mynyxke0mz2e9y;
	(function (d, t) {
		var s = d.createElement(t),
			options = {
				userName: 'amystout',
				formHash: 'mynyxke0mz2e9y',
				autoResize: true,
				height: '440',
				async: true,
				host: 'wufoo.com',
				header: 'show',
				ssl: true
			};
		s.src =
			('https:' == d.location.protocol ? 'https://' : 'http://') +
			'secure.wufoo.com/scripts/embed/form.js';
		s.onload = s.onreadystatechange = function () {
			var rs = this.readyState;
			if (rs) if (rs != 'complete') if (rs != 'loaded') return;
			try {
				mynyxke0mz2e9y = new WufooForm();
				mynyxke0mz2e9y.initialize(options);
				mynyxke0mz2e9y.display();
			} catch (e) {}
		};
		var scr = d.getElementsByTagName(t)[0],
			par = scr.parentNode;
		par.insertBefore(s, scr);
	})(document, 'script');
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="content">
	<h1>Contact me here!</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<!-- TODO lose the @next! -->
	<pre>npm init svelte@next</pre>

	<p>YAY! My first Svelte!</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>

<div id="wufoo-mynyxke0mz2e9y">
	Fill out my <a href="https://amystout.wufoo.com/forms/mynyxke0mz2e9y">online form</a>.
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
