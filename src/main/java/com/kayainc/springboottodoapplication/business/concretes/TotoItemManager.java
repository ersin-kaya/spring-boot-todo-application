package com.kayainc.springboottodoapplication.business.concretes;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.thymeleaf.expression.Arrays;

import com.kayainc.springboottodoapplication.bean.ModelMapperBean;
import com.kayainc.springboottodoapplication.business.abstracts.IEntityService;
import com.kayainc.springboottodoapplication.error.ApiResult;
import com.kayainc.springboottodoapplication.models.TodoItem;
import com.kayainc.springboottodoapplication.repositories.TodoItemRepository;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.time.*;

import java.util.ArrayList;

import java.util.Arrays.*;

import java.util.stream.Collectors;

// Lombok
@RequiredArgsConstructor // Injection

@Service
public class TotoItemManager implements IEntityService<TodoItem> {

    private final TodoItemRepository todoItemRepository;
    private final ModelMapperBean modelMapperBean;

    @Override
    public List<TodoItem> getAll() {
        Iterable<TodoItem> todoItemEntities = todoItemRepository.findAll();
        List<TodoItem> todoItemArrayList = new ArrayList<>();

        for(TodoItem todoItemEntity : todoItemEntities) {
            todoItemArrayList.add(todoItemEntity);
        }
        return todoItemArrayList;
    }

    @Override
    public List<TodoItem> getAllDone() {
        Iterable<TodoItem> todoItemEntities = todoItemRepository.findAll();
        List<TodoItem> todoItemArrayList = new ArrayList<>();

        for(TodoItem todoItemEntity : todoItemEntities) {
            if (todoItemEntity.isComplete()) {
                todoItemArrayList.add(todoItemEntity);
            }
        }
        return todoItemArrayList;
    }

    @Override
    public List<TodoItem> getAllTodo() {
        Iterable<TodoItem> todoItemEntities = todoItemRepository.findAll();
        List<TodoItem> todoItemArrayList = new ArrayList<>();

        for(TodoItem todoItemEntity : todoItemEntities) {
            if (!todoItemEntity.isComplete()) {
                todoItemArrayList.add(todoItemEntity);
            }
        }
        return todoItemArrayList;
    }

    @Override
    public TodoItem getById(Long id) {
        TodoItem todoItemEntity = null;
        todoItemEntity = todoItemRepository.findById(id).get();
        return todoItemEntity;
    }

    @Override
    @Transactional
    public TodoItem add(@Valid TodoItem todoItem) {

        todoItem.setDescription(todoItem.getDescription());
        todoItem.setComplete(false);
        todoItem.setCreatedDate(Instant.now());
        todoItem.setModifiedDate(Instant.now());
        todoItemRepository.save(todoItem);
        return todoItem;
    }

    @Override
    @Transactional
    public TodoItem update(Long id, @Valid TodoItem todoItem) {
        TodoItem todoItemEntity = getById(id);
        if(todoItemEntity!=null) {
            todoItemEntity.setDescription(todoItem.getDescription());
            todoItemEntity.setComplete(todoItem.isComplete());
            todoItemEntity.setModifiedDate(Instant.now());
            todoItemRepository.save(todoItemEntity);
        }
        return todoItemEntity;
    }

    @Override
    @Transactional
    public TodoItem delete(Long id) {
        TodoItem todoItemEntity = getById(id);
        if(todoItemEntity!=null) {
            todoItemRepository.delete(todoItemEntity);
        }
        return todoItemEntity;
    }

    @Override
    @Transactional
    public ArrayList<TodoItem> deleteAll(boolean willUncompletedTasksBeDeleted) {

        ArrayList<TodoItem> todoItems;

        if (!willUncompletedTasksBeDeleted) {
            todoItems = new ArrayList<TodoItem>(getAll());
            todoItems.removeIf(t -> t.isComplete() == false);
        } else {
            todoItems = new ArrayList<TodoItem>(getAll());
        }

        for (TodoItem todoItem : todoItems) {
            delete(todoItem.getId());
        }
        return todoItems;
    }
    
}
