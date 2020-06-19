# Como configurar ***commitlint*** e ***commitizen***

**Descrição**: Este é um repositório para demonstrar um passo a passo de como automatizar messagens de _commit_ utilizando ***commitlint***, ***commitizen*** e ***cz-customizable***

### Passo a passo
1. Inicialize sua aplicação com `yarn init -y`
2. Como primeiros passos, você precisará instalar as três primeiras dependências:
> As duas iniciais _(@commitlint/config-conventional e @commitlint/cli)_ servem para você configurar o padrão de mensagens de commits
> A terceira _(husky)_ é uma biblioteca que indicará a execução do lint após a mensagem de commit ser executada:
- Você pode encontrar a documentaço oficial do _commitlint_ no github a partir do seguinte link:
[Commitlint - github](https://github.com/conventional-changelog/commitlint)
- Utilize o código abaixo para instalar as dependências:

`yarn add @commitlint/config-conventional @commitlint/cli husky -D`

3. Inicialmente iremos configurar commits automatizados seguindo o padrão _Conventional Commits Format_, criado pela comunidade do Angular e fortemente utilizado dentro da comunidade JS
> Caso queira estruturar somente um padrão pessoal (ou de sua empresa), pule para o [tópico 6](#6)
- **[Passo 1]** Em sua pasta root, crie um arquivo chamado ___commitlint.config.js___ e adicione o código abaixo:

`module.exports = { extends: ['@commitlint/config-conventional'] };`

> Isto indicará qual padrão suas mensagens de commit estão seguindo;
- **[Passo 2]** No seu arquivo ___package.json___ adicione o seguinte código:

```JSON
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}

```

> Dessa forma, você indicará que após o input de sua mensagem de commit o husky deverá verificar se ela segue o padrão correto
> Com isso o **comitlint** já está configurado e seguindo os padrões (faça um teste para verificar 😉)
4. Agora daremos início a instalação do *commitizen*, o que facilitará a criação de suas mensagens de commit já seguindo o padrão indicado;
- Você pode encontrar a documentaço oficial do _commitizen_ no github a partir do seguinte link:
[Commitizen - github](https://github.com/commitizen/cz-cli)
- **[Passo 1]** Instale mais uma dependência para seu ambiente de desenvolvimento _(commitizen)_ com o seginte código:
- 
`yarn add commitizen -D`

- **[Passo 2]** Feito isto, você precisará indicar qual a padronização que suas mesnagens seguirão:
> Utilize o código abaixo para isto

`yarn commitizen init cz-conventional-changelog --yarn --dev --exact`

> Quando o processo finalizar, uma nova tag de configuração deve surgir em seu **package.json**, caso não, adicione o código abaixo:

```JSON
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

- **[Passo 3]** Por fim, você precisará adicionar uma nova key a tag de **hooks** criada mais acima, ela servirá para o commitizen ser acionado apenas utilizando o comando `git commit`, segue abaixo:

`"prepare-commit-msg": "exec < /dev/tty && git-cz --hook || true"`

> Garanta que as configurações terão a seguinte estrutura:

```JSON
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    "prepare-commit-msg": "exec < /dev/tty && git-cz --hook || true"
  }
}
```
