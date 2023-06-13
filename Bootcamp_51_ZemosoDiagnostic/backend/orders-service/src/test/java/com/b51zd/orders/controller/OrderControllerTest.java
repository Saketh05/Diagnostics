package com.b51zd.orders.controller;

import com.b51zd.orders.dto.OrderDto;
import com.b51zd.orders.entity.Orders;
import com.b51zd.orders.exception.OrderNotFoundExceptionHandler;
import com.b51zd.orders.service.OrderServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class OrderControllerTest {

    @Mock
    OrderServiceImpl orderService;

    @InjectMocks
    OrderController orderController;

    @Autowired
    MockMvc mockMvc;

    OrderNotFoundExceptionHandler orderNotFoundExceptionHandler;

    String sDate1="31/12/1998";
    Date date1= (Date) new SimpleDateFormat("dd/MM/yyyy").parse(sDate1);

    public OrderControllerTest() throws ParseException {
    }

    @BeforeEach
    void setup() {
        orderNotFoundExceptionHandler = new OrderNotFoundExceptionHandler();
        mockMvc = MockMvcBuilders
                .standaloneSetup(orderController)
                .setControllerAdvice(orderNotFoundExceptionHandler)
                .build();
    }

    @Test
    void getAllOrdersTest() throws Exception{
        List<OrderDto> allOrders= new ArrayList<>();
        allOrders.add(new OrderDto(1,"1",1,1,date1,"11023"));
        Mockito.when(orderService.getAllOrders()).thenReturn(allOrders);

        mockMvc.perform(MockMvcRequestBuilders.get("/orders/1"))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());

        Assertions.assertEquals(orderController.getAllOrders()
                , allOrders);
    }

    @Test
    void getAllOrdersExceptionTest() throws Exception {
        List<OrderDto> allOrders = new ArrayList<>();

        Mockito.when(orderService.getAllOrders()).thenReturn(allOrders);

        mockMvc.perform(MockMvcRequestBuilders.get("/orders/1/"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isBadRequest());
    }


    @Test
    void postOrderTest() throws Exception {
        OrderDto orderDto = new OrderDto(1,"1",1,1,date1,"11023");
        Mockito.when(orderService.save(orderDto)).thenReturn(new Orders(1,"1",1,1,date1,"11023" ));

        mockMvc.perform(MockMvcRequestBuilders.post("/orders/")
                        .content(new ObjectMapper().writeValueAsString(orderDto))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        Assertions.assertEquals(orderController.addOrder(orderDto)
                , orderDto);
    }

    @Test
    void postOrdersExceptionTest() throws Exception {
        OrderDto ordersDto = new OrderDto(1,"1",1,1,date1,"11023");
        Mockito.when(orderService.save(ordersDto)).thenReturn(null);

        mockMvc.perform(MockMvcRequestBuilders.post("/orders/")
                .content(new ObjectMapper().writeValueAsString(ordersDto))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());

    }



}

