import styled from 'styled-components';

const Error  =  styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;

    img{
        width: 90vw;
        max-width: 600px;
        display: block;
        margin-bottom: 2rem;
        margin-top: -3rem;
    }

    p{
        line-height: 1.5;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        color: var(--grey-500);
    }

    .link{
        color: var(--primary-500);
    }
`;

export default Error;