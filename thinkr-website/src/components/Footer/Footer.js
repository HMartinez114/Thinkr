import React from 'react';
import { FaDiscord, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, 
         SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, ThinkrIcon, 
         WebsiteRights, SocialIcons} from './Footer.elements';

const Footer = () => {
  return <>
    <FooterContainer>

        <FooterSubscription>
            <FooterSubHeading>
                Building a better future for students is hard work
            </FooterSubHeading>

            <FooterSubText>
                Follow us or join our team.
            </FooterSubText>
        </FooterSubscription>

        <SocialMedia>
            <SocialMediaWrap>

                <SocialLogo to="/">
                    <ThinkrIcon/>
                </SocialLogo>
                
                <WebsiteRights>
                    © 2014-2022 Thinkrᴳᴹ All rights reserved. 
                </WebsiteRights>

                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                    </SocialIconLink>

                    <SocialIconLink href='/' target='_blank' aria-label='Discord'>
                        <FaDiscord />
                    </SocialIconLink>

                    <SocialIconLink href='/' target='_blank' aria-label='Twitch'>
                        <FaTwitch />
                    </SocialIconLink>

                    <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                        <FaYoutube />
                    </SocialIconLink>

                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                </SocialIcons>

            </SocialMediaWrap>
        </SocialMedia>

    </FooterContainer>
  </>;
};

export default Footer;
