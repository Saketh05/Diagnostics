package com.b51zd.users.api;

import com.b51zd.users.api.controller.UsersRestController;
import com.b51zd.users.api.dto.UserDto;
import com.b51zd.users.api.service.UsersService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(UsersRestController.class)
class UsersControllerTests {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    UsersService usersService;

    @Test
    void load_GetMapping_Users() throws Exception {
        List<UserDto> userDtos = new ArrayList<>();
        userDtos.add(new UserDto("1", "alex", "alex@gmail.com", "9876543210"));

        when(usersService.getAllUsers()).thenReturn(userDtos);

        mockMvc.perform(get("/users/")).andExpect(status().isOk()).andDo(print());

        verify(usersService, times(1)).getAllUsers();
    }

    @Test
    void load_GetMapping_FindUserById() throws Exception {
        List<UserDto> userDtos = new ArrayList<>();
        userDtos.add(new UserDto("1", "alex", "alex@gmail.com", "9876543210"));

        when(usersService.findUserById("1")).thenReturn(userDtos.get(0));

        mockMvc.perform(get("/users/1")).andExpect(status().isOk()).andDo(print());

        verify(usersService, times(1)).findUserById("1");
    }

    @Test
    void load_GetMapping_FindNonExistingUserById() throws Exception {
        List<UserDto> userDtos = new ArrayList<>();
        userDtos.add(new UserDto("1", "alex", "alex@gmail.com", "9876543210"));

        when(usersService.findUserById("1")).thenReturn(userDtos.get(0));

        mockMvc.perform(get("/users/2")).andExpect(status().isOk()).andDo(print());

        verify(usersService, times(1)).findUserById("2");
    }

    @Test
    void load_PostMapping_SaveUser() throws Exception {

        String exampleUserJson = "{\"userId\":\"1\",\"userName\":\"alex\",\"email\":\"alex@gmail.com\",\"phoneNo\":\"9876543210\"}";


        UserDto userDto = new UserDto("1", "alex", "alex@gmail.com", "9876543210");

        when(usersService.saveUser(userDto)).thenReturn(userDto);

        mockMvc.perform(post("/users/").contentType(MediaType.APPLICATION_JSON).content(exampleUserJson)).andExpect(status().isOk()).andDo(print());

        verify(usersService, times(1)).saveUser(userDto);
    }

}
