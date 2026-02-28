export default {
    items: [
        { url: "/", key: "Domů", visibleOnTablet: true },
        { url: "/o-nas/", key: "O nás", visibleOnTablet: false },
        {
            url: "/pro-rodice-a-zaky/",
            key: "Pro rodiče a žáky",
            visibleOnTablet: true,
            subitems: [
                { url: "/pro-rodice-a-zaky#deti-a-zaci", key: "Děti a žáci" },
                { url: "/pro-rodice-a-zaky#rodice", key: "Rodiče" },
                { url: "/pro-rodice-a-zaky#deti-a-zaci", key: "Podle věku dítěte" },
                { url: "/pro-rodice-a-zaky#dokumenty", key: "Dokumenty a materiály" }
            ]
        },
        { url: "/pro-skoly/", key: "Pro školy", visibleOnTablet: true },
        { url: "/dokumenty-ke-stazeni/", key: "Dokumenty", visibleOnTablet: false },
        { url: "/novinky/", key: "Novinky", visibleOnTablet: true },
        { url: "/kontakty/", key: "Kontakty", visibleOnTablet: true }
    ]
}