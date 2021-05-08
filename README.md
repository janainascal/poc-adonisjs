---
description: conteudo do readme
---

# poc-adonisjs

Um projeto para aprender o [AdonisJS](https://adonisjs.com/) [v5](https://preview.adonisjs.com/)

## O problema

O fluxo de compra é bem simples: 1. cliente abre o App; 2. caso esteja em um raio de atendimento da loja física \(ex: 5km, 10km\), o catálogo da loja física fica disponível para compra; 3. cliente realiza a compra e recebe o vinho dentro de alguns minutos;

Em 2020 foram abertas 7 novas lojas, 3 delas em São Paulo \(Pinheiros, Jardins e Moema\). Com isso, alguns raios de atendimentos das lojas ficaram sobrepostos, gerando assim alguns "conflitos" de região de atendimento de cada unidade. Com o objetivo de atender melhor esses clientes oferecendo apenas uma loja física por CEP de entrega, precisamos criar um serviço \(API\) para realizar as seguintes atividades:

* Criar API REST para cadastrar as faixas de CEP de cada loja;
* Criar API REST para retornar qual é a loja física que atende determinado CEP;

### REGRAS

* A tabela de cadastro de CEP deve possuir as seguintes colunas: ID, CODIGO\_LOJA, FAIXA\_INICIO e FAIXA\_FIM;
* As faixas de CEP não pode conflitar com as de outras lojas;
* Deve ser possível editar/excluir uma faixa de CEP;

### Exemplos

#### CORRETO

CODIGO\_LOJA\|FAIXA\_INICIO\|FAIXA\_FIM LOJA\_PINHEIROS\|10000000\|20000000 LOJA\_PINHEIROS\|20000001\|30000000 LOJA\_JARDINS\|30000001\|40000000 LOJA\_JARDINS\|40000001\|50000000

#### ERRADO

CODIGO\_LOJA\|FAIXA\_INICIO\|FAIXA\_FIM LOJA\_PINHEIROS\|10000000\|20000000 LOJA\_PINHEIROS\|20000001\|30000000 LOJA\_JARDINS\|10000001\|40000000 \(erro! essa faixa de CEP conflita com a faixa de CEP da loja de Pinheiros\) LOJA\_JARDINS\|40000001\|50000000

