

<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	export let slug;
	export let post;
</script>

<h1>{slug}</h1>

<h2>{post.title}</h2>
<p>{post.content}</p>
