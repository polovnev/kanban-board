package com.kanbanboard.service.impl;

import com.kanbanboard.dao.TaskDao;
import com.kanbanboard.model.Task;
import com.kanbanboard.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskDao taskDao;

    @Override
    public Task getTask(long id) {
        return taskDao.findOne(id);
    }

    @Override
    public Iterable<Task> getTasks() {
        return taskDao.findAll();
    }

    @Override
    public void saveTask(Task task) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void editTask(Task task) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void removeTask(long id) {
        //To change body of implemented methods use File | Settings | File Templates.
    }
}
