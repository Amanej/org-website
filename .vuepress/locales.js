module.exports = {
    '/': {
        lang: 'nb-NO', // this will be set as the lang attribute on <html>
        title: 'JAMstack Oslo',
        description: 'Notater rundt organiseringen og planleggingen av Oslo kapitlet til JAMstack',
        nav: [
            { text: "Meetup", link: "https://www.meetup.com/JAMstack-Oslo/" },
            { text: "Discord", link: "https://discord.gg/rE3pcSw" },
            { text: "GitHub", link: "https://github.com/JAMstack-Oslo/org-website" }
        ],
        sidebar: [
            "/",
            {
              title: "Om",
              collapsable: false,
              children: [
                "about/contribute.md",
                "about/format.md",
                "about/sponsor.md",
                "about/contact.md"
              ]
            },
            {
              title: "Arrangementer",
              collapsable: false,
              children: [
                "events/upcoming.md",
                "events/speaking.md",
                "/events/past.md",
                "about/feedback.md"
              ]
            },
            {
              title: "Organisering",
              collapsable: true,
              children: ["/organization/checklist", "/organization/intro-outro"]
            },
            {
              title: "Meetings",
              collapsable: true,
              children: [
                "/meetings/notes.md",
                "/meetings/meeting-planning-22-12-2018",
                "/meetings/meeting-planning-03-01-2019",
                "/meetings/meeting-planning-05-01-2019",
                "/meetings/meeting-planning-29-01-2019",
                "/meetings/meeting-planning-05-02-2019",
                "/meetings/meeting-planning-26-02-2019"
              ]
            }
          ]
    },
    '/en/': {
        lang: 'en-US',
        title: 'JAMstack Oslo',
        description: 'Notes on the organization and planning of JAMstack Oslo chapter',
        nav: [
            { text: "Meetup", link: "https://www.meetup.com/JAMstack-Oslo/" },
            { text: "Discord", link: "https://discord.gg/rE3pcSw" },
            { text: "GitHub", link: "https://github.com/JAMstack-Oslo/org-website" }
        ],
        sidebar: [
            "/",
            {
              title: "About",
              collapsable: false,
              children: [
                "about/contribute.md",
                "about/format.md",
                "about/sponsor.md",
                "about/contact.md"
              ]
            },
            {
              title: "Events",
              collapsable: false,
              children: [
                "events/upcoming.md",
                "events/speaking.md",
                "/events/past.md",
                "about/feedback.md"
              ]
            },
            {
              title: "Organizing",
              collapsable: true,
              children: ["/organization/checklist", "/organization/intro-outro"]
            },
            {
              title: "Meetings",
              collapsable: true,
              children: [
                "/meetings/notes.md",
                "/meetings/meeting-planning-22-12-2018",
                "/meetings/meeting-planning-03-01-2019",
                "/meetings/meeting-planning-05-01-2019",
                "/meetings/meeting-planning-29-01-2019",
                "/meetings/meeting-planning-05-02-2019",
                "/meetings/meeting-planning-26-02-2019"
              ]
            }
          ]
    }
}