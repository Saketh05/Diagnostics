package com.b51zd.orders.dto;

import com.b51zd.orders.entity.Orders;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {

    private Integer orderId;
    private String userId;
    private Integer addressId;
    private Integer patientId;
    private Date appointmentDate;
    private String appointmentTime;

    public static OrderDto toDTO(Orders o) {
          return new OrderDto(o.getOrderId(), o.getUserId(), o.getAddressId(), o.getPatientId(), o.getAppointmentDate(), o.getAppointmentTime());
    }

    public static Orders toEntity(OrderDto o) {
        return new Orders(o.getOrderId(), o.getUserId(), o.getPatientId(),o.getAddressId(), o.getAppointmentDate(), o.getAppointmentTime());
    }

    public static List<OrderDto> toListDTO(List<Orders> jobs) {
        return jobs.stream().map(OrderDto::toDTO).collect(Collectors.toList());
    }
}
