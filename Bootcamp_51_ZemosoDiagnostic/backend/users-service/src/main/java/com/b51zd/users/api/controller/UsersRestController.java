package com.b51zd.users.api.controller;

import com.b51zd.users.api.dto.UserDto;
import com.b51zd.users.api.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController 
@RequestMapping("/users")
public class UsersRestController {

    @Autowired
    private UsersService usersService;

    @GetMapping("/")
    public List<UserDto> getSaveJobs() {
        return usersService.getAllUsers();
    }

    @GetMapping(value = "/{userId}")
    public UserDto getUserById(@PathVariable("userId") String userId) {

        return usersService.findUserById(userId);
    }

    @PostMapping(value = "/")
    public UserDto saveNewUser(@RequestBody UserDto userDto) {

        return usersService.saveUser(userDto);
    }

}

