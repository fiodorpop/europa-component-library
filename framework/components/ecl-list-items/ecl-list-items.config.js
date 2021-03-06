module.exports = {
  title: 'List items',
  label: 'List items',
  status: 'ready',
  tags: ['molecule'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      <ul class="ecl-list--unstyled">${markup}</ul>\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default list item',
      context: {
        metas: ['Service department', 'PMO'],
        title: 'Administration and Payment of Individual Entitlements',
      },
    },
    {
      name: 'date',
      label: 'Date list item',
      context: {
        variant: 'date',
        date: {
          week_day: 'Tue',
          day: '07',
          month: 'Sep',
        },
        title:
          "Citizens' Dialogue in Kraków with Commissioner Elżbieta Bieńkowska",
        detail:
          '<small><span class="ecl-icon ecl-icon--location">Kraków, Poland</span> <span class="ecl-icon ecl-icon--livestreaming ecl-u-ml-s">live streaming available</span></small>',
      },
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail list item',
      context: {
        metas: ['Director-General'],
        title: 'John Doe',
        primary_image: {
          src: '../../assets/demo_images/default_profile_image.png',
          alt: 'Director-General John Doe',
        },
      },
    },
    {
      name: 'higlight',
      label: 'Highlight list item',
      context: {
        variant: 'highlight',
        title: 'State of European Union 2017',
        primary_image: {
          src: '../../assets/demo_images/nature-demo-1.jpg',
          alt: 'Highlighted image',
        },
      },
    },
  ],
};
