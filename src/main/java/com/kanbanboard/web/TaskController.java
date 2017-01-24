package com.kanbanboard.web;

import com.kanbanboard.model.Task;
import com.kanbanboard.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class TaskController {

    @Autowired
    private TaskService taskService;

    @ResponseBody
    @RequestMapping(value = "/task", method = RequestMethod.GET)
    public Iterable<Task> getAllTasks() {
        return taskService.getTasks();
    }

    @ResponseBody
    @RequestMapping(value = "/task/{id}", method = RequestMethod.GET)
    public Task getTask(@PathVariable("id") int id) {
        return taskService.getTask(id);
    }

    @ResponseBody
    @RequestMapping(value = "/task", method = RequestMethod.PUT)
    public void addTask( @RequestBody Task task) {
        taskService.saveTask(task);
    }

    @ResponseBody
    @RequestMapping(value = "/task", method = RequestMethod.POST)
    public void changeTask(@RequestBody Task task) {
        System.out.println(task.getId());
        taskService.editTask(task);
    }

    @ResponseBody
    @RequestMapping(value = "/task{id}", method = RequestMethod.DELETE)
    public void removeTask(@PathVariable("id") int id) {
       taskService.removeTask(id);
    }


}
