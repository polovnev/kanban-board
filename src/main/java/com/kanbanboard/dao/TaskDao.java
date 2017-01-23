package com.kanbanboard.dao;


import com.kanbanboard.model.Task;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface TaskDao extends CrudRepository<Task, Long> {

}
