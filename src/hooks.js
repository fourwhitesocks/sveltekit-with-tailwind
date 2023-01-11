import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';




/// all this below is from a brand new install of sk on 4-29-22
export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies['userid'] || uuid();

	const response = await resolve(event);

	if (!cookies['userid']) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set(
			'set-cookie',
			cookie.serialize('userid', event.locals.userid, {
				path: '/',
				httpOnly: true
			})
		);
	}

	return response;
};




//what it had before which still kinda works if needed
//in here this is the code before and I had switched all the instances of 'request' to event this below is orig.  If you use this code and replace request with event it will still kind of work4-29-22

/*  

export const handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();

	// TODO https://github.com/sveltejs/kit/issues/1046
	//if (request.query.has('_method')) {
		//request.method = request.query.get('_method').toUpperCase();
	//}

	const response = await resolve(request);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
	}

	return response;
};

*/