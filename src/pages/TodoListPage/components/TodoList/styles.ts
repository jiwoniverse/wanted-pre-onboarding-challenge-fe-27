import styled from "@emotion/styled";

export const activeRowBgColor = "#e2efff";
export const inactiveRowBgColor = "transparent";
export const subtleBgColor = "bg.subtle";

export const boxStyles = {
	width: "100%",
};

export const tableRootStyles = {
	size: "md" as const,
	width: "100%",
	interactive: true,
};

export const todoRowStyles = {
	cursor: "pointer",
	_hover: { backgroundColor: "#eeeeee" },
	transition: "all 0.2s ease",
};

export const getPriorityStyles = (priority: string) => {
	switch (priority) {
		case "urgent":
			return {
				backgroundColor: "#ffcccc",
				color: "#cc0000",
			};
		case "normal":
			return {
				backgroundColor: "#fff28c",
				color: "#73670e",
			};
		case "low":
			return {
				backgroundColor: "#ccffcc",
				color: "#006600",
			};
		default:
			return {
				backgroundColor: "transparent",
				color: "inherit",
			};
	}
};

export const PriorityLabel = styled.span<{ priority: string }>`
	padding: 4px 8px;
	border-radius: 4px;
	font-weight: bold;
	font-size: 0.85rem;
	${(props) => getPriorityStyles(props.priority)}
`;
