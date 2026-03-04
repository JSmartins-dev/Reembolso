<script>
  function salvarSolicitacao(tipo, form, event) {
    event.preventDefault();

    const nome = form?.nome?.value?.trim() || "";
    const descricao = form?.descricao?.value?.trim() || form?.valor?.value?.trim() || "";
    const data = new Date().toLocaleDateString("pt-BR");

    // Correção: a sintaxe do objeto estava incorreta (usando vírgula e sem o nome da chave)
    const solicitacao = {
      tipo: tipo,
      nome: nome,
      data: data,
      descricao: descricao,
      status: "Aguardando aprovação" 
    };

    try {
      const lista = JSON.parse(localStorage.getItem("solicitacoes")) || [];
      lista.push(solicitacao);
      localStorage.setItem("solicitacoes", JSON.stringify(lista));

      alert("Solicitação registrada com sucesso!");
      window.location.href = "minhas-solicitacoes.html";
    } catch (error) {
      console.error("Erro ao salvar solicitação:", error); // Corrigido para ponto e vírgula
      alert("Ocorreu um erro ao salvar a solicitação. Tente novamente.");
    }
  }

  window.onload = function() {
    const usuario = localStorage.getItem("usuarioLogado");
    const blocoAporte = document.getElementById("blocoAporte");

    if (blocoAporte) {
      // Ajuste de visibilidade baseado no usuário
      if (usuario === "vinicius" || usuario === "admin") {
        blocoAporte.style.display = "block";
      } else {
        blocoAporte.style.display = "none";
      }
    }
  };
</script>