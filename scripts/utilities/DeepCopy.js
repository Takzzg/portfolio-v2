// "Middleware Hack"
// https://github.com/vercel/next.js/discussions/33189#discussioncomment-3760898
// seems that it needs to be a .js file in order for vercel to build successfully

export const DeepCopy = (target) => {
	const copy = structuredClone(target);
	return copy;
};
