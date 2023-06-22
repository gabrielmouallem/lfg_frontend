import styled from '@emotion/styled';

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .error {
        margin-top: 2rem;
        color: red;
    }

    .title {
        color: #1D4044;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    .description {
        margin-bottom: 1rem;
        color: #1D4044;
    }
`;