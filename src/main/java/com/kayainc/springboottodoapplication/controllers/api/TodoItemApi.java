package com.kayainc.springboottodoapplication.controllers.api;

import java.util.List;

import org.modelmapper.internal.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kayainc.springboottodoapplication.assets.FrontendUrl;
import com.kayainc.springboottodoapplication.business.abstracts.IEntityService;
import com.kayainc.springboottodoapplication.error.ApiResult;
import com.kayainc.springboottodoapplication.models.TodoItem;

import jakarta.annotation.PostConstruct;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

// Lombok
@RequiredArgsConstructor // Injection
@Log4j2

// API yazarken yazmalıyız
@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = FrontendUrl.REACT_URL)

public class TodoItemApi implements IEntityApi<TodoItem> {

    // Injection
    private final IEntityService entityService;
    private ApiResult apiResult;

    @PostConstruct
    public void todoItemPostConstuct() {
        apiResult = new ApiResult();
    }

    // Swagger-UI
    // http://localhost:8080/swagger-ui/index.html
    
    // http://localhost:8080/api/v1/getall
    @Override
    @GetMapping(value = "/getall")
    public ResponseEntity<List<TodoItem>> getAll() {
        return ResponseEntity.ok(entityService.getAll());
    }

    // http://localhost:8080/api/v1/getbyid/id
    @Override
    @GetMapping(value = "/getbyid/{id}")
    public ResponseEntity<?> getById(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(entityService.getById(id));
    }

    // http://localhost:8080/api/v1/add
    @Override
    @PostMapping(value = "/add")
    public ResponseEntity<?> add(@Valid @RequestBody TodoItem todoItem) {
        return ResponseEntity.ok(entityService.add(todoItem));
    }

    // http://localhost:8080/api/v1/update/id
    @Override
    @PostMapping(value = "/update/{id}")
    public ResponseEntity<?> update(@PathVariable(name = "id") Long id, @Valid @RequestBody TodoItem todoItem) {
        return ResponseEntity.ok(entityService.update(id, todoItem));
    }

    // http://localhost:8080/api/v1/delete/id
    @Override
    @PostMapping(value = "/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(entityService.delete(id));
    }
    
}
