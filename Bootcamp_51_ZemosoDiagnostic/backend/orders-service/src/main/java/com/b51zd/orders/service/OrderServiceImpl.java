package com.b51zd.orders.service;

import com.b51zd.orders.dto.OrderDto;
import com.b51zd.orders.entity.Orders;
import com.b51zd.orders.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<OrderDto> getAllOrders() {
        List<Orders> orders = orderRepository.findAll();
        return OrderDto.toListDTO(orders);
    }

    @Override
    public Orders save(OrderDto orderDto) {

        return orderRepository.save(OrderDto.toEntity(orderDto));
    }





}
