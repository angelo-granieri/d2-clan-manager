import { i18n } from '$lib/i18n';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handle as handleAuthJS } from './auth';
const handleParaglide: Handle = i18n.handle();
// Handle sequence of AuthJS and Paraglide
export const handle: Handle = sequence(handleAuthJS, handleParaglide);
