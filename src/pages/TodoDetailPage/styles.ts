import { BoxProps, StackProps, TextProps } from "@chakra-ui/react";

export const boxStyle: BoxProps = {
	width: "100%",
	height: "100%",
};

export const cardRootStyle: BoxProps = {
	width: "100%",
	height: "full",
	maxHeight: "fit-content",
	display: "flex",
	alignItems: "center",
	padding: 4,
	gap: 1,
};

export const hStackStyle: StackProps = {
	width: "full",
};

export const vStackStyle: StackProps = {
	paddingY: 6,
	paddingX: 2,
	borderY: "1px solid #ddd",
	width: "full",
	alignItems: "start",
	gap: 4,
};

export const headingStyle: TextProps = {
	fontSize: "sm",
};

export const textStyle: TextProps = {
	textStyle: "sm",
};

export const cardFooterStyle: BoxProps = {
	padding: 0,
	paddingTop: 4,
	width: "full",
	display: "flex",
	justifyContent: "end",
};

export const footerTextStyle: TextProps = {
	textStyle: "xs",
};
