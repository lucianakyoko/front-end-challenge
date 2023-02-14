import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";
import { backgroundImage } from "@/styles/imageBackground";

export const Card = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  position: relative;

  &::after {
    content: "";
    width: 20rem;
    height: .1em;

    background-color: ${colors.primary[300]};
    border-radius: .4rem;
    position: absolute;
    bottom: -2.4rem;
    left: 50%;
    transform: translateX(-50%);
  }

  ${device.tablet} {
    &::after {
      width: 40rem;
      bottom: -3.2rem;
    }
  }

  ${device.laptop} {
    &::after {
      width: 50rem;
      bottom: -4rem;
    }
  }
  
  ${device.laptopL} {
    width: 80rem;
  }
`;

export const ProfileWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: .8rem;

  text-decoration: none;
  .profile-image {
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
  }

  .profile-author {
    color: ${colors.secondary[100]};
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export const ContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  
  ${device.tablet} {
    flex-direction: row;
    gap: 2.4rem;
  }
`;

export const Image = styled.div`
  ${backgroundImage};
  width: 100%;
  height: 20.5rem;

  background-color: yellowgreen;
  border-radius: .4rem;

  ${device.tablet} {
    width: 60%;
    min-height: 16rem;
  }

  ${device.laptop} {
    width: 70%;
    height: 18rem;
  }

  ${device.laptopL} {
    height: 20rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .detail {
    display: flex;
    flex-direction: column;
    gap: .8rem;

    &__title {
      color: ${colors.primary[800]};
      font-size: 1.8rem;
      font-weight: 800;
      line-height: 2.8rem;
      text-transform: uppercase;
    }
    &__date {
      display: flex;
      align-items: center;
      gap: .8rem;

      span {
        color: ${colors.primary[500]};
        font-size: 1.2rem;
        .time {
          font-weight: 700;
        }
      }
    }
  }

  .intro {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  .link {
    color: ${colors.secondary[100]};
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.6rem;
    text-decoration: none;
  }

  ${device.tablet} {
    width: 100%;
    .detail {
      &__title {
        font-size: 2rem;
      }
    }
  }

  ${device.laptop} {
    .detail {
      &__title {
        font-size: 2.4rem;
      }
    }
    .intro,
    .link {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }

  ${device.laptopL} {
    .detail {
      &__title {
        font-size: 3.2rem;
      }
      &__date {
        color: ${colors.primary[500]};
        font-size: 1.6rem;
      }
    }
    .intro,
    .link {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
`;