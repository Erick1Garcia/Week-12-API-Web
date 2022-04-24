
var app = new function() {
    this.element = document.getElementById('tasks');
  
    this.tasks = [];

    
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.tasks.length > 0) {
        for (i = 0; i < this.tasks.length; i++) {
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      return this.element.innerHTML = data;
    };
  
    this.Add = function () {
      add = document.getElementById('add-todo');
      var task = add.value;
  
      if (task) {
        this.tasks.push(task.trim())
        add.value = '';
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var edit = document.getElementById('edit-todo');
      edit.value = this.tasks[item];
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
        var task = edit.value;
  
        if (task) {
          self.tasks.splice(item, 1, task.trim());
          self.FetchAll();
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      this.tasks.splice(item, 1);
      this.FetchAll();
    };
  
  

      this.tasks.push('John Doe', 'Eli Ricks' )
  }
  
  app.FetchAll();
  
    function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }

