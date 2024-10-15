
<p align="center">
  <img src="./src/assets/Birdyverde.png" width="15%" alt="Logo da Birdy" style="vertical-align: middle;"/>
  <h1> 🪽 Birdy: Viaje leve, seja sustentável,  colecione histórias! </h1>


   Birdy é uma plataforma que visa promover viagens sustentáveis e experiências positivas para os usuários, fornecendo acesso a informações sobre destinos turísticos, praias, atrações naturais e atividades recreativas os quais os usuários poderão cadastrá-los em cada viagens que fizerem. Também podem explorar e descobrir novos destinos, encontrar dicas de viagem sustentável, com as experiências de outros viajantes.

  O nome 'Birdy' foi escolhido pensando na sensação de liberdade e aventura. 
O aplicativo permitirá aos usuários explorar novos destinos e experiências, desfrutando da beleza e diversidade da natureza de forma leve, como um passarinho.🐦


## Tela Login

![image](./src/assets/tela-login.png)

  
## 🏦 Módulo 1 - Projeto Avaliativo

Este repositório se baseia no projeto avaliativo do curso FuturoDev com entrega no dia 14/10/2024 encerrando o terceiro módulo.
Seguindo um roteiro e aplicando as regras de negócio e rotas/telas que devem ser criadas na aplicação com todas as regras de entrega do projeto avaliativo.

**Objetivo: Montagem e execução de uma aplicação Front-End, que deverá ser integrada ao BackEnd**

 A Birdy deseja automatizar algumas ações de atendimento, criando um sistema para armazenamento de informações do usuário(s) e seus destino(s) que poderá servir para gerar um aplicativo que demonstra os pontos de interesses dos usuários para coletar dados, gerar marketing pra empresas de turismo, engajamento em rotas desconhecidas e melhorias de conservação da natureza local...

  *Bora usar as boas praticas de desenvolvimento de software!*

  ## 📉 Diagrama telas

  <img src = "../M3P-FrontEnd-Pri/src//assets/Diagrama de telas.png" alt="Diagrama telas"/>

## 🤖 Como rodar o repositório:

Primeiros passos:

    1. `git clone https://github.com/FuturoDEV-Trip/M3P-FrontEnd-squad1`
    2. `cd M3P-FrontEnd-squad1`
    3. `npm install`
    4. `npm run dev`

Rodar json server, 🙋 Para gerar os cadastros de usuários: [4devs](https://www.4devs.com.br/gerador_de_pessoas)

```
npx json-server db.json
```
🛝 Acesse pelo navegador:
    http://localhost:5173

## 🌊 GitFlow:

Iniciei na main mesmo e organizei as pastas, deletei arquivos e iniciei limpo.

developFront: 

*feature/contextLogin - create useContext(context>AuthContext.jsx), protectedRoute e adicionou ao Routes.jsx
*feature/pageLogin - useLogin
*feature/pageCadastroUsuario
*feature/home - feita a dashboard publica-Home 



## 📂 PARA ACESSAR A DOCUMENTAÇÃO ACESSE O LINK:

Caso tenha alguma dúvida!!

[React Router Dom](https://reactrouter.com/en/main/start/tutorial)

[React Hook Form](https://react-hook-form.com/get-started)

[json-server](https://www.npmjs.com/package/json-server)

[React Leaflet](https://react-leaflet.js.org/)

  
## 🔪 Validações importantes

Dashboard (página pública):
Página inicial (principal), exibindo uma visão geral dos locais de visitação em viagens cadastrados.
Uso de cards para trazer a quantidade de usuários ativos, número total de locais cadastrados e se for usar o mapa, colocar nesta página.
Listagem dos locais de visitação em viagens em forma de lista ou de cards sem as opções de editar e excluir.
A lista de locais de visitação em viagens deve ser recebida via integração com o back-end e deve carregar sempre que a página carregar.

Login (página pública):
Acesso às páginas privadas do sistema.

Cadastro de Usuários (página pública):
Na tela de login terá o botão de login e o de cadastrar, que quando clicado permite se cadastrar como novo usuário.
Os usuários precisam fornecer: 
Nome
Sexo
CPF
Data de Nascimento
E-mail
Senha
Endereço (usar ViaCEP)
Logradouro, número, bairro, cidade, estado, CEP e complemento.
Para usar o ViaCEP, deve ser utilizado a API disponível em https://viacep.com.br/

Cadastro de Local de visitação em viagens (página privada):
Cada usuário poderá cadastrar um ou mais local(is) de visitação em viagens, fornecendo:
Nome do local
Descrição do local
Identificador do Usuário
Localização
Usar ViaCEP para o endereço
Adicionar coordenadas geográficas (longitude e latitude)
opcional: O usuário deve ser capaz de resgatar o link do Google Maps apontando para o local cadastrado.

Listagem de Locais de visitação em viagens (página privada):
Tela para listar os locais, com botões para acessar, editar (vai para a tela de cadastro preenchida) e deletar um local.
Cada usuário só poderá excluir ou editar os locais de visitação em viagens cadastrados por ele.
A lista de locais de visitação em viagens deve ser recebida via integração com o back-end e deve carregar sempre que a página carregar.


  
## 🛠️ Construído com

- Trello - todos os passos que fiz para criar, roteiro da aplicação, regras de negócios e validações exigidas

<p>
    <img src="./src/assets/Captura de Tela 2024-10-14 às 21.47.51.png" />
</p>

- VsCode - para formar o código em Node.js
- GitHub - utilizando o GitFlow, criado a main, develop e algumas branches para desenvolver cada passo exigido (rotas, Hooks do React, API externa para obter coordenadas geográficas a partir do CEP informado...)
- Vite
- React
- Json-server - para simular uma API fake com cadastro de usuários
- Axios

## 🧑🏻‍🏫 Professor para auxilio

**Bruno Costa** - [GitHub](https://github.com/Bruno-Costa-fig)

## 👀 Melhorias

- 

## 🎁 Expressões de gratidão

* O Floripa Mais Tec é uma iniciativa da Prefeitura de Florianópolis, em parceria com SENAI/SC, SEBRAE e ACATE, que visa democratizar o acesso ao ensino tecnológico para todos, oferecendo cursos de Tecnologia gratuitos!  📢;
* Lab365 e todos os monitores;
* Aos melhores colegas de 
* Qualquer dúvida ou sugestão de melhorar o código eu aceito - algumas escrevi acima!!!




