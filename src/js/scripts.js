var app = new function() {
  this.el = document.getElementById('tarefas');
  this.tarefas = ['Pão Italiano (baguete)', 'Parmesão (pedaço, ~200g)', 'Presunto parma (~200g)', 'Chardonnay ou sauvignon blanc (Amayna)', 'Frutas: uvas, morangos, damasco, ...'];
  
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'tarefa';
    if (data) {
      if (data > 1) {
        name = 'tarefas';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'nenhuma ' + name;
    }
  };

  this.Complete = function(data) {
    var el   = document.getElementById('comprados');
    var name = 'tarefa completa';
    var num = 0;
    for (i = 0; i < this.tarefas.length; i++) {
      if (document.getElementById(i).classList.contains("concluido")){
        num++;
      }
    }
    if (num) {
      if (num > 1) {
        name = 'tarefas completas';
      }
      el.innerHTML = num + ' ' + name ;
    } else {
      el.innerHTML = 'Nenhuma ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.tarefas.length > 0) {
      for (i = 0; i < this.tarefas.length; i++) {
        data += '<div class="dados-item" id="'+i+'">';
        data += '<h2 class="titulo">' + this.tarefas[i] + '</h2>';
        data += '<button onclick="app.Done(' + i + ')" class="botao botao-concluir">Concluir</button>';
        data += '<button onclick="app.Edit(' + i + ')" class="botao botao-editar">Editar</button>';
        data += '<button onclick="app.Delete(' + i + ')" class="botao botao-excluir">Excluir</button>';
        data += '</div>';
      }
    }
    this.Count(this.tarefas.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('add-task');
    var tarefa = el.value;
    if (tarefa) {
      this.tarefas.push(tarefa.trim());
      el.value = '';
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById('edit-task');
    el.value = this.tarefas[item];
    document.getElementById('editar').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      var tarefa = el.value;
      if (tarefa) {
        self.tarefas.splice(item, 1, tarefa.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };

  this.Done = function (item) {
    el = document.getElementById(item);
    el.classList.add("concluido");
    this.Complete();
  };

  this.Delete = function (item) {
    this.tarefas.splice(item, 1);
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('editar').style.display = 'none';
}