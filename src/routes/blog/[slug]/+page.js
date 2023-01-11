
//import { page } from '$app/stores';

//takes parameter of contex or ctx;
throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load(ctx) {
	let slug = ctx.page.params.slug;
	//below if you had post data you would go {slug. post}
	let post = {
		title: 'Hello',
		content: 'Hello blog post text'
	};
	return { slug, post };
}
