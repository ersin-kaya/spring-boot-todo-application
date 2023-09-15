package com.kayainc.springboottodoapplication.controllers.api;

import java.util.List;

import org.springframework.http.ResponseEntity;

public interface IEntityApi<Entity> {
    public ResponseEntity<?> getAll();
    public ResponseEntity<?> getAllDone();
    public ResponseEntity<?> getAllTodo();
    public ResponseEntity<?> getById(Long id);
    public ResponseEntity<?> add(Entity entity);
    public ResponseEntity<?> update(Long id, Entity entity);
    public ResponseEntity<?> delete(Long id);
    public ResponseEntity<?> deleteAll(boolean willUncompletedTasksBeDeleted);
}
