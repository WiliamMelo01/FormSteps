# FormSteps
## Descrição
FormSteps é um site criado usando React e Redux. Ele permite que os usuários preencham um formulário de três etapas para escolher um plano de assinatura, adicionar recursos extras e confirmar a inscrição.

O site utiliza o conceito de contextos em React para compartilhar informações do estado da etapa atual do formulário entre vários componentes. Além disso, Redux é utilizado para gerenciar o estado global do usuário, permitindo que as informações inseridas em cada etapa do formulário sejam mantidas até o final do processo.
## Tecnologias utilizadas
[![My Skills](https://skillicons.dev/icons?i=react,tailwindcss,typescript,redux)](https://skillicons.dev)
<img src="https://github.com/colinhacks/zod/blob/master/logo.svg" alt="Descrição da Imagem" width="50" height="50" style="border-radius: 20px">


## Funcionalidades
- O site FormSteps é um formulário de várias etapas para cadastro de usuário.
- Cada etapa do formulário é exibida em uma página separada.
- O site possui um estado global gerenciado pelo Redux Toolkit que armazena as informações preenchidas pelos usuários em cada etapa do formulário.
- As informações são enviadas para o estado global por meio de actions, que são despachadas pelos componentes de formulário.
- O site usa a biblioteca React Context para compartilhar informações sobre o número da etapa atual entre os componentes de formulário.
- O site é responsivo e funciona bem em dispositivos móveis e desktop.
- O site inclui validações de formulário para garantir que o usuário insira informações válidas em cada etapa.
- O usuário pode voltar para as etapas anteriores e revisar ou alterar as informações fornecidas.
- Quando o usuário envia o formulário final, ele é redirecionado para uma página de conclusão que exibe uma mensagem de agradecimento.
## Instruções de como baixar, configurar e executar o projeto em um ambiente local.
- Passo 1 ```git clone https://github.com/WiliamMelo01/FormSteps.git```
- Passo 2 ```npm install```

## Como acessar
<a href="https://wiliammelo-form-steps.vercel.app/">Clique aqui</a>
