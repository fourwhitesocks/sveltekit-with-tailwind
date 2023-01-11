<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter/index.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h4>
		Breaking change see possibly:
		<div>
			ERROR:
			https://stackoverflow.com/questions/70534899/sveltekit-error-request-query-has-been-replaced-by-request-url-searchparams
		</div>
	</h4>
	<h1 class="text-blue-500 font-bold">
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		Some TAILWIND<br />here! Too cool!
	</h1>
	<p class="text-green-600 mt-12">
		This is a copy of the regular SvelteKit Demo I did already but it has tailwinds in it
	</p>
	<p>From this video: https://youtu.be/_bViHP-Utxw</p>
	<p>I got help with this from here: https://github.com/svelte-add/tailwindcss/issues/42</p>
	<p />
	<p>It does seem to purge and minify the tailwind but it's kinda confusing</p>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<ul class="list-disc space-y-2 mt-10">
		<li class="flex items-start">
			<span class="h-6 flex items-center sm:h-7">
				<svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
			<p class="ml-2">
				Uses
				<code class="text-sm font-bold text-gray-900">tailwind</code>
			</p>
		</li>
		<li class="flex items-start">
			<span class="h-6 flex items-center sm:h-7">
				<svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
			<p class="ml-2">
				Push to Netlify!
				<code class="text-sm font-bold text-gray-900">YAY!</code>
			</p>
		</li>
		<li class="flex items-start">
			<span class="h-6 flex items-center sm:h-7">
				<svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
			<p class="ml-2">More YAY!</p>
		</li>
	</ul>

	<Counter />
</section>

<style style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
