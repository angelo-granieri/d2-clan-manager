import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handle as handleAuthJS } from './auth';
import { paraglideMiddleware } from '$lib/paraglide/server';

// Paraglide middleware handle
const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', locale);
			}
		});
	});

// Handle sequence of AuthJS and Paraglide
export const handle: Handle = sequence(handleAuthJS, handleParaglide);
