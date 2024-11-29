document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagem = document.getElementById('mensagem');

    // Verifica se as senhas são as mesmas
    if (senha !== confirmarSenha) {
        mensagem.textContent = 'As senhas não coincidem. Tente novamente.';
        return;
    }

    // Simula o envio do cadastro 
    mensagem.style.color = 'green';
    mensagem.textContent = 'Cadastro realizado com sucesso!';

    // Limpa o formulário 
    document.getElementById('cadastroForm').reset();
});