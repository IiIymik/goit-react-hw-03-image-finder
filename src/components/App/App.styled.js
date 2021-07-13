import css from "@emotion/styled/macro";

export const Container = css.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const LargeImg = css.img`
width:1200px;
height: 800px;
`;

export const SpinLoad = css.div`
display:flex;
justify-content: center;
`;
