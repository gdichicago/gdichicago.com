(function(){

angular.module('todoApp', ['LocalStorageModule'])
  .controller('TodoListController', function($scope, localStorageService) {
    var todoList = this;
    // todoList.todos = [
    //   {text:'learn angular', done:true},
    //   {text:'build an angular app', done:false}];

    //localstorage
    var todosInStore = localStorageService.get('myTodos');
    todoList.todos = todosInStore || [];

    $scope.$watch('todoList.todos', function () {
      localStorageService.set('myTodos', todoList.todos);
    }, true);


    todoList.addTodo = function() {
      todoList.todos.push({text: todoList.todoText, done: false});
      // localStorageService.set('myTodos', todoList.todos);
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

  });

})();