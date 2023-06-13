package com.b51zd.orders.service;

import com.b51zd.orders.dto.OrderDto;
import com.b51zd.orders.entity.Orders;
import com.b51zd.orders.repository.OrderRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    OrderRepository orderRepository;

    @InjectMocks
    OrderService orderService = new OrderServiceImpl();

    String sDate1="31/12/1998";
    Date date1= (Date) new SimpleDateFormat("dd/MM/yyyy").parse(sDate1);

    public OrderServiceTest() throws ParseException {
    }


    @Test
    void getAllOrdersTest() throws Exception {

        List<Orders> allOrders= new ArrayList<>();
        allOrders.add(new Orders(1,"1",1,1,date1,"11023"));

        Mockito.when(orderRepository.findAll()).thenReturn(allOrders);

        List<OrderDto> addresses = orderService.getAllOrders();

        assertThat(allOrders).hasSize(1);
        assertThat(allOrders.get(0).getOrderId()).isSameAs(addresses.get(0).getOrderId());
    }

    @Test
    void postAddressTest() throws Exception{
        Orders orders =  new Orders(1,"1",1,1,date1,"11023");

        Mockito.when(orderRepository.save(orders)).thenReturn(orders);

        OrderDto orderDto = OrderDto.toDTO(orderService.save(new OrderDto(1,"1",1,1,date1,"11023")));

        assertThat(orders.getOrderId()).isSameAs(orderDto.getOrderId());
    }
}
