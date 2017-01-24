app.service('taskService', function () {
    var currentIdInDb = 10;
    var taskList = [
        {"id": 1, "date": 5434554, "priority": 1, "description": "sdfnmghgsa sdgf", "status": 1},
        {"id": 2, "date": 543245, "priority": 2, "description": "dgfhfdsf", "status": 3},
        {"id": 3, "date": 4554334, "priority": 3, "description": "sdfgdsgfds", "status": 1},
        {"id": 4, "date": 4354543, "priority": 2, "description": "sfdghjgfdtytr", "status": 2},
        {"id": 5, "date": 14325443, "priority": 2, "description": "dgfhtrert", "status": 3},
        {"id": 6, "date": 433454, "priority": 2, "description": "hgfdsghfd", "status": 1}
    ];

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
