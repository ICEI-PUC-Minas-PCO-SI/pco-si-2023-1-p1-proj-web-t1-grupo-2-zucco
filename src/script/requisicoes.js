function pegaDados() {
  fetch("http://localhost:3000/cotacao", { method: 'GET', })
      .then(res => res.json())
      .then(res => {
          for (i = 0; i < res.length; i++) {
              dados.push(res[i]);
          }
          return dados;
      })

}


function fazRequisicao() {
  var dados = pegaDados();
  for (i = 0; i < dados.length; i++) {
      console.log("pimba " + i)
      str += `<tr>
                  <th scope="row">${i}</th>
                  <th scope="row">${dados[i].numeroDoPedido}</th>
                  <td>${dados[i].nome}</td>
                  <td>${dados[i].email}</td>
                  <td>${dados[i].celular}</td>
                  <td>${dados[i].cpf}</td>
                  <td>${dados[i].cnpj}</td>
                  <td>${dados[i].cidadeOrigem}</td>
                  <td>${dados[i].cidadeDestino}</td>
                  <td>${dados[i].numeroDoPedido}</td>
                  <td>${dados[i].tipoServico}</td>
                  <td><button class="btn btn-danger" id="btn-apaga" onclick="deleta(${dados[i].id})">Apagar</button></td>
                  <td><button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#modalEditar${dados[i].id}">Editar</button></td>
                  <div class="modal" id="modalEditar${dados[i].id}">
                      <div class="modal-dialog">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <h3>Editar informações</h3>
                                  <button class="btn btn-close" data-bs-dismiss="modal"></button>
                              </div>
                              <div class="modal-body">
                                  <label for="exampleInputEmail1" class="form-label">Identificador</label>
                                  <input type="email" class="form-control" id="iden${dados[i].id}" aria-describedby="emailHelp" value="${i}" disabled>
                                  <label for="exampleInputEmail1" class="form-label">Numero do pedido</label>
                                  <input type="email" class="form-control" id="numero${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].numeroDoPedido}">
                                  <label for="exampleInputEmail1" class="form-label">Nome</label>
                                  <input type="email" class="form-control" id="nome${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].nome}">
                                  <label for="exampleInputEmail1" class="form-label">Email</label>
                                  <input type="email" class="form-control" id="email${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].email}">
                                  <label for="exampleInputEmail1" class="form-label">Celular</label>
                                  <input type="email" class="form-control" id="celular${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].celular}">
                                  <label for="exampleInputEmail1" class="form-label">CPF</label>
                                  <input type="email" class="form-control" id="cpf${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].cpf}">
                                  <label for="exampleInputEmail1" class="form-label">CNPJ</label>
                                  <input type="email" class="form-control" id="cnpj${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].cnpj}">
                                  <label for="exampleInputEmail1" class="form-label">Cidade de origem</label>
                                  <input type="email" class="form-control" id="cidadeO${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].cidadeOrigem}">
                                  <label for="exampleInputEmail1" class="form-label">Cidade de destino</label>
                                  <input type="email" class="form-control" id="cidadeDes${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].cidadeDestino}">
                                  <label for="exampleInputEmail1" class="form-label">Número do pedido</label>
                                  <input type="email" class="form-control" id="nPed${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].numeroDoPedido}">
                                  <label for="exampleInputEmail1" class="form-label">Tipo de serviçõ</label>
                                  <input type="email" class="form-control" id="tipo${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].tipoServico}">
                              </div>
                              <div class="modal-footer">
                                  <button class="btn btn-success" onclick="atualiza(${dados[i].id})">Enviar</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </tr>
                `
      console.log(str)
      var paiPlanilha = document.getElementById("paiPlanilha");
      paiPlanilha.innerHTML = str;
  }
}



function deleta(id) {
  fetch("http://localhost:3000/cotacao/" + id, {
      method: 'DELETE',
  })
      .then(res => res.json())
      .then(() => location.reload());
}

function atualiza(id) {
  var cotacao = JSON.stringify({
      id: document.getElementById('iden'+id).value,
      numeroDoPedido: document.getElementById('numero'+id).value,
      nome: document.getElementById('nome'+id).value,
      email: document.getElementById('email'+id).value,
      celular: document.getElementById('celular'+id).value,
      cpf: document.getElementById('cpf'+id).value,
      cnpj: document.getElementById('cnpj'+id).value,
      cidadeOrigem: document.getElementById('cidadeO'+id).value,
      cidadeDestino: document.getElementById('cidadeDes'+id).value,
      tipoServico: document.getElementById('tipo'+id).value
  })
  fetch(`http://localhost:3000/cotacao/` + id, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: cotacao
  })
      .then(res => res.json())
      .then(() => {
          pegaDados();
          location.reload();
      });
}