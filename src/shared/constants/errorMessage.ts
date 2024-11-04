interface ApiErrorMessage {
	[key: number]: string;
	serverError: string;
}

export const API_ERROR_MESSAGE: ApiErrorMessage = {
	400: "잘못된 요청입니다.",
	401: "인증에 실패했습니다.",
	403: "요청권한이 없습니다.",
	404: "요청하신 내용을 찾을 수 없습니다.",
	422: "올바르지 않은 데이터 형식입니다.",
	serverError: "서버 오류가 발생했습니다.",
};

export const SERVER_ERROR_REGEX = /^5\d{2}$/;

export const ROUTE_ERROR_MESSAGE = "찾으시는 페이지가 없습니다.";
