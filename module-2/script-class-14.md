# Aula 14 - Colaboração em Projetos no GitHub

## O que é o Git?
**Git** é um sistema de controle de versão distribuído, essencial para o desenvolvimento de software colaborativo e rastreamento de mudanças no código.

## Comandos Básicos do Terminal
Antes de utilizar o Git, é importante conhecer alguns comandos de navegação do terminal:

| Comando | Descrição |
| :--- | :--- |
| `pwd` | Mostra o caminho absoluto do diretório atual em que você está. |
| `ls` | Lista todos os arquivos e pastas do diretório atual. |
| `ls -a` | Lista todos os arquivos e pastas do diretório atual, **incluindo os ocultos**. |
| `cd <nome do local>` | Navega e abre o diretório especificado. |
| `mkdir <nome do local>` | Cria um novo diretório (uma nova pasta). |

---

## Configuração Inicial do Git
Comandos utilizados para configurar o Git pela primeira vez:

| Comando | Descrição |
| :--- | :--- |
| `git --version` | Verifica se o Git está instalado e mostra a versão. |
| `git config --global user.name "Seu Nome"` | Define o nome do autor que aparecerá nos commits. |
| `git config --global user.email "seuemail@email.com"`| Define o e-mail do autor dos commits. |

---

## Fluxo de Trabalho (Repositório Local)
Passo a passo para iniciar e salvar versões do seu projeto localmente:

| Comando | Descrição |
| :--- | :--- |
| `git init` ou `git init .` | Inicializa um novo repositório Git no diretório atual. |
| `git status` | Mostra o estado dos arquivos (novos, modificados, deletados) que não foram "commitados". |
| `git add .` | Prepara (adiciona ao *stage*) todos os arquivos modificados para o próximo commit. |
| `git commit -m "mensagem"` | Salva uma versão local do projeto (um retrato do código naquele momento). |
| `git branch` | Lista todas as *branches* (ramificações) locais. |
| `git branch -M main` | Renomeia a *branch* principal (frequentemente `master`) para `main`. |

---

## Trabalhando com o GitHub (Repositório Remoto)
Como conectar e enviar seu código para a nuvem:

| Comando | Descrição |
| :--- | :--- |
| `git remote add origin <URL>` | Conecta seu repositório local ao repositório remoto no GitHub via URL. |
| `git remote -v` | Lista as conexões remotas configuradas (mostra para onde o código será enviado). |
| `git push -u origin main` | Envia o projeto pela primeira vez para a *branch* `main` no GitHub. |
| `git push origin main` | Envia as atualizações do seu código local para o repositório no GitHub. |

### Gerenciamento de Conexões Remotas
Caso precise alterar ou remover um repositório remoto:

| Comando | Descrição |
| :--- | :--- |
| `git remote set-url origin <URL>` | Atualiza a URL de um repositório remoto já configurado. |
| `git remote remove origin` | Remove a conexão remota atual. |

---

## Histórico de Versões
Comandos para visualizar o que foi feito no projeto ao longo do tempo:

| Comando | Descrição |
| :--- | :--- |
| `git log` | Mostra o histórico completo e detalhado de todos os commits realizados. |
| `git log --oneline` | Mostra o histórico de commits de forma resumida (uma linha por commit). |



---

## 🔄 Estados do Git (Ciclo de Vida dos Arquivos)
O Git gerencia o estado dos seus arquivos em três áreas principais durante o fluxo de trabalho. Entender como elas funcionam é fundamental:

1. 📂 **Working Directory (Diretório de Trabalho)**
   - É a pasta real do seu projeto no seu computador, onde você cria e edita os arquivos.
   - Aqui, os arquivos podem estar em três estados:
     - **Untracked:** Arquivos novos que o Git ainda não começou a rastrear.
     - **Modificados:** Arquivos já rastreados que sofreram alterações desde a última versão.
     - **Não-modificados:** Arquivos que estão idênticos à última versão salva.

2. 📥 **Staging Area / Index (Área de Preparo)**
   - Quando você executa o comando `git add`, os arquivos selecionados (modificados/novos) vêm para cá.
   - Serve como uma "sala de espera" onde você prepara exatamente o que fará parte do próximo commit.

3. 🗄️ **Local Repository (Repositório Local)**
   - Representado pela pasta oculta `.git/`.
   - Quando você executa o comando `git commit`, os arquivos da *Staging Area* são empacotados e salvos aqui permanentemente, criando uma nova versão no histórico do projeto.

> [!TIP]
> **Fluxo Resumido:**
> **Working Directory** ➡️ `(git add)` ➡️ **Staging Area** ➡️ `(git commit)` ➡️ **Local Repository**

