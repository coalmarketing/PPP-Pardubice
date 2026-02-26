export default {
    items: [
        { url: "/", key: "Domů" },
        { url: "/o-nas/", key: "O nás" },
        {
            url: "/pro-rodice-a-zaky/", key: "Pro rodiče a žáky", subitems: [
                { url: "/pro-rodice-a-zaky#deti-a-zaci", key: "Děti a žáci" },
                { url: "/pro-rodice-a-zaky#rodice", key: "Rodiče" },
                { url: "/pro-rodice-a-zaky#podle-veku-ditete", key: "Podle věku dítěte" },
                { url: "/pro-rodice-a-zaky#dokumenty", key: "Dokumenty a materiály" }
            ]
        },
        { url: "/pro-skoly/", key: "Pro školy" },
        { url: "/dokumenty-ke-stazeni/", key: "Dokumenty" },
        { url: "/novinky/", key: "Novinky" },
        { url: "/kontakty/", key: "Kontakty" }
    ]
}