const name = "Manuel Sempere";
const belowLink = "@itsmanueh"
const bio = ""
const portfolio = ""
const buymeacoffee = "https://buymeacoffee.com/itsmanueh"

// only github url is supported (change in next.config.js for more domain support)
const avatar = "https://avatars.githubusercontent.com/u/47420352?s=400&u=c4226f68a042d0753ee68068df99a55d63794cc4&v=4";

const twitter = "https://x.com/itsmanuehx";
const instagram = "https://www.instagram.com/itsmanueh/";
const spotify = "https://open.spotify.com/user/facinglife";
const github = "https://github.com/itsmanueh";
const mail = "mailto:itsmanueh25@gmail.com";
const discord = "https://discord.com/user/356409634229190659";
const discordTag = "@itsmanueh";

export const Badges = [
    {
        emoji: "💻",
        label: "Programmer",
    },
    {
        emoji: "🎬",
        label: "Content Creator",
    },
    {
        emoji: "🖤",
        label: "Music",
    },
    {
        emoji: "🕹️",
        label: "Gaming",
    },
]


export const config = {
    name,
    belowLink,
    bio,
    avatar,
    portfolio,
    buymeacoffee,
    socials: {
        twitter,
        instagram,
        github,
        spotify,
        discord,
        discordTag,
        mail,
    }
}
