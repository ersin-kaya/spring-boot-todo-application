package com.kayainc.springboottodoapplication.business.abstracts;

import java.util.List;
import java.util.ArrayList;

public interface IEntityService<Entity> {

    public List<Entity> getAll();
    public List<Entity> getAllDone();
    public List<Entity> getAllTodo();
    public Entity getById(Long id);
    public Entity add(Entity entity);
    public Entity update(Long id, Entity entity);
    public Entity delete(Long id);
    public ArrayList<Entity> deleteAll(boolean willUncompletedTasksBeDeleted);

}
