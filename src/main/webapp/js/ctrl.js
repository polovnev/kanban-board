app.controller("taskViewerCtrl", function ($scope, $http, taskService) {
    $scope.taskList;

    initTaskList();

    function initTaskList() {
        $http.get("http://localhost:8080/task").then(function (response) {
            $scope.taskList = response.data;
            taskService.setTasks($scope.taskList);
        });
    }

    $scope.setCurrentTask = function (id, editorState) {
        taskService.setTask(id);
        taskService.setEditorState(editorState);
    }

    $scope.setStateInProgress = function (id) {
        taskService.setTask(id);
        var task = taskService.getCurrentTask();
        task.status = 2;
        saveStatus(task);
    }

    $scope.setStateInDone = function (id) {
        taskService.setTask(id);
        var task = taskService.getCurrentTask();
        task.status = 3;
        saveStatus(task);
    }

    $scope.setStateInAborted = function (id) {
        taskService.setTask(id);
        var task = taskService.getCurrentTask();
        task.status = 4;
        saveStatus(task);
    }

    $scope.removeTask = function (id) {
        taskService.setTask(id);
        $http.delete('http://localhost:8080/task/' + id, $scope.currentTask).then(function () {
            var task = taskService.getCurrentTask();
            var index = $scope.taskList.indexOf(task);
            $scope.taskList.splice(index, 1);
        });

    }

    function saveStatus(task) {
        $http.post('http://localhost:8080/task/', task);
    }

});

app.controller("taskEditorCtrl", function ($scope, $http, taskService) {
    $scope.currentTask;
    $scope.editorState;

    $scope.description;
    $scope.priority = 2;
    $scope.message;
    $scope.messageColor;

    $scope.initEditor = function () {
        $scope.currentTask = taskService.getCurrentTask();
        $scope.editorState = taskService.getEditorState();
        $scope.description = $scope.currentTask.description;
    }

    $scope.addTask = function () {
        var status = 1;
        var date = new Date().getTime();
        var priority = parseInt($scope.priority);
        var description = $scope.description;
        var task = {"id": 0, "date": date, "priority": priority, "description": description, "status": status};
        $http.put('http://localhost:8080/task/', task).then(function (response) {
            task.id = response.data;
            taskService.addTask(task);
            $scope.description = "";
            $('#addTaskModal').modal('hide');
        });
    }

    $scope.editTask = function () {
        $scope.currentTask.description = $scope.description;
        $scope.currentTask.priority = parseInt($scope.priority);
        $http.post('http://localhost:8080/task/', $scope.currentTask).then(function (response) {
            $('#editTaskModal').modal('hide');
        });
    }
});

