import { css } from "styled-components";

//Media Resize

export const smallImage = (imagePath, size) => {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};

//Mixins
export const flex = css`
  display: flex;
  align-items: ${({ align }) => `${align || "center"}`};
  justify-content: ${({ justify }) => `${justify || "center"}`};
  flex-direction: ${({ direction }) => `${direction || "center"}`};
`;
export const flex2 = ({ align, direction, justify }) => `
  display: flex;
  align-items:${align || "center"};
  justify-content: ${justify || "center"};
  flex-direction: ${direction || "row"};
`;

export const maxWidth = css`
  max-width: 1300px;
`;
