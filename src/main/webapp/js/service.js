app.service('taskService', function () {
    var currentIdInDb = 10;
    var taskList;

    var currentTaskId;
    var editorState;


    var getCurrentIdInDb = function () {
        return currentIdInDb;
    }

    var setCurrentIdInDb = function (id) {
        currentIdInDb = id;
    }

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
        getCurrentIdInDb: getCurrentIdInDb,
        setCurrentIdInDb: setCurrentIdInDb,
        getTaskList: getTaskList,
        getCurrentTask: getCurrentTask,
        setTask: setTask,
        getEditorState: getEditorState,
        setEditorState: setEditorState,
        addTask: addTask,
        setTasks: setTasks

    };

});
