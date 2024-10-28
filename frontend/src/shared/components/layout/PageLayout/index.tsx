import * as S from "./styles";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<S.Layout>
			<S.Wrapper>{children}</S.Wrapper>
		</S.Layout>
	);
};

export default PageLayout;
