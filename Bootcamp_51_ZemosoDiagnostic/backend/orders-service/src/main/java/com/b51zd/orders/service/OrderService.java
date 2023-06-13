package com.b51zd.orders.service;

import com.b51zd.orders.dto.OrderDto;
import com.b51zd.orders.entity.Orders;

import java.util.List;

public interface OrderService {

    List<OrderDto> getAllOrders();


    Orders save(OrderDto orderDto);
}
