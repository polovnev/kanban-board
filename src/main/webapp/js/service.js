app.service('taskService', function () {
    var taskList;
    var currentTaskId;
    var editorState;

    var getTaskList = function () {
        return taskList;
    }

    function searchById(element) {
        return element.id == currentTaskId;
    }

    var setTask = function (id) {
        currentTaskId = id;
    }

    var getCurrentTask = function () {
        return taskList.find(searchById);
    }

    var setEditorState = function (state) {
        editorState = state;
    }

    var getEditorState = function () {
        return editorState;
    }

    var addTask = function (task) {
        taskList.push(task);
    }

    var setTasks = function (tasks) {
        taskList = tasks;
    }


    return {
        getTaskList: getTaskList,
        getCurrentTask: getCurrentTask,
        setTask: setTask,
        getEditorState: getEditorState,
        setEditorState: setEditorState,
        addTask: addTask,
        setTasks: setTasks

    };

});
