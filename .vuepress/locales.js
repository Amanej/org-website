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
                "om/contribute.md",
                "om/format.md",
                "om/sponsor.md",
                "om/contact.md"
              ]
            },
            {
              title: "Arrangementer",
              collapsable: false,
              children: [
                "arrangementer/kommende.md",
                "arrangementer/talere.md",
                "arrangementer/tidligere.md",
                "om/tilbakemeldinger.md"
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
    '/eng/': {
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
                "eng/about/contribute.md",
                "eng/about/format.md",
                "eng/about/sponsor.md",
                "eng/about/contact.md"
              ]
            },
            {
              title: "Events",
              collapsable: false,
              children: [
                "eng/events/upcoming.md",
                "eng/events/speaking.md",
                "eng/events/past.md",
                "eng/about/feedback.md"
              ]
            },
            {
              title: "Organizing",
              collapsable: true,
              children: [
                "eng/organization/checklist", 
                "eng/organization/intro-outro"
              ]
            },
            {
              title: "Meetings",
              collapsable: true,
              children: [
                "eng/meetings/notes.md",
                "eng/meetings/meeting-planning-22-12-2018",
                "eng/meetings/meeting-planning-03-01-2019",
                "eng/meetings/meeting-planning-05-01-2019",
                "eng/meetings/meeting-planning-29-01-2019",
                "eng/meetings/meeting-planning-05-02-2019",
                "eng/meetings/meeting-planning-26-02-2019"
              ]
            }
          ]
    }
}