package com.b51zd.addresses.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AddressNotFoundExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<AddressNotFoundErrorResponse> handleException(AddressException exc){
        AddressNotFoundErrorResponse error = new AddressNotFoundErrorResponse();

        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exc.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler
    public ResponseEntity<AddressNotFoundErrorResponse> handleException(Exception e){
        AddressNotFoundErrorResponse error = new AddressNotFoundErrorResponse();
        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage(e.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
    }

}
