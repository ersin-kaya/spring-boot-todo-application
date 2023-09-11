package com.kayainc.springboottodoapplication.repositories;

import org.springframework.data.repository.CrudRepository;

import com.kayainc.springboottodoapplication.models.TodoItem;

public interface TodoItemRepository extends CrudRepository<TodoItem, Long> {
    // <TodoItem, Long> -> Long = TodoItem>Id->DataType
}
