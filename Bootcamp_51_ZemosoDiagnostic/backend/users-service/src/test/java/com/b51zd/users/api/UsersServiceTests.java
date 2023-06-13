package com.b51zd.users.api;

import com.b51zd.users.api.dto.UserDto;
import com.b51zd.users.api.entity.User;
import com.b51zd.users.api.exception.UserNotFoundException;
import com.b51zd.users.api.repsitory.UsersRepository;
import com.b51zd.users.api.service.UsersService;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest
class UsersServiceTests {

    @Autowired
    UsersService usersService;

    @MockBean
    UsersRepository usersRepository;

    private static final ModelMapper modelMapper = new ModelMapper();

    public static UserDto convertToDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }

    public static User convertToEntity(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }

    @Test
    void getAllUsers() {
        List<User> userList = new ArrayList<>();
        userList.add(new User("1", "alex", "alex@gmail.com", "9876543210"));

        when(usersRepository.findAll()).thenReturn(userList);
        List<UserDto> userDtoList = new ArrayList<>();
        for (User user : userList) {
            userDtoList.add(convertToDto(user));
        }

        assertEquals(userDtoList,usersService.getAllUsers());
    }

    @Test
    void findByUserId() {
        User user = new User("1", "alex", "alex@gmail.com", "9876543210");

        when(usersRepository.findById("1")).thenReturn(Optional.of(user));

        assertEquals(convertToDto(user),usersService.findUserById("1"));
    }

    @Test
    void findNonExistingUserId() {
        User user = new User("1", "alex", "alex@gmail.com", "9876543210");

        when(usersRepository.findById("1")).thenReturn(Optional.of(user));

        assertThrows(UserNotFoundException.class, () -> usersService.findUserById("2"));
    }

    @Test
    void saveUser() {
        User user = new User("1", "alex", "alex@gmail.com", "9876543210");

        when(usersRepository.save(user)).thenReturn(user);

        UserDto userDto = convertToDto(user);

        assertEquals(userDto,usersService.saveUser(userDto));
    }

}
