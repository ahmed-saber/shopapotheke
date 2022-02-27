export function getDateFromToday(day: number): Date {
	const now = new Date();
	now.setDate(now.getDate() - day);
	return now;
}

export function getDateFormated(date: Date): string {
	const monthPlusOne = date.getMonth() + 1;
	const month = date.getMonth() < 10 ? `0${monthPlusOne}` : monthPlusOne;
	return `${date.getFullYear()}-${month}-${date.getDate()}`;
}
