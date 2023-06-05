// "Middleware Hack"
// https://github.com/vercel/next.js/discussions/33189#discussioncomment-3760898

export const DeepCopy = (target) => {
	const copy = structuredClone(target);
	return copy;
};
