export default {
    topper: "Pracoviště",
    heading: "Naše pracoviště",
    mainItems: [
        {
            title: "Pardubice",
            description: "Hlavní pracoviště poradny",
            contacts: [
                {
                    icon: {
                        url: "/assets/svgs/locations/mail.svg",
                        alt: "Ikona obálky"
                    },
                    title: "Email",
                    link: {
                        url: "mailto:poradna@ppp-pardubice.cz",
                        text: "poradna@ppp-pardubice.cz",
                        target: "_self"
                    }
                },
                {
                    icon: {
                        url: "/assets/svgs/locations/call.svg",
                        alt: "Ikona telefonu"
                    },
                    title: "Telefon",
                    link: {
                        url: "tel:466410327",
                        text: "466 410 327",
                        target: "_self"
                    }
                },
                {
                    icon: {
                        url: "/assets/svgs/locations/location_on.svg",
                        alt: "Ikona telefonu"
                    },
                    title: "Adresa",
                    link: {
                        url: "tel:466410327",
                        text: "Sukova třída 1260<br>530 02 Pardubice",
                        target: "_blank"
                    }
                }
            ],
            hours: [
                { day: "Pondělí", time: ["7:30 - 11:30", "12:30 - 17:00"] },
                { day: "Úterý", time: ["7:30 - 11:30", "12:30 - 15:30"] },
                { day: "Středa", time: ["7:30 - 11:30", "12:30 - 17:00"] },
                { day: "Čtvrtek", time: ["7:30 - 11:30", "12:30 - 15:30"] },
                { day: "Pátek", time: ["7:30 - 11:30"] }
            ]
        },
        {
            title: "Chrudim",
            description: "Regionální poradenské pracoviště",
            contacts: [
                {
                    icon: {
                        url: "/assets/svgs/locations/mail.svg",
                        alt: "Ikona obálky"
                    },
                    title: "Email",
                    link: {
                        url: "mailto:chrudim@ppp-pardubice.cz",
                        text: "chrudim@ppp-pardubice.cz",
                        target: "_self"
                    }
                },
                {
                    icon: {
                        url: "/assets/svgs/locations/call.svg",
                        alt: "Ikona telefonu"
                    },
                    title: "Telefon",
                    link: {
                        url: "tel:469621187",
                        text: "469 621 187",
                        target: "_self"
                    }
                },
                {
                    icon: {
                        url: "/assets/svgs/locations/location_on.svg",
                        alt: "Ikona bodu na mapě"
                    },
                    title: "Adresa",
                    link: {
                        url: "tel:466410327",
                        text: "Poděbradova 842<br>537 01 Chrudim",
                        target: "_blank"
                    }
                }
            ],
            hours: [
                { day: "Pondělí", time: ["7:30 - 11:30", "12:30 - 16:00"] },
                { day: "Úterý", time: ["7:30 - 11:30", "12:30 - 15:30"] },
                { day: "Středa", time: ["7:30 - 11:30", "12:30 - 17:00"] },
                { day: "Čtvrtek", time: ["7:30 - 11:30", "12:30 - 15:30"] },
                { day: "Pátek", time: ["7:30 - 11:30"] }
            ]
        }
    ],
    secondaryItems: [
        {
            title: "Přelouč",
            address: "Kladenská 494, 535 01 Přelouč",
            phone: "606 082 589",
            note: "Objednávání probíhá prostřednictvím pracoviště v Pardubicích."
        },
        {
            title: "Holice",
            address: "Holubova 47, 534 01 Holice",
            phone: "702 132 518",
            note: "Objednávání probíhá prostřednictvím pracoviště v Pardubicích."
        },
        {
            title: "Hlinsko v Čechách",
            address: "Nádražní 548, 539 01 Hlinsko v Čechách",
            phone: "469 312 934",
            note: "Objednávání probíhá prostřednictvím pracoviště v Chrudimi."
        },
        {
            title: "Třemošnice",
            address: "Internátní 214, 538 43 Třemošnice",
            phone: "702 132 517",
            note: "Konzultace po předchozí domluvě."
        }
    ]
}