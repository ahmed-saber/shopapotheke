import store from 'store';

const LOCAL_STORAGE_KEY = 'STARS';

function getStarIndex(id: number): number {
	return getStars().findIndex(i => i === id);
}

export function getStars(): number[] {
	return store.get(LOCAL_STORAGE_KEY) ?? [];
}

export function toggleStar(id: number) {
	if (isStarSet(id)) {
		removeStar(id);
	} else {
		const stars: number[] = getStars();
		stars.push(id);
		store.set(LOCAL_STORAGE_KEY, stars);
	}
}

export function isStarSet(id: number): boolean {
	return getStarIndex(id) !== -1;
}

export function removeStar(id: number) {
	const stars: number[] = getStars();
	stars.splice(getStarIndex(id), 1);
	store.set(LOCAL_STORAGE_KEY, stars);
}
