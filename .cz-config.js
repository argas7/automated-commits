module.exports = {
  types: [
    { value: 'Feature', name: 'Feature: for new features' },
    { value: 'Bugfix', name: 'Bugfix: for a fix bug in the system' },
    { value: 'Hotfix', name: 'Hotfix: for changes that don\'t impact the system' },
  ],

  // override the messages, defaults are as follows
  messages: {
    type: "Selecione o tipo de mudança do commit:",
    // used if allowCustomScopes is true
    customScope: 'Coloca o nome de tua branch:',
    subject: 'Descreva brevemente o que você fez:',
    body: 'Caso necessário, faça uma descrição mais detalhada:\n',
    confirmCommit: 'Tem certeza que deseja continuar, porquinhx?',
  },

  allowCustomScopes: true,

  // skip any questions you want
  skipQuestions: ['footer'],

  // limit subject length
  subjectLimit: 100,
};