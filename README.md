# DSMovie
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/jovinbon/dsmovie/blob/master/LICENSE) 

#### [Meu certificado](https://learn.devsuperior.com/certificados/2132952)

# Sobre o projeto

https://cfdsmovie.netlify.app

DSMovie é uma aplicação full stack web construída durante o evento **Semana Spring React 6.0** (#sds6), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um catálago de filmes onde o usuário restrito poderá escolher um filme para ser avaliado. 
Cada filme mostrado (bunner/imagem) na lista paginada contem 5 estrelas representando seu score de avaliação. A cor preenchida em dourada nas estrelas identifica sua pontuação ou score atual.
Ao clicar no botão "Avaliar" o  usuário será direcionado para a página de formulário de avaliação onde ele digitará o seu e-mail (desde que este esteja credenciado no sistema) e em
seguida ele preencherá a pontuação ente 1 e 5 (numéros de valores para o score) e clicar no botão "Salvar" para efetivar a avaliação e ao mesmo tempo ele é retornado para apágina principal do catálago.

Observação: ao clicar no link do projeto acima você será direcionado para a página inicial, aguarde uns minutos para que a página carregue!

## Layout
#### Página de catálago
![Tela de catálago](https://github.com/jovinbon/assets/blob/main/dsmoviepageaded.png)

#### Página de formulário de avaliação
![Tela de formulário de avaliação](https://github.com/jovinbon/assets/blob/main/dsmovieform.png)

#### Score de um filme (as estrelas em cor dourada representa o score atual)
![Tela score](https://github.com/jovinbon/assets/blob/main/dsmoviescore.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/jovinbon/assets/blob/main/dsmovie-dominio.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/jovinbon/dsmovie

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/jovinbon/dsmovie

# entrar na pasta do projeto front end web
cd frontend

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Cristiano Alves Fontes

https://www.linkedin.com/in/cristiano-fontes-15503369
