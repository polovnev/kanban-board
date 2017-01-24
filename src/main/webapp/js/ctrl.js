app.controller("taskViewerCtrl", function ($scope, taskService) {

    $scope.taskList = taskService.getTaskList();


    $scope.setCurrentTask = function (id, editorState) {
        taskService.setTask(id);
        taskService.setEditorState(editorState);
    }

    $scope.setStateInProgress = function (id) {
        taskService.setTask(id);
        var task = taskService.getCurrentTask();
        task.status = 2;
    }

    $scope.setStateInDone = function (id) {
        taskService.setTask(id);
        var task = taskService.getCurrentTask();
        task.status = 3;
    }

    $scope.setStateInAborted = function (id) {
        taskService.setTask(id);
        var task = taskService.getCurrentTask();
        task.status = 4;
    }

    $scope.removeTask = function (id) {
        taskService.setTask(id);
        var task = taskService.getCurrentTask();
        var index = $scope.taskList.indexOf(task);
        $scope.taskList.splice(index, 1);
    }
});

app.controller("taskEditorCtrl", function ($scope, taskService) {
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
        if ($scope.description.length != 0) {
            var id = taskService.getCurrentIdInDb() + 1;
            var status = 1;
            var date = new Date();
            var priority = parseInt($scope.priority);
            var description = $scope.description;
            var task = {"id": id, "date": date, "priority": priority, "description": description, "status": status};
            taskService.addTask(task);
            $scope.description = "";
            taskService.setCurrentIdInDb(id);
        }
        else {
            $scope.message = "Description is empty";
            $scope.messageColor = "red";
        }
    }


    $scope.editTask = function () {
        $scope.currentTask.description = $scope.description;
        $scope.currentTask.priority = parseInt($scope.priority);
    }
});

