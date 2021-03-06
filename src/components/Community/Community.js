import React from 'react';
import { Button, Container, DiscordButton } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper,
         TopLine, Heading, Subtitle, ImgWrapper, Img } from './Community.elements';

const InfoSection = ({ lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel,
                       description, headline, lightText, topLine, primary, img, alt, start }) => {
  return <>
    <InfoSec lightBg={ lightBg }>
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <DiscordButton big fontBig primary={primary}>{buttonLabel}</DiscordButton>
                    </TextWrapper>
                </InfoColumn>

                <InfoColumn>
                    <ImgWrapper start={start}>
                        <Img src={img} alt={alt} />
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
        </Container>
    </InfoSec>
  </>;
};

export default InfoSection;
