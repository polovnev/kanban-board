package com.kanbanboard.service;


import com.kanbanboard.model.Task;

import java.util.List;

public interface TaskService {

    Task getTask(long id);

    Iterable<Task> getTasks();

    void saveTask(Task task);

    void editTask(Task task);

    void removeTask(long id);

}
