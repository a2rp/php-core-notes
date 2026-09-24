import { FiBookOpen, FiCoffee, FiHeart, FiShield } from "react-icons/fi";
import { FaCodepen, FaFacebook, FaGithub, FaGlobe, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Styled } from "./styled";

const socialLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: MdEmail },
];

const supportLinks = [
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://patreon.com/a2rp", icon: FiBookOpen },
];

function LinkGroup({ links }) {
    return (
        <Styled.Links>
            {links.map(({ label, href, icon: Icon }) => (
                <Styled.IconLink key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    <Icon aria-hidden="true" />
                </Styled.IconLink>
            ))}
        </Styled.Links>
    );
}

export default function Footer() {
    return (
        <Styled.Wrapper>
            <Styled.Intro>
                <strong><FiShield aria-hidden="true" /> PHP fundamentals, kept practical</strong>
                <span>Structured notes for quick revision and steady backend foundations.</span>
            </Styled.Intro>
            <Styled.Groups>
                <Styled.Group><Styled.GroupTitle>Connect</Styled.GroupTitle><LinkGroup links={socialLinks} /></Styled.Group>
                <Styled.Group><Styled.GroupTitle>Support</Styled.GroupTitle><LinkGroup links={supportLinks} /></Styled.Group>
            </Styled.Groups>
            <Styled.Bottom>
                <span>Copyright {"\u00a9"} {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
                <span>Built for focused revision</span>
            </Styled.Bottom>
        </Styled.Wrapper>
    );
}
