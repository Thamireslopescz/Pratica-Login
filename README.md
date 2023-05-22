# Formulário de Login

Este é um simples formulário de login em HTML que permite aos usuários fazer login ou se registrar em uma conta. O formulário utiliza JavaScript para lidar com o envio do formulário e realizar as ações de login e registro.

## Autores
- Misael
- Thamires

Os autores deste projeto são estudantes de desenvolvimento web na GrowDev.

## Uso

1. Abra o arquivo HTML em um navegador da web.
2. O formulário de login será exibido por padrão.
3. Insira seu nome de usuário e senha nos respectivos campos de entrada.
4. Clique no botão "Login" para enviar o formulário e tentar fazer login.
5. Se o login for bem-sucedido (correspondendo ao nome de usuário e senha armazenados no localStorage do navegador), um alerta será exibido indicando um login bem-sucedido.
6. Se o login falhar (credenciais incorretas ou ausentes), um alerta será exibido indicando um erro.
7. Para registrar uma nova conta, clique no botão "Cadastre-se". O formulário de registro será exibido.
8. Insira um nome de usuário e senha desejados nos campos de entrada do formulário de registro.
9. Clique no botão "Cadastrar" para enviar o formulário de registro e criar uma nova conta.
10. Se o registro for bem-sucedido (todos os campos estiverem preenchidos), um alerta será exibido indicando um registro bem-sucedido.
11. Após o registro, o formulário de login será exibido novamente.

## Funções

### `showRegistrationForm()`

Essa função é chamada quando o botão "Cadastre-se" é clicado. Ela oculta o formulário de login e exibe o formulário de registro.

### `hideRegistrationForm()`

Essa função é chamada quando o botão "Cancelar" no formulário de registro é clicado. Ela oculta o formulário de registro e exibe novamente o formulário de login.

### `login(username, password)`

Essa função é chamada quando o formulário de login é enviado. Ela obtém o nome de usuário e senha inseridos pelo usuário e verifica se correspondem às credenciais armazenadas no localStorage do navegador. Se as credenciais corresponderem, um alerta será exibido indicando um login bem-sucedido. Caso contrário, um alerta será exibido indicando um erro.

### `register(username, password)`

Essa função é chamada quando o formulário de registro é enviado. Ela obtém o nome de usuário e senha inseridos pelo usuário e os armazena no localStorage do navegador. Um alerta será exibido indicando um registro bem-sucedido, e o formulário de registro será ocultado.

## LocalStorage

O script utiliza o localStorage do navegador para armazenar e recuperar o nome de usuário e senha para fins de login. As credenciais armazenadas são comparadas com as inseridas pelo usuário durante o login. Por favor, observe que este é um exemplo simplificado apenas para fins de demonstração e não deve ser considerado seguro para ambientes de produção.

É importante ressaltar que essa implementação não possui autenticação ou validação do lado do servidor, tornando-a insegura para cenários do mundo real.
