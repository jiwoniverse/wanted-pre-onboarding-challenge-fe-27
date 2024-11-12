import { createListCollection } from "@chakra-ui/react";

export const TODO_PRIORITY_VALUES = ["urgent", "normal", "low"] as const;

export const priorityOptions = [
	{ value: "urgent", label: "긴급" },
	{ value: "normal", label: "보통" },
	{ value: "low", label: "낮음" },
];

export const sortOptions = createListCollection({
	items: [
		{ value: "createdAt", label: "등록일" },
		{ value: "updatedAt", label: "수정일" },
		{ value: "priority", label: "우선순위" },
	],
});

export const orderOptions = createListCollection({
	items: [
		{ value: "asc", label: "오름차순" },
		{ value: "desc", label: "내림차순" },
	],
});
