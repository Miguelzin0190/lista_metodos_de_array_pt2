const usuarios = [
    { id: 1, nome: 'Ana Silva', idade: 22, ativo: true, cargo: 'Desenvolvedora' },
    { id: 2, nome: 'Bruno Costa', idade: 17, ativo: true, cargo: 'Estagiário' },
    { id: 3, nome: 'Carlos Souza', idade: 30, ativo: false, cargo: 'Designer' },
    { id: 4, nome: 'Diana Lima', idade: 25, ativo: true, cargo: 'Tech Lead' },
];

const listarFuncionarios = usuarios.map((usuario) => {
    return {
        nome: usuario.nome,
        cargo: usuario.cargo,
    };
});

const buscarUsuarioPorId = (id) => usuarios.find((usuario) => usuario.id === id);

const listarUsuariosAtivos = usuarios.filter((usuario) => usuario.ativo === true);

const existeUsuarioInativo = usuarios.some((usuario) => usuario.ativo === false);

const todosUsuariosMaioresDeIdade = usuarios.every((usuario) => usuario.idade >= 18);

const calcularMediaIdade =
    usuarios.reduce((acumulador, usuario) => acumulador + usuario.idade, 0) / usuarios.length;

console.log('Lista de funcionários:', listarFuncionarios);
console.log('Buscar usuário por ID:', buscarUsuarioPorId(2));
console.log('Lista de usuários ativos:', listarUsuariosAtivos);
console.log('Existe usuário inativo:', existeUsuarioInativo);
console.log('Todos os usuários são maiores de idade:', todosUsuariosMaioresDeIdade);
console.log('Média de idade dos usuários:', calcularMediaIdade);