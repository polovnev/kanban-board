app.service('taskService', function () {

    var currentIdInDb = 10;

    var taskList;


    var currentTaskId;
    var editorState;


    var getCurrentIdInDb = function () {
        return currentIdInDb;
    }

    var setCurrentIdInDb = function(id) {
        currentIdInDb = id;
    }

    var getTaskList = function () {
        return taskList;
    }

    function searchById(element) {
        return element.id == currentTaskId;
    }

    function setTask(id) {
        currentTaskId = id;
    }

    var getCurrentTask = function () {
        return taskList.find(searchById);
    }

    function setEditorState(state) {
        editorState = state;
    }

    var getEditorState = function () {
        return editorState;
    }

    var addTask = function (task) {
        taskList.push(task);
    }

    var initTaskList = function(tasks) {
        taskList = tasks;
    }




    return {
        getCurrentIdInDb: getCurrentIdInDb,
        setCurrentIdInDb: setCurrentIdInDb,
        getTaskList: getTaskList,
        getCurrentTask: getCurrentTask,
        setTask: setTask,
        getEditorState: getEditorState,
        setEditorState: setEditorState,
        addTask: addTask,
        initTaskList: initTaskList
    };

});

app.controller("taskViewerCtrl", function ($scope, $http, taskService) {
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
        $scope.taskList.splice(index,1);
    }

    $scope.getTaskList = function () {
        $http.get("/task").then(function(response) {
            taskService.initTaskList(response);
        })
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
        $scope.currentTask.priority = parseInt($scope.priority);
    }
});

app.controller("mainCtrl", function ($scope, taskService, $http) {


});