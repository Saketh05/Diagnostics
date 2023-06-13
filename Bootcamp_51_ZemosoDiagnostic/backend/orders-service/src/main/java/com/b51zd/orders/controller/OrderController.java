package com.b51zd.orders.controller;

import com.b51zd.orders.dto.OrderDto;
import com.b51zd.orders.exception.OrderNotFoundException;
import com.b51zd.orders.service.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    OrderServiceImpl orderService;


    @GetMapping("/{userId}")
    public List<OrderDto> getAllOrders() throws OrderNotFoundException {
        List<OrderDto> allOrders = orderService.getAllOrders();
        if(allOrders.isEmpty()) {
            throw new OrderNotFoundException("No Orders found");
        }
        return allOrders;
    }

    @PostMapping("/")
    public OrderDto addOrder(@RequestBody OrderDto orderDto)  {
        return OrderDto.toDTO(orderService.save(orderDto));
    }
}
