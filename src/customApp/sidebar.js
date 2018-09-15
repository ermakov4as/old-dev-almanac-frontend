const id_vopr = '1';

const options = [
  {
    key: 'githubSearch',
    label: 'sidebar.githubSearch',
    leftIcon: 'ion-social-github'
  },
  {
    key: 'blank_page',
    label: 'sidebar.blankPage',
    leftIcon: 'ion-document'
  },
  /*{
    key: 'main_page',
    label: 'Main Page',
    leftIcon: 'ion-compass'
  },*/
  {
    key: 'sciences',
    label: "Subjects' list",
    leftIcon: 'ion-university'
  },
  {
    key: `sciences/${id_vopr}/edit`,
    label: "Subject's editing",
    leftIcon: 'ion-coffee'
  }
];
export default options;
