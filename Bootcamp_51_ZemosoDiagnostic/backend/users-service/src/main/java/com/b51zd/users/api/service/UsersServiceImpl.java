package com.b51zd.users.api.service;

import com.b51zd.users.api.dto.UserDto;
import com.b51zd.users.api.entity.User;
import com.b51zd.users.api.exception.UserNotFoundException;
import com.b51zd.users.api.repsitory.UsersRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UsersServiceImpl implements UsersService {

    private static final ModelMapper modelMapper = new ModelMapper();
    @Autowired
    UsersRepository usersRepository;

    public static UserDto convertToDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }

    public static List<UserDto> convertToDtoList(List<User> userList) {
        List<UserDto> userDtoList = new ArrayList<>();
        for (User user : userList) {
            userDtoList.add(convertToDto(user));
        }
        return userDtoList;
    }

    public static User convertToEntity(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }

    public List<UserDto> getAllUsers() {
        List<User> userList = usersRepository.findAll();
        return convertToDtoList(userList);
    }


    public UserDto findUserById(String userId) {

        Optional<User> user = usersRepository.findById(userId);
        if (user.isEmpty()) {
            throw new UserNotFoundException("User with given id : " + userId + ", does not exists");
        }


        return convertToDto(user.get());
    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        User userSaved = usersRepository.save(convertToEntity(userDto));
        return convertToDto(userSaved);

    }
}
