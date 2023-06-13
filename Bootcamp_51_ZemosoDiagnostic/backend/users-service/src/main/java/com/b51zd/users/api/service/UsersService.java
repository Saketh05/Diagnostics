package com.b51zd.users.api.service;

import com.b51zd.users.api.dto.UserDto;

import java.util.List;

public interface UsersService {

    List<UserDto> getAllUsers();

    UserDto findUserById(String userId);

    UserDto saveUser(UserDto userDto);
}
