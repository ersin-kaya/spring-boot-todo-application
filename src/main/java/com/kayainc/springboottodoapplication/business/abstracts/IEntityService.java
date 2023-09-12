package com.kayainc.springboottodoapplication.business.abstracts;

import java.util.List;

public interface IEntityService<Entity> {

    public List<Entity> getAll();
    public Entity getById(Long id);
    public Entity add(Entity entity);
    public Entity update(Long id, Entity entity);
    public Entity delete(Long id);

}
