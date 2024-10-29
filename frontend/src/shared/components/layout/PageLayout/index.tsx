import * as S from "./styles";

import Header from "@/shared/components/common/Header";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<S.Layout>
			<Header />
			<S.Wrapper>{children}</S.Wrapper>
		</S.Layout>
	);
};

export default PageLayout;
