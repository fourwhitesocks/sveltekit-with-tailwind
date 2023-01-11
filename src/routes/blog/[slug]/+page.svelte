<script context="module">
	//import { page } from '$app/stores';

	//takes parameter of contex or ctx;
	export async function load(ctx) {
		let slug = ctx.page.params.slug;
		//below if you had post data you would go {slug. post}
		let post = {
			title: 'Hello',
			content: 'Hello blog post text'
		};
		return { props: { slug, post } };
	}
</script>

<script>
	export let slug;
	export let post;
</script>

<h1>{slug}</h1>

<h2>{post.title}</h2>
<p>{post.content}</p>
